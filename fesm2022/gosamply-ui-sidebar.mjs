import { isPlatformServer, NgTemplateOutlet } from '@angular/common';
import * as i0 from '@angular/core';
import { InjectionToken, inject, PLATFORM_ID, REQUEST, DOCUMENT, signal, computed, DestroyRef, afterNextRender, Injectable, input, effect, ChangeDetectionStrategy, Component, Directive, booleanAttribute } from '@angular/core';
import * as i1 from '@gosamply/ui/sheet';
import { HlmSheetImports } from '@gosamply/ui/sheet';
import { hlm, classes } from '@gosamply/ui/utils';
import * as i1$1 from '@gosamply/ui/input';
import { HlmInput } from '@gosamply/ui/input';
import * as i1$2 from '@spartan-ng/brain/tooltip';
import { BrnTooltip, provideBrnTooltipDefaultOptions } from '@spartan-ng/brain/tooltip';
import { tooltipPositionVariants, DEFAULT_TOOLTIP_SVG_CLASS, DEFAULT_TOOLTIP_CONTENT_CLASSES } from '@gosamply/ui/tooltip';
import { cva } from 'class-variance-authority';
import * as i1$3 from '@gosamply/ui/skeleton';
import { HlmSkeletonImports } from '@gosamply/ui/skeleton';
import * as i1$4 from '@gosamply/ui/separator';
import { HlmSeparator } from '@gosamply/ui/separator';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePanelLeft } from '@ng-icons/lucide';
import * as i1$5 from '@gosamply/ui/button';
import { provideBrnButtonConfig, HlmButton } from '@gosamply/ui/button';

const defaultConfig = {
    defaultOpen: true,
    sidebarWidth: '16rem',
    sidebarWidthMobile: '18rem',
    sidebarWidthIcon: '3rem',
    sidebarCookieName: 'sidebar_state',
    sidebarCookieMaxAge: 60 * 60 * 24 * 7, // 7 days in seconds
    sidebarKeyboardShortcut: 'b',
    mobileBreakpoint: '768px',
    closeMobileSidebarOnMenuButtonClick: false,
};
const HlmSidebarConfigToken = new InjectionToken('HlmSidebarConfig');
function provideHlmSidebarConfig(config) {
    return { provide: HlmSidebarConfigToken, useValue: { ...defaultConfig, ...config } };
}
function injectHlmSidebarConfig() {
    return inject(HlmSidebarConfigToken, { optional: true }) ?? defaultConfig;
}

