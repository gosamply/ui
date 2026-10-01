import * as i0 from '@angular/core';
import * as i1 from '@spartan-ng/brain/separator';

declare const hlmSeparatorClass = "inline-flex shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch";
declare class HlmSeparator {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSeparator, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSeparator, "[hlmSeparator],hlm-separator", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnSeparator; inputs: { "orientation": "orientation"; "decorative": "decorative"; }; outputs: {}; }]>;
}

declare const HlmSeparatorImports: readonly [typeof HlmSeparator];

export { HlmSeparator, HlmSeparatorImports, hlmSeparatorClass };
