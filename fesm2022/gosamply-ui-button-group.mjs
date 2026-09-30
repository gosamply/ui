import * as i0 from '@angular/core';
import { input, Directive } from '@angular/core';
import { classes } from '@gosamply/ui/utils';
import { cva } from 'class-variance-authority';
import * as i1 from '@spartan-ng/brain/separator';
import { provideBrnSeparatorConfig, BrnSeparator } from '@spartan-ng/brain/separator';

const buttonGroupVariants = cva("has-[>[data-slot=button-group]]:gap-2 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-4xl flex w-fit items-stretch *:focus-visible:relative *:focus-visible:z-10 [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1", {
    variants: {
        orientation: {
            horizontal: '[&>[data-slot]:not(:has(~[data-slot]))]:rounded-e-4xl [&>*:not(:first-child)]:rounded-s-none [&>*:not(:first-child)]:border-s-0 [&>*:not(:last-child)]:rounded-e-none',
            vertical: '[&>[data-slot]:not(:has(~[data-slot]))]:rounded-b-4xl flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none',
        },
    },
    defaultVariants: {
        orientation: 'horizontal',
    },
});
class HlmButtonGroup {
    constructor() {
        classes(() => buttonGroupVariants({ orientation: this.orientation() }));
    }
    orientation = input('horizontal', ...(ngDevMode ? [{ debugName: "orientation" }] : /* istanbul ignore next */ []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmButtonGroup, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.11", type: HlmButtonGroup, isStandalone: true, selector: "[hlmButtonGroup],hlm-button-group", inputs: { orientation: { classPropertyName: "orientation", publicName: "orientation", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "data-slot": "button-group", "role": "group" }, properties: { "attr.data-orientation": "orientation()" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmButtonGroup, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmButtonGroup],hlm-button-group',
                    host: {
                        'data-slot': 'button-group',
                        role: 'group',
                        '[attr.data-orientation]': 'orientation()',
                    },
                }]
        }], ctorParameters: () => [], propDecorators: { orientation: [{ type: i0.Input, args: [{ isSignal: true, alias: "orientation", required: false }] }] } });

class HlmButtonGroupSeparator {
    constructor() {
        classes(() => [
            'bg-input relative self-stretch data-horizontal:mx-px data-horizontal:w-auto data-vertical:my-px data-vertical:h-auto',
            // separator classes
            'shrink-0 data-horizontal:h-px data-vertical:w-px data-vertical:self-stretch',
        ]);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmButtonGroupSeparator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmButtonGroupSeparator, isStandalone: true, selector: "[hlmButtonGroupSeparator],hlm-button-group-separator", host: { attributes: { "data-slot": "button-group-separator" } }, providers: [provideBrnSeparatorConfig({ orientation: 'vertical' })], hostDirectives: [{ directive: i1.BrnSeparator, inputs: ["orientation", "orientation", "decorative", "decorative"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmButtonGroupSeparator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmButtonGroupSeparator],hlm-button-group-separator',
                    providers: [provideBrnSeparatorConfig({ orientation: 'vertical' })],
                    hostDirectives: [{ directive: BrnSeparator, inputs: ['orientation', 'decorative'] }],
                    host: {
                        'data-slot': 'button-group-separator',
                    },
                }]
        }], ctorParameters: () => [] });

class HlmButtonGroupText {
    constructor() {
        classes(() => "bg-muted gap-2 rounded-4xl border px-2.5 text-sm font-medium [&_ng-icon:not([class*='text-'])]:text-[length:--spacing(4)] flex items-center [&_ng-icon]:pointer-events-none");
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmButtonGroupText, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmButtonGroupText, isStandalone: true, selector: "[hlmButtonGroupText],hlm-button-group-text", host: { attributes: { "data-slot": "button-group-text" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmButtonGroupText, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmButtonGroupText],hlm-button-group-text',
                    host: {
                        'data-slot': 'button-group-text',
                    },
                }]
        }], ctorParameters: () => [] });

const HlmButtonGroupImports = [HlmButtonGroup, HlmButtonGroupText, HlmButtonGroupSeparator];

/**
 * Generated bundle index. Do not edit.
 */

export { HlmButtonGroup, HlmButtonGroupImports, HlmButtonGroupSeparator, HlmButtonGroupText };
//# sourceMappingURL=gosamply-ui-button-group.mjs.map
