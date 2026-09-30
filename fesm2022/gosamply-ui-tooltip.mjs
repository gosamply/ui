import * as i0 from '@angular/core';
import { Directive } from '@angular/core';
import * as i1 from '@spartan-ng/brain/tooltip';
import { provideBrnTooltipDefaultOptions, BrnTooltip } from '@spartan-ng/brain/tooltip';
import { hlm } from '@gosamply/ui/utils';
import { cva } from 'class-variance-authority';

const DEFAULT_TOOLTIP_SVG_CLASS = 'bg-foreground fill-foreground z-50 block size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-[2px]';
const DEFAULT_TOOLTIP_CONTENT_CLASSES = hlm('data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 rounded-2xl px-3 py-1.5 text-xs **:data-[slot=kbd]:rounded-4xl bg-foreground text-background data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) text-balance');
const tooltipPositionVariants = cva('absolute', {
    variants: {
        position: {
            top: 'bottom-0 left-[calc(50%-5px)] translate-y-full',
            bottom: '-top-2.5 left-[calc(50%-5px)] translate-y-0 rotate-180',
            left: '-end-2.5 top-[calc(50%-5px)] translate-y-0 rotate-270 rtl:-rotate-270',
            right: '-start-2.5 top-[calc(50%-5px)] translate-y-0 rotate-90 rtl:-rotate-90',
        },
    },
});
class HlmTooltip {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmTooltip, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmTooltip, isStandalone: true, selector: "[hlmTooltip]", providers: [
            provideBrnTooltipDefaultOptions({
                svgClasses: DEFAULT_TOOLTIP_SVG_CLASS,
                tooltipContentClasses: DEFAULT_TOOLTIP_CONTENT_CLASSES,
                arrowClasses: (position) => hlm(tooltipPositionVariants({ position })),
            }),
        ], hostDirectives: [{ directive: i1.BrnTooltip, inputs: ["brnTooltip", "hlmTooltip", "position", "position", "hideDelay", "hideDelay", "showDelay", "showDelay", "tooltipDisabled", "tooltipDisabled"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmTooltip, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmTooltip]',
                    providers: [
                        provideBrnTooltipDefaultOptions({
                            svgClasses: DEFAULT_TOOLTIP_SVG_CLASS,
                            tooltipContentClasses: DEFAULT_TOOLTIP_CONTENT_CLASSES,
                            arrowClasses: (position) => hlm(tooltipPositionVariants({ position })),
                        }),
                    ],
                    hostDirectives: [
                        {
                            directive: BrnTooltip,
                            inputs: ['brnTooltip: hlmTooltip', 'position', 'hideDelay', 'showDelay', 'tooltipDisabled'],
                        },
                    ],
                }]
        }] });

const HlmTooltipImports = [HlmTooltip];

/**
 * Generated bundle index. Do not edit.
 */

export { DEFAULT_TOOLTIP_CONTENT_CLASSES, DEFAULT_TOOLTIP_SVG_CLASS, HlmTooltip, HlmTooltipImports, tooltipPositionVariants };
//# sourceMappingURL=gosamply-ui-tooltip.mjs.map
