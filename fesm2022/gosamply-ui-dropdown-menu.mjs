import * as i1 from '@angular/cdk/menu';
import { CdkMenu, CdkMenuItem, CdkMenuItemCheckbox, CdkMenuItemSelectable, CdkMenuGroup, CdkMenuItemRadio, CdkMenuTrigger } from '@angular/cdk/menu';
import * as i0 from '@angular/core';
import { inject, ElementRef, signal, input, numberAttribute, Directive, booleanAttribute, ChangeDetectionStrategy, Component, HOST_TAG_NAME, InjectionToken, computed, effect, forwardRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MENU_SIDE, deriveMenuSideFromTransformOrigin, createMenuPosition } from '@spartan-ng/brain/core';
import { classes } from '@gosamply/ui/utils';
import { InputModalityDetector } from '@angular/cdk/a11y';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideChevronRight } from '@ng-icons/lucide';

class HlmDropdownMenu {
    _host = inject(CdkMenu);
    _elementRef = inject((ElementRef));
    // The trigger provides its configured side; CDK parents this content's injector under the trigger's.
    _menuSide = inject(MENU_SIDE, { optional: true });
    _state = signal('open', ...(ngDevMode ? [{ debugName: "_state" }] : /* istanbul ignore next */ []));
    _side = signal(this._menuSide?.side() ?? 'bottom', ...(ngDevMode ? [{ debugName: "_side" }] : /* istanbul ignore next */ []));
    sideOffset = input(1, { ...(ngDevMode ? { debugName: "sideOffset" } : /* istanbul ignore next */ {}), transform: numberAttribute });
    constructor() {
        classes(() => 'motion-safe:data-open:animate-in motion-safe:data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/5 bg-popover text-popover-foreground dark:ring-foreground/10 min-w-48 rounded-2xl p-1 shadow-2xl ring-1 duration-100 my-[--spacing(var(--side-offset))] overflow-x-hidden overflow-y-auto outline-none');
        this.setSideFromTransformOrigin();
        // this is a best effort, but does not seem to work currently
        // TODO: figure out a way for us to know the host is about to be closed. might not be possible with CDK
        this._host.closed.pipe(takeUntilDestroyed()).subscribe(() => this._state.set('closed'));
    }
    setSideFromTransformOrigin() {
        const side = this._menuSide?.side() ?? 'bottom';
        // CDK sets transform-origin on this element synchronously on attach; read it next tick and derive side
        setTimeout(() => {
            this._side.set(deriveMenuSideFromTransformOrigin(this._elementRef.nativeElement.style.transformOrigin, side));
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenu, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.11", type: HlmDropdownMenu, isStandalone: true, selector: "[hlmDropdownMenu],hlm-dropdown-menu", inputs: { sideOffset: { classPropertyName: "sideOffset", publicName: "sideOffset", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "data-slot": "dropdown-menu" }, properties: { "attr.data-state": "_state()", "attr.data-side": "_side()", "style.--side-offset": "sideOffset()" } }, hostDirectives: [{ directive: i1.CdkMenu }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenu, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmDropdownMenu],hlm-dropdown-menu',
                    hostDirectives: [CdkMenu],
                    host: {
                        'data-slot': 'dropdown-menu',
                        '[attr.data-state]': '_state()',
                        '[attr.data-side]': '_side()',
                        '[style.--side-offset]': 'sideOffset()',
                    },
                }]
        }], ctorParameters: () => [], propDecorators: { sideOffset: [{ type: i0.Input, args: [{ isSignal: true, alias: "sideOffset", required: false }] }] } });

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
class HlmDropdownMenuFocusOnHover {
    _cdkMenuItem = inject(CdkMenuItem, { self: true });
    _parentMenu = inject(CdkMenu, { optional: true });
    _inputModality = inject(InputModalityDetector);
    _focusOnHover() {
        // Only skip synthetic hovers from touch taps; every real hover (mouse, or keyboard-then-hover,
        // which leaves the modality as 'keyboard') should move focus to keep a single highlight.
        if (this._inputModality.mostRecentModality === 'touch' || this._cdkMenuItem.disabled) {
            return;
        }
        this._parentMenu?.setActiveMenuItem(this._cdkMenuItem);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenuFocusOnHover, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmDropdownMenuFocusOnHover, isStandalone: true, selector: "[hlmDropdownMenuFocusOnHover]", host: { listeners: { "mouseenter": "_focusOnHover()" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenuFocusOnHover, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmDropdownMenuFocusOnHover]',
                    host: {
                        '(mouseenter)': '_focusOnHover()',
                    },
                }]
        }] });

