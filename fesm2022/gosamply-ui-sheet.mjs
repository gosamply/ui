import * as i0 from '@angular/core';
import { input, computed, effect, untracked, Directive, forwardRef, ChangeDetectionStrategy, Component, signal, inject, Renderer2, ElementRef, booleanAttribute } from '@angular/core';
import { BrnDialog, provideBrnDialogDefaultOptions } from '@spartan-ng/brain/dialog';
import * as i1 from '@spartan-ng/brain/sheet';
import { BrnSheetOverlay, BrnSheet, BrnSheetClose, BrnSheetDescription, BrnSheetContent, BrnSheetTitle, BrnSheetTrigger } from '@spartan-ng/brain/sheet';
import { injectCustomClassSettable, injectExposesStateProvider, injectExposedSideProvider } from '@spartan-ng/brain/core';
import { hlm, classes } from '@gosamply/ui/utils';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';
import { HlmButton } from '@gosamply/ui/button';

class HlmSheetOverlay {
    _classSettable = injectCustomClassSettable({ optional: true, host: true });
    userClass = input('', { ...(ngDevMode ? { debugName: "userClass" } : /* istanbul ignore next */ {}), alias: 'class' });
    _computedClass = computed(() => hlm('data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 isolate bg-black/80 duration-100 supports-backdrop-filter:backdrop-blur-xs', this.userClass()), ...(ngDevMode ? [{ debugName: "_computedClass" }] : /* istanbul ignore next */ []));
    constructor() {
        effect(() => {
            const classValue = this._computedClass();
            untracked(() => this._classSettable?.setClassToCustomElement(classValue));
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSheetOverlay, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.11", type: HlmSheetOverlay, isStandalone: true, selector: "[hlmSheetOverlay],hlm-sheet-overlay", inputs: { userClass: { classPropertyName: "userClass", publicName: "class", isSignal: true, isRequired: false, transformFunction: null } }, hostDirectives: [{ directive: i1.BrnSheetOverlay }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSheetOverlay, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmSheetOverlay],hlm-sheet-overlay',
                    hostDirectives: [BrnSheetOverlay],
                }]
        }], ctorParameters: () => [], propDecorators: { userClass: [{ type: i0.Input, args: [{ isSignal: true, alias: "class", required: false }] }] } });

class HlmSheet extends BrnSheet {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSheet, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.11", type: HlmSheet, isStandalone: true, selector: "hlm-sheet", providers: [
            {
                provide: BrnDialog,
                useExisting: forwardRef(() => BrnSheet),
            },
            {
                provide: BrnSheet,
                useExisting: forwardRef(() => HlmSheet),
            },
            provideBrnDialogDefaultOptions({
            // add custom options here
            }),
        ], exportAs: ["hlmSheet"], usesInheritance: true, ngImport: i0, template: `
    <hlm-sheet-overlay />
    <ng-content />
  `, isInline: true, dependencies: [{ kind: "directive", type: HlmSheetOverlay, selector: "[hlmSheetOverlay],hlm-sheet-overlay", inputs: ["class"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSheet, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-sheet',
                    exportAs: 'hlmSheet',
                    imports: [HlmSheetOverlay],
                    providers: [
                        {
                            provide: BrnDialog,
                            useExisting: forwardRef(() => BrnSheet),
                        },
                        {
                            provide: BrnSheet,
                            useExisting: forwardRef(() => HlmSheet),
                        },
                        provideBrnDialogDefaultOptions({
                        // add custom options here
                        }),
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: `
    <hlm-sheet-overlay />
    <ng-content />
  `,
                }]
        }] });

class HlmSheetClose {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSheetClose, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSheetClose, isStandalone: true, selector: "button[hlmSheetClose]", host: { attributes: { "data-slot": "sheet-close" } }, hostDirectives: [{ directive: i1.BrnSheetClose }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSheetClose, decorators: [{
            type: Directive,
            args: [{
                    selector: 'button[hlmSheetClose]',
                    hostDirectives: [BrnSheetClose],
                    host: { 'data-slot': 'sheet-close' },
                }]
        }] });

