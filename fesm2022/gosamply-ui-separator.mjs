import * as i0 from '@angular/core';
import { Directive } from '@angular/core';
import * as i1 from '@spartan-ng/brain/separator';
import { BrnSeparator } from '@spartan-ng/brain/separator';
import { classes } from '@gosamply/ui/utils';

const hlmSeparatorClass = 'inline-flex shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch';
class HlmSeparator {
    constructor() {
        classes(() => hlmSeparatorClass);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSeparator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSeparator, isStandalone: true, selector: "[hlmSeparator],hlm-separator", host: { attributes: { "data-slot": "separator" } }, hostDirectives: [{ directive: i1.BrnSeparator, inputs: ["orientation", "orientation", "decorative", "decorative"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSeparator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmSeparator],hlm-separator',
                    hostDirectives: [{ directive: BrnSeparator, inputs: ['orientation', 'decorative'] }],
                    host: {
                        'data-slot': 'separator',
                    },
                }]
        }], ctorParameters: () => [] });

const HlmSeparatorImports = [HlmSeparator];

/**
 * Generated bundle index. Do not edit.
 */

export { HlmSeparator, HlmSeparatorImports, hlmSeparatorClass };
//# sourceMappingURL=gosamply-ui-separator.mjs.map
