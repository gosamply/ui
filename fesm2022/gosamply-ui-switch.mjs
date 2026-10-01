import * as i0 from '@angular/core';
import { Directive, forwardRef, input, computed, booleanAttribute, linkedSignal, output, ChangeDetectionStrategy, Component } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BrnSwitchThumb, BrnSwitch } from '@spartan-ng/brain/switch';
import { classes, hlm } from '@gosamply/ui/utils';

class HlmSwitchThumb {
    constructor() {
        classes(() => 'bg-background dark:data-unchecked:bg-foreground dark:data-checked:bg-primary-foreground rounded-full group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 data-unchecked:translate-x-0 data-checked:ltr:translate-x-[calc(100%-2px)] data-checked:rtl:-translate-x-[calc(100%-2px)] pointer-events-none block ring-0 transition-transform');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSwitchThumb, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSwitchThumb, isStandalone: true, selector: "brn-switch-thumb[hlm],[hlmSwitchThumb]", host: { attributes: { "data-slot": "switch-thumb" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSwitchThumb, decorators: [{
            type: Directive,
            args: [{
                    selector: 'brn-switch-thumb[hlm],[hlmSwitchThumb]',
                    host: { 'data-slot': 'switch-thumb' },
                }]
        }], ctorParameters: () => [] });

const HLM_SWITCH_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => HlmSwitch),
    multi: true,
};
class HlmSwitch {
    userClass = input('', { ...(ngDevMode ? { debugName: "userClass" } : /* istanbul ignore next */ {}), alias: 'class' });
    _computedClass = computed(() => hlm('data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-ring/50 data-[matches-spartan-invalid=true]:ring-destructive/20 dark:data-[matches-spartan-invalid=true]:ring-destructive/40 data-[matches-spartan-invalid=true]:border-destructive dark:data-[matches-spartan-invalid=true]:border-destructive/50 dark:data-unchecked:bg-input/80 rounded-full border border-transparent focus-visible:ring-[3px] data-[matches-spartan-invalid=true]:ring-[3px] data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] group/switch inline-flex shrink-0 items-center transition-all outline-none data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50', this.userClass()), ...(ngDevMode ? [{ debugName: "_computedClass" }] : /* istanbul ignore next */ []));
    /** The checked state of the switch. */
    checkedInput = input(false, { ...(ngDevMode ? { debugName: "checkedInput" } : /* istanbul ignore next */ {}), alias: 'checked', transform: booleanAttribute });
    checked = linkedSignal(this.checkedInput, ...(ngDevMode ? [{ debugName: "checked" }] : /* istanbul ignore next */ []));
    /** Emits when the checked state of the switch changes. */
    checkedChange = output();
    /** The disabled state of the switch. */
    disabled = input(false, { ...(ngDevMode ? { debugName: "disabled" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    /** The size of the switch. */
    size = input('default', ...(ngDevMode ? [{ debugName: "size" }] : /* istanbul ignore next */ []));
    /** Used to set the id on the underlying brn element. */
    inputId = input(null, ...(ngDevMode ? [{ debugName: "inputId" }] : /* istanbul ignore next */ []));
    /** Used to set the aria-label attribute on the underlying brn element. */
    ariaLabel = input(null, { ...(ngDevMode ? { debugName: "ariaLabel" } : /* istanbul ignore next */ {}), alias: 'aria-label' });
    /** Used to set the aria-labelledby attribute on the underlying brn element. */
    ariaLabelledby = input(null, { ...(ngDevMode ? { debugName: "ariaLabelledby" } : /* istanbul ignore next */ {}), alias: 'aria-labelledby' });
    /** Used to set the aria-describedby attribute on the underlying brn element. */
    ariaDescribedby = input(null, { ...(ngDevMode ? { debugName: "ariaDescribedby" } : /* istanbul ignore next */ {}), alias: 'aria-describedby' });
    _disabled = linkedSignal(this.disabled, ...(ngDevMode ? [{ debugName: "_disabled" }] : /* istanbul ignore next */ []));
    _onChange;
    _onTouched;
    handleChange(value) {
        this.checked.set(value);
        this._onChange?.(value);
        this.checkedChange.emit(value);
    }
    /** CONTROL VALUE ACCESSOR */
    writeValue(value) {
        this.checked.set(Boolean(value));
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this._disabled.set(isDisabled);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSwitch, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "21.2.11", type: HlmSwitch, isStandalone: true, selector: "hlm-switch", inputs: { userClass: { classPropertyName: "userClass", publicName: "class", isSignal: true, isRequired: false, transformFunction: null }, checkedInput: { classPropertyName: "checkedInput", publicName: "checked", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, inputId: { classPropertyName: "inputId", publicName: "inputId", isSignal: true, isRequired: false, transformFunction: null }, ariaLabel: { classPropertyName: "ariaLabel", publicName: "aria-label", isSignal: true, isRequired: false, transformFunction: null }, ariaLabelledby: { classPropertyName: "ariaLabelledby", publicName: "aria-labelledby", isSignal: true, isRequired: false, transformFunction: null }, ariaDescribedby: { classPropertyName: "ariaDescribedby", publicName: "aria-describedby", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { checkedChange: "checkedChange" }, host: { attributes: { "data-slot": "switch" }, properties: { "attr.aria-label": "null", "attr.aria-labelledby": "null", "attr.aria-describedby": "null" }, classAttribute: "contents" }, providers: [HLM_SWITCH_VALUE_ACCESSOR], ngImport: i0, template: `
    <brn-switch
      [class]="_computedClass()"
      [size]="size()"
      [checked]="checked()"
      (checkedChange)="handleChange($event)"
      (touched)="_onTouched?.()"
      [disabled]="_disabled()"
      [id]="inputId()"
      [aria-label]="ariaLabel()"
      [aria-labelledby]="ariaLabelledby()"
      [aria-describedby]="ariaDescribedby()"
    >
      <brn-switch-thumb hlm />
    </brn-switch>
  `, isInline: true, dependencies: [{ kind: "component", type: BrnSwitchThumb, selector: "brn-switch-thumb" }, { kind: "component", type: BrnSwitch, selector: "brn-switch", inputs: ["checked", "id", "name", "class", "hostStyles", "size", "aria-label", "aria-labelledby", "aria-describedby", "required", "disabled", "tabIndex"], outputs: ["checkedChange", "touched"] }, { kind: "directive", type: HlmSwitchThumb, selector: "brn-switch-thumb[hlm],[hlmSwitchThumb]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSwitch, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-switch',
                    imports: [BrnSwitchThumb, BrnSwitch, HlmSwitchThumb],
                    providers: [HLM_SWITCH_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        'data-slot': 'switch',
                        class: 'contents',
                        '[attr.aria-label]': 'null',
                        '[attr.aria-labelledby]': 'null',
                        '[attr.aria-describedby]': 'null',
                    },
                    template: `
    <brn-switch
      [class]="_computedClass()"
      [size]="size()"
      [checked]="checked()"
      (checkedChange)="handleChange($event)"
      (touched)="_onTouched?.()"
      [disabled]="_disabled()"
      [id]="inputId()"
      [aria-label]="ariaLabel()"
      [aria-labelledby]="ariaLabelledby()"
      [aria-describedby]="ariaDescribedby()"
    >
      <brn-switch-thumb hlm />
    </brn-switch>
  `,
                }]
        }], propDecorators: { userClass: [{ type: i0.Input, args: [{ isSignal: true, alias: "class", required: false }] }], checkedInput: [{ type: i0.Input, args: [{ isSignal: true, alias: "checked", required: false }] }], checkedChange: [{ type: i0.Output, args: ["checkedChange"] }], disabled: [{ type: i0.Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], size: [{ type: i0.Input, args: [{ isSignal: true, alias: "size", required: false }] }], inputId: [{ type: i0.Input, args: [{ isSignal: true, alias: "inputId", required: false }] }], ariaLabel: [{ type: i0.Input, args: [{ isSignal: true, alias: "aria-label", required: false }] }], ariaLabelledby: [{ type: i0.Input, args: [{ isSignal: true, alias: "aria-labelledby", required: false }] }], ariaDescribedby: [{ type: i0.Input, args: [{ isSignal: true, alias: "aria-describedby", required: false }] }] } });

const HlmSwitchImports = [HlmSwitch, HlmSwitchThumb];

/**
 * Generated bundle index. Do not edit.
 */

export { HLM_SWITCH_VALUE_ACCESSOR, HlmSwitch, HlmSwitchImports, HlmSwitchThumb };
//# sourceMappingURL=gosamply-ui-switch.mjs.map
