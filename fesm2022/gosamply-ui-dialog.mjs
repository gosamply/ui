import * as i0 from '@angular/core';
import { input, computed, effect, untracked, Directive, forwardRef, ChangeDetectionStrategy, Component, inject, booleanAttribute, Injectable } from '@angular/core';
import * as i1 from '@spartan-ng/brain/dialog';
import { BrnDialogOverlay, BrnDialog, provideBrnDialogDefaultOptions, BrnDialogClose, BrnDialogRef, injectBrnDialogContext, BrnDialogDescription, BrnDialogContent, BrnDialogTitle, BrnDialogTrigger, BrnDialogService, cssClassesToArray } from '@spartan-ng/brain/dialog';
import { injectCustomClassSettable } from '@spartan-ng/brain/core';
import { hlm, classes } from '@gosamply/ui/utils';
import { NgComponentOutlet } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';
import { HlmButton } from '@gosamply/ui/button';

const hlmDialogOverlayClass = hlm('data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 isolate bg-black/80 duration-100 supports-backdrop-filter:backdrop-blur-xs');
class HlmDialogOverlay {
    _classSettable = injectCustomClassSettable({ optional: true, host: true });
    userClass = input('', { ...(ngDevMode ? { debugName: "userClass" } : /* istanbul ignore next */ {}), alias: 'class' });
    _computedClass = computed(() => hlm(hlmDialogOverlayClass, this.userClass()), ...(ngDevMode ? [{ debugName: "_computedClass" }] : /* istanbul ignore next */ []));
    constructor() {
        effect(() => {
            const newClass = this._computedClass();
            untracked(() => this._classSettable?.setClassToCustomElement(newClass));
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDialogOverlay, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.11", type: HlmDialogOverlay, isStandalone: true, selector: "[hlmDialogOverlay],hlm-dialog-overlay", inputs: { userClass: { classPropertyName: "userClass", publicName: "class", isSignal: true, isRequired: false, transformFunction: null } }, hostDirectives: [{ directive: i1.BrnDialogOverlay }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDialogOverlay, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmDialogOverlay],hlm-dialog-overlay',
                    hostDirectives: [BrnDialogOverlay],
                }]
        }], ctorParameters: () => [], propDecorators: { userClass: [{ type: i0.Input, args: [{ isSignal: true, alias: "class", required: false }] }] } });

class HlmDialog extends BrnDialog {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDialog, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.11", type: HlmDialog, isStandalone: true, selector: "hlm-dialog", providers: [
            {
                provide: BrnDialog,
                useExisting: forwardRef(() => HlmDialog),
            },
            provideBrnDialogDefaultOptions({
            // add custom options here
            }),
        ], exportAs: ["hlmDialog"], usesInheritance: true, ngImport: i0, template: `
    <hlm-dialog-overlay />
    <ng-content />
  `, isInline: true, dependencies: [{ kind: "directive", type: HlmDialogOverlay, selector: "[hlmDialogOverlay],hlm-dialog-overlay", inputs: ["class"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDialog, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-dialog',
                    exportAs: 'hlmDialog',
                    imports: [HlmDialogOverlay],
                    providers: [
                        {
                            provide: BrnDialog,
                            useExisting: forwardRef(() => HlmDialog),
                        },
                        provideBrnDialogDefaultOptions({
                        // add custom options here
                        }),
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: `
    <hlm-dialog-overlay />
    <ng-content />
  `,
                }]
        }] });

class HlmDialogClose {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDialogClose, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmDialogClose, isStandalone: true, selector: "button[hlmDialogClose]", host: { attributes: { "data-slot": "dialog-close" } }, hostDirectives: [{ directive: i1.BrnDialogClose }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDialogClose, decorators: [{
            type: Directive,
            args: [{
                    selector: 'button[hlmDialogClose]',
                    hostDirectives: [BrnDialogClose],
                    host: { 'data-slot': 'dialog-close' },
                }]
        }] });