/** @internal. Use HlmDropdownMenuCheckbox instead. */
class HlmDropdownMenuCheckboxCdk extends CdkMenuItemCheckbox {
    keepOpen = input(true, { ...(ngDevMode ? { debugName: "keepOpen" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    trigger(options) {
        super.trigger({ ...options, keepOpen: this.keepOpen() });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenuCheckboxCdk, deps: null, target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.11", type: HlmDropdownMenuCheckboxCdk, isStandalone: true, selector: "[hlmDropdownMenuCheckboxCdk]", inputs: { keepOpen: { classPropertyName: "keepOpen", publicName: "keepOpen", isSignal: true, isRequired: false, transformFunction: null } }, providers: [
            { provide: CdkMenuItemCheckbox, useExisting: HlmDropdownMenuCheckboxCdk },
            { provide: CdkMenuItemSelectable, useExisting: HlmDropdownMenuCheckboxCdk },
            { provide: CdkMenuItem, useExisting: CdkMenuItemSelectable },
        ], usesInheritance: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenuCheckboxCdk, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmDropdownMenuCheckboxCdk]',
                    providers: [
                        { provide: CdkMenuItemCheckbox, useExisting: HlmDropdownMenuCheckboxCdk },
                        { provide: CdkMenuItemSelectable, useExisting: HlmDropdownMenuCheckboxCdk },
                        { provide: CdkMenuItem, useExisting: CdkMenuItemSelectable },
                    ],
                }]
        }], propDecorators: { keepOpen: [{ type: i0.Input, args: [{ isSignal: true, alias: "keepOpen", required: false }] }] } });
class HlmDropdownMenuCheckbox {
    _cdkMenuItem = inject(HlmDropdownMenuCheckboxCdk);
    inset = input(false, { ...(ngDevMode ? { debugName: "inset" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    constructor() {
        classes(() => "hover:bg-accent focus:bg-accent hover:text-accent-foreground focus:text-accent-foreground hover:**:text-accent-foreground focus:**:text-accent-foreground gap-2.5 rounded-xl py-2 ps-3 pe-8 text-sm data-inset:ps-9.5 [&_ng-icon:not([class*='text-'])]:text-[length:--spacing(4)] group/dropdown-menu-checkbox relative flex w-full cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_ng-icon]:pointer-events-none [&_ng-icon]:shrink-0");
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenuCheckbox, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.11", type: HlmDropdownMenuCheckbox, isStandalone: true, selector: "[hlmDropdownMenuCheckbox],[hlmDropdownMenuCheckboxItem]", inputs: { inset: { classPropertyName: "inset", publicName: "inset", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "data-slot": "dropdown-menu-checkbox-item" }, properties: { "attr.data-disabled": "_cdkMenuItem.disabled ? \"\" : null", "attr.data-checked": "_cdkMenuItem.checked ? \"\" : null", "attr.data-inset": "inset() ? \"\" : null" } }, hostDirectives: [{ directive: HlmDropdownMenuCheckboxCdk, inputs: ["cdkMenuItemDisabled", "disabled", "cdkMenuItemChecked", "checked", "keepOpen", "keepOpen"], outputs: ["cdkMenuItemTriggered", "triggered"] }, { directive: HlmDropdownMenuFocusOnHover }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenuCheckbox, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmDropdownMenuCheckbox],[hlmDropdownMenuCheckboxItem]',
                    hostDirectives: [
                        {
                            directive: HlmDropdownMenuCheckboxCdk,
                            inputs: ['cdkMenuItemDisabled: disabled', 'cdkMenuItemChecked: checked', 'keepOpen'],
                            outputs: ['cdkMenuItemTriggered: triggered'],
                        },
                        HlmDropdownMenuFocusOnHover,
                    ],
                    host: {
                        'data-slot': 'dropdown-menu-checkbox-item',
                        '[attr.data-disabled]': '_cdkMenuItem.disabled ? "" : null',
                        '[attr.data-checked]': '_cdkMenuItem.checked ? "" : null',
                        '[attr.data-inset]': 'inset() ? "" : null',
                    },
                }]
        }], ctorParameters: () => [], propDecorators: { inset: [{ type: i0.Input, args: [{ isSignal: true, alias: "inset", required: false }] }] } });

