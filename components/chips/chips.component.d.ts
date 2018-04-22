import { ElementRef, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class ChipsComponent implements ControlValueAccessor {
    isFocused: boolean;
    inpEl: ElementRef;
    selected: any;
    selectedChange: EventEmitter<{}>;
    type: string;
    showAdd: boolean;
    duplicates: boolean;
    chip: any;
    addFocus(): void;
    addOnEnter(event: any): void;
    add(): void;
    remove(index: number): void;
    writeValue(value: any): void;
    propagateChange: (_: any) => void;
    registerOnChange(fn: any): void;
    registerOnTouched(): void;
}
