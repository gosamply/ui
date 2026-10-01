import * as i1 from '@spartan-ng/brain/sheet';
import { BrnSheet } from '@spartan-ng/brain/sheet';
import * as i0 from '@angular/core';
import * as _spartan_ng_brain_core from '@spartan-ng/brain/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { ClassValue } from 'clsx';

declare class HlmSheet extends BrnSheet {
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSheet, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HlmSheet, "hlm-sheet", ["hlmSheet"], {}, {}, never, ["*"], true, never>;
}

declare class HlmSheetClose {
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSheetClose, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSheetClose, "button[hlmSheetClose]", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnSheetClose; inputs: {}; outputs: {}; }]>;
}

declare class HlmSheetContent {
    private readonly _stateProvider;
    protected readonly _sideProvider: _spartan_ng_brain_core.ExposesSide;
    readonly state: i0.Signal<"closed" | "open">;
    private readonly _renderer;
    private readonly _element;
    readonly showCloseButton: i0.InputSignalWithTransform<boolean, BooleanInput>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSheetContent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HlmSheetContent, "hlm-sheet-content", never, { "showCloseButton": { "alias": "showCloseButton"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}

declare class HlmSheetDescription {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSheetDescription, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSheetDescription, "[hlmSheetDescription]", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnSheetDescription; inputs: {}; outputs: {}; }]>;
}

declare class HlmSheetFooter {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSheetFooter, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSheetFooter, "[hlmSheetFooter],hlm-sheet-footer", never, {}, {}, never, never, true, never>;
}

declare class HlmSheetHeader {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSheetHeader, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSheetHeader, "[hlmSheetHeader],hlm-sheet-header", never, {}, {}, never, never, true, never>;
}

declare class HlmSheetOverlay {
    private readonly _classSettable;
    readonly userClass: i0.InputSignal<ClassValue>;
    protected readonly _computedClass: i0.Signal<string>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSheetOverlay, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSheetOverlay, "[hlmSheetOverlay],hlm-sheet-overlay", never, { "userClass": { "alias": "class"; "required": false; "isSignal": true; }; }, {}, never, never, true, [{ directive: typeof i1.BrnSheetOverlay; inputs: {}; outputs: {}; }]>;
}

declare class HlmSheetPortal {
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSheetPortal, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSheetPortal, "[hlmSheetPortal]", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnSheetContent; inputs: { "context": "context"; "class": "class"; }; outputs: {}; }]>;
}

declare class HlmSheetTitle {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSheetTitle, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSheetTitle, "[hlmSheetTitle]", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnSheetTitle; inputs: {}; outputs: {}; }]>;
}

declare class HlmSheetTrigger {
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSheetTrigger, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSheetTrigger, "button[hlmSheetTrigger]", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnSheetTrigger; inputs: { "id": "id"; "side": "side"; "type": "type"; }; outputs: {}; }]>;
}

declare const HlmSheetImports: readonly [typeof HlmSheet, typeof HlmSheetClose, typeof HlmSheetContent, typeof HlmSheetDescription, typeof HlmSheetFooter, typeof HlmSheetHeader, typeof HlmSheetOverlay, typeof HlmSheetPortal, typeof HlmSheetTitle, typeof HlmSheetTrigger];

export { HlmSheet, HlmSheetClose, HlmSheetContent, HlmSheetDescription, HlmSheetFooter, HlmSheetHeader, HlmSheetImports, HlmSheetOverlay, HlmSheetPortal, HlmSheetTitle, HlmSheetTrigger };
