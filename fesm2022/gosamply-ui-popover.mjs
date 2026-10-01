import * as i0 from '@angular/core';
import { Directive, signal, inject, Renderer2, ElementRef, effect } from '@angular/core';
import * as i1 from '@spartan-ng/brain/popover';
import { BrnPopover, BrnPopoverContent, BrnPopoverTrigger } from '@spartan-ng/brain/popover';
import { injectExposesStateProvider } from '@spartan-ng/brain/core';
import { classes } from '@gosamply/ui/utils';

class HlmPopover {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmPopover, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmPopover, isStandalone: true, selector: "[hlmPopover],hlm-popover", host: { attributes: { "data-slot": "popover" } }, hostDirectives: [{ directive: i1.BrnPopover, inputs: ["align", "align", "attachTo", "attachTo", "autoFocus", "autoFocus", "closeOnOutsidePointerEvents", "closeOnOutsidePointerEvents", "offsetX", "offsetX", "scrollStrategy", "scrollStrategy", "sideOffset", "sideOffset", "state", "state"], outputs: ["stateChanged", "stateChanged", "closed", "closed"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmPopover, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmPopover],hlm-popover',
                    hostDirectives: [
                        {
                            directive: BrnPopover,
                            inputs: ['align', 'attachTo', 'autoFocus', 'closeOnOutsidePointerEvents', 'offsetX', 'scrollStrategy', 'sideOffset', 'state'],
                            outputs: ['stateChanged', 'closed'],
                        },
                    ],
                    host: { 'data-slot': 'popover' },
                }]
        }] });

class HlmPopoverContent {
    _stateProvider = injectExposesStateProvider({ host: true });
    state = this._stateProvider.state ?? signal('closed');
    _renderer = inject(Renderer2);
    _element = inject(ElementRef);
    constructor() {
        effect(() => {
            this._renderer.setAttribute(this._element.nativeElement, 'data-state', this.state());
        });
        classes(() => 'bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/5 gap-4 rounded-2xl p-4 text-sm shadow-2xl ring-1 duration-100 relative flex w-72 flex-col outline-none');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmPopoverContent, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmPopoverContent, isStandalone: true, selector: "[hlmPopoverContent],hlm-popover-content", host: { attributes: { "data-slot": "popover-content" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmPopoverContent, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmPopoverContent],hlm-popover-content',
                    host: { 'data-slot': 'popover-content' },
                }]
        }], ctorParameters: () => [] });

class HlmPopoverDescription {
    constructor() {
        classes(() => 'text-muted-foreground');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmPopoverDescription, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmPopoverDescription, isStandalone: true, selector: "[hlmPopoverDescription]", host: { attributes: { "data-slot": "popover-description" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmPopoverDescription, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmPopoverDescription]',
                    host: { 'data-slot': 'popover-description' },
                }]
        }], ctorParameters: () => [] });

class HlmPopoverHeader {
    constructor() {
        classes(() => 'flex flex-col gap-1 text-sm');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmPopoverHeader, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmPopoverHeader, isStandalone: true, selector: "[hlmPopoverHeader],hlm-popover-header", host: { attributes: { "data-slot": "popover-header" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmPopoverHeader, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmPopoverHeader],hlm-popover-header',
                    host: { 'data-slot': 'popover-header' },
                }]
        }], ctorParameters: () => [] });

class HlmPopoverPortal {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmPopoverPortal, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmPopoverPortal, isStandalone: true, selector: "[hlmPopoverPortal]", hostDirectives: [{ directive: i1.BrnPopoverContent, inputs: ["context", "context", "class", "class"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmPopoverPortal, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmPopoverPortal]',
                    hostDirectives: [{ directive: BrnPopoverContent, inputs: ['context', 'class'] }],
                }]
        }] });

class HlmPopoverTitle {
    constructor() {
        classes(() => 'text-base font-medium');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmPopoverTitle, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmPopoverTitle, isStandalone: true, selector: "[hlmPopoverTitle]", host: { attributes: { "data-slot": "popover-title" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmPopoverTitle, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmPopoverTitle]',
                    host: { 'data-slot': 'popover-title' },
                }]
        }], ctorParameters: () => [] });

class HlmPopoverTrigger {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmPopoverTrigger, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmPopoverTrigger, isStandalone: true, selector: "button[hlmPopoverTrigger],button[hlmPopoverTriggerFor]", host: { attributes: { "data-slot": "popover-trigger" } }, hostDirectives: [{ directive: i1.BrnPopoverTrigger, inputs: ["id", "id", "brnPopoverTriggerFor", "hlmPopoverTriggerFor", "type", "type"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmPopoverTrigger, decorators: [{
            type: Directive,
            args: [{
                    selector: 'button[hlmPopoverTrigger],button[hlmPopoverTriggerFor]',
                    hostDirectives: [{ directive: BrnPopoverTrigger, inputs: ['id', 'brnPopoverTriggerFor: hlmPopoverTriggerFor', 'type'] }],
                    host: { 'data-slot': 'popover-trigger' },
                }]
        }] });

const HlmPopoverImports = [
    HlmPopover,
    HlmPopoverContent,
    HlmPopoverDescription,
    HlmPopoverHeader,
    HlmPopoverPortal,
    HlmPopoverTitle,
    HlmPopoverTrigger,
];

/**
 * Generated bundle index. Do not edit.
 */

export { HlmPopover, HlmPopoverContent, HlmPopoverDescription, HlmPopoverHeader, HlmPopoverImports, HlmPopoverPortal, HlmPopoverTitle, HlmPopoverTrigger };
//# sourceMappingURL=gosamply-ui-popover.mjs.map
