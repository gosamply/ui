import * as i0 from '@angular/core';
import { InjectionToken, inject, input, Directive } from '@angular/core';
import { classes } from '@gosamply/ui/utils';

const defaultConfig = {
    size: 'default',
};
const HlmCardConfigToken = new InjectionToken('HlmCardConfig');
function provideHlmCardConfig(config) {
    return { provide: HlmCardConfigToken, useValue: { ...defaultConfig, ...config } };
}
function injectHlmCardConfig() {
    return inject(HlmCardConfigToken, { optional: true }) ?? defaultConfig;
}

class HlmCard {
    _defaultConfig = injectHlmCardConfig();
    size = input(this._defaultConfig.size, ...(ngDevMode ? [{ debugName: "size" }] : /* istanbul ignore next */ []));
    constructor() {
        classes(() => 'ring-foreground/10 bg-card text-card-foreground gap-(--card-spacing) overflow-hidden rounded-2xl py-(--card-spacing) text-sm ring-1 [--card-spacing:--spacing(6)] has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(4)] *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl group/card flex flex-col');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmCard, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.11", type: HlmCard, isStandalone: true, selector: "[hlmCard],hlm-card", inputs: { size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "data-slot": "card" }, properties: { "attr.data-size": "size()" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmCard, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmCard],hlm-card',
                    host: {
                        'data-slot': 'card',
                        '[attr.data-size]': 'size()',
                    },
                }]
        }], ctorParameters: () => [], propDecorators: { size: [{ type: i0.Input, args: [{ isSignal: true, alias: "size", required: false }] }] } });

class HlmCardAction {
    constructor() {
        classes(() => 'col-start-2 row-span-2 row-start-1 self-start justify-self-end');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmCardAction, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmCardAction, isStandalone: true, selector: "[hlmCardAction]", host: { attributes: { "data-slot": "card-action" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmCardAction, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmCardAction]',
                    host: { 'data-slot': 'card-action' },
                }]
        }], ctorParameters: () => [] });

class HlmCardContent {
    constructor() {
        classes(() => 'px-(--card-spacing)');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmCardContent, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmCardContent, isStandalone: true, selector: "[hlmCardContent]", host: { attributes: { "data-slot": "card-content" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmCardContent, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmCardContent]',
                    host: { 'data-slot': 'card-content' },
                }]
        }], ctorParameters: () => [] });

class HlmCardDescription {
    constructor() {
        classes(() => 'text-muted-foreground text-sm');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmCardDescription, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmCardDescription, isStandalone: true, selector: "[hlmCardDescription]", host: { attributes: { "data-slot": "card-description" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmCardDescription, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmCardDescription]',
                    host: { 'data-slot': 'card-description' },
                }]
        }], ctorParameters: () => [] });

class HlmCardFooter {
    constructor() {
        classes(() => 'rounded-b-xl px-(--card-spacing) [.border-t]:pt-(--card-spacing) flex items-center');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmCardFooter, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmCardFooter, isStandalone: true, selector: "[hlmCardFooter],hlm-card-footer", host: { attributes: { "data-slot": "card-footer" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmCardFooter, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmCardFooter],hlm-card-footer',
                    host: { 'data-slot': 'card-footer' },
                }]
        }], ctorParameters: () => [] });

class HlmCardHeader {
    constructor() {
        classes(() => 'gap-2 rounded-t-xl px-(--card-spacing) [.border-b]:pb-(--card-spacing) group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmCardHeader, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmCardHeader, isStandalone: true, selector: "[hlmCardHeader],hlm-card-header", host: { attributes: { "data-slot": "card-header" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmCardHeader, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmCardHeader],hlm-card-header',
                    host: { 'data-slot': 'card-header' },
                }]
        }], ctorParameters: () => [] });

class HlmCardTitle {
    constructor() {
        classes(() => 'text-base font-medium');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmCardTitle, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmCardTitle, isStandalone: true, selector: "[hlmCardTitle]", host: { attributes: { "data-slot": "card-title" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmCardTitle, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmCardTitle]',
                    host: { 'data-slot': 'card-title' },
                }]
        }], ctorParameters: () => [] });

const HlmCardImports = [
    HlmCard,
    HlmCardAction,
    HlmCardContent,
    HlmCardDescription,
    HlmCardFooter,
    HlmCardHeader,
    HlmCardTitle,
];

/**
 * Generated bundle index. Do not edit.
 */

export { HlmCard, HlmCardAction, HlmCardContent, HlmCardDescription, HlmCardFooter, HlmCardHeader, HlmCardImports, HlmCardTitle };
//# sourceMappingURL=gosamply-ui-card.mjs.map
