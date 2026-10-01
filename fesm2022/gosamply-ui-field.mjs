import * as i0 from '@angular/core';
import { input, Directive, inject, effect, booleanAttribute, computed, ChangeDetectionStrategy, Component } from '@angular/core';
import * as i1 from '@spartan-ng/brain/field';
import { BrnField, BrnFieldA11yService } from '@spartan-ng/brain/field';
import { classes } from '@gosamply/ui/utils';
import { cva } from 'class-variance-authority';
import * as i1$1 from '@gosamply/ui/label';
import { HlmLabel } from '@gosamply/ui/label';
import { HlmSeparator } from '@gosamply/ui/separator';

const fieldVariants = cva('data-[matches-spartan-invalid=true]:text-destructive gap-3 group/field flex w-full', {
    variants: {
        orientation: {
            vertical: 'flex-col *:w-full [&>.sr-only]:w-auto',
            horizontal: [
                'flex-row items-center',
                '*:data-[slot=field-label]:flex-auto',
                'has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px',
            ],
            responsive: [
                'flex-col *:w-full @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto [&>.sr-only]:w-auto',
                '@md/field-group:*:data-[slot=field-label]:flex-auto',
                '@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px',
            ],
        },
    },
    defaultVariants: {
        orientation: 'vertical',
    },
});
class HlmField {
    orientation = input('vertical', ...(ngDevMode ? [{ debugName: "orientation" }] : /* istanbul ignore next */ []));
    constructor() {
        classes(() => fieldVariants({ orientation: this.orientation() }));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmField, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.11", type: HlmField, isStandalone: true, selector: "[hlmField],hlm-field", inputs: { orientation: { classPropertyName: "orientation", publicName: "orientation", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "role": "group", "data-slot": "field" }, properties: { "attr.data-orientation": "orientation()" } }, hostDirectives: [{ directive: i1.BrnField, inputs: ["data-invalid", "data-invalid", "forceInvalid", "forceInvalid"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmField, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmField],hlm-field',
                    hostDirectives: [{ directive: BrnField, inputs: ['data-invalid', 'forceInvalid'] }],
                    host: {
                        role: 'group',
                        'data-slot': 'field',
                        '[attr.data-orientation]': 'orientation()',
                    },
                }]
        }], ctorParameters: () => [], propDecorators: { orientation: [{ type: i0.Input, args: [{ isSignal: true, alias: "orientation", required: false }] }] } });

class HlmFieldContent {
    constructor() {
        classes(() => 'gap-1 group/field-content flex flex-1 flex-col leading-snug');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmFieldContent, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmFieldContent, isStandalone: true, selector: "[hlmFieldContent],hlm-field-content", host: { attributes: { "data-slot": "field-content" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmFieldContent, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmFieldContent],hlm-field-content',
                    host: { 'data-slot': 'field-content' },
                }]
        }], ctorParameters: () => [] });

class HlmFieldDescription {
    static _id = 0;
    _a11y = inject(BrnFieldA11yService, { optional: true, host: true });
    id = input(`hlm-field-description-${HlmFieldDescription._id++}`, ...(ngDevMode ? [{ debugName: "id" }] : /* istanbul ignore next */ []));
    _registeredId;
    _cleanup = this._a11y
        ? effect(() => {
            const a11y = this._a11y;
            if (!a11y)
                return;
            const id = this.id();
            if (this._registeredId && this._registeredId !== id) {
                a11y.unregisterDescription(this._registeredId);
            }
            if (this._registeredId !== id) {
                a11y.registerDescription(id);
                this._registeredId = id;
            }
        })
        : null;
    constructor() {
        classes(() => [
            'text-muted-foreground text-start text-sm [[data-variant=legend]+&]:-mt-1.5 leading-normal font-normal group-has-data-horizontal/field:text-balance',
            'last:mt-0 nth-last-2:-mt-1',
            '[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4',
        ]);
    }
    ngOnDestroy() {
        this._cleanup?.destroy();
        if (this._registeredId) {
            this._a11y?.unregisterDescription(this._registeredId);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmFieldDescription, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.11", type: HlmFieldDescription, isStandalone: true, selector: "[hlmFieldDescription],hlm-field-description", inputs: { id: { classPropertyName: "id", publicName: "id", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "data-slot": "field-description" }, properties: { "attr.id": "id()" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmFieldDescription, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmFieldDescription],hlm-field-description',
                    host: {
                        'data-slot': 'field-description',
                        '[attr.id]': 'id()',
                    },
                }]
        }], ctorParameters: () => [], propDecorators: { id: [{ type: i0.Input, args: [{ isSignal: true, alias: "id", required: false }] }] } });

