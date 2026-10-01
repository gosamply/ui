import * as i0 from '@angular/core';
import { Directive } from '@angular/core';
import * as i1 from '@spartan-ng/brain/label';
import { BrnLabel } from '@spartan-ng/brain/label';
import { classes } from '@gosamply/ui/utils';

class HlmLabel {
    constructor() {
        classes(() => 'gap-2 text-sm leading-none font-medium group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmLabel, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmLabel, isStandalone: true, selector: "[hlmLabel]", host: { attributes: { "data-slot": "label" } }, hostDirectives: [{ directive: i1.BrnLabel, inputs: ["id", "id", "for", "for"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmLabel, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmLabel]',
                    hostDirectives: [{ directive: BrnLabel, inputs: ['id', 'for'] }],
                    host: { 'data-slot': 'label' },
                }]
        }], ctorParameters: () => [] });

const HlmLabelImports = [HlmLabel];

/**
 * Generated bundle index. Do not edit.
 */

export { HlmLabel, HlmLabelImports };
//# sourceMappingURL=gosamply-ui-label.mjs.map
