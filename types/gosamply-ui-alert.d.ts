import * as i0 from '@angular/core';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';

declare const alertVariants: (props?: ({
    variant?: "default" | "destructive" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type AlertVariants = VariantProps<typeof alertVariants>;
declare class HlmAlert {
    readonly variant: i0.InputSignal<"default" | "destructive" | null | undefined>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmAlert, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmAlert, "hlm-alert,[hlmAlert]", never, { "variant": { "alias": "variant"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class HlmAlertAction {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmAlertAction, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmAlertAction, "[hlmAlertAction]", never, {}, {}, never, never, true, never>;
}

declare class HlmAlertDescription {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmAlertDescription, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmAlertDescription, "[hlmAlertDescription]", never, {}, {}, never, never, true, never>;
}

declare class HlmAlertTitle {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmAlertTitle, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmAlertTitle, "[hlmAlertTitle]", never, {}, {}, never, never, true, never>;
}

declare const HlmAlertImports: readonly [typeof HlmAlert, typeof HlmAlertAction, typeof HlmAlertDescription, typeof HlmAlertTitle];

export { HlmAlert, HlmAlertAction, HlmAlertDescription, HlmAlertImports, HlmAlertTitle };
export type { AlertVariants };
