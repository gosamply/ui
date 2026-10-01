import * as i0 from '@angular/core';
import { ValueProvider } from '@angular/core';
import { NumberInput, BooleanInput } from '@angular/cdk/coercion';
import { MenuSide, MenuAlign } from '@spartan-ng/brain/core';
import * as i1 from '@angular/cdk/menu';
import { CdkMenuItemCheckbox, CdkMenuItemRadio } from '@angular/cdk/menu';

declare class HlmDropdownMenu {
    private readonly _host;
    private readonly _elementRef;
    private readonly _menuSide;
    protected readonly _state: i0.WritableSignal<string>;
    protected readonly _side: i0.WritableSignal<MenuSide>;
    readonly sideOffset: i0.InputSignalWithTransform<number, NumberInput>;
    constructor();
    private setSideFromTransformOrigin;
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmDropdownMenu, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmDropdownMenu, "[hlmDropdownMenu],hlm-dropdown-menu", never, { "sideOffset": { "alias": "sideOffset"; "required": false; "isSignal": true; }; }, {}, never, never, true, [{ directive: typeof i1.CdkMenu; inputs: {}; outputs: {}; }]>;
}

/**
 * @internal
 * Moves DOM focus to the hovered menu item. CDK menus only move focus with the keyboard, so on a pointer
 * the highlight would otherwise stay on the last keyboard-focused item (leaving two rows highlighted) and,
 * when a submenu closes, focus would fall to <body>, the menu stack would report no focus, and the whole
 * dropdown would collapse. Following the pointer with focus (Radix/shadcn behaviour) keeps a single
 * highlight and keeps focus inside the menu stack. setActiveMenuItem also syncs the key manager so keyboard
 * navigation continues from the hovered item.
 *
 * Applied as a host directive on every dropdown item type (item, checkbox, radio, sub-trigger).
 */
