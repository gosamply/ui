import * as i0 from '@angular/core';
import { Signal, ValueProvider } from '@angular/core';
import { ClassValue } from 'clsx';
import * as i1 from '@gosamply/ui/input';
import { BooleanInput } from '@angular/cdk/coercion';
import * as i1$1 from '@spartan-ng/brain/tooltip';
import * as i1$2 from '@gosamply/ui/separator';
import * as i1$3 from '@gosamply/ui/button';

type SidebarVariant = 'sidebar' | 'floating' | 'inset';
declare class HlmSidebarService {
    private readonly _platformId;
    private readonly _request;
    private readonly _config;
    private readonly _document;
    private readonly _window;
    private readonly _open;
    private readonly _openMobile;
    private readonly _isMobile;
    private readonly _variant;
    private _mediaQuery;
    readonly open: Signal<boolean>;
    readonly openMobile: Signal<boolean>;
    readonly isMobile: Signal<boolean>;
    readonly variant: Signal<SidebarVariant>;
    readonly state: Signal<"expanded" | "collapsed">;
    constructor();
    setOpen(open: boolean): void;
    setOpenMobile(open: boolean): void;
    setVariant(variant: SidebarVariant): void;
    toggleSidebar(): void;
    private restoreStateFromCookie;
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSidebarService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HlmSidebarService>;
}

