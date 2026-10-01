import * as i0 from '@angular/core';
import { Directive } from '@angular/core';
import * as i1 from '@spartan-ng/brain/collapsible';
import { BrnCollapsible, BrnCollapsibleContent, BrnCollapsibleTrigger } from '@spartan-ng/brain/collapsible';
import { classes } from '@gosamply/ui/utils';

class HlmCollapsible {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmCollapsible, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmCollapsible, isStandalone: true, selector: "[hlmCollapsible],hlm-collapsible", host: { attributes: { "data-slot": "collapsible" } }, hostDirectives: [{ directive: i1.BrnCollapsible, inputs: ["expanded", "expanded", "disabled", "disabled"], outputs: ["expandedChange", "expandedChange"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmCollapsible, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmCollapsible],hlm-collapsible',
                    hostDirectives: [
                        {
                            directive: BrnCollapsible,
                            inputs: ['expanded', 'disabled'],
                            outputs: ['expandedChange'],
                        },
                    ],
                    host: { 'data-slot': 'collapsible' },
                }]
        }] });

class HlmCollapsibleContent {
    constructor() {
        classes(() => 'data-[state=closed]:hidden');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmCollapsibleContent, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmCollapsibleContent, isStandalone: true, selector: "[hlmCollapsibleContent],hlm-collapsible-content", host: { attributes: { "data-slot": "collapsible-content" } }, hostDirectives: [{ directive: i1.BrnCollapsibleContent, inputs: ["id", "id"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmCollapsibleContent, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmCollapsibleContent],hlm-collapsible-content',
                    hostDirectives: [{ directive: BrnCollapsibleContent, inputs: ['id'] }],
                    host: { 'data-slot': 'collapsible-content' },
                }]
        }], ctorParameters: () => [] });

class HlmCollapsibleTrigger {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmCollapsibleTrigger, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmCollapsibleTrigger, isStandalone: true, selector: "button[hlmCollapsibleTrigger]", host: { attributes: { "data-slot": "collapsible-trigger" } }, hostDirectives: [{ directive: i1.BrnCollapsibleTrigger, inputs: ["type", "type"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmCollapsibleTrigger, decorators: [{
            type: Directive,
            args: [{
                    selector: 'button[hlmCollapsibleTrigger]',
                    hostDirectives: [{ directive: BrnCollapsibleTrigger, inputs: ['type'] }],
                    host: { 'data-slot': 'collapsible-trigger' },
                }]
        }] });

const HlmCollapsibleImports = [HlmCollapsible, HlmCollapsibleContent, HlmCollapsibleTrigger];

/**
 * Generated bundle index. Do not edit.
 */

export { HlmCollapsible, HlmCollapsibleContent, HlmCollapsibleImports, HlmCollapsibleTrigger };
//# sourceMappingURL=gosamply-ui-collapsible.mjs.map
