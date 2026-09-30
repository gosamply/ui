import * as i0 from '@angular/core';
import * as i1 from '@spartan-ng/brain/collapsible';

declare class HlmCollapsible {
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmCollapsible, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmCollapsible, "[hlmCollapsible],hlm-collapsible", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnCollapsible; inputs: { "expanded": "expanded"; "disabled": "disabled"; }; outputs: { "expandedChange": "expandedChange"; }; }]>;
}

declare class HlmCollapsibleContent {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmCollapsibleContent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmCollapsibleContent, "[hlmCollapsibleContent],hlm-collapsible-content", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnCollapsibleContent; inputs: { "id": "id"; }; outputs: {}; }]>;
}

declare class HlmCollapsibleTrigger {
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmCollapsibleTrigger, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmCollapsibleTrigger, "button[hlmCollapsibleTrigger]", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnCollapsibleTrigger; inputs: { "type": "type"; }; outputs: {}; }]>;
}

declare const HlmCollapsibleImports: readonly [typeof HlmCollapsible, typeof HlmCollapsibleContent, typeof HlmCollapsibleTrigger];

export { HlmCollapsible, HlmCollapsibleContent, HlmCollapsibleImports, HlmCollapsibleTrigger };
