import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Input, NgModule, Output, ViewChild, ViewEncapsulation, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ChipsComponent = (function () {
    function ChipsComponent() {
        this.isFocused = false;
        this.selected = [];
        this.selectedChange = new EventEmitter();
        this.type = 'text';
        this.showAdd = true;
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
        if (!this.chip || !this.duplicates && this.selected.findIndex(c => c.name === this.chip.name) !== -1) {
            return;
        }
        this.selected.push(this.chip);
        this.chip = {name:''};
        this.propagateChange(this.selected);
        this.selectedChange.emit(this.selected);
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
        { type: Component, args: [{
                    selector: 'jaspero-chips',
                    template: "<span class=\"chip\" [ngClass]=\"{'chip-disabled':item.removable == false}\" *ngFor=\"let item of selected; let i = index\" (click)=\"remove(i)\"> {{item.name}} </span> <input class=\"chip-input\" name=\"chips\" [type]=\"type\" [value]=\"chip.name\" (keyup)=\"addOnEnter($event)\" #inp (focus)=\"isFocused = true\" (focusout)=\"isFocused = false\"> <!--<button *ngIf=\"showAdd\" (click)=\"add()\">Add</button>-->",
                    styles: ["jaspero-chips { display: block; border: 1px solid #e9e9e9; border-radius: 10px; padding: 5px 10px; } jaspero-chips .chip-input { height: 32px; outline: none; padding: 0; display: inline-block; border: none; background: none; transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); transition-property: font-size; color: rgba(0, 0, 0, 0.54); font-family: inherit; line-height: 32px; width: 128px; font-size: 16px; } .chip-disabled{ opacity:.5;} jaspero-chips .chip-disabled:hover{cursor: auto !important;} .chip { height: 32px; padding: 0 15px; display: inline-block; border-radius: 32px; transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); font-size: 13px; line-height: 32px; white-space: nowrap; position: relative; margin-right: 8px; margin-bottom: 4px; background-color: #e9e9e9;padding-right:0; color: #0093c1; user-select: none; -webkit-user-select: none; cursor: pointer; overflow:hidden} jaspero-chips .chip:hover { background: #e9e9e9; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); } /*button { position: absolute; background: #bcc987; right: 0; border: none; top: 0; height: 100%; color: #212529; cursor: pointer; }*/  .chip::after { content: 'x';margin-left:5px;  font-size:14px; color:white; background-color: #0093c1; padding: 10px 7px; text-align:center; vertical-align:middle }"],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return ChipsComponent; }),
                            multi: true
                        }]
                },] },
    ];
    /** @nocollapse */
    ChipsComponent.ctorParameters = function () { return []; };
    ChipsComponent.propDecorators = {
        "isFocused": [{ type: HostBinding, args: ['class.active',] },],
        "inpEl": [{ type: ViewChild, args: ['inp',] },],
        "selected": [{ type: Input },],
        "selectedChange": [{ type: Output },],
        "type": [{ type: Input },],
        "showAdd": [{ type: Input },],
        "duplicates": [{ type: Input },],
        "addFocus": [{ type: HostListener, args: ['click',] },],
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule
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

export { JasperoChipsModule, ChipsComponent };