class HlmDropdownMenuCheckboxIndicator {
    constructor() {
        classes(() => 'absolute end-2 flex items-center justify-center [&_ng-icon]:text-[length:--spacing(4)] pointer-events-none opacity-0 group-data-checked/dropdown-menu-checkbox:opacity-100');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenuCheckboxIndicator, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.11", type: HlmDropdownMenuCheckboxIndicator, isStandalone: true, selector: "hlm-dropdown-menu-checkbox-indicator", host: { attributes: { "data-slot": "dropdown-menu-checkbox-item-indicator" } }, providers: [provideIcons({ lucideCheck })], ngImport: i0, template: ` <ng-icon name="lucideCheck" /> `, isInline: true, dependencies: [{ kind: "component", type: NgIcon, selector: "ng-icon", inputs: ["name", "svg", "size", "strokeWidth", "color"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenuCheckboxIndicator, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-dropdown-menu-checkbox-indicator',
                    imports: [NgIcon],
                    providers: [provideIcons({ lucideCheck })],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: { 'data-slot': 'dropdown-menu-checkbox-item-indicator' },
                    template: ` <ng-icon name="lucideCheck" /> `,
                }]
        }], ctorParameters: () => [] });

class HlmDropdownMenuGroup {
    constructor() {
        classes(() => 'block');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenuGroup, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmDropdownMenuGroup, isStandalone: true, selector: "[hlmDropdownMenuGroup],hlm-dropdown-menu-group", host: { attributes: { "data-slot": "dropdown-menu-group" } }, hostDirectives: [{ directive: i1.CdkMenuGroup }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenuGroup, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmDropdownMenuGroup],hlm-dropdown-menu-group',
                    hostDirectives: [CdkMenuGroup],
                    host: { 'data-slot': 'dropdown-menu-group' },
                }]
        }], ctorParameters: () => [] });

