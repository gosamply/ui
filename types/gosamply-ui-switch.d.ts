import * as _angular_core from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { ControlValueAccessor } from '@angular/forms';
import { ChangeFn, TouchFn } from '@spartan-ng/brain/forms';
import { BrnSwitchSize } from '@spartan-ng/brain/switch';
import { ClassValue } from 'clsx';

declare const HLM_SWITCH_VALUE_ACCESSOR: {
    provide: _angular_core.InjectionToken<readonly ControlValueAccessor[]>;
    useExisting: _angular_core.Type<any>;
    multi: boolean;
};
declare class HlmSwitch implements ControlValueAccessor {
    readonly userClass: _angular_core.InputSignal<ClassValue>;
    protected readonly _computedClass: _angular_core.Signal<string>;
    /** The checked state of the switch. */
    readonly checkedInput: _angular_core.InputSignalWithTransform<boolean, BooleanInput>;
    readonly checked: _angular_core.WritableSignal<boolean>;
    /** Emits when the checked state of the switch changes. */
    readonly checkedChange: _angular_core.OutputEmitterRef<boolean>;
    /** The disabled state of the switch. */
    readonly disabled: _angular_core.InputSignalWithTransform<boolean, BooleanInput>;
    /** The size of the switch. */
    readonly size: _angular_core.InputSignal<BrnSwitchSize>;
    /** Used to set the id on the underlying brn element. */
    readonly inputId: _angular_core.InputSignal<string | null>;
    /** Used to set the aria-label attribute on the underlying brn element. */
    readonly ariaLabel: _angular_core.InputSignal<string | null>;
    /** Used to set the aria-labelledby attribute on the underlying brn element. */
    readonly ariaLabelledby: _angular_core.InputSignal<string | null>;
    /** Used to set the aria-describedby attribute on the underlying brn element. */
    readonly ariaDescribedby: _angular_core.InputSignal<string | null>;
    protected readonly _disabled: _angular_core.WritableSignal<boolean>;
    protected _onChange?: ChangeFn<boolean>;
    protected _onTouched?: TouchFn;
    protected handleChange(value: boolean): void;
    /** CONTROL VALUE ACCESSOR */
    writeValue(value: boolean): void;
    registerOnChange(fn: ChangeFn<boolean>): void;
    registerOnTouched(fn: TouchFn): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<HlmSwitch, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<HlmSwitch, "hlm-switch", never, { "userClass": { "alias": "class"; "required": false; "isSignal": true; }; "checkedInput": { "alias": "checked"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "inputId": { "alias": "inputId"; "required": false; "isSignal": true; }; "ariaLabel": { "alias": "aria-label"; "required": false; "isSignal": true; }; "ariaLabelledby": { "alias": "aria-labelledby"; "required": false; "isSignal": true; }; "ariaDescribedby": { "alias": "aria-describedby"; "required": false; "isSignal": true; }; }, { "checkedChange": "checkedChange"; }, never, never, true, never>;
}

declare class HlmSwitchThumb {
    constructor();
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<HlmSwitchThumb, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<HlmSwitchThumb, "brn-switch-thumb[hlm],[hlmSwitchThumb]", never, {}, {}, never, never, true, never>;
}

declare const HlmSwitchImports: readonly [typeof HlmSwitch, typeof HlmSwitchThumb];

export { HLM_SWITCH_VALUE_ACCESSOR, HlmSwitch, HlmSwitchImports, HlmSwitchThumb };
