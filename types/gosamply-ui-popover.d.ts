import * as i0 from '@angular/core';
import * as i1 from '@spartan-ng/brain/popover';

declare class HlmPopover {
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmPopover, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmPopover, "[hlmPopover],hlm-popover", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnPopover; inputs: { "align": "align"; "attachTo": "attachTo"; "autoFocus": "autoFocus"; "closeOnOutsidePointerEvents": "closeOnOutsidePointerEvents"; "offsetX": "offsetX"; "scrollStrategy": "scrollStrategy"; "sideOffset": "sideOffset"; "state": "state"; }; outputs: { "stateChanged": "stateChanged"; "closed": "closed"; }; }]>;
}

declare class HlmPopoverContent {
    private readonly _stateProvider;
    state: i0.Signal<"closed" | "open">;
    private readonly _renderer;
    private readonly _element;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmPopoverContent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmPopoverContent, "[hlmPopoverContent],hlm-popover-content", never, {}, {}, never, never, true, never>;
}

declare class HlmPopoverDescription {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmPopoverDescription, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmPopoverDescription, "[hlmPopoverDescription]", never, {}, {}, never, never, true, never>;
}

declare class HlmPopoverHeader {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmPopoverHeader, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmPopoverHeader, "[hlmPopoverHeader],hlm-popover-header", never, {}, {}, never, never, true, never>;
}

declare class HlmPopoverPortal {
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmPopoverPortal, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmPopoverPortal, "[hlmPopoverPortal]", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnPopoverContent; inputs: { "context": "context"; "class": "class"; }; outputs: {}; }]>;
}

declare class HlmPopoverTitle {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmPopoverTitle, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmPopoverTitle, "[hlmPopoverTitle]", never, {}, {}, never, never, true, never>;
}

declare class HlmPopoverTrigger {
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmPopoverTrigger, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmPopoverTrigger, "button[hlmPopoverTrigger],button[hlmPopoverTriggerFor]", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnPopoverTrigger; inputs: { "id": "id"; "brnPopoverTriggerFor": "hlmPopoverTriggerFor"; "type": "type"; }; outputs: {}; }]>;
}

declare const HlmPopoverImports: readonly [typeof HlmPopover, typeof HlmPopoverContent, typeof HlmPopoverDescription, typeof HlmPopoverHeader, typeof HlmPopoverPortal, typeof HlmPopoverTitle, typeof HlmPopoverTrigger];

export { HlmPopover, HlmPopoverContent, HlmPopoverDescription, HlmPopoverHeader, HlmPopoverImports, HlmPopoverPortal, HlmPopoverTitle, HlmPopoverTrigger };