class HlmDropdownMenuItem {
    _isButton = inject(HOST_TAG_NAME) === 'button';
    disabled = input(false, { ...(ngDevMode ? { debugName: "disabled" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    variant = input('default', ...(ngDevMode ? [{ debugName: "variant" }] : /* istanbul ignore next */ []));
    inset = input(false, { ...(ngDevMode ? { debugName: "inset" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    constructor() {
        classes(() => "hover:bg-accent focus:bg-accent hover:text-accent-foreground focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:hover:bg-destructive/10 data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:hover:bg-destructive/20 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:hover:text-destructive data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[ng-icon]:text-destructive not-data-[variant=destructive]:hover:**:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground gap-2.5 rounded-xl px-3 py-2 text-sm data-inset:ps-9.5 [&_ng-icon:not([class*='text-'])]:text-[length:--spacing(4)] group/dropdown-menu-item relative flex w-full cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_ng-icon]:pointer-events-none [&_ng-icon]:shrink-0");
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenuItem, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.11", type: HlmDropdownMenuItem, isStandalone: true, selector: "[hlmDropdownMenuItem],hlm-dropdown-menu-item", inputs: { disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, variant: { classPropertyName: "variant", publicName: "variant", isSignal: true, isRequired: false, transformFunction: null }, inset: { classPropertyName: "inset", publicName: "inset", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "data-slot": "dropdown-menu-item" }, properties: { "attr.disabled": "_isButton && disabled() ? \"\" : null", "attr.data-disabled": "disabled() ? \"\" : null", "attr.data-variant": "variant()", "attr.data-inset": "inset() ? \"\" : null" } }, hostDirectives: [{ directive: i1.CdkMenuItem, inputs: ["cdkMenuItemDisabled", "disabled"], outputs: ["cdkMenuItemTriggered", "triggered"] }, { directive: HlmDropdownMenuFocusOnHover }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenuItem, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmDropdownMenuItem],hlm-dropdown-menu-item',
                    hostDirectives: [
                        {
                            directive: CdkMenuItem,
                            inputs: ['cdkMenuItemDisabled: disabled'],
                            outputs: ['cdkMenuItemTriggered: triggered'],
                        },
                        HlmDropdownMenuFocusOnHover,
                    ],
                    host: {
                        'data-slot': 'dropdown-menu-item',
                        '[attr.disabled]': '_isButton && disabled() ? "" : null',
                        '[attr.data-disabled]': 'disabled() ? "" : null',
                        '[attr.data-variant]': 'variant()',
                        '[attr.data-inset]': 'inset() ? "" : null',
                    },
                }]
        }], ctorParameters: () => [], propDecorators: { disabled: [{ type: i0.Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], variant: [{ type: i0.Input, args: [{ isSignal: true, alias: "variant", required: false }] }], inset: [{ type: i0.Input, args: [{ isSignal: true, alias: "inset", required: false }] }] } });

class HlmDropdownMenuItemSubIndicator {
    constructor() {
        classes(() => 'ms-auto flex items-center justify-center');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenuItemSubIndicator, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.11", type: HlmDropdownMenuItemSubIndicator, isStandalone: true, selector: "hlm-dropdown-menu-item-sub-indicator", providers: [provideIcons({ lucideChevronRight })], ngImport: i0, template: ` <ng-icon name="lucideChevronRight" class="text-[length:--spacing(4)] rtl:rotate-180" /> `, isInline: true, dependencies: [{ kind: "component", type: NgIcon, selector: "ng-icon", inputs: ["name", "svg", "size", "strokeWidth", "color"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenuItemSubIndicator, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-dropdown-menu-item-sub-indicator',
                    imports: [NgIcon],
                    providers: [provideIcons({ lucideChevronRight })],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: ` <ng-icon name="lucideChevronRight" class="text-[length:--spacing(4)] rtl:rotate-180" /> `,
                }]
        }], ctorParameters: () => [] });

class HlmDropdownMenuLabel {
    inset = input(false, { ...(ngDevMode ? { debugName: "inset" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    constructor() {
        classes(() => 'text-muted-foreground px-3 py-2.5 text-xs data-inset:ps-9.5 block');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenuLabel, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.11", type: HlmDropdownMenuLabel, isStandalone: true, selector: "[hlmDropdownMenuLabel],hlm-dropdown-menu-label", inputs: { inset: { classPropertyName: "inset", publicName: "inset", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "data-slot": "dropdown-menu-label" }, properties: { "attr.data-inset": "inset() ? \"\" : null" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenuLabel, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmDropdownMenuLabel],hlm-dropdown-menu-label',
                    host: {
                        'data-slot': 'dropdown-menu-label',
                        '[attr.data-inset]': 'inset() ? "" : null',
                    },
                }]
        }], ctorParameters: () => [], propDecorators: { inset: [{ type: i0.Input, args: [{ isSignal: true, alias: "inset", required: false }] }] } });