class HlmFieldError {
    static _id = 0;
    _field = inject(BrnField, { optional: true });
    _a11y = inject(BrnFieldA11yService, { optional: true, host: true });
    _registeredId;
    _hasParentField = !!this._field;
    /** The unique ID for the field error. If none is supplied, it will be auto-generated. */
    id = input(`hlm-field-error-${HlmFieldError._id++}`, ...(ngDevMode ? [{ debugName: "id" }] : /* istanbul ignore next */ []));
    /**
     * The name of the specific validator error key to match (e.g. 'required').
     * When omitted, the error is shown if any validation error is present.
     */
    validator = input(...(ngDevMode ? [undefined, { debugName: "validator" }] : /* istanbul ignore next */ []));
    /** Forces the error message to be visible regardless of the control's validation state. */
    forceShow = input(false, { ...(ngDevMode ? { debugName: "forceShow" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    _display = computed(() => !this._hasParentField || this.forceShow() || this._hasError(), ...(ngDevMode ? [{ debugName: "_display" }] : /* istanbul ignore next */ []));
    _hasError = computed(() => {
        const errors = this._field?.errors();
        if (!errors)
            return false;
        const validator = this.validator();
        const spartanInvalid = this._field?.controlState()?.spartanInvalid;
        if (!spartanInvalid)
            return false;
        return validator ? validator in errors : Object.keys(errors).length > 0;
    }, ...(ngDevMode ? [{ debugName: "_hasError" }] : /* istanbul ignore next */ []));
    _cleanup = this._a11y
        ? effect(() => {
            const a11y = this._a11y;
            if (!a11y)
                return;
            const id = this.id();
            const hasError = this._hasError();
            if (this._registeredId && (this._registeredId !== id || !hasError)) {
                a11y.unregisterError(this._registeredId);
                this._registeredId = undefined;
            }
            if (hasError && this._registeredId !== id) {
                a11y.registerError(id);
                this._registeredId = id;
            }
        })
        : null;
    constructor() {
        classes(() => 'text-destructive text-sm font-normal');
    }
    ngOnDestroy() {
        this._cleanup?.destroy();
        if (this._registeredId) {
            this._a11y?.unregisterError(this._registeredId);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmFieldError, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.11", type: HlmFieldError, isStandalone: true, selector: "hlm-field-error", inputs: { id: { classPropertyName: "id", publicName: "id", isSignal: true, isRequired: false, transformFunction: null }, validator: { classPropertyName: "validator", publicName: "validator", isSignal: true, isRequired: false, transformFunction: null }, forceShow: { classPropertyName: "forceShow", publicName: "forceShow", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "role": "alert", "data-slot": "field-error" }, properties: { "attr.id": "id()", "hidden": "!_display()" } }, ngImport: i0, template: `
    @if (_display()) {
      <ng-content />
    }
  `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmFieldError, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-field-error',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        role: 'alert',
                        'data-slot': 'field-error',
                        '[attr.id]': 'id()',
                        '[hidden]': '!_display()',
                    },
                    template: `
    @if (_display()) {
      <ng-content />
    }
  `,
                }]
        }], ctorParameters: () => [], propDecorators: { id: [{ type: i0.Input, args: [{ isSignal: true, alias: "id", required: false }] }], validator: [{ type: i0.Input, args: [{ isSignal: true, alias: "validator", required: false }] }], forceShow: [{ type: i0.Input, args: [{ isSignal: true, alias: "forceShow", required: false }] }] } });

class HlmFieldGroup {
    constructor() {
        classes(() => 'gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 group/field-group @container/field-group flex w-full flex-col');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmFieldGroup, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmFieldGroup, isStandalone: true, selector: "[hlmFieldGroup],hlm-field-group", host: { attributes: { "data-slot": "field-group" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmFieldGroup, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmFieldGroup],hlm-field-group',
                    host: { 'data-slot': 'field-group' },
                }]
        }], ctorParameters: () => [] });

class HlmFieldLabel {
    constructor() {
        classes(() => [
            'has-data-checked:bg-primary/5 has-data-checked:border-primary/30 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-[>[data-slot=field]]:rounded-xl has-[>[data-slot=field]]:border *:data-[slot=field]:p-4 group/field-label peer/field-label flex w-fit',
            'has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col',
        ]);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmFieldLabel, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmFieldLabel, isStandalone: true, selector: "[hlmFieldLabel],hlm-field-label", host: { attributes: { "data-slot": "field-label" } }, hostDirectives: [{ directive: i1$1.HlmLabel }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmFieldLabel, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmFieldLabel],hlm-field-label',
                    hostDirectives: [HlmLabel],
                    host: { 'data-slot': 'field-label' },
                }]
        }], ctorParameters: () => [] });

class HlmFieldLegend {
    variant = input('legend', ...(ngDevMode ? [{ debugName: "variant" }] : /* istanbul ignore next */ []));
    constructor() {
        classes(() => 'mb-3 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmFieldLegend, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.11", type: HlmFieldLegend, isStandalone: true, selector: "legend[hlmFieldLegend]", inputs: { variant: { classPropertyName: "variant", publicName: "variant", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "data-slot": "field-legend" }, properties: { "attr.data-variant": "variant()" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmFieldLegend, decorators: [{
            type: Directive,
            args: [{
                    selector: 'legend[hlmFieldLegend]',
                    host: {
                        'data-slot': 'field-legend',
                        '[attr.data-variant]': 'variant()',
                    },
                }]
        }], ctorParameters: () => [], propDecorators: { variant: [{ type: i0.Input, args: [{ isSignal: true, alias: "variant", required: false }] }] } });

class HlmFieldSeparator {
    constructor() {
        classes(() => '-my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2 relative');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmFieldSeparator, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.11", type: HlmFieldSeparator, isStandalone: true, selector: "hlm-field-separator", host: { attributes: { "data-slot": "field-separator" } }, ngImport: i0, template: `
    <hlm-separator class="absolute inset-0 top-1/2" />
    <span data-slot="field-separator-content" class="text-muted-foreground px-2 bg-background relative mx-auto block w-fit">
      <ng-content />
    </span>
  `, isInline: true, dependencies: [{ kind: "directive", type: HlmSeparator, selector: "[hlmSeparator],hlm-separator" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmFieldSeparator, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-field-separator',
                    imports: [HlmSeparator],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: { 'data-slot': 'field-separator' },
                    template: `
    <hlm-separator class="absolute inset-0 top-1/2" />
    <span data-slot="field-separator-content" class="text-muted-foreground px-2 bg-background relative mx-auto block w-fit">
      <ng-content />
    </span>
  `,
                }]
        }], ctorParameters: () => [] });

class HlmFieldSet {
    constructor() {
        classes(() => 'gap-6 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3 flex flex-col');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmFieldSet, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmFieldSet, isStandalone: true, selector: "fieldset[hlmFieldSet]", host: { attributes: { "data-slot": "field-set" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmFieldSet, decorators: [{
            type: Directive,
            args: [{
                    selector: 'fieldset[hlmFieldSet]',
                    host: { 'data-slot': 'field-set' },
                }]
        }], ctorParameters: () => [] });

class HlmFieldTitle {
    constructor() {
        classes(() => 'gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50 flex w-fit items-center');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmFieldTitle, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmFieldTitle, isStandalone: true, selector: "[hlmFieldTitle],hlm-field-title", host: { attributes: { "data-slot": "field-label" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmFieldTitle, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmFieldTitle],hlm-field-title',
                    host: { 'data-slot': 'field-label' },
                }]
        }], ctorParameters: () => [] });

const HlmFieldImports = [
    HlmField,
    HlmFieldContent,
    HlmFieldDescription,
    HlmFieldError,
    HlmFieldGroup,
    HlmFieldLabel,
    HlmFieldLegend,
    HlmFieldSeparator,
    HlmFieldSet,
    HlmFieldTitle,
];

/**
 * Generated bundle index. Do not edit.
 */

export { HlmField, HlmFieldContent, HlmFieldDescription, HlmFieldError, HlmFieldGroup, HlmFieldImports, HlmFieldLabel, HlmFieldLegend, HlmFieldSeparator, HlmFieldSet, HlmFieldTitle };
//# sourceMappingURL=gosamply-ui-field.mjs.map
