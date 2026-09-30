import * as class_variance_authority_types from 'class-variance-authority/types';
import * as i0 from '@angular/core';
import * as i1 from '@spartan-ng/brain/tooltip';

declare const DEFAULT_TOOLTIP_SVG_CLASS = "bg-foreground fill-foreground z-50 block size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-[2px]";
declare const DEFAULT_TOOLTIP_CONTENT_CLASSES: string;
declare const tooltipPositionVariants: (props?: ({
    position?: "top" | "bottom" | "left" | "right" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare class HlmTooltip {
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmTooltip, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmTooltip, "[hlmTooltip]", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnTooltip; inputs: { "brnTooltip": "hlmTooltip"; "position": "position"; "hideDelay": "hideDelay"; "showDelay": "showDelay"; "tooltipDisabled": "tooltipDisabled"; }; outputs: {}; }]>;
}

declare const HlmTooltipImports: readonly [typeof HlmTooltip];

export { DEFAULT_TOOLTIP_CONTENT_CLASSES, DEFAULT_TOOLTIP_SVG_CLASS, HlmTooltip, HlmTooltipImports, tooltipPositionVariants };