class HlmSheetContent {
    _stateProvider = injectExposesStateProvider({ host: true });
    _sideProvider = injectExposedSideProvider({ host: true });
    state = this._stateProvider.state ?? signal('closed');
    _renderer = inject(Renderer2);
    _element = inject(ElementRef);
    showCloseButton = input(true, { ...(ngDevMode ? { debugName: "showCloseButton" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    constructor() {
        classes(() => [
            'bg-popover text-popover-foreground fixed flex flex-col bg-clip-padding text-sm shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm',
            'data-open:animate-in data-closed:animate-out',
            'data-[side=top]:data-closed:slide-out-to-top data-[side=top]:data-open:slide-in-from-top',
            'data-[side=bottom]:data-closed:slide-out-to-bottom data-[side=bottom]:data-open:slide-in-from-bottom',
            'data-[side=left]:data-closed:slide-out-to-left data-[side=left]:data-open:slide-in-from-left',
            'data-[side=right]:data-closed:slide-out-to-right data-[side=right]:data-open:slide-in-from-right',
        ]);
        effect(() => {
            this._renderer.setAttribute(this._element.nativeElement, 'data-state', this.state());
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSheetContent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.11", type: HlmSheetContent, isStandalone: true, selector: "hlm-sheet-content", inputs: { showCloseButton: { classPropertyName: "showCloseButton", publicName: "showCloseButton", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "data-slot": "sheet-content" }, properties: { "attr.data-side": "_sideProvider.side()", "attr.data-state": "state()" } }, providers: [provideIcons({ lucideX })], ngImport: i0, template: `
    <ng-content />

    @if (showCloseButton()) {
      <button hlmBtn variant="ghost" size="icon-sm" class="absolute end-4 top-4" hlmSheetClose>
        <span class="sr-only">Close</span>
        <ng-icon name="lucideX" />
      </button>
    }
  `, isInline: true, dependencies: [{ kind: "directive", type: HlmButton, selector: "button[hlmBtn], a[hlmBtn]", inputs: ["variant", "size"], exportAs: ["hlmBtn"] }, { kind: "directive", type: HlmSheetClose, selector: "button[hlmSheetClose]" }, { kind: "component", type: NgIcon, selector: "ng-icon", inputs: ["name", "svg", "size", "strokeWidth", "color"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSheetContent, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-sheet-content',
                    imports: [HlmButton, HlmSheetClose, NgIcon],
                    providers: [provideIcons({ lucideX })],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        'data-slot': 'sheet-content',
                        '[attr.data-side]': '_sideProvider.side()',
                        '[attr.data-state]': 'state()',
                    },
                    template: `
    <ng-content />

    @if (showCloseButton()) {
      <button hlmBtn variant="ghost" size="icon-sm" class="absolute end-4 top-4" hlmSheetClose>
        <span class="sr-only">Close</span>
        <ng-icon name="lucideX" />
      </button>
    }
  `,
                }]
        }], ctorParameters: () => [], propDecorators: { showCloseButton: [{ type: i0.Input, args: [{ isSignal: true, alias: "showCloseButton", required: false }] }] } });

class HlmSheetDescription {
    constructor() {
        classes(() => 'text-muted-foreground text-sm');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSheetDescription, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSheetDescription, isStandalone: true, selector: "[hlmSheetDescription]", host: { attributes: { "data-slot": "sheet-description" } }, hostDirectives: [{ directive: i1.BrnSheetDescription }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSheetDescription, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmSheetDescription]',
                    hostDirectives: [BrnSheetDescription],
                    host: { 'data-slot': 'sheet-description' },
                }]
        }], ctorParameters: () => [] });

class HlmSheetFooter {
    constructor() {
        classes(() => 'gap-2 p-6 mt-auto flex flex-col');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSheetFooter, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSheetFooter, isStandalone: true, selector: "[hlmSheetFooter],hlm-sheet-footer", host: { attributes: { "data-slot": "sheet-footer" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSheetFooter, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmSheetFooter],hlm-sheet-footer',
                    host: { 'data-slot': 'sheet-footer' },
                }]
        }], ctorParameters: () => [] });

class HlmSheetHeader {
    constructor() {
        classes(() => 'gap-1.5 p-6 flex flex-col');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSheetHeader, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSheetHeader, isStandalone: true, selector: "[hlmSheetHeader],hlm-sheet-header", host: { attributes: { "data-slot": "sheet-header" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSheetHeader, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmSheetHeader],hlm-sheet-header',
                    host: { 'data-slot': 'sheet-header' },
                }]
        }], ctorParameters: () => [] });

class HlmSheetPortal {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSheetPortal, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSheetPortal, isStandalone: true, selector: "[hlmSheetPortal]", hostDirectives: [{ directive: i1.BrnSheetContent, inputs: ["context", "context", "class", "class"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSheetPortal, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmSheetPortal]',
                    hostDirectives: [{ directive: BrnSheetContent, inputs: ['context', 'class'] }],
                }]
        }] });

class HlmSheetTitle {
    constructor() {
        classes(() => 'text-foreground text-base font-medium');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSheetTitle, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSheetTitle, isStandalone: true, selector: "[hlmSheetTitle]", host: { attributes: { "data-slot": "sheet-title" } }, hostDirectives: [{ directive: i1.BrnSheetTitle }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSheetTitle, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmSheetTitle]',
                    hostDirectives: [BrnSheetTitle],
                    host: { 'data-slot': 'sheet-title' },
                }]
        }], ctorParameters: () => [] });

class HlmSheetTrigger {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSheetTrigger, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSheetTrigger, isStandalone: true, selector: "button[hlmSheetTrigger]", host: { attributes: { "data-slot": "sheet-trigger" } }, hostDirectives: [{ directive: i1.BrnSheetTrigger, inputs: ["id", "id", "side", "side", "type", "type"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSheetTrigger, decorators: [{
            type: Directive,
            args: [{
                    selector: 'button[hlmSheetTrigger]',
                    hostDirectives: [{ directive: BrnSheetTrigger, inputs: ['id', 'side', 'type'] }],
                    host: { 'data-slot': 'sheet-trigger' },
                }]
        }] });

const HlmSheetImports = [
    HlmSheet,
    HlmSheetClose,
    HlmSheetContent,
    HlmSheetDescription,
    HlmSheetFooter,
    HlmSheetHeader,
    HlmSheetOverlay,
    HlmSheetPortal,
    HlmSheetTitle,
    HlmSheetTrigger,
];

/**
 * Generated bundle index. Do not edit.
 */

export { HlmSheet, HlmSheetClose, HlmSheetContent, HlmSheetDescription, HlmSheetFooter, HlmSheetHeader, HlmSheetImports, HlmSheetOverlay, HlmSheetPortal, HlmSheetTitle, HlmSheetTrigger };
//# sourceMappingURL=gosamply-ui-sheet.mjs.map
