import * as _angular_core from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { ControlValueAccessor } from '@angular/forms';
import { ChangeFn, TouchFn } from '@spartan-ng/brain/forms';
import { ClassValue } from 'clsx';
import * as i1 from '@spartan-ng/brain/field';

declare const HLM_CHECKBOX_VALUE_ACCESSOR: {
    provide: _angular_core.InjectionToken<readonly ControlValueAccessor[]>;
    useExisting: _angular_core.Type<any>;
    multi: boolean;
};
declare class HlmCheckbox implements ControlValueAccessor {
    readonly userClass: _angular_core.InputSignal<ClassValue>;
    protected readonly _computedClass: _angular_core.Signal<string>;
    /** Used to set the id on the underlying brn element. */
    readonly inputId: _angular_core.InputSignal<string | null>;
    /** Used to set the aria-label attribute on the underlying brn element. */
    readonly ariaLabel: _angular_core.InputSignal<string | null>;
    /** Used to set the aria-labelledby attribute on the underlying brn element. */
    readonly ariaLabelledby: _angular_core.InputSignal<string | null>;
    /** Used to set the aria-describedby attribute on the underlying brn element. */
    readonly ariaDescribedby: _angular_core.InputSignal<string | null>;
    /** The checked state of the checkbox. */
    readonly checkedInput: _angular_core.InputSignalWithTransform<boolean, BooleanInput>;
    readonly checked: _angular_core.WritableSignal<boolean>;
    /** Emits when checked state changes. */
    readonly checkedChange: _angular_core.OutputEmitterRef<boolean>;
    /**
     * The indeterminate state of the checkbox.
     * For example, a "select all/deselect all" checkbox may be in the indeterminate state when some but not all of its sub-controls are checked.
     */
    readonly indeterminate: _angular_core.ModelSignal<boolean>;
    /** The name attribute of the checkbox. */
    readonly name: _angular_core.InputSignal<string | null>;
    /** Whether the checkbox is required. */
    readonly required: _angular_core.InputSignalWithTransform<boolean, BooleanInput>;
    /** Whether the checkbox is disabled. */
    readonly disabled: _angular_core.InputSignalWithTransform<boolean, BooleanInput>;
    /** Whether to force the checkbox into an invalid state. */
    readonly forceInvalid: _angular_core.InputSignalWithTransform<boolean, BooleanInput>;
    protected readonly _disabled: _angular_core.WritableSignal<boolean>;
    private readonly _brnCheckbox;
    private readonly _spartanInvalid;
    protected readonly _errorStateClass: _angular_core.Signal<"" | "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40">;
    protected _onChange?: ChangeFn<boolean>;
    protected _onTouched?: TouchFn;
    protected _handleChange(value: boolean): void;
    /** CONTROL VALUE ACCESSOR */
    writeValue(value: boolean): void;
    registerOnChange(fn: ChangeFn<boolean>): void;
    registerOnTouched(fn: TouchFn): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<HlmCheckbox, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<HlmCheckbox, "hlm-checkbox", never, { "userClass": { "alias": "class"; "required": false; "isSignal": true; }; "inputId": { "alias": "inputId"; "required": false; "isSignal": true; }; "ariaLabel": { "alias": "aria-label"; "required": false; "isSignal": true; }; "ariaLabelledby": { "alias": "aria-labelledby"; "required": false; "isSignal": true; }; "ariaDescribedby": { "alias": "aria-describedby"; "required": false; "isSignal": true; }; "checkedInput": { "alias": "checked"; "required": false; "isSignal": true; }; "indeterminate": { "alias": "indeterminate"; "required": false; "isSignal": true; }; "name": { "alias": "name"; "required": false; "isSignal": true; }; "required": { "alias": "required"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "forceInvalid": { "alias": "forceInvalid"; "required": false; "isSignal": true; }; }, { "checkedChange": "checkedChange"; "indeterminate": "indeterminateChange"; }, never, never, true, [{ directive: typeof i1.BrnFieldControlDescribedBy; inputs: {}; outputs: {}; }]>;
}

declare const HlmCheckboxImports: readonly [typeof HlmCheckbox];

export { HLM_CHECKBOX_VALUE_ACCESSOR, HlmCheckbox, HlmCheckboxImports };