/** @internal. Use HlmDropdownMenuRadio instead. */
class HlmDropdownMenuRadioCdk extends CdkMenuItemRadio {
    keepOpen = input(true, { ...(ngDevMode ? { debugName: "keepOpen" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    trigger(options) {
        super.trigger({ ...options, keepOpen: this.keepOpen() });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenuRadioCdk, deps: null, target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.11", type: HlmDropdownMenuRadioCdk, isStandalone: true, selector: "[hlmDropdownMenuRadioCdk]", inputs: { keepOpen: { classPropertyName: "keepOpen", publicName: "keepOpen", isSignal: true, isRequired: false, transformFunction: null } }, providers: [
            { provide: CdkMenuItemRadio, useExisting: HlmDropdownMenuRadioCdk },
            { provide: CdkMenuItemSelectable, useExisting: HlmDropdownMenuRadioCdk },
            { provide: CdkMenuItem, useExisting: CdkMenuItemSelectable },
        ], usesInheritance: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenuRadioCdk, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmDropdownMenuRadioCdk]',
                    providers: [
                        { provide: CdkMenuItemRadio, useExisting: HlmDropdownMenuRadioCdk },
                        { provide: CdkMenuItemSelectable, useExisting: HlmDropdownMenuRadioCdk },
                        { provide: CdkMenuItem, useExisting: CdkMenuItemSelectable },
                    ],
                }]
        }], propDecorators: { keepOpen: [{ type: i0.Input, args: [{ isSignal: true, alias: "keepOpen", required: false }] }] } });
class HlmDropdownMenuRadio {
    _cdkMenuItem = inject(HlmDropdownMenuRadioCdk);
    constructor() {
        classes(() => "hover:bg-accent focus:bg-accent hover:text-accent-foreground focus:text-accent-foreground hover:**:text-accent-foreground focus:**:text-accent-foreground gap-2.5 rounded-xl py-2 ps-3 pe-8 text-sm data-inset:ps-9.5 [&_ng-icon:not([class*='text-'])]:text-[length:--spacing(4)] group/dropdown-menu-radio relative flex w-full cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_ng-icon]:pointer-events-none [&_ng-icon]:shrink-0");
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenuRadio, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmDropdownMenuRadio, isStandalone: true, selector: "[hlmDropdownMenuRadio]", host: { attributes: { "data-slot": "dropdown-menu-radio-item" }, properties: { "attr.data-disabled": "_cdkMenuItem.disabled ? \"\" : null", "attr.data-checked": "_cdkMenuItem.checked ? \"\" : null" } }, hostDirectives: [{ directive: HlmDropdownMenuRadioCdk, inputs: ["cdkMenuItemDisabled", "disabled", "cdkMenuItemChecked", "checked", "keepOpen", "keepOpen"], outputs: ["cdkMenuItemTriggered", "triggered"] }, { directive: HlmDropdownMenuFocusOnHover }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenuRadio, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmDropdownMenuRadio]',
                    hostDirectives: [
                        {
                            directive: HlmDropdownMenuRadioCdk,
                            inputs: ['cdkMenuItemDisabled: disabled', 'cdkMenuItemChecked: checked', 'keepOpen'],
                            outputs: ['cdkMenuItemTriggered: triggered'],
                        },
                        HlmDropdownMenuFocusOnHover,
                    ],
                    host: {
                        'data-slot': 'dropdown-menu-radio-item',
                        '[attr.data-disabled]': '_cdkMenuItem.disabled ? "" : null',
                        '[attr.data-checked]': '_cdkMenuItem.checked ? "" : null',
                    },
                }]
        }], ctorParameters: () => [] });

class HlmDropdownMenuRadioIndicator {
    constructor() {
        classes(() => 'absolute end-2 flex items-center justify-center [&_ng-icon]:text-[length:--spacing(4)] pointer-events-none opacity-0 group-data-checked/dropdown-menu-radio:opacity-100');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenuRadioIndicator, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.11", type: HlmDropdownMenuRadioIndicator, isStandalone: true, selector: "hlm-dropdown-menu-radio-indicator", host: { attributes: { "data-slot": "dropdown-menu-radio-item-indicator" } }, providers: [provideIcons({ lucideCheck })], ngImport: i0, template: ` <ng-icon name="lucideCheck" /> `, isInline: true, dependencies: [{ kind: "component", type: NgIcon, selector: "ng-icon", inputs: ["name", "svg", "size", "strokeWidth", "color"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenuRadioIndicator, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-dropdown-menu-radio-indicator',
                    imports: [NgIcon],
                    providers: [provideIcons({ lucideCheck })],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: { 'data-slot': 'dropdown-menu-radio-item-indicator' },
                    template: ` <ng-icon name="lucideCheck" /> `,
                }]
        }], ctorParameters: () => [] });

