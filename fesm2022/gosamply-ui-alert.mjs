import * as i0 from '@angular/core';
import { input, Directive } from '@angular/core';
import { classes } from '@gosamply/ui/utils';
import { cva } from 'class-variance-authority';

const alertVariants = cva("grid gap-0.5 rounded-lg border px-4 py-3 text-start text-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pe-18 has-[>ng-icon]:grid-cols-[auto_1fr] has-[>ng-icon]:gap-x-2.5 *:[ng-icon]:row-span-2 *:[ng-icon]:translate-y-0.5 *:[ng-icon]:text-current *:[ng-icon:not([class*='text-'])]:text-[length:--spacing(4)] group/alert relative w-full", {
    variants: {
        variant: {
            default: 'bg-card text-card-foreground',
            destructive: 'text-destructive bg-card *:data-[slot=alert-description]:text-destructive/90 *:[ng-icon]:text-current',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});
class HlmAlert {
    variant = input('default', ...(ngDevMode ? [{ debugName: "variant" }] : /* istanbul ignore next */ []));
    constructor() {
        classes(() => alertVariants({ variant: this.variant() }));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmAlert, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.11", type: HlmAlert, isStandalone: true, selector: "hlm-alert,[hlmAlert]", inputs: { variant: { classPropertyName: "variant", publicName: "variant", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "data-slot": "alert", "role": "alert" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmAlert, decorators: [{
            type: Directive,
            args: [{
                    selector: 'hlm-alert,[hlmAlert]',
                    host: {
                        'data-slot': 'alert',
                        role: 'alert',
                    },
                }]
        }], ctorParameters: () => [], propDecorators: { variant: [{ type: i0.Input, args: [{ isSignal: true, alias: "variant", required: false }] }] } });

class HlmAlertAction {
    constructor() {
        classes(() => 'absolute end-3 top-2.5');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmAlertAction, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmAlertAction, isStandalone: true, selector: "[hlmAlertAction]", host: { attributes: { "data-slot": "alert-action" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmAlertAction, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmAlertAction]',
                    host: {
                        'data-slot': 'alert-action',
                    },
                }]
        }], ctorParameters: () => [] });

class HlmAlertDescription {
    constructor() {
        classes(() => 'text-muted-foreground text-sm text-balance md:text-pretty [&_p:not(:last-child)]:mb-4 [&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmAlertDescription, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmAlertDescription, isStandalone: true, selector: "[hlmAlertDescription]", host: { attributes: { "data-slot": "alert-description" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmAlertDescription, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmAlertDescription]',
                    host: {
                        'data-slot': 'alert-description',
                    },
                }]
        }], ctorParameters: () => [] });

class HlmAlertTitle {
    constructor() {
        classes(() => 'font-medium group-has-[>ng-icon]/alert:col-start-2 [&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmAlertTitle, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmAlertTitle, isStandalone: true, selector: "[hlmAlertTitle]", host: { attributes: { "data-slot": "alert-title" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmAlertTitle, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmAlertTitle]',
                    host: {
                        'data-slot': 'alert-title',
                    },
                }]
        }], ctorParameters: () => [] });

const HlmAlertImports = [HlmAlert, HlmAlertAction, HlmAlertDescription, HlmAlertTitle];

/**
 * Generated bundle index. Do not edit.
 */

export { HlmAlert, HlmAlertAction, HlmAlertDescription, HlmAlertImports, HlmAlertTitle };
//# sourceMappingURL=gosamply-ui-alert.mjs.map
