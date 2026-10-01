import * as i0 from '@angular/core';
import { input, Directive } from '@angular/core';
import { classes } from '@gosamply/ui/utils';
import { cva } from 'class-variance-authority';

const badgeVariants = cva('h-5 gap-1 rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium transition-all has-data-[icon=inline-end]:pe-1.5 has-data-[icon=inline-start]:ps-1.5 [&>ng-icon]:text-[length:--spacing(3)] group/badge focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap focus-visible:ring-[3px] [&>ng-icon]:pointer-events-none', {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground [a]:hover:bg-primary/80',
            secondary: 'bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80',
            destructive: 'bg-destructive/10 [a]:hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive dark:bg-destructive/20',
            outline: 'border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground bg-input/30',
            ghost: 'hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50',
            link: 'text-primary underline-offset-4 hover:underline',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});
class HlmBadge {
    variant = input('default', ...(ngDevMode ? [{ debugName: "variant" }] : /* istanbul ignore next */ []));
    constructor() {
        classes(() => badgeVariants({ variant: this.variant() }));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmBadge, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.11", type: HlmBadge, isStandalone: true, selector: "[hlmBadge],hlm-badge", inputs: { variant: { classPropertyName: "variant", publicName: "variant", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "data-slot": "badge" }, properties: { "attr.data-variant": "variant()" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmBadge, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmBadge],hlm-badge',
                    host: {
                        'data-slot': 'badge',
                        '[attr.data-variant]': 'variant()',
                    },
                }]
        }], ctorParameters: () => [], propDecorators: { variant: [{ type: i0.Input, args: [{ isSignal: true, alias: "variant", required: false }] }] } });

const HlmBadgeImports = [HlmBadge];

/**
 * Generated bundle index. Do not edit.
 */

export { HlmBadge, HlmBadgeImports };
//# sourceMappingURL=gosamply-ui-badge.mjs.map