class HlmDropdownMenuSeparator {
    constructor() {
        classes(() => 'bg-border/50 -mx-1 my-1 h-px block');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenuSeparator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmDropdownMenuSeparator, isStandalone: true, selector: "[hlmDropdownMenuSeparator],hlm-dropdown-menu-separator", host: { attributes: { "data-slot": "dropdown-menu-separator" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenuSeparator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmDropdownMenuSeparator],hlm-dropdown-menu-separator',
                    host: { 'data-slot': 'dropdown-menu-separator' },
                }]
        }], ctorParameters: () => [] });

class HlmDropdownMenuShortcut {
    constructor() {
        classes(() => 'text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground ms-auto text-xs tracking-widest');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenuShortcut, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmDropdownMenuShortcut, isStandalone: true, selector: "[hlmDropdownMenuShortcut],hlm-dropdown-menu-shortcut", host: { attributes: { "data-slot": "dropdown-menu-shortcut" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenuShortcut, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmDropdownMenuShortcut],hlm-dropdown-menu-shortcut',
                    host: { 'data-slot': 'dropdown-menu-shortcut' },
                }]
        }], ctorParameters: () => [] });

class HlmDropdownMenuSub {
    _host = inject(CdkMenu);
    _elementRef = inject((ElementRef));
    // The sub-trigger provides its configured side; CDK parents this content's injector under it.
    _menuSide = inject(MENU_SIDE, { optional: true });
    _state = signal('open', ...(ngDevMode ? [{ debugName: "_state" }] : /* istanbul ignore next */ []));
    _side = signal(this._menuSide?.side() ?? 'right', ...(ngDevMode ? [{ debugName: "_side" }] : /* istanbul ignore next */ []));
    constructor() {
        this.setSideFromTransformOrigin();
        // this is a best effort, but does not seem to work currently
        // TODO: figure out a way for us to know the host is about to be closed. might not be possible with CDK
        this._host.closed.pipe(takeUntilDestroyed()).subscribe(() => this._state.set('closed'));
        classes(() => 'motion-safe:data-open:animate-in motion-safe:data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/5 bg-popover text-popover-foreground min-w-36 rounded-2xl p-1 shadow-2xl ring-1 duration-100 w-auto');
    }
    setSideFromTransformOrigin() {
        const side = this._menuSide?.side() ?? 'right';
        // CDK sets transform-origin on this element synchronously on attach; read it next tick and derive side
        setTimeout(() => {
            this._side.set(deriveMenuSideFromTransformOrigin(this._elementRef.nativeElement.style.transformOrigin, side));
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenuSub, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmDropdownMenuSub, isStandalone: true, selector: "[hlmDropdownMenuSub],hlm-dropdown-menu-sub", host: { attributes: { "data-slot": "dropdown-menu-sub" }, properties: { "attr.data-state": "_state()", "attr.data-side": "_side()" } }, hostDirectives: [{ directive: i1.CdkMenu }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenuSub, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmDropdownMenuSub],hlm-dropdown-menu-sub',
                    hostDirectives: [CdkMenu],
                    host: {
                        'data-slot': 'dropdown-menu-sub',
                        '[attr.data-state]': '_state()',
                        '[attr.data-side]': '_side()',
                    },
                }]
        }], ctorParameters: () => [] });

