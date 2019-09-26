(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/forms'], factory) :
	(factory((global['ng-chips'] = {}),global.core,global.common,global.forms));
}(this, (function (exports,core,common,forms) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ChipsComponent = (function () {
    function ChipsComponent() {
        this.isFocused = false;
        this.selected = [];
        this.selectedChange = new core.EventEmitter();
        this.editClicked = new core.EventEmitter();
        this.type = 'text';
        this.showAdd = false;
        this.duplicates = false;
        this.chip = {name:''};
        this.propagateChange = function (_) { };
    }
    /**
     * @return {?}
     */
    ChipsComponent.prototype.addFocus = /**
     * @return {?}
     */
    function () {
        this.inpEl.nativeElement.focus();
    };
    /**
     * @param {?} event
     * @return {?}
     */

    ChipsComponent.prototype.addOnEnter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.keyCode === 13) {
			// this.chip.name = event.target.value;
            this.add();
        }
        else if (event.keyCode === 8 && this.selected.length && this.chip.name === '') {
            this.remove(this.selected.length - 1);
        }
        else {

            this.chip.name = event.target.value;
        }
    };
    /**
     * @return {?}
     */
    ChipsComponent.prototype.add = /**
     * @return {?}
     */
    function () {
       // if (!this.chip || !this.duplicates && this.selected.indexOf(this.chip) !== -1) {
		if (!this.chip || this.chip.name=='' || (!this.duplicates && this.selected.findIndex(c => c.name === this.chip.name) !== -1)) {
            return;
        }
        this.selected.push(this.chip);
        this.chip = {name:''};
        this.propagateChange(this.selected);
        this.selectedChange.emit(this.selected);

    };
	ChipsComponent.prototype.clear =
	 /**
     * @param {?}
     * @return {?}
     */
    function ()
	{
		var els = document.getElementsByName('chips');
		for (var i = 0; i < els.length;i++)
			els[i].value = "";
		console.log('after adding',els.length);
	};
    /**
     * @param {?} index
     * @return {?}
     */
    ChipsComponent.prototype.remove = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {

		if (this.selected[index].removable == false)
			return;
        this.selected.splice(index, 1);
        this.propagateChange(this.selected);
        this.selectedChange.emit(this.selected);
    };
     /**
     * @param {?} index
     * @return {?}
     */
    ChipsComponent.prototype.edit = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {

        if (this.selected[index].editable == false)
            return;
        this.editClicked.emit(this.selected);
    };
    /*
     Form Control Value Accessor
     */
    /**
     * @param {?} value
     * @return {?}
     */
    ChipsComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined) {
            this.selected = value;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ChipsComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.propagateChange = fn;
    };
    /**
     * @return {?}
     */
    ChipsComponent.prototype.registerOnTouched = /**
     * @return {?}
     */
    function () { };
    ChipsComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'jaspero-chips',
                    template: "<span class=\"chip\" [ngClass]=\"{'chip-disabled':item.removable == false && item.editable == false}\" *ngFor=\"let item of selected; let i = index\"> {{item.name}} <span class=\"editit\" *ngIf=\"editable || item.editable == true\" (click)=\"edit(i)\"><span class=\"editit-icon\"></span></span>  <span class=\"closeit\" *ngIf=\"removable || item.removable == true\" (click)=\"remove(i)\"><span class=\"closeit-icon\"></span></span></span> <input class=\"chip-input\" name=\"chips\" [type]=\"type\" [value]=\"chip.name\" (keyup)=\"addOnEnter($event)\" #inp (focus)=\"isFocused = true\" (focusout)=\"isFocused = false\"> <button *ngIf=\"showAdd\" (click)=\"add()\">Add</button>",
                    styles: ["jaspero-chips { display: block; border: 1px solid #e9e9e9; border-radius: 10px; padding: 5px 10px; } jaspero-chips .chip-input { height: 32px; outline: none; padding: 0; display: inline-block; border: none; background: none; transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); transition-property: font-size; color: rgba(0, 0, 0, 0.54); font-family: inherit; line-height: 32px; width: 128px; font-size: 16px; } .chip-disabled{ opacity:.5;} jaspero-chips .chip-disabled:hover{cursor: auto !important;} .chip { height: 32px; padding: 0 15px; display: inline-block; border-radius: 32px; transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); font-size: 13px; line-height: 32px; white-space: nowrap; position: relative; margin-right: 8px; margin-bottom: 4px; background-color: #e9e9e9; color: #0093c1; user-select: none; -webkit-user-select: none; cursor: pointer; overflow:hidden} jaspero-chips .chip:hover { background: #e9e9e9; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); } /*button { position: absolute; background: #bcc987; right: 0; border: none; top: 0; height: 100%; color: #212529; cursor: pointer; }*/  .chip .closeit {font-size:14px; color:white; background-color: #0093c1; padding: 10px 7px; text-align:center; vertical-align:middle;cursor:pointer; margin-right: -15px; } .chip .editit {font-size:14px; color:white; background-color: #0093c1; padding: 10px 7px; text-align:center; vertical-align:middle;cursor:pointer; } .closeit-icon::after {content:'x'} .editit-icon::after {content:'!'}"],
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    providers: [{
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: core.forwardRef(function () { return ChipsComponent; }),
                            multi: true
                        }]
                },] },
    ];
    /** @nocollapse */
    ChipsComponent.ctorParameters = function () { return []; };
    ChipsComponent.propDecorators = {
        "isFocused": [{ type: core.HostBinding, args: ['class.active',] },],
        "inpEl": [{ type: core.ViewChild, args: ['inp',] },],
        "selected": [{ type: core.Input },],
        "selectedChange": [{ type: core.Output },],
        "editClicked": [{ type: core.Output },],
        "type": [{ type: core.Input },],
        "showAdd": [{ type: core.Input },],
        "removable": [{ type: core.Input },],
        "editable": [{ type: core.Input },],
        "duplicates": [{ type: core.Input },],
        "addFocus": [{ type: core.HostListener, args: ['click',] },],
    };
    return ChipsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var JasperoChipsModule = (function () {
    function JasperoChipsModule() {
    }
    JasperoChipsModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule
                    ],
                    declarations: [
                        ChipsComponent
                    ],
                    exports: [
                        ChipsComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    JasperoChipsModule.ctorParameters = function () { return []; };
    return JasperoChipsModule;
}());

exports.JasperoChipsModule = JasperoChipsModule;
exports.ChipsComponent = ChipsComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