declare class HlmSidebar {
    protected readonly _sidebarService: HlmSidebarService;
    private readonly _config;
    readonly sidebarWidthMobile: i0.InputSignal<string>;
    readonly side: i0.InputSignal<"left" | "right">;
    readonly variant: i0.InputSignal<SidebarVariant>;
    readonly collapsible: i0.InputSignal<"offcanvas" | "icon" | "none">;
    protected readonly _sidebarGapComputedClass: i0.Signal<string>;
    readonly sidebarContainerClass: i0.InputSignal<ClassValue>;
    protected readonly _sidebarContainerComputedClass: i0.Signal<string>;
    protected readonly _dataSlot: i0.Signal<"sidebar" | undefined>;
    private readonly _collapsibleAndNonMobile;
    protected readonly _dataState: i0.Signal<"expanded" | "collapsed" | undefined>;
    protected readonly _dataCollapsible: i0.Signal<"offcanvas" | "icon" | "none" | "" | undefined>;
    protected readonly _dataVariant: i0.Signal<SidebarVariant | undefined>;
    protected readonly _dataSide: i0.Signal<"left" | "right" | undefined>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSidebar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HlmSidebar, "hlm-sidebar", never, { "sidebarWidthMobile": { "alias": "sidebarWidthMobile"; "required": false; "isSignal": true; }; "side": { "alias": "side"; "required": false; "isSignal": true; }; "variant": { "alias": "variant"; "required": false; "isSignal": true; }; "collapsible": { "alias": "collapsible"; "required": false; "isSignal": true; }; "sidebarContainerClass": { "alias": "sidebarContainerClass"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}

declare class HlmSidebarContent {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSidebarContent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSidebarContent, "[hlmSidebarContent],hlm-sidebar-content", never, {}, {}, never, never, true, never>;
}

declare class HlmSidebarFooter {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSidebarFooter, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSidebarFooter, "[hlmSidebarFooter],hlm-sidebar-footer", never, {}, {}, never, never, true, never>;
}

declare class HlmSidebarGroup {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSidebarGroup, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSidebarGroup, "[hlmSidebarGroup],hlm-sidebar-group", never, {}, {}, never, never, true, never>;
}

declare class HlmSidebarGroupAction {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSidebarGroupAction, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSidebarGroupAction, "button[hlmSidebarGroupAction]", never, {}, {}, never, never, true, never>;
}

declare class HlmSidebarGroupContent {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSidebarGroupContent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSidebarGroupContent, "div[hlmSidebarGroupContent]", never, {}, {}, never, never, true, never>;
}

declare class HlmSidebarGroupLabel {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSidebarGroupLabel, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSidebarGroupLabel, "div[hlmSidebarGroupLabel], button[hlmSidebarGroupLabel]", never, {}, {}, never, never, true, never>;
}

declare class HlmSidebarHeader {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSidebarHeader, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSidebarHeader, "[hlmSidebarHeader],hlm-sidebar-header", never, {}, {}, never, never, true, never>;
}

declare class HlmSidebarInput {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSidebarInput, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSidebarInput, "input[hlmSidebarInput]", never, {}, {}, never, never, true, [{ directive: typeof i1.HlmInput; inputs: {}; outputs: {}; }]>;
}

declare class HlmSidebarInset {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSidebarInset, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSidebarInset, "main[hlmSidebarInset]", never, {}, {}, never, never, true, never>;
}

declare class HlmSidebarMenu {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSidebarMenu, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSidebarMenu, "ul[hlmSidebarMenu]", never, {}, {}, never, never, true, never>;
}

declare class HlmSidebarMenuAction {
    readonly showOnHover: i0.InputSignalWithTransform<boolean, BooleanInput>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSidebarMenuAction, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSidebarMenuAction, "button[hlmSidebarMenuAction]", never, { "showOnHover": { "alias": "showOnHover"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class HlmSidebarMenuBadge {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSidebarMenuBadge, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSidebarMenuBadge, "[hlmSidebarMenuBadge],hlm-sidebar-menu-badge", never, {}, {}, never, never, true, never>;
}

declare class HlmSidebarMenuButton {
    private readonly _config;
    private readonly _sidebarService;
    private readonly _brnTooltip;
    readonly variant: i0.InputSignal<"default" | "outline">;
    readonly size: i0.InputSignal<"default" | "sm" | "lg">;
    readonly isActive: i0.InputSignalWithTransform<boolean, BooleanInput>;
    readonly closeMobileSidebarOnClick: i0.InputSignalWithTransform<boolean, BooleanInput>;
    protected readonly _isTooltipHidden: i0.Signal<boolean>;
    constructor();
    protected onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSidebarMenuButton, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSidebarMenuButton, "button[hlmSidebarMenuButton], a[hlmSidebarMenuButton]", never, { "variant": { "alias": "variant"; "required": false; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "isActive": { "alias": "isActive"; "required": false; "isSignal": true; }; "closeMobileSidebarOnClick": { "alias": "closeMobileSidebarOnClick"; "required": false; "isSignal": true; }; }, {}, never, never, true, [{ directive: typeof i1$1.BrnTooltip; inputs: { "brnTooltip": "tooltip"; }; outputs: {}; }]>;
}

declare class HlmSidebarMenuItem {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSidebarMenuItem, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSidebarMenuItem, "li[hlmSidebarMenuItem]", never, {}, {}, never, never, true, never>;
}

declare class HlmSidebarMenuSkeleton {
    readonly showIcon: i0.InputSignalWithTransform<boolean, BooleanInput>;
    protected readonly _width: string;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSidebarMenuSkeleton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HlmSidebarMenuSkeleton, "hlm-sidebar-menu-skeleton,div[hlmSidebarMenuSkeleton]", never, { "showIcon": { "alias": "showIcon"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class HlmSidebarMenuSub {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSidebarMenuSub, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSidebarMenuSub, "ul[hlmSidebarMenuSub]", never, {}, {}, never, never, true, never>;
}

declare class HlmSidebarMenuSubButton {
    private readonly _sidebarService;
    private readonly _config;
    readonly closeMobileSidebarOnClick: i0.InputSignalWithTransform<boolean, BooleanInput>;
    readonly size: i0.InputSignal<"sm" | "md">;
    readonly isActive: i0.InputSignalWithTransform<boolean, BooleanInput>;
    constructor();
    protected onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSidebarMenuSubButton, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSidebarMenuSubButton, "a[hlmSidebarMenuSubButton], button[hlmSidebarMenuSubButton]", never, { "closeMobileSidebarOnClick": { "alias": "closeMobileSidebarOnClick"; "required": false; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "isActive": { "alias": "isActive"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class HlmSidebarMenuSubItem {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSidebarMenuSubItem, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSidebarMenuSubItem, "li[hlmSidebarMenuSubItem]", never, {}, {}, never, never, true, never>;
}

declare class HlmSidebarRail {
    private readonly _sidebarService;
    readonly ariaLabel: i0.InputSignal<string>;
    constructor();
    protected onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSidebarRail, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSidebarRail, "button[hlmSidebarRail]", never, { "ariaLabel": { "alias": "aria-label"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class HlmSidebarSeparator {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSidebarSeparator, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSidebarSeparator, "[hlmSidebarSeparator],hlm-sidebar-separator", never, {}, {}, never, never, true, [{ directive: typeof i1$2.HlmSeparator; inputs: {}; outputs: {}; }]>;
}

declare class HlmSidebarTrigger {
    private readonly _sidebarService;
    readonly srOnlyText: i0.InputSignal<string>;
    protected _onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSidebarTrigger, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HlmSidebarTrigger, "button[hlmSidebarTrigger]", never, { "srOnlyText": { "alias": "srOnlyText"; "required": false; "isSignal": true; }; }, {}, never, never, true, [{ directive: typeof i1$3.HlmButton; inputs: { "variant": "variant"; "size": "size"; }; outputs: {}; }]>;
}

declare class HlmSidebarWrapper {
    private readonly _config;
    readonly sidebarWidth: i0.InputSignal<string>;
    readonly sidebarWidthIcon: i0.InputSignal<string>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSidebarWrapper, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSidebarWrapper, "[hlmSidebarWrapper],hlm-sidebar-wrapper", never, { "sidebarWidth": { "alias": "sidebarWidth"; "required": false; "isSignal": true; }; "sidebarWidthIcon": { "alias": "sidebarWidthIcon"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

interface HlmSidebarConfig {
    defaultOpen: boolean;
    sidebarWidth: string;
    sidebarWidthMobile: string;
    sidebarWidthIcon: string;
    sidebarCookieName: string;
    sidebarCookieMaxAge: number;
    sidebarKeyboardShortcut: string;
    mobileBreakpoint: string;
    closeMobileSidebarOnMenuButtonClick: boolean;
}
declare function provideHlmSidebarConfig(config: Partial<HlmSidebarConfig>): ValueProvider;
declare function injectHlmSidebarConfig(): HlmSidebarConfig;

declare const HlmSidebarImports: readonly [typeof HlmSidebar, typeof HlmSidebarContent, typeof HlmSidebarFooter, typeof HlmSidebarGroup, typeof HlmSidebarGroupAction, typeof HlmSidebarGroupContent, typeof HlmSidebarGroupLabel, typeof HlmSidebarHeader, typeof HlmSidebarInput, typeof HlmSidebarInset, typeof HlmSidebarMenu, typeof HlmSidebarMenuSkeleton, typeof HlmSidebarMenuAction, typeof HlmSidebarMenuBadge, typeof HlmSidebarMenuButton, typeof HlmSidebarMenuItem, typeof HlmSidebarMenuSub, typeof HlmSidebarMenuSubButton, typeof HlmSidebarRail, typeof HlmSidebarSeparator, typeof HlmSidebarTrigger, typeof HlmSidebarWrapper, typeof HlmSidebarMenuSubItem];

export { HlmSidebar, HlmSidebarContent, HlmSidebarFooter, HlmSidebarGroup, HlmSidebarGroupAction, HlmSidebarGroupContent, HlmSidebarGroupLabel, HlmSidebarHeader, HlmSidebarImports, HlmSidebarInput, HlmSidebarInset, HlmSidebarMenu, HlmSidebarMenuAction, HlmSidebarMenuBadge, HlmSidebarMenuButton, HlmSidebarMenuItem, HlmSidebarMenuSkeleton, HlmSidebarMenuSub, HlmSidebarMenuSubButton, HlmSidebarMenuSubItem, HlmSidebarRail, HlmSidebarSeparator, HlmSidebarService, HlmSidebarTrigger, HlmSidebarWrapper, injectHlmSidebarConfig, provideHlmSidebarConfig };
export type { HlmSidebarConfig, SidebarVariant };