const defaultConfig = {
    align: 'start',
    side: 'bottom',
};
const HlmDropdownMenuConfigToken = new InjectionToken('HlmDropdownMenuConfig');
function provideHlmDropdownMenuConfig(config) {
    return { provide: HlmDropdownMenuConfigToken, useValue: { ...defaultConfig, ...config } };
}
function injectHlmDropdownMenuConfig() {
    return inject(HlmDropdownMenuConfigToken, { optional: true }) ?? defaultConfig;
}

class HlmDropdownMenuSubTrigger {
    _cdkTrigger = inject(CdkMenuTrigger, { host: true });
    _config = injectHlmDropdownMenuConfig();
    align = input(this._config.align, ...(ngDevMode ? [{ debugName: "align" }] : /* istanbul ignore next */ []));
    side = input(this._config.side, ...(ngDevMode ? [{ debugName: "side" }] : /* istanbul ignore next */ []));
    _menuPosition = computed(() => createMenuPosition(this.align(), this.side()), ...(ngDevMode ? [{ debugName: "_menuPosition" }] : /* istanbul ignore next */ []));
    constructor() {
        // CDK sets transform-origin on the submenu content from the resolved position; the content reads it
        // to animate from the anchored corner and to derive its data-side. Cast tolerates @angular/cdk < 21.2
        // (we still support >=21.0), where the property is absent and the assignment is a harmless no-op.
        this._cdkTrigger.transformOriginSelector = '[data-slot="dropdown-menu-sub"]';
        effect(() => {
            this._cdkTrigger.menuPosition = this._menuPosition();
        });
        classes(() => 'aria-expanded:bg-accent aria-expanded:text-accent-foreground');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenuSubTrigger, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.11", type: HlmDropdownMenuSubTrigger, isStandalone: true, selector: "[hlmDropdownMenuSubTrigger]", inputs: { align: { classPropertyName: "align", publicName: "align", isSignal: true, isRequired: false, transformFunction: null }, side: { classPropertyName: "side", publicName: "side", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "data-slot": "dropdown-menu-sub-trigger" } }, providers: [{ provide: MENU_SIDE, useExisting: forwardRef(() => HlmDropdownMenuSubTrigger) }], hostDirectives: [{ directive: i1.CdkMenuTrigger, inputs: ["cdkMenuTriggerFor", "hlmDropdownMenuSubTrigger", "cdkMenuTriggerData", "hlmDropdownMenuTriggerData"], outputs: ["cdkMenuOpened", "hlmDropdownMenuSubOpened", "cdkMenuClosed", "hlmDropdownMenuSubClosed"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenuSubTrigger, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmDropdownMenuSubTrigger]',
                    providers: [{ provide: MENU_SIDE, useExisting: forwardRef(() => HlmDropdownMenuSubTrigger) }],
                    hostDirectives: [
                        {
                            directive: CdkMenuTrigger,
                            inputs: ['cdkMenuTriggerFor: hlmDropdownMenuSubTrigger', 'cdkMenuTriggerData: hlmDropdownMenuTriggerData'],
                            outputs: ['cdkMenuOpened: hlmDropdownMenuSubOpened', 'cdkMenuClosed: hlmDropdownMenuSubClosed'],
                        },
                    ],
                    host: { 'data-slot': 'dropdown-menu-sub-trigger' },
                }]
        }], ctorParameters: () => [], propDecorators: { align: [{ type: i0.Input, args: [{ isSignal: true, alias: "align", required: false }] }], side: [{ type: i0.Input, args: [{ isSignal: true, alias: "side", required: false }] }] } });

