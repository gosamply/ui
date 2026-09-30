import * as _angular_core from '@angular/core';
import { ValueProvider } from '@angular/core';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import * as i1 from '@spartan-ng/brain/button';

declare const buttonVariants: (props?: ({
    variant?: "default" | "outline" | "secondary" | "ghost" | "destructive" | "link" | null | undefined;
    size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type ButtonVariants = VariantProps<typeof buttonVariants>;
declare class HlmButton {
    private readonly _config;
    private readonly _additionalClasses;
    readonly variant: _angular_core.InputSignal<"default" | "outline" | "secondary" | "ghost" | "destructive" | "link" | null | undefined>;
    readonly size: _angular_core.InputSignal<"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg" | null | undefined>;
    constructor();
    setClass(classes: string): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<HlmButton, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<HlmButton, "button[hlmBtn], a[hlmBtn]", ["hlmBtn"], { "variant": { "alias": "variant"; "required": false; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; }, {}, never, never, true, [{ directive: typeof i1.BrnButton; inputs: { "disabled": "disabled"; }; outputs: {}; }]>;
}

interface BrnButtonConfig {
    variant: ButtonVariants['variant'];
    size: ButtonVariants['size'];
}
declare function provideBrnButtonConfig(config: Partial<BrnButtonConfig>): ValueProvider;
declare function injectBrnButtonConfig(): BrnButtonConfig;

declare const HlmButtonImports: readonly [typeof HlmButton];

export { HlmButton, HlmButtonImports, buttonVariants, injectBrnButtonConfig, provideBrnButtonConfig };
export type { BrnButtonConfig, ButtonVariants };
