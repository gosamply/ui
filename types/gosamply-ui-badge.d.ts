import * as i0 from '@angular/core';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';

declare const badgeVariants: (props?: ({
    variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type BadgeVariants = VariantProps<typeof badgeVariants>;
declare class HlmBadge {
    readonly variant: i0.InputSignal<"default" | "secondary" | "destructive" | "outline" | "ghost" | "link" | null | undefined>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmBadge, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmBadge, "[hlmBadge],hlm-badge", never, { "variant": { "alias": "variant"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare const HlmBadgeImports: readonly [typeof HlmBadge];

export { HlmBadge, HlmBadgeImports };
export type { BadgeVariants };