class HlmDropdownMenuTrigger {
    _cdkTrigger = inject(CdkMenuTrigger, { host: true });
    _config = injectHlmDropdownMenuConfig();
    align = input(this._config.align, ...(ngDevMode ? [{ debugName: "align" }] : /* istanbul ignore next */ []));
    side = input(this._config.side, ...(ngDevMode ? [{ debugName: "side" }] : /* istanbul ignore next */ []));
    _menuPosition = computed(() => createMenuPosition(this.align(), this.side()), ...(ngDevMode ? [{ debugName: "_menuPosition" }] : /* istanbul ignore next */ []));
    constructor() {
        // CDK sets transform-origin on the menu content from the resolved position; the content reads it to
        // animate from the anchored corner and to derive its data-side. Cast tolerates @angular/cdk < 21.2
        // (we still support >=21.0), where the property is absent and the assignment is a harmless no-op.
        this._cdkTrigger.transformOriginSelector = '[data-slot="dropdown-menu"]';
        effect(() => {
            this._cdkTrigger.menuPosition = this._menuPosition();
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenuTrigger, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.11", type: HlmDropdownMenuTrigger, isStandalone: true, selector: "[hlmDropdownMenuTrigger]", inputs: { align: { classPropertyName: "align", publicName: "align", isSignal: true, isRequired: false, transformFunction: null }, side: { classPropertyName: "side", publicName: "side", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "data-slot": "dropdown-menu-trigger" } }, providers: [{ provide: MENU_SIDE, useExisting: forwardRef(() => HlmDropdownMenuTrigger) }], hostDirectives: [{ directive: i1.CdkMenuTrigger, inputs: ["cdkMenuTriggerFor", "hlmDropdownMenuTrigger", "cdkMenuTriggerData", "hlmDropdownMenuTriggerData"], outputs: ["cdkMenuOpened", "hlmDropdownMenuOpened", "cdkMenuClosed", "hlmDropdownMenuClosed"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDropdownMenuTrigger, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmDropdownMenuTrigger]',
                    providers: [{ provide: MENU_SIDE, useExisting: forwardRef(() => HlmDropdownMenuTrigger) }],
                    hostDirectives: [
                        {
                            directive: CdkMenuTrigger,
                            inputs: ['cdkMenuTriggerFor: hlmDropdownMenuTrigger', 'cdkMenuTriggerData: hlmDropdownMenuTriggerData'],
                            outputs: ['cdkMenuOpened: hlmDropdownMenuOpened', 'cdkMenuClosed: hlmDropdownMenuClosed'],
                        },
                    ],
                    host: { 'data-slot': 'dropdown-menu-trigger' },
                }]
        }], ctorParameters: () => [], propDecorators: { align: [{ type: i0.Input, args: [{ isSignal: true, alias: "align", required: false }] }], side: [{ type: i0.Input, args: [{ isSignal: true, alias: "side", required: false }] }] } });

const HlmDropdownMenuImports = [
    HlmDropdownMenu,
    HlmDropdownMenuCheckbox,
    HlmDropdownMenuCheckboxIndicator,
    HlmDropdownMenuGroup,
    HlmDropdownMenuItem,
    HlmDropdownMenuItemSubIndicator,
    HlmDropdownMenuLabel,
    HlmDropdownMenuRadio,
    HlmDropdownMenuRadioIndicator,
    HlmDropdownMenuSeparator,
    HlmDropdownMenuShortcut,
    HlmDropdownMenuSub,
    HlmDropdownMenuSubTrigger,
    HlmDropdownMenuTrigger,
];

/**
 * Generated bundle index. Do not edit.
 */

export { HlmDropdownMenu, HlmDropdownMenuCheckbox, HlmDropdownMenuCheckboxCdk, HlmDropdownMenuCheckboxIndicator, HlmDropdownMenuFocusOnHover, HlmDropdownMenuGroup, HlmDropdownMenuImports, HlmDropdownMenuItem, HlmDropdownMenuItemSubIndicator, HlmDropdownMenuLabel, HlmDropdownMenuRadio, HlmDropdownMenuRadioCdk, HlmDropdownMenuRadioIndicator, HlmDropdownMenuSeparator, HlmDropdownMenuShortcut, HlmDropdownMenuSub, HlmDropdownMenuSubTrigger, HlmDropdownMenuTrigger, injectHlmDropdownMenuConfig, provideHlmDropdownMenuConfig };
//# sourceMappingURL=gosamply-ui-dropdown-menu.mjs.map