class HlmDialogContent {
    _dialogRef = inject(BrnDialogRef);
    _dialogContext = injectBrnDialogContext({ optional: true });
    showCloseButton = input(this._dialogContext?.$showCloseButton ?? true, { ...(ngDevMode ? { debugName: "showCloseButton" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    state = computed(() => this._dialogRef?.state() ?? 'closed', ...(ngDevMode ? [{ debugName: "state" }] : /* istanbul ignore next */ []));
    component = this._dialogContext?.$component;
    _dynamicComponentClass = this._dialogContext?.$dynamicComponentClass;
    constructor() {
        classes(() => [
            'bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 ring-foreground/5 grid max-w-[calc(100%-2rem)] gap-6 rounded-4xl p-6 text-sm ring-1 duration-100 sm:max-w-md relative mx-auto w-full outline-none sm:mx-0',
            this._dynamicComponentClass,
        ]);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDialogContent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.11", type: HlmDialogContent, isStandalone: true, selector: "hlm-dialog-content", inputs: { showCloseButton: { classPropertyName: "showCloseButton", publicName: "showCloseButton", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "data-slot": "dialog-content" }, properties: { "attr.data-state": "state()" } }, providers: [provideIcons({ lucideX })], ngImport: i0, template: `
    @if (component) {
      <ng-container [ngComponentOutlet]="component" />
    } @else {
      <ng-content />
    }

    @if (showCloseButton()) {
      <button hlmBtn variant="ghost" size="icon-sm" class="absolute end-4 top-4" hlmDialogClose>
        <span class="sr-only">close</span>
        <ng-icon name="lucideX" />
      </button>
    }
  `, isInline: true, dependencies: [{ kind: "directive", type: NgComponentOutlet, selector: "[ngComponentOutlet]", inputs: ["ngComponentOutlet", "ngComponentOutletInputs", "ngComponentOutletInjector", "ngComponentOutletEnvironmentInjector", "ngComponentOutletContent", "ngComponentOutletNgModule"], exportAs: ["ngComponentOutlet"] }, { kind: "directive", type: HlmButton, selector: "button[hlmBtn], a[hlmBtn]", inputs: ["variant", "size"], exportAs: ["hlmBtn"] }, { kind: "directive", type: HlmDialogClose, selector: "button[hlmDialogClose]" }, { kind: "component", type: NgIcon, selector: "ng-icon", inputs: ["name", "svg", "size", "strokeWidth", "color"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDialogContent, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-dialog-content',
                    imports: [NgComponentOutlet, HlmButton, HlmDialogClose, NgIcon],
                    providers: [provideIcons({ lucideX })],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        'data-slot': 'dialog-content',
                        '[attr.data-state]': 'state()',
                    },
                    template: `
    @if (component) {
      <ng-container [ngComponentOutlet]="component" />
    } @else {
      <ng-content />
    }

    @if (showCloseButton()) {
      <button hlmBtn variant="ghost" size="icon-sm" class="absolute end-4 top-4" hlmDialogClose>
        <span class="sr-only">close</span>
        <ng-icon name="lucideX" />
      </button>
    }
  `,
                }]
        }], ctorParameters: () => [], propDecorators: { showCloseButton: [{ type: i0.Input, args: [{ isSignal: true, alias: "showCloseButton", required: false }] }] } });

class HlmDialogDescription {
    constructor() {
        classes(() => 'text-muted-foreground *:[a]:hover:text-foreground text-sm *:[a]:underline *:[a]:underline-offset-3');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDialogDescription, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmDialogDescription, isStandalone: true, selector: "[hlmDialogDescription]", host: { attributes: { "data-slot": "dialog-description" } }, hostDirectives: [{ directive: i1.BrnDialogDescription }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDialogDescription, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmDialogDescription]',
                    hostDirectives: [BrnDialogDescription],
                    host: { 'data-slot': 'dialog-description' },
                }]
        }], ctorParameters: () => [] });

class HlmDialogFooter {
    constructor() {
        classes(() => 'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDialogFooter, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmDialogFooter, isStandalone: true, selector: "[hlmDialogFooter],hlm-dialog-footer", host: { attributes: { "data-slot": "dialog-footer" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDialogFooter, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmDialogFooter],hlm-dialog-footer',
                    host: { 'data-slot': 'dialog-footer' },
                }]
        }], ctorParameters: () => [] });

class HlmDialogHeader {
    constructor() {
        classes(() => 'gap-2 flex flex-col');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDialogHeader, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmDialogHeader, isStandalone: true, selector: "[hlmDialogHeader],hlm-dialog-header", host: { attributes: { "data-slot": "dialog-header" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDialogHeader, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmDialogHeader],hlm-dialog-header',
                    host: { 'data-slot': 'dialog-header' },
                }]
        }], ctorParameters: () => [] });

class HlmDialogPortal {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDialogPortal, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmDialogPortal, isStandalone: true, selector: "[hlmDialogPortal]", hostDirectives: [{ directive: i1.BrnDialogContent, inputs: ["context", "context", "class", "class"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDialogPortal, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmDialogPortal]',
                    hostDirectives: [{ directive: BrnDialogContent, inputs: ['context', 'class'] }],
                }]
        }] });

class HlmDialogTitle {
    constructor() {
        classes(() => 'text-base leading-none font-medium');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDialogTitle, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmDialogTitle, isStandalone: true, selector: "[hlmDialogTitle]", host: { attributes: { "data-slot": "dialog-title" } }, hostDirectives: [{ directive: i1.BrnDialogTitle }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDialogTitle, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmDialogTitle]',
                    hostDirectives: [BrnDialogTitle],
                    host: { 'data-slot': 'dialog-title' },
                }]
        }], ctorParameters: () => [] });

class HlmDialogTrigger {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDialogTrigger, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmDialogTrigger, isStandalone: true, selector: "button[hlmDialogTrigger],button[hlmDialogTriggerFor]", host: { attributes: { "data-slot": "dialog-trigger" } }, hostDirectives: [{ directive: i1.BrnDialogTrigger, inputs: ["id", "id", "brnDialogTriggerFor", "hlmDialogTriggerFor", "type", "type"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDialogTrigger, decorators: [{
            type: Directive,
            args: [{
                    selector: 'button[hlmDialogTrigger],button[hlmDialogTriggerFor]',
                    hostDirectives: [{ directive: BrnDialogTrigger, inputs: ['id', 'brnDialogTriggerFor: hlmDialogTriggerFor', 'type'] }],
                    host: { 'data-slot': 'dialog-trigger' },
                }]
        }] });

class HlmDialogService {
    _brnDialogService = inject(BrnDialogService);
    open(component, options) {
        const mergedOptions = {
            ...(options ?? {}),
            backdropClass: cssClassesToArray(`${hlmDialogOverlayClass} ${options?.backdropClass ?? ''}`),
            context: {
                ...(options?.context && typeof options.context === 'object' ? options.context : {}),
                $component: component,
                $dynamicComponentClass: options?.contentClass,
                $showCloseButton: options?.showCloseButton,
            },
        };
        return this._brnDialogService.open(HlmDialogContent, undefined, mergedOptions.context, mergedOptions);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDialogService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDialogService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDialogService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

const HlmDialogImports = [
    HlmDialog,
    HlmDialogContent,
    HlmDialogDescription,
    HlmDialogFooter,
    HlmDialogHeader,
    HlmDialogOverlay,
    HlmDialogPortal,
    HlmDialogTitle,
    HlmDialogTrigger,
    HlmDialogClose,
];

/**
 * Generated bundle index. Do not edit.
 */

export { HlmDialog, HlmDialogClose, HlmDialogContent, HlmDialogDescription, HlmDialogFooter, HlmDialogHeader, HlmDialogImports, HlmDialogOverlay, HlmDialogPortal, HlmDialogService, HlmDialogTitle, HlmDialogTrigger, hlmDialogOverlayClass };
//# sourceMappingURL=gosamply-ui-dialog.mjs.map