declare class HlmDropdownMenuFocusOnHover {
    private readonly _cdkMenuItem;
    private readonly _parentMenu;
    private readonly _inputModality;
    protected _focusOnHover(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmDropdownMenuFocusOnHover, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmDropdownMenuFocusOnHover, "[hlmDropdownMenuFocusOnHover]", never, {}, {}, never, never, true, never>;
}

/** @internal. Use HlmDropdownMenuCheckbox instead. */
declare class HlmDropdownMenuCheckboxCdk extends CdkMenuItemCheckbox {
    readonly keepOpen: i0.InputSignalWithTransform<boolean, BooleanInput>;
    trigger(options?: {
        keepOpen: boolean;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmDropdownMenuCheckboxCdk, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmDropdownMenuCheckboxCdk, "[hlmDropdownMenuCheckboxCdk]", never, { "keepOpen": { "alias": "keepOpen"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
declare class HlmDropdownMenuCheckbox {
    protected readonly _cdkMenuItem: HlmDropdownMenuCheckboxCdk;
    readonly inset: i0.InputSignalWithTransform<boolean, BooleanInput>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmDropdownMenuCheckbox, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmDropdownMenuCheckbox, "[hlmDropdownMenuCheckbox],[hlmDropdownMenuCheckboxItem]", never, { "inset": { "alias": "inset"; "required": false; "isSignal": true; }; }, {}, never, never, true, [{ directive: typeof HlmDropdownMenuCheckboxCdk; inputs: { "cdkMenuItemDisabled": "disabled"; "cdkMenuItemChecked": "checked"; "keepOpen": "keepOpen"; }; outputs: { "cdkMenuItemTriggered": "triggered"; }; }, { directive: typeof HlmDropdownMenuFocusOnHover; inputs: {}; outputs: {}; }]>;
}

declare class HlmDropdownMenuCheckboxIndicator {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmDropdownMenuCheckboxIndicator, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HlmDropdownMenuCheckboxIndicator, "hlm-dropdown-menu-checkbox-indicator", never, {}, {}, never, never, true, never>;
}

declare class HlmDropdownMenuGroup {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmDropdownMenuGroup, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmDropdownMenuGroup, "[hlmDropdownMenuGroup],hlm-dropdown-menu-group", never, {}, {}, never, never, true, [{ directive: typeof i1.CdkMenuGroup; inputs: {}; outputs: {}; }]>;
}

declare class HlmDropdownMenuItem {
    protected readonly _isButton: boolean;
    readonly disabled: i0.InputSignalWithTransform<boolean, BooleanInput>;
    readonly variant: i0.InputSignal<"default" | "destructive">;
    readonly inset: i0.InputSignalWithTransform<boolean, BooleanInput>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmDropdownMenuItem, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmDropdownMenuItem, "[hlmDropdownMenuItem],hlm-dropdown-menu-item", never, { "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "variant": { "alias": "variant"; "required": false; "isSignal": true; }; "inset": { "alias": "inset"; "required": false; "isSignal": true; }; }, {}, never, never, true, [{ directive: typeof i1.CdkMenuItem; inputs: { "cdkMenuItemDisabled": "disabled"; }; outputs: { "cdkMenuItemTriggered": "triggered"; }; }, { directive: typeof HlmDropdownMenuFocusOnHover; inputs: {}; outputs: {}; }]>;
}

declare class HlmDropdownMenuItemSubIndicator {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmDropdownMenuItemSubIndicator, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HlmDropdownMenuItemSubIndicator, "hlm-dropdown-menu-item-sub-indicator", never, {}, {}, never, never, true, never>;
}

declare class HlmDropdownMenuLabel {
    readonly inset: i0.InputSignalWithTransform<boolean, BooleanInput>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmDropdownMenuLabel, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmDropdownMenuLabel, "[hlmDropdownMenuLabel],hlm-dropdown-menu-label", never, { "inset": { "alias": "inset"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

/** @internal. Use HlmDropdownMenuRadio instead. */
declare class HlmDropdownMenuRadioCdk extends CdkMenuItemRadio {
    readonly keepOpen: i0.InputSignalWithTransform<boolean, BooleanInput>;
    trigger(options?: {
        keepOpen: boolean;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmDropdownMenuRadioCdk, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmDropdownMenuRadioCdk, "[hlmDropdownMenuRadioCdk]", never, { "keepOpen": { "alias": "keepOpen"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
declare class HlmDropdownMenuRadio {
    protected readonly _cdkMenuItem: HlmDropdownMenuRadioCdk;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmDropdownMenuRadio, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmDropdownMenuRadio, "[hlmDropdownMenuRadio]", never, {}, {}, never, never, true, [{ directive: typeof HlmDropdownMenuRadioCdk; inputs: { "cdkMenuItemDisabled": "disabled"; "cdkMenuItemChecked": "checked"; "keepOpen": "keepOpen"; }; outputs: { "cdkMenuItemTriggered": "triggered"; }; }, { directive: typeof HlmDropdownMenuFocusOnHover; inputs: {}; outputs: {}; }]>;
}

declare class HlmDropdownMenuRadioIndicator {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmDropdownMenuRadioIndicator, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HlmDropdownMenuRadioIndicator, "hlm-dropdown-menu-radio-indicator", never, {}, {}, never, never, true, never>;
}

declare class HlmDropdownMenuSeparator {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmDropdownMenuSeparator, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmDropdownMenuSeparator, "[hlmDropdownMenuSeparator],hlm-dropdown-menu-separator", never, {}, {}, never, never, true, never>;
}

declare class HlmDropdownMenuShortcut {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmDropdownMenuShortcut, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmDropdownMenuShortcut, "[hlmDropdownMenuShortcut],hlm-dropdown-menu-shortcut", never, {}, {}, never, never, true, never>;
}

declare class HlmDropdownMenuSub {
    private readonly _host;
    private readonly _elementRef;
    private readonly _menuSide;
    protected readonly _state: i0.WritableSignal<string>;
    protected readonly _side: i0.WritableSignal<MenuSide>;
    constructor();
    private setSideFromTransformOrigin;
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmDropdownMenuSub, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmDropdownMenuSub, "[hlmDropdownMenuSub],hlm-dropdown-menu-sub", never, {}, {}, never, never, true, [{ directive: typeof i1.CdkMenu; inputs: {}; outputs: {}; }]>;
}

declare class HlmDropdownMenuSubTrigger {
    private readonly _cdkTrigger;
    private readonly _config;
    readonly align: i0.InputSignal<MenuAlign>;
    readonly side: i0.InputSignal<MenuSide>;
    private readonly _menuPosition;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmDropdownMenuSubTrigger, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmDropdownMenuSubTrigger, "[hlmDropdownMenuSubTrigger]", never, { "align": { "alias": "align"; "required": false; "isSignal": true; }; "side": { "alias": "side"; "required": false; "isSignal": true; }; }, {}, never, never, true, [{ directive: typeof i1.CdkMenuTrigger; inputs: { "cdkMenuTriggerFor": "hlmDropdownMenuSubTrigger"; "cdkMenuTriggerData": "hlmDropdownMenuTriggerData"; }; outputs: { "cdkMenuOpened": "hlmDropdownMenuSubOpened"; "cdkMenuClosed": "hlmDropdownMenuSubClosed"; }; }]>;
}

declare class HlmDropdownMenuTrigger {
    private readonly _cdkTrigger;
    private readonly _config;
    readonly align: i0.InputSignal<MenuAlign>;
    readonly side: i0.InputSignal<MenuSide>;
    private readonly _menuPosition;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmDropdownMenuTrigger, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmDropdownMenuTrigger, "[hlmDropdownMenuTrigger]", never, { "align": { "alias": "align"; "required": false; "isSignal": true; }; "side": { "alias": "side"; "required": false; "isSignal": true; }; }, {}, never, never, true, [{ directive: typeof i1.CdkMenuTrigger; inputs: { "cdkMenuTriggerFor": "hlmDropdownMenuTrigger"; "cdkMenuTriggerData": "hlmDropdownMenuTriggerData"; }; outputs: { "cdkMenuOpened": "hlmDropdownMenuOpened"; "cdkMenuClosed": "hlmDropdownMenuClosed"; }; }]>;
}

interface HlmDropdownMenuConfig {
    align: MenuAlign;
    side: MenuSide;
}
declare function provideHlmDropdownMenuConfig(config: Partial<HlmDropdownMenuConfig>): ValueProvider;
declare function injectHlmDropdownMenuConfig(): HlmDropdownMenuConfig;

declare const HlmDropdownMenuImports: readonly [typeof HlmDropdownMenu, typeof HlmDropdownMenuCheckbox, typeof HlmDropdownMenuCheckboxIndicator, typeof HlmDropdownMenuGroup, typeof HlmDropdownMenuItem, typeof HlmDropdownMenuItemSubIndicator, typeof HlmDropdownMenuLabel, typeof HlmDropdownMenuRadio, typeof HlmDropdownMenuRadioIndicator, typeof HlmDropdownMenuSeparator, typeof HlmDropdownMenuShortcut, typeof HlmDropdownMenuSub, typeof HlmDropdownMenuSubTrigger, typeof HlmDropdownMenuTrigger];

export { HlmDropdownMenu, HlmDropdownMenuCheckbox, HlmDropdownMenuCheckboxCdk, HlmDropdownMenuCheckboxIndicator, HlmDropdownMenuFocusOnHover, HlmDropdownMenuGroup, HlmDropdownMenuImports, HlmDropdownMenuItem, HlmDropdownMenuItemSubIndicator, HlmDropdownMenuLabel, HlmDropdownMenuRadio, HlmDropdownMenuRadioCdk, HlmDropdownMenuRadioIndicator, HlmDropdownMenuSeparator, HlmDropdownMenuShortcut, HlmDropdownMenuSub, HlmDropdownMenuSubTrigger, HlmDropdownMenuTrigger, injectHlmDropdownMenuConfig, provideHlmDropdownMenuConfig };
export type { HlmDropdownMenuConfig };