class HlmSidebarService {
    _platformId = inject(PLATFORM_ID);
    _request = inject(REQUEST, { optional: true });
    _config = injectHlmSidebarConfig();
    _document = inject(DOCUMENT);
    _window = this._document.defaultView;
    _open = signal(this._config.defaultOpen, ...(ngDevMode ? [{ debugName: "_open" }] : /* istanbul ignore next */ []));
    _openMobile = signal(false, ...(ngDevMode ? [{ debugName: "_openMobile" }] : /* istanbul ignore next */ []));
    _isMobile = signal(false, ...(ngDevMode ? [{ debugName: "_isMobile" }] : /* istanbul ignore next */ []));
    _variant = signal('sidebar', ...(ngDevMode ? [{ debugName: "_variant" }] : /* istanbul ignore next */ []));
    _mediaQuery = null;
    open = this._open.asReadonly();
    openMobile = this._openMobile.asReadonly();
    isMobile = this._isMobile.asReadonly();
    variant = this._variant.asReadonly();
    state = computed(() => (this._open() ? 'expanded' : 'collapsed'), ...(ngDevMode ? [{ debugName: "state" }] : /* istanbul ignore next */ []));
    constructor() {
        const destroyRef = inject(DestroyRef);
        this.restoreStateFromCookie();
        afterNextRender(() => {
            if (!this._window || typeof this._window.matchMedia !== 'function')
                return;
            // Initialize MediaQueryList
            this._mediaQuery = this._window.matchMedia(`(max-width: ${this._config.mobileBreakpoint})`);
            this._isMobile.set(this._mediaQuery.matches);
            // Add media query listener
            const mediaQueryHandler = (e) => {
                this._isMobile.set(e.matches);
                // If switching from mobile to desktop, close mobile sidebar
                if (!e.matches)
                    this._openMobile.set(false);
            };
            this._mediaQuery.addEventListener('change', mediaQueryHandler);
            // Add keyboard shortcut listener
            const keydownHandler = (event) => {
                if (event.key === this._config.sidebarKeyboardShortcut && (event.ctrlKey || event.metaKey)) {
                    event.preventDefault();
                    this.toggleSidebar();
                }
            };
            this._window.addEventListener('keydown', keydownHandler);
            // Add resize listener with debounce
            let resizeTimeout;
            const resizeHandler = () => {
                if (!this._window)
                    return;
                if (resizeTimeout)
                    this._window.clearTimeout(resizeTimeout);
                resizeTimeout = this._window.setTimeout(() => {
                    if (this._mediaQuery)
                        this._isMobile.set(this._mediaQuery.matches);
                }, 100);
            };
            this._window.addEventListener('resize', resizeHandler);
            // Cleanup listeners on destroy
            destroyRef.onDestroy(() => {
                if (!this._window)
                    return;
                if (this._mediaQuery)
                    this._mediaQuery.removeEventListener('change', mediaQueryHandler);
                this._window.removeEventListener('keydown', keydownHandler);
                this._window.removeEventListener('resize', resizeHandler);
                if (resizeTimeout)
                    this._window.clearTimeout(resizeTimeout);
            });
        });
    }
    setOpen(open) {
        this._open.set(open);
        this._document.cookie = `${this._config.sidebarCookieName}=${open}; path=/; max-age=${this._config.sidebarCookieMaxAge}`;
    }
    setOpenMobile(open) {
        if (this._isMobile()) {
            this._openMobile.set(open);
        }
    }
    setVariant(variant) {
        this._variant.set(variant);
    }
    toggleSidebar() {
        if (this._isMobile()) {
            this._openMobile.update(value => !value);
        }
        else {
            this.setOpen(!this._open());
        }
    }
    restoreStateFromCookie() {
        const cookieString = isPlatformServer(this._platformId) ? this._request?.headers.get('cookie') : this._document.cookie;
        if (!cookieString)
            return;
        const prefix = `${this._config.sidebarCookieName}=`;
        const cookieValue = cookieString
            .split(';')
            .map(c => c.trim())
            .find(c => c.startsWith(prefix))
            ?.slice(prefix.length);
        if (cookieValue !== undefined) {
            this._open.set(cookieValue === 'true');
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [] });

class HlmSidebar {
    _sidebarService = inject(HlmSidebarService);
    _config = injectHlmSidebarConfig();
    sidebarWidthMobile = input(this._config.sidebarWidthMobile, ...(ngDevMode ? [{ debugName: "sidebarWidthMobile" }] : /* istanbul ignore next */ []));
    side = input('left', ...(ngDevMode ? [{ debugName: "side" }] : /* istanbul ignore next */ []));
    variant = input(this._sidebarService.variant(), ...(ngDevMode ? [{ debugName: "variant" }] : /* istanbul ignore next */ []));
    collapsible = input('offcanvas', ...(ngDevMode ? [{ debugName: "collapsible" }] : /* istanbul ignore next */ []));
    _sidebarGapComputedClass = computed(() => hlm('transition-[width] duration-200 ease-linear relative w-(--sidebar-width) bg-transparent', 'group-data-[collapsible=offcanvas]:w-0', 'group-data-[side=right]:rotate-180', this.variant() === 'floating' || this.variant() === 'inset'
        ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]'
        : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon)'), ...(ngDevMode ? [{ debugName: "_sidebarGapComputedClass" }] : /* istanbul ignore next */ []));
    sidebarContainerClass = input('', ...(ngDevMode ? [{ debugName: "sidebarContainerClass" }] : /* istanbul ignore next */ []));
    _sidebarContainerComputedClass = computed(() => hlm('fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear data-[side=left]:left-0 data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] md:flex', this.variant() === 'floating' || this.variant() === 'inset'
        ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]'
        : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l', this.sidebarContainerClass()), ...(ngDevMode ? [{ debugName: "_sidebarContainerComputedClass" }] : /* istanbul ignore next */ []));
    _dataSlot = computed(() => {
        return !this._sidebarService.isMobile() ? 'sidebar' : undefined;
    }, ...(ngDevMode ? [{ debugName: "_dataSlot" }] : /* istanbul ignore next */ []));
    _collapsibleAndNonMobile = computed(() => {
        return this.collapsible() !== 'none' && !this._sidebarService.isMobile();
    }, ...(ngDevMode ? [{ debugName: "_collapsibleAndNonMobile" }] : /* istanbul ignore next */ []));
    _dataState = computed(() => {
        return this._collapsibleAndNonMobile() ? this._sidebarService.state() : undefined;
    }, ...(ngDevMode ? [{ debugName: "_dataState" }] : /* istanbul ignore next */ []));
    _dataCollapsible = computed(() => {
        if (this._collapsibleAndNonMobile()) {
            return this._sidebarService.state() === 'collapsed' ? this.collapsible() : '';
        }
        return undefined;
    }, ...(ngDevMode ? [{ debugName: "_dataCollapsible" }] : /* istanbul ignore next */ []));
    _dataVariant = computed(() => {
        return this._collapsibleAndNonMobile() ? this.variant() : undefined;
    }, ...(ngDevMode ? [{ debugName: "_dataVariant" }] : /* istanbul ignore next */ []));
    _dataSide = computed(() => {
        return this._collapsibleAndNonMobile() ? this.side() : undefined;
    }, ...(ngDevMode ? [{ debugName: "_dataSide" }] : /* istanbul ignore next */ []));
    constructor() {
        // Sync variant input with service
        effect(() => {
            this._sidebarService.setVariant(this.variant());
        });
        classes(() => {
            if (this.collapsible() === 'none') {
                return hlm('bg-sidebar text-sidebar-foreground flex h-svh w-(--sidebar-width) flex-col');
            }
            else if (this._sidebarService.isMobile()) {
                return '';
            }
            else {
                return hlm('group peer text-sidebar-foreground hidden md:block');
            }
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebar, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.11", type: HlmSidebar, isStandalone: true, selector: "hlm-sidebar", inputs: { sidebarWidthMobile: { classPropertyName: "sidebarWidthMobile", publicName: "sidebarWidthMobile", isSignal: true, isRequired: false, transformFunction: null }, side: { classPropertyName: "side", publicName: "side", isSignal: true, isRequired: false, transformFunction: null }, variant: { classPropertyName: "variant", publicName: "variant", isSignal: true, isRequired: false, transformFunction: null }, collapsible: { classPropertyName: "collapsible", publicName: "collapsible", isSignal: true, isRequired: false, transformFunction: null }, sidebarContainerClass: { classPropertyName: "sidebarContainerClass", publicName: "sidebarContainerClass", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "attr.data-slot": "_dataSlot()", "attr.data-state": "_dataState()", "attr.data-collapsible": "_dataCollapsible()", "attr.data-variant": "_dataVariant()", "attr.data-side": "_dataSide()" } }, ngImport: i0, template: `
    <ng-template #contentContainer>
      <ng-content />
    </ng-template>

    @if (collapsible() === 'none') {
      <ng-container *ngTemplateOutlet="contentContainer"></ng-container>
    } @else if (_sidebarService.isMobile()) {
      <hlm-sheet
        [side]="side()"
        [state]="_sidebarService.openMobile() ? 'open' : 'closed'"
        (stateChanged)="_sidebarService.setOpenMobile($event === 'open')"
      >
        <hlm-sheet-content
          *hlmSheetPortal="let ctx"
          data-slot="sidebar"
          data-sidebar="sidebar"
          data-mobile="true"
          class="bg-sidebar text-sidebar-foreground h-svh w-(--sidebar-width) p-0 [&>button]:hidden"
          [style.--sidebar-width]="sidebarWidthMobile()"
        >
          <div class="flex h-full w-full flex-col">
            <ng-container *ngTemplateOutlet="contentContainer" />
          </div>
        </hlm-sheet-content>
      </hlm-sheet>
    } @else {
      <!-- Sidebar gap on desktop -->
      <div data-slot="sidebar-gap" [class]="_sidebarGapComputedClass()"></div>
      <div data-slot="sidebar-container" [attr.data-side]="_dataSide()" [class]="_sidebarContainerComputedClass()">
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          class="bg-sidebar group-data-[variant=floating]:ring-sidebar-border group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm group-data-[variant=floating]:ring-1 flex size-full flex-col"
        >
          <ng-container *ngTemplateOutlet="contentContainer" />
        </div>
      </div>
    }
  `, isInline: true, dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i1.HlmSheet, selector: "hlm-sheet", exportAs: ["hlmSheet"] }, { kind: "component", type: i1.HlmSheetContent, selector: "hlm-sheet-content", inputs: ["showCloseButton"] }, { kind: "directive", type: i1.HlmSheetPortal, selector: "[hlmSheetPortal]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebar, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-sidebar',
                    imports: [NgTemplateOutlet, HlmSheetImports],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[attr.data-slot]': '_dataSlot()',
                        '[attr.data-state]': '_dataState()',
                        '[attr.data-collapsible]': '_dataCollapsible()',
                        '[attr.data-variant]': '_dataVariant()',
                        '[attr.data-side]': '_dataSide()',
                    },
                    template: `
    <ng-template #contentContainer>
      <ng-content />
    </ng-template>

    @if (collapsible() === 'none') {
      <ng-container *ngTemplateOutlet="contentContainer"></ng-container>
    } @else if (_sidebarService.isMobile()) {
      <hlm-sheet
        [side]="side()"
        [state]="_sidebarService.openMobile() ? 'open' : 'closed'"
        (stateChanged)="_sidebarService.setOpenMobile($event === 'open')"
      >
        <hlm-sheet-content
          *hlmSheetPortal="let ctx"
          data-slot="sidebar"
          data-sidebar="sidebar"
          data-mobile="true"
          class="bg-sidebar text-sidebar-foreground h-svh w-(--sidebar-width) p-0 [&>button]:hidden"
          [style.--sidebar-width]="sidebarWidthMobile()"
        >
          <div class="flex h-full w-full flex-col">
            <ng-container *ngTemplateOutlet="contentContainer" />
          </div>
        </hlm-sheet-content>
      </hlm-sheet>
    } @else {
      <!-- Sidebar gap on desktop -->
      <div data-slot="sidebar-gap" [class]="_sidebarGapComputedClass()"></div>
      <div data-slot="sidebar-container" [attr.data-side]="_dataSide()" [class]="_sidebarContainerComputedClass()">
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          class="bg-sidebar group-data-[variant=floating]:ring-sidebar-border group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm group-data-[variant=floating]:ring-1 flex size-full flex-col"
        >
          <ng-container *ngTemplateOutlet="contentContainer" />
        </div>
      </div>
    }
  `,
                }]
        }], ctorParameters: () => [], propDecorators: { sidebarWidthMobile: [{ type: i0.Input, args: [{ isSignal: true, alias: "sidebarWidthMobile", required: false }] }], side: [{ type: i0.Input, args: [{ isSignal: true, alias: "side", required: false }] }], variant: [{ type: i0.Input, args: [{ isSignal: true, alias: "variant", required: false }] }], collapsible: [{ type: i0.Input, args: [{ isSignal: true, alias: "collapsible", required: false }] }], sidebarContainerClass: [{ type: i0.Input, args: [{ isSignal: true, alias: "sidebarContainerClass", required: false }] }] } });

class HlmSidebarContent {
    constructor() {
        classes(() => 'no-scrollbar gap-2 [--radius:var(--radius-xl)] flex min-h-0 flex-1 flex-col overflow-auto group-data-[collapsible=icon]:overflow-hidden');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarContent, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSidebarContent, isStandalone: true, selector: "[hlmSidebarContent],hlm-sidebar-content", host: { attributes: { "data-slot": "sidebar-content", "data-sidebar": "content" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarContent, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmSidebarContent],hlm-sidebar-content',
                    host: {
                        'data-slot': 'sidebar-content',
                        'data-sidebar': 'content',
                    },
                }]
        }], ctorParameters: () => [] });

class HlmSidebarFooter {
    constructor() {
        classes(() => 'gap-2 p-2 flex flex-col');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarFooter, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSidebarFooter, isStandalone: true, selector: "[hlmSidebarFooter],hlm-sidebar-footer", host: { attributes: { "data-slot": "sidebar-footer", "data-sidebar": "footer" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarFooter, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmSidebarFooter],hlm-sidebar-footer',
                    host: {
                        'data-slot': 'sidebar-footer',
                        'data-sidebar': 'footer',
                    },
                }]
        }], ctorParameters: () => [] });

class HlmSidebarGroup {
    constructor() {
        classes(() => 'p-2 relative flex w-full min-w-0 flex-col');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarGroup, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSidebarGroup, isStandalone: true, selector: "[hlmSidebarGroup],hlm-sidebar-group", host: { attributes: { "data-slot": "sidebar-group", "data-sidebar": "group" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarGroup, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmSidebarGroup],hlm-sidebar-group',
                    host: {
                        'data-slot': 'sidebar-group',
                        'data-sidebar': 'group',
                    },
                }]
        }], ctorParameters: () => [] });

class HlmSidebarGroupAction {
    constructor() {
        classes(() => 'text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute end-3 top-3.5 w-5 rounded-md p-0 focus-visible:ring-2 [&>ng-icon]:text-[length:--spacing(4)] flex aspect-square items-center justify-center outline-hidden transition-transform group-data-[collapsible=icon]:hidden after:absolute after:-inset-2 md:after:hidden [&>ng-icon]:shrink-0');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarGroupAction, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSidebarGroupAction, isStandalone: true, selector: "button[hlmSidebarGroupAction]", host: { attributes: { "data-slot": "sidebar-group-action", "data-sidebar": "group-action" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarGroupAction, decorators: [{
            type: Directive,
            args: [{
                    selector: 'button[hlmSidebarGroupAction]',
                    host: {
                        'data-slot': 'sidebar-group-action',
                        'data-sidebar': 'group-action',
                    },
                }]
        }], ctorParameters: () => [] });

class HlmSidebarGroupContent {
    constructor() {
        classes(() => 'text-sm w-full');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarGroupContent, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSidebarGroupContent, isStandalone: true, selector: "div[hlmSidebarGroupContent]", host: { attributes: { "data-slot": "sidebar-group-content", "data-sidebar": "group-content" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarGroupContent, decorators: [{
            type: Directive,
            args: [{
                    selector: 'div[hlmSidebarGroupContent]',
                    host: {
                        'data-slot': 'sidebar-group-content',
                        'data-sidebar': 'group-content',
                    },
                }]
        }], ctorParameters: () => [] });

class HlmSidebarGroupLabel {
    constructor() {
        classes(() => 'text-sidebar-foreground/70 ring-sidebar-ring h-8 rounded-md px-3 text-xs font-medium transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 focus-visible:ring-2 [&>ng-icon]:text-[length:--spacing(4)] flex shrink-0 items-center outline-hidden [&>ng-icon]:shrink-0');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarGroupLabel, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSidebarGroupLabel, isStandalone: true, selector: "div[hlmSidebarGroupLabel], button[hlmSidebarGroupLabel]", host: { attributes: { "data-slot": "sidebar-group-label", "data-sidebar": "group-label" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarGroupLabel, decorators: [{
            type: Directive,
            args: [{
                    selector: 'div[hlmSidebarGroupLabel], button[hlmSidebarGroupLabel]',
                    host: {
                        'data-slot': 'sidebar-group-label',
                        'data-sidebar': 'group-label',
                    },
                }]
        }], ctorParameters: () => [] });

class HlmSidebarHeader {
    constructor() {
        classes(() => 'gap-2 p-2 [--radius:var(--radius-xl)] flex flex-col');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarHeader, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSidebarHeader, isStandalone: true, selector: "[hlmSidebarHeader],hlm-sidebar-header", host: { attributes: { "data-slot": "sidebar-header", "data-sidebar": "header" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarHeader, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmSidebarHeader],hlm-sidebar-header',
                    host: {
                        'data-slot': 'sidebar-header',
                        'data-sidebar': 'header',
                    },
                }]
        }], ctorParameters: () => [] });

class HlmSidebarInput {
    constructor() {
        classes(() => 'bg-background h-8 w-full shadow-none');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarInput, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSidebarInput, isStandalone: true, selector: "input[hlmSidebarInput]", host: { attributes: { "data-slot": "sidebar-input", "data-sidebar": "input" } }, hostDirectives: [{ directive: i1$1.HlmInput }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarInput, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[hlmSidebarInput]',
                    hostDirectives: [HlmInput],
                    host: {
                        'data-slot': 'sidebar-input',
                        'data-sidebar': 'input',
                    },
                }]
        }], ctorParameters: () => [] });

class HlmSidebarInset {
    constructor() {
        classes(() => 'bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ms-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ms-2 relative flex w-full flex-1 flex-col');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarInset, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSidebarInset, isStandalone: true, selector: "main[hlmSidebarInset]", host: { attributes: { "data-slot": "sidebar-inset" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarInset, decorators: [{
            type: Directive,
            args: [{
                    selector: 'main[hlmSidebarInset]',
                    host: { 'data-slot': 'sidebar-inset' },
                }]
        }], ctorParameters: () => [] });

class HlmSidebarMenu {
    constructor() {
        classes(() => 'gap-1 flex w-full min-w-0 flex-col');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarMenu, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSidebarMenu, isStandalone: true, selector: "ul[hlmSidebarMenu]", host: { attributes: { "data-slot": "sidebar-menu", "data-sidebar": "menu" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarMenu, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ul[hlmSidebarMenu]',
                    host: {
                        'data-slot': 'sidebar-menu',
                        'data-sidebar': 'menu',
                    },
                }]
        }], ctorParameters: () => [] });

class HlmSidebarMenuAction {
    showOnHover = input(false, { ...(ngDevMode ? { debugName: "showOnHover" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    constructor() {
        classes(() => [
            'text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute end-1 top-1.5 aspect-square w-5 rounded-md p-0 peer-data-[size=default]/menu-button:top-2 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 focus-visible:ring-2 [&>ng-icon]:text-[length:--spacing(4)] flex items-center justify-center outline-hidden transition-transform group-data-[collapsible=icon]:hidden after:absolute after:-inset-2 md:after:hidden [&>ng-icon]:shrink-0',
            this.showOnHover() &&
                'peer-data-active/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 aria-expanded:opacity-100 md:opacity-0',
        ]);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarMenuAction, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.11", type: HlmSidebarMenuAction, isStandalone: true, selector: "button[hlmSidebarMenuAction]", inputs: { showOnHover: { classPropertyName: "showOnHover", publicName: "showOnHover", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "data-slot": "sidebar-menu-action", "data-sidebar": "menu-action" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarMenuAction, decorators: [{
            type: Directive,
            args: [{
                    selector: 'button[hlmSidebarMenuAction]',
                    host: {
                        'data-slot': 'sidebar-menu-action',
                        'data-sidebar': 'menu-action',
                    },
                }]
        }], ctorParameters: () => [], propDecorators: { showOnHover: [{ type: i0.Input, args: [{ isSignal: true, alias: "showOnHover", required: false }] }] } });

class HlmSidebarMenuBadge {
    constructor() {
        classes(() => 'text-sidebar-foreground peer-hover/menu-button:text-sidebar-accent-foreground peer-data-active/menu-button:text-sidebar-accent-foreground pointer-events-none absolute end-1 h-5 min-w-5 rounded-md px-1 text-xs font-medium peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 flex items-center justify-center tabular-nums select-none group-data-[collapsible=icon]:hidden');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarMenuBadge, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSidebarMenuBadge, isStandalone: true, selector: "[hlmSidebarMenuBadge],hlm-sidebar-menu-badge", host: { attributes: { "data-slot": "sidebar-menu-badge", "data-sidebar": "menu-badge" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarMenuBadge, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmSidebarMenuBadge],hlm-sidebar-menu-badge',
                    host: {
                        'data-slot': 'sidebar-menu-badge',
                        'data-sidebar': 'menu-badge',
                    },
                }]
        }], ctorParameters: () => [] });

const sidebarMenuButtonVariants = cva('ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground gap-2 rounded-lg px-3 py-2 text-start text-sm transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pe-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 data-active:font-medium peer/menu-button group/menu-button flex w-full items-center overflow-hidden outline-hidden disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_ng-icon]:shrink-0 [&_ng-icon]:text-[length:--spacing(4)] [&>span:last-child]:truncate', {
    variants: {
        variant: {
            default: 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
            outline: 'bg-background hover:bg-sidebar-accent hover:text-sidebar-accent-foreground shadow-[0_0_0_1px_var(--sidebar-border)] hover:shadow-[0_0_0_1px_var(--sidebar-accent)]',
        },
        size: {
            default: 'h-9 text-sm',
            sm: 'h-8 text-xs',
            lg: 'h-14 px-3 text-sm group-data-[collapsible=icon]:p-0!',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
});
class HlmSidebarMenuButton {
    _config = injectHlmSidebarConfig();
    _sidebarService = inject(HlmSidebarService);
    _brnTooltip = inject(BrnTooltip);
    variant = input('default', ...(ngDevMode ? [{ debugName: "variant" }] : /* istanbul ignore next */ []));
    size = input('default', ...(ngDevMode ? [{ debugName: "size" }] : /* istanbul ignore next */ []));
    isActive = input(false, { ...(ngDevMode ? { debugName: "isActive" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    closeMobileSidebarOnClick = input(this._config.closeMobileSidebarOnMenuButtonClick, { ...(ngDevMode ? { debugName: "closeMobileSidebarOnClick" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    _isTooltipHidden = computed(() => this._sidebarService.state() !== 'collapsed' || this._sidebarService.isMobile(), ...(ngDevMode ? [{ debugName: "_isTooltipHidden" }] : /* istanbul ignore next */ []));
    constructor() {
        classes(() => sidebarMenuButtonVariants({ variant: this.variant(), size: this.size() }));
        effect(() => this._brnTooltip.mutableTooltipDisabled.set(this._isTooltipHidden()));
    }
    onClick() {
        if (this.closeMobileSidebarOnClick()) {
            this._sidebarService.setOpenMobile(false);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarMenuButton, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.11", type: HlmSidebarMenuButton, isStandalone: true, selector: "button[hlmSidebarMenuButton], a[hlmSidebarMenuButton]", inputs: { variant: { classPropertyName: "variant", publicName: "variant", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, isActive: { classPropertyName: "isActive", publicName: "isActive", isSignal: true, isRequired: false, transformFunction: null }, closeMobileSidebarOnClick: { classPropertyName: "closeMobileSidebarOnClick", publicName: "closeMobileSidebarOnClick", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "data-slot": "sidebar-menu-button", "data-sidebar": "menu-button" }, listeners: { "click": "onClick()" }, properties: { "attr.data-size": "size()", "attr.data-active": "isActive()" } }, providers: [
            provideBrnTooltipDefaultOptions({
                showDelay: 150,
                hideDelay: 0,
                tooltipContentClasses: DEFAULT_TOOLTIP_CONTENT_CLASSES,
                svgClasses: DEFAULT_TOOLTIP_SVG_CLASS,
                arrowClasses: (position) => hlm(tooltipPositionVariants({ position })),
                position: 'right',
            }),
        ], hostDirectives: [{ directive: i1$2.BrnTooltip, inputs: ["brnTooltip", "tooltip"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarMenuButton, decorators: [{
            type: Directive,
            args: [{
                    selector: 'button[hlmSidebarMenuButton], a[hlmSidebarMenuButton]',
                    providers: [
                        provideBrnTooltipDefaultOptions({
                            showDelay: 150,
                            hideDelay: 0,
                            tooltipContentClasses: DEFAULT_TOOLTIP_CONTENT_CLASSES,
                            svgClasses: DEFAULT_TOOLTIP_SVG_CLASS,
                            arrowClasses: (position) => hlm(tooltipPositionVariants({ position })),
                            position: 'right',
                        }),
                    ],
                    hostDirectives: [
                        {
                            directive: BrnTooltip,
                            inputs: ['brnTooltip: tooltip'],
                        },
                    ],
                    host: {
                        'data-slot': 'sidebar-menu-button',
                        'data-sidebar': 'menu-button',
                        '[attr.data-size]': 'size()',
                        '[attr.data-active]': 'isActive()',
                        '(click)': 'onClick()',
                    },
                }]
        }], ctorParameters: () => [], propDecorators: { variant: [{ type: i0.Input, args: [{ isSignal: true, alias: "variant", required: false }] }], size: [{ type: i0.Input, args: [{ isSignal: true, alias: "size", required: false }] }], isActive: [{ type: i0.Input, args: [{ isSignal: true, alias: "isActive", required: false }] }], closeMobileSidebarOnClick: [{ type: i0.Input, args: [{ isSignal: true, alias: "closeMobileSidebarOnClick", required: false }] }] } });

class HlmSidebarMenuItem {
    constructor() {
        classes(() => 'group/menu-item relative');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarMenuItem, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSidebarMenuItem, isStandalone: true, selector: "li[hlmSidebarMenuItem]", host: { attributes: { "data-slot": "sidebar-menu-item", "data-sidebar": "menu-item" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarMenuItem, decorators: [{
            type: Directive,
            args: [{
                    selector: 'li[hlmSidebarMenuItem]',
                    host: {
                        'data-slot': 'sidebar-menu-item',
                        'data-sidebar': 'menu-item',
                    },
                }]
        }], ctorParameters: () => [] });

class HlmSidebarMenuSkeleton {
    showIcon = input(false, { ...(ngDevMode ? { debugName: "showIcon" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    _width = `${Math.floor(Math.random() * 40) + 50}%`;
    constructor() {
        classes(() => 'h-8 gap-2 rounded-md px-2 flex items-center');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarMenuSkeleton, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.11", type: HlmSidebarMenuSkeleton, isStandalone: true, selector: "hlm-sidebar-menu-skeleton,div[hlmSidebarMenuSkeleton]", inputs: { showIcon: { classPropertyName: "showIcon", publicName: "showIcon", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "data-slot": "sidebar-menu-skeleton", "data-sidebar": "menu-skeleton" } }, ngImport: i0, template: `
    @if (showIcon()) {
      <hlm-skeleton data-sidebar="menu-skeleton-icon" class="size-4 rounded-md" />
    } @else {
      <hlm-skeleton data-sidebar="menu-skeleton-text" class="h-4 max-w-(--skeleton-width) flex-1" [style.--skeleton-width]="_width" />
    }
  `, isInline: true, dependencies: [{ kind: "directive", type: i1$3.HlmSkeleton, selector: "[hlmSkeleton],hlm-skeleton" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarMenuSkeleton, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-sidebar-menu-skeleton,div[hlmSidebarMenuSkeleton]',
                    imports: [HlmSkeletonImports],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        'data-slot': 'sidebar-menu-skeleton',
                        'data-sidebar': 'menu-skeleton',
                    },
                    template: `
    @if (showIcon()) {
      <hlm-skeleton data-sidebar="menu-skeleton-icon" class="size-4 rounded-md" />
    } @else {
      <hlm-skeleton data-sidebar="menu-skeleton-text" class="h-4 max-w-(--skeleton-width) flex-1" [style.--skeleton-width]="_width" />
    }
  `,
                }]
        }], ctorParameters: () => [], propDecorators: { showIcon: [{ type: i0.Input, args: [{ isSignal: true, alias: "showIcon", required: false }] }] } });

class HlmSidebarMenuSub {
    constructor() {
        classes(() => 'border-sidebar-border mx-3.5 translate-x-px gap-1 border-s px-2.5 py-0.5 group-data-[collapsible=icon]:hidden rtl:-translate-x-px flex min-w-0 flex-col');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarMenuSub, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSidebarMenuSub, isStandalone: true, selector: "ul[hlmSidebarMenuSub]", host: { attributes: { "data-slot": "sidebar-menu-sub", "data-sidebar": "menu-sub" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarMenuSub, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ul[hlmSidebarMenuSub]',
                    host: {
                        'data-slot': 'sidebar-menu-sub',
                        'data-sidebar': 'menu-sub',
                    },
                }]
        }], ctorParameters: () => [] });

class HlmSidebarMenuSubButton {
    _sidebarService = inject(HlmSidebarService);
    _config = injectHlmSidebarConfig();
    closeMobileSidebarOnClick = input(this._config.closeMobileSidebarOnMenuButtonClick, { ...(ngDevMode ? { debugName: "closeMobileSidebarOnClick" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    size = input('md', ...(ngDevMode ? [{ debugName: "size" }] : /* istanbul ignore next */ []));
    isActive = input(false, { ...(ngDevMode ? { debugName: "isActive" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    constructor() {
        classes(() => 'text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground h-7 gap-2 rounded-md px-2 focus-visible:ring-2 data-[size=md]:text-sm data-[size=sm]:text-xs [&>ng-icon]:text-[length:--spacing(4)] flex min-w-0 -translate-x-px items-center overflow-hidden outline-hidden group-data-[collapsible=icon]:hidden disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>ng-icon]:shrink-0 [&>span:last-child]:truncate');
    }
    onClick() {
        if (this.closeMobileSidebarOnClick()) {
            this._sidebarService.setOpenMobile(false);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarMenuSubButton, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.11", type: HlmSidebarMenuSubButton, isStandalone: true, selector: "a[hlmSidebarMenuSubButton], button[hlmSidebarMenuSubButton]", inputs: { closeMobileSidebarOnClick: { classPropertyName: "closeMobileSidebarOnClick", publicName: "closeMobileSidebarOnClick", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, isActive: { classPropertyName: "isActive", publicName: "isActive", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "data-slot": "sidebar-menu-sub-button", "data-sidebar": "menu-sub-button" }, listeners: { "click": "onClick()" }, properties: { "attr.data-active": "isActive()", "attr.data-size": "size()" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarMenuSubButton, decorators: [{
            type: Directive,
            args: [{
                    selector: 'a[hlmSidebarMenuSubButton], button[hlmSidebarMenuSubButton]',
                    host: {
                        'data-slot': 'sidebar-menu-sub-button',
                        'data-sidebar': 'menu-sub-button',
                        '[attr.data-active]': 'isActive()',
                        '[attr.data-size]': 'size()',
                        '(click)': 'onClick()',
                    },
                }]
        }], ctorParameters: () => [], propDecorators: { closeMobileSidebarOnClick: [{ type: i0.Input, args: [{ isSignal: true, alias: "closeMobileSidebarOnClick", required: false }] }], size: [{ type: i0.Input, args: [{ isSignal: true, alias: "size", required: false }] }], isActive: [{ type: i0.Input, args: [{ isSignal: true, alias: "isActive", required: false }] }] } });

class HlmSidebarMenuSubItem {
    constructor() {
        classes(() => 'group/menu-sub-item relative');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarMenuSubItem, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSidebarMenuSubItem, isStandalone: true, selector: "li[hlmSidebarMenuSubItem]", host: { attributes: { "data-slot": "sidebar-menu-sub-item", "data-sidebar": "menu-sub-item" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarMenuSubItem, decorators: [{
            type: Directive,
            args: [{
                    selector: 'li[hlmSidebarMenuSubItem]',
                    host: {
                        'data-slot': 'sidebar-menu-sub-item',
                        'data-sidebar': 'menu-sub-item',
                    },
                }]
        }], ctorParameters: () => [] });

class HlmSidebarRail {
    _sidebarService = inject(HlmSidebarService);
    ariaLabel = input('Toggle Sidebar', { ...(ngDevMode ? { debugName: "ariaLabel" } : /* istanbul ignore next */ {}), alias: 'aria-label' });
    constructor() {
        classes(() => [
            'hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:start-1/2 after:w-[2px] sm:flex ltr:-translate-x-1/2 rtl:-translate-x-1/2',
            'in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize',
            '[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize',
            'hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full',
            '[[data-side=left][data-collapsible=offcanvas]_&]:-right-2',
            '[[data-side=right][data-collapsible=offcanvas]_&]:-left-2',
        ]);
    }
    onClick() {
        this._sidebarService.toggleSidebar();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarRail, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.11", type: HlmSidebarRail, isStandalone: true, selector: "button[hlmSidebarRail]", inputs: { ariaLabel: { classPropertyName: "ariaLabel", publicName: "aria-label", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "data-sidebar": "rail", "data-slot": "sidebar-rail", "tabindex": "-1" }, listeners: { "click": "onClick()" }, properties: { "attr.aria-label": "ariaLabel()" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarRail, decorators: [{
            type: Directive,
            args: [{
                    selector: 'button[hlmSidebarRail]',
                    host: {
                        'data-sidebar': 'rail',
                        'data-slot': 'sidebar-rail',
                        '[attr.aria-label]': 'ariaLabel()',
                        tabindex: '-1',
                        '(click)': 'onClick()',
                    },
                }]
        }], ctorParameters: () => [], propDecorators: { ariaLabel: [{ type: i0.Input, args: [{ isSignal: true, alias: "aria-label", required: false }] }] } });

class HlmSidebarSeparator {
    constructor() {
        classes(() => 'bg-sidebar-border mx-2 w-auto');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarSeparator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSidebarSeparator, isStandalone: true, selector: "[hlmSidebarSeparator],hlm-sidebar-separator", host: { attributes: { "data-slot": "sidebar-separator", "data-sidebar": "separator" } }, hostDirectives: [{ directive: i1$4.HlmSeparator }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarSeparator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmSidebarSeparator],hlm-sidebar-separator',
                    hostDirectives: [HlmSeparator],
                    host: {
                        'data-slot': 'sidebar-separator',
                        'data-sidebar': 'separator',
                    },
                }]
        }], ctorParameters: () => [] });

class HlmSidebarTrigger {
    _sidebarService = inject(HlmSidebarService);
    srOnlyText = input('Toggle Sidebar', ...(ngDevMode ? [{ debugName: "srOnlyText" }] : /* istanbul ignore next */ []));
    _onClick() {
        this._sidebarService.toggleSidebar();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarTrigger, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "21.2.11", type: HlmSidebarTrigger, isStandalone: true, selector: "button[hlmSidebarTrigger]", inputs: { srOnlyText: { classPropertyName: "srOnlyText", publicName: "srOnlyText", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "data-slot": "sidebar-trigger", "data-sidebar": "trigger" }, listeners: { "click": "_onClick()" } }, providers: [provideIcons({ lucidePanelLeft }), provideBrnButtonConfig({ variant: 'ghost', size: 'icon-sm' })], hostDirectives: [{ directive: i1$5.HlmButton, inputs: ["variant", "variant", "size", "size"] }], ngImport: i0, template: `
    <ng-icon name="lucidePanelLeft" />
    <span class="sr-only">{{ srOnlyText() }}</span>
  `, isInline: true, dependencies: [{ kind: "component", type: NgIcon, selector: "ng-icon", inputs: ["name", "svg", "size", "strokeWidth", "color"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarTrigger, decorators: [{
            type: Component,
            args: [{
                    // eslint-disable-next-line @angular-eslint/component-selector
                    selector: 'button[hlmSidebarTrigger]',
                    imports: [NgIcon],
                    providers: [provideIcons({ lucidePanelLeft }), provideBrnButtonConfig({ variant: 'ghost', size: 'icon-sm' })],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    hostDirectives: [{ directive: HlmButton, inputs: ['variant', 'size'] }],
                    host: {
                        'data-slot': 'sidebar-trigger',
                        'data-sidebar': 'trigger',
                        '(click)': '_onClick()',
                    },
                    template: `
    <ng-icon name="lucidePanelLeft" />
    <span class="sr-only">{{ srOnlyText() }}</span>
  `,
                }]
        }], propDecorators: { srOnlyText: [{ type: i0.Input, args: [{ isSignal: true, alias: "srOnlyText", required: false }] }] } });

class HlmSidebarWrapper {
    _config = injectHlmSidebarConfig();
    sidebarWidth = input(this._config.sidebarWidth, ...(ngDevMode ? [{ debugName: "sidebarWidth" }] : /* istanbul ignore next */ []));
    sidebarWidthIcon = input(this._config.sidebarWidthIcon, ...(ngDevMode ? [{ debugName: "sidebarWidthIcon" }] : /* istanbul ignore next */ []));
    constructor() {
        classes(() => 'group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarWrapper, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.11", type: HlmSidebarWrapper, isStandalone: true, selector: "[hlmSidebarWrapper],hlm-sidebar-wrapper", inputs: { sidebarWidth: { classPropertyName: "sidebarWidth", publicName: "sidebarWidth", isSignal: true, isRequired: false, transformFunction: null }, sidebarWidthIcon: { classPropertyName: "sidebarWidthIcon", publicName: "sidebarWidthIcon", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "data-slot": "sidebar-wrapper" }, properties: { "style.--sidebar-width": "sidebarWidth()", "style.--sidebar-width-icon": "sidebarWidthIcon()" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSidebarWrapper, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmSidebarWrapper],hlm-sidebar-wrapper',
                    host: {
                        'data-slot': 'sidebar-wrapper',
                        '[style.--sidebar-width]': 'sidebarWidth()',
                        '[style.--sidebar-width-icon]': 'sidebarWidthIcon()',
                    },
                }]
        }], ctorParameters: () => [], propDecorators: { sidebarWidth: [{ type: i0.Input, args: [{ isSignal: true, alias: "sidebarWidth", required: false }] }], sidebarWidthIcon: [{ type: i0.Input, args: [{ isSignal: true, alias: "sidebarWidthIcon", required: false }] }] } });

const HlmSidebarImports = [
    HlmSidebar,
    HlmSidebarContent,
    HlmSidebarFooter,
    HlmSidebarGroup,
    HlmSidebarGroupAction,
    HlmSidebarGroupContent,
    HlmSidebarGroupLabel,
    HlmSidebarHeader,
    HlmSidebarInput,
    HlmSidebarInset,
    HlmSidebarMenu,
    HlmSidebarMenuSkeleton,
    HlmSidebarMenuAction,
    HlmSidebarMenuBadge,
    HlmSidebarMenuButton,
    HlmSidebarMenuItem,
    HlmSidebarMenuSub,
    HlmSidebarMenuSubButton,
    HlmSidebarRail,
    HlmSidebarSeparator,
    HlmSidebarTrigger,
    HlmSidebarWrapper,
    HlmSidebarMenuSubItem,
];

/**
 * Generated bundle index. Do not edit.
 */

export { HlmSidebar, HlmSidebarContent, HlmSidebarFooter, HlmSidebarGroup, HlmSidebarGroupAction, HlmSidebarGroupContent, HlmSidebarGroupLabel, HlmSidebarHeader, HlmSidebarImports, HlmSidebarInput, HlmSidebarInset, HlmSidebarMenu, HlmSidebarMenuAction, HlmSidebarMenuBadge, HlmSidebarMenuButton, HlmSidebarMenuItem, HlmSidebarMenuSkeleton, HlmSidebarMenuSub, HlmSidebarMenuSubButton, HlmSidebarMenuSubItem, HlmSidebarRail, HlmSidebarSeparator, HlmSidebarService, HlmSidebarTrigger, HlmSidebarWrapper, injectHlmSidebarConfig, provideHlmSidebarConfig };
//# sourceMappingURL=gosamply-ui-sidebar.mjs.map
