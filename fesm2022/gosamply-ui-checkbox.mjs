import * as i0 from '@angular/core';
import { forwardRef, input, computed, booleanAttribute, linkedSignal, output, model, viewChild, ChangeDetectionStrategy, Component } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { provideIcons, NgIcon } from '@ng-icons/core';
import { lucideCheck } from '@ng-icons/lucide';
import { BrnCheckbox } from '@spartan-ng/brain/checkbox';
import * as i1 from '@spartan-ng/brain/field';
import { BrnFieldControlDescribedBy } from '@spartan-ng/brain/field';
import { hlm } from '@gosamply/ui/utils';

const HLM_CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => HlmCheckbox),
    multi: true,
};
class HlmCheckbox {
    userClass = input('', { ...(ngDevMode ? { debugName: "userClass" } : /* istanbul ignore next */ {}), alias: 'class' });
    _computedClass = computed(() => hlm('border-input dark:bg-input/30 data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary data-checked:border-primary data-[matches-spartan-invalid=true]:aria-checked:border-primary data-[matches-spartan-invalid=true]:border-destructive dark:data-[matches-spartan-invalid=true]:border-destructive/50 focus-visible:border-ring focus-visible:ring-ring/50 data-[matches-spartan-invalid=true]:ring-destructive/20 dark:data-[matches-spartan-invalid=true]:ring-destructive/40 flex size-4 items-center justify-center rounded-[6px] border transition-shadow group-has-disabled/field:opacity-50 focus-visible:ring-[3px] data-[matches-spartan-invalid=true]:ring-[3px] peer shrink-0 cursor-default outline-none disabled:cursor-not-allowed disabled:opacity-50', this.userClass(), this._errorStateClass()), ...(ngDevMode ? [{ debugName: "_computedClass" }] : /* istanbul ignore next */ []));
    /** Used to set the id on the underlying brn element. */
    inputId = input(null, ...(ngDevMode ? [{ debugName: "inputId" }] : /* istanbul ignore next */ []));
    /** Used to set the aria-label attribute on the underlying brn element. */
    ariaLabel = input(null, { ...(ngDevMode ? { debugName: "ariaLabel" } : /* istanbul ignore next */ {}), alias: 'aria-label' });
    /** Used to set the aria-labelledby attribute on the underlying brn element. */
    ariaLabelledby = input(null, { ...(ngDevMode ? { debugName: "ariaLabelledby" } : /* istanbul ignore next */ {}), alias: 'aria-labelledby' });
    /** Used to set the aria-describedby attribute on the underlying brn element. */
    ariaDescribedby = input(null, { ...(ngDevMode ? { debugName: "ariaDescribedby" } : /* istanbul ignore next */ {}), alias: 'aria-describedby' });
    /** The checked state of the checkbox. */
    checkedInput = input(false, { ...(ngDevMode ? { debugName: "checkedInput" } : /* istanbul ignore next */ {}), alias: 'checked', transform: booleanAttribute });
    checked = linkedSignal(this.checkedInput, ...(ngDevMode ? [{ debugName: "checked" }] : /* istanbul ignore next */ []));
    /** Emits when checked state changes. */
    checkedChange = output();
    /**
     * The indeterminate state of the checkbox.
     * For example, a "select all/deselect all" checkbox may be in the indeterminate state when some but not all of its sub-controls are checked.
     */
    indeterminate = model(false, ...(ngDevMode ? [{ debugName: "indeterminate" }] : /* istanbul ignore next */ []));
    /** The name attribute of the checkbox. */
    name = input(null, ...(ngDevMode ? [{ debugName: "name" }] : /* istanbul ignore next */ []));
    /** Whether the checkbox is required. */
    required = input(false, { ...(ngDevMode ? { debugName: "required" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    /** Whether the checkbox is disabled. */
    disabled = input(false, { ...(ngDevMode ? { debugName: "disabled" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    /** Whether to force the checkbox into an invalid state. */
    forceInvalid = input(false, { ...(ngDevMode ? { debugName: "forceInvalid" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    _disabled = linkedSignal(this.disabled, ...(ngDevMode ? [{ debugName: "_disabled" }] : /* istanbul ignore next */ []));
    _brnCheckbox = viewChild.required(BrnCheckbox);
    _spartanInvalid = computed(() => this.forceInvalid() || this._brnCheckbox().spartanInvalid?.(), ...(ngDevMode ? [{ debugName: "_spartanInvalid" }] : /* istanbul ignore next */ []));
    _errorStateClass = computed(() => this._spartanInvalid()
        ? 'border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40'
        : '', ...(ngDevMode ? [{ debugName: "_errorStateClass" }] : /* istanbul ignore next */ []));
    _onChange;
    _onTouched;
    _handleChange(value) {
        if (this._disabled())
            return;
        this.checked.set(value);
        this.checkedChange.emit(value);
        this._onChange?.(value);
    }
    /** CONTROL VALUE ACCESSOR */
    writeValue(value) {
        this.checked.set(value);
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmCheckbox, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.11", type: HlmCheckbox, isStandalone: true, selector: "hlm-checkbox", inputs: { userClass: { classPropertyName: "userClass", publicName: "class", isSignal: true, isRequired: false, transformFunction: null }, inputId: { classPropertyName: "inputId", publicName: "inputId", isSignal: true, isRequired: false, transformFunction: null }, ariaLabel: { classPropertyName: "ariaLabel", publicName: "aria-label", isSignal: true, isRequired: false, transformFunction: null }, ariaLabelledby: { classPropertyName: "ariaLabelledby", publicName: "aria-labelledby", isSignal: true, isRequired: false, transformFunction: null }, ariaDescribedby: { classPropertyName: "ariaDescribedby", publicName: "aria-describedby", isSignal: true, isRequired: false, transformFunction: null }, checkedInput: { classPropertyName: "checkedInput", publicName: "checked", isSignal: true, isRequired: false, transformFunction: null }, indeterminate: { classPropertyName: "indeterminate", publicName: "indeterminate", isSignal: true, isRequired: false, transformFunction: null }, name: { classPropertyName: "name", publicName: "name", isSignal: true, isRequired: false, transformFunction: null }, required: { classPropertyName: "required", publicName: "required", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, forceInvalid: { classPropertyName: "forceInvalid", publicName: "forceInvalid", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { checkedChange: "checkedChange", indeterminate: "indeterminateChange" }, host: { attributes: { "data-slot": "checkbox" }, properties: { "attr.aria-label": "null", "attr.aria-labelledby": "null", "attr.data-disabled": "_disabled() ? \"\" : null" }, classAttribute: "contents peer" }, providers: [HLM_CHECKBOX_VALUE_ACCESSOR], viewQueries: [{ propertyName: "_brnCheckbox", first: true, predicate: BrnCheckbox, descendants: true, isSignal: true }], hostDirectives: [{ directive: i1.BrnFieldControlDescribedBy }], ngImport: i0, template: `
    <brn-checkbox
      [id]="inputId()"
      [name]="name()"
      [class]="_computedClass()"
      [checked]="checked()"
      [(indeterminate)]="indeterminate"
      [disabled]="_disabled()"
      [required]="required()"
      [aria-label]="ariaLabel()"
      [aria-labelledby]="ariaLabelledby()"
      [aria-describedby]="ariaDescribedby()"
      [forceInvalid]="forceInvalid()"
      (checkedChange)="_handleChange($event)"
      (touched)="_onTouched?.()"
    >
      @if (checked() || indeterminate()) {
        <span class="[&>ng-icon]:text-[length:--spacing(3.5)] flex items-center justify-center text-current transition-none">
          <ng-icon name="lucideCheck" />
        </span>
      }
    </brn-checkbox>
  `, isInline: true, dependencies: [{ kind: "component", type: BrnCheckbox, selector: "brn-checkbox", inputs: ["checked", "indeterminate", "id", "name", "class", "hostStyles", "aria-label", "aria-labelledby", "aria-describedby", "required", "disabled", "forceInvalid"], outputs: ["checkedChange", "indeterminateChange", "touched"] }, { kind: "component", type: NgIcon, selector: "ng-icon", inputs: ["name", "svg", "size", "strokeWidth", "color"] }], viewProviders: [provideIcons({ lucideCheck })], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmCheckbox, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-checkbox',
                    imports: [BrnCheckbox, NgIcon],
                    providers: [HLM_CHECKBOX_VALUE_ACCESSOR],
                    viewProviders: [provideIcons({ lucideCheck })],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    hostDirectives: [BrnFieldControlDescribedBy],
                    host: {
                        class: 'contents peer',
                        'data-slot': 'checkbox',
                        '[attr.aria-label]': 'null',
                        '[attr.aria-labelledby]': 'null',
                        '[attr.data-disabled]': '_disabled() ? "" : null',
                    },
                    template: `
    <brn-checkbox
      [id]="inputId()"
      [name]="name()"
      [class]="_computedClass()"
      [checked]="checked()"
      [(indeterminate)]="indeterminate"
      [disabled]="_disabled()"
      [required]="required()"
      [aria-label]="ariaLabel()"
      [aria-labelledby]="ariaLabelledby()"
      [aria-describedby]="ariaDescribedby()"
      [forceInvalid]="forceInvalid()"
      (checkedChange)="_handleChange($event)"
      (touched)="_onTouched?.()"
    >
      @if (checked() || indeterminate()) {
        <span class="[&>ng-icon]:text-[length:--spacing(3.5)] flex items-center justify-center text-current transition-none">
          <ng-icon name="lucideCheck" />
        </span>
      }
    </brn-checkbox>
  `,
                }]
        }], propDecorators: { userClass: [{ type: i0.Input, args: [{ isSignal: true, alias: "class", required: false }] }], inputId: [{ type: i0.Input, args: [{ isSignal: true, alias: "inputId", required: false }] }], ariaLabel: [{ type: i0.Input, args: [{ isSignal: true, alias: "aria-label", required: false }] }], ariaLabelledby: [{ type: i0.Input, args: [{ isSignal: true, alias: "aria-labelledby", required: false }] }], ariaDescribedby: [{ type: i0.Input, args: [{ isSignal: true, alias: "aria-describedby", required: false }] }], checkedInput: [{ type: i0.Input, args: [{ isSignal: true, alias: "checked", required: false }] }], checkedChange: [{ type: i0.Output, args: ["checkedChange"] }], indeterminate: [{ type: i0.Input, args: [{ isSignal: true, alias: "indeterminate", required: false }] }, { type: i0.Output, args: ["indeterminateChange"] }], name: [{ type: i0.Input, args: [{ isSignal: true, alias: "name", required: false }] }], required: [{ type: i0.Input, args: [{ isSignal: true, alias: "required", required: false }] }], disabled: [{ type: i0.Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], forceInvalid: [{ type: i0.Input, args: [{ isSignal: true, alias: "forceInvalid", required: false }] }], _brnCheckbox: [{ type: i0.ViewChild, args: [i0.forwardRef(() => BrnCheckbox), { isSignal: true }] }] } });

const HlmCheckboxImports = [HlmCheckbox];

/**
 * Generated bundle index. Do not edit.
 */

export { HLM_CHECKBOX_VALUE_ACCESSOR, HlmCheckbox, HlmCheckboxImports };
//# sourceMappingURL=gosamply-ui-checkbox.mjs.map
