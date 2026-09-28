import * as i0 from '@angular/core';
import { InjectionToken, inject, signal, input, Directive } from '@angular/core';
import * as i1 from '@spartan-ng/brain/button';
import { BrnButton } from '@spartan-ng/brain/button';
import { classes } from '@gosamply/ui/utils';
import { cva } from 'class-variance-authority';

const defaultConfig = {
    variant: 'default',
    size: 'default',
};
const BrnButtonConfigToken = new InjectionToken('BrnButtonConfig');
function provideBrnButtonConfig(config) {
    return { provide: BrnButtonConfigToken, useValue: { ...defaultConfig, ...config } };
}
function injectBrnButtonConfig() {
    return inject(BrnButtonConfigToken, { optional: true }) ?? defaultConfig;
}

const buttonVariants = cva("focus-visible:border-ring focus-visible:ring-ring/50 data-[matches-spartan-invalid=true]:ring-destructive/20 dark:data-[matches-spartan-invalid=true]:ring-destructive/40 data-[matches-spartan-invalid=true]:border-destructive dark:data-[matches-spartan-invalid=true]:border-destructive/50 rounded-4xl border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-[3px] active:not-aria-[haspopup]:translate-y-px data-[matches-spartan-invalid=true]:ring-[3px] [&_ng-icon:not([class*='text-'])]:text-[length:--spacing(4)] group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_ng-icon]:pointer-events-none [&_ng-icon]:shrink-0", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/80',
            outline: 'border-border bg-input/30 hover:bg-input/50 hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground',
            ghost: 'hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground',
            destructive: 'bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30',
            link: 'text-primary underline-offset-4 hover:underline',
        },
        size: {
            default: 'h-9 gap-1.5 px-3 has-data-[icon=inline-end]:pe-2.5 has-data-[icon=inline-start]:ps-2.5',
            xs: "h-6 gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pe-2 has-data-[icon=inline-start]:ps-2 [&_ng-icon:not([class*='text-'])]:text-[length:--spacing(3)]",
            sm: 'h-8 gap-1 px-3 has-data-[icon=inline-end]:pe-2 has-data-[icon=inline-start]:ps-2',
            lg: 'h-10 gap-1.5 px-4 has-data-[icon=inline-end]:pe-3 has-data-[icon=inline-start]:ps-3',
            icon: 'size-9',
            'icon-xs': "size-6 [&_ng-icon:not([class*='text-'])]:text-[length:--spacing(3)]",
            'icon-sm': 'size-8',
            'icon-lg': 'size-10',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
});
class HlmButton {
    _config = injectBrnButtonConfig();
    _additionalClasses = signal('', ...(ngDevMode ? [{ debugName: "_additionalClasses" }] : /* istanbul ignore next */ []));
    variant = input(this._config.variant, ...(ngDevMode ? [{ debugName: "variant" }] : /* istanbul ignore next */ []));
    size = input(this._config.size, ...(ngDevMode ? [{ debugName: "size" }] : /* istanbul ignore next */ []));
    constructor() {
        classes(() => [buttonVariants({ variant: this.variant(), size: this.size() }), this._additionalClasses()]);
    }
    setClass(classes) {
        this._additionalClasses.set(classes);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmButton, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.11", type: HlmButton, isStandalone: true, selector: "button[hlmBtn], a[hlmBtn]", inputs: { variant: { classPropertyName: "variant", publicName: "variant", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "data-slot": "button" } }, exportAs: ["hlmBtn"], hostDirectives: [{ directive: i1.BrnButton, inputs: ["disabled", "disabled"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmButton, decorators: [{
            type: Directive,
            args: [{
                    selector: 'button[hlmBtn], a[hlmBtn]',
                    exportAs: 'hlmBtn',
                    hostDirectives: [{ directive: BrnButton, inputs: ['disabled'] }],
                    host: { 'data-slot': 'button' },
                }]
        }], ctorParameters: () => [], propDecorators: { variant: [{ type: i0.Input, args: [{ isSignal: true, alias: "variant", required: false }] }], size: [{ type: i0.Input, args: [{ isSignal: true, alias: "size", required: false }] }] } });

const HlmButtonImports = [HlmButton];

/**
 * Generated bundle index. Do not edit.
 */

export { HlmButton, HlmButtonImports, buttonVariants, injectBrnButtonConfig, provideBrnButtonConfig };
//# sourceMappingURL=gosamply-ui-button.mjs.map
