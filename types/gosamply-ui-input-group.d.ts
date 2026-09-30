import * as i0 from '@angular/core';
import * as i1 from '@gosamply/ui/button';
import * as i1$1 from '@gosamply/ui/input';
import * as i1$2 from '@gosamply/ui/textarea';

declare class HlmInputGroup {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmInputGroup, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmInputGroup, "[hlmInputGroup],hlm-input-group", never, {}, {}, never, never, true, never>;
}

declare class HlmInputGroupAddon {
    readonly align: i0.InputSignal<"inline-start" | "inline-end" | "block-start" | "block-end" | null | undefined>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmInputGroupAddon, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmInputGroupAddon, "[hlmInputGroupAddon],hlm-input-group-addon", never, { "align": { "alias": "align"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class HlmInputGroupButton {
    readonly size: i0.InputSignal<"xs" | "sm" | "icon-xs" | "icon-sm" | null | undefined>;
    readonly type: i0.InputSignal<"button" | "submit" | "reset">;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmInputGroupButton, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmInputGroupButton, "button[hlmInputGroupButton]", never, { "size": { "alias": "size"; "required": false; "isSignal": true; }; "type": { "alias": "type"; "required": false; "isSignal": true; }; }, {}, never, never, true, [{ directive: typeof i1.HlmButton; inputs: { "variant": "variant"; }; outputs: {}; }]>;
}

declare class HlmInputGroupInput {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmInputGroupInput, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmInputGroupInput, "input[hlmInputGroupInput]", never, {}, {}, never, never, true, [{ directive: typeof i1$1.HlmInput; inputs: {}; outputs: {}; }]>;
}

declare class HlmInputGroupText {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmInputGroupText, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmInputGroupText, "[hlmInputGroupText],hlm-input-group-text", never, {}, {}, never, never, true, never>;
}

declare class HlmInputGroupTextarea {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmInputGroupTextarea, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmInputGroupTextarea, "textarea[hlmInputGroupTextarea]", never, {}, {}, never, never, true, [{ directive: typeof i1$2.HlmTextarea; inputs: {}; outputs: {}; }]>;
}

declare const HlmInputGroupImports: readonly [typeof HlmInputGroup, typeof HlmInputGroupAddon, typeof HlmInputGroupButton, typeof HlmInputGroupInput, typeof HlmInputGroupText, typeof HlmInputGroupTextarea];

export { HlmInputGroup, HlmInputGroupAddon, HlmInputGroupButton, HlmInputGroupImports, HlmInputGroupInput, HlmInputGroupText, HlmInputGroupTextarea };
