import * as i0 from '@angular/core';
import * as i1 from '@spartan-ng/brain/separator';

declare class HlmButtonGroup {
    constructor();
    readonly orientation: i0.InputSignal<"horizontal" | "vertical">;
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmButtonGroup, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmButtonGroup, "[hlmButtonGroup],hlm-button-group", never, { "orientation": { "alias": "orientation"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class HlmButtonGroupSeparator {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmButtonGroupSeparator, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmButtonGroupSeparator, "[hlmButtonGroupSeparator],hlm-button-group-separator", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnSeparator; inputs: { "orientation": "orientation"; "decorative": "decorative"; }; outputs: {}; }]>;
}

declare class HlmButtonGroupText {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmButtonGroupText, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmButtonGroupText, "[hlmButtonGroupText],hlm-button-group-text", never, {}, {}, never, never, true, never>;
}

declare const HlmButtonGroupImports: readonly [typeof HlmButtonGroup, typeof HlmButtonGroupText, typeof HlmButtonGroupSeparator];

export { HlmButtonGroup, HlmButtonGroupImports, HlmButtonGroupSeparator, HlmButtonGroupText };
