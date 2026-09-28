import * as i0 from '@angular/core';
import { Directive } from '@angular/core';
import * as i2 from '@spartan-ng/brain/field';
import { BrnFieldControlDescribedBy } from '@spartan-ng/brain/field';
import * as i1 from '@spartan-ng/brain/textarea';
import { BrnTextarea } from '@spartan-ng/brain/textarea';
import { classes } from '@gosamply/ui/utils';

class HlmTextarea {
    constructor() {
        classes(() => 'border-input bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 data-[matches-spartan-invalid=true]:ring-destructive/20 dark:data-[matches-spartan-invalid=true]:ring-destructive/40 data-[matches-spartan-invalid=true]:border-destructive dark:data-[matches-spartan-invalid=true]:border-destructive/50 resize-none rounded-xl border px-3 py-3 text-base transition-colors focus-visible:ring-3 data-[matches-spartan-invalid=true]:ring-3 md:text-sm placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmTextarea, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmTextarea, isStandalone: true, selector: "[hlmTextarea]", host: { attributes: { "data-slot": "textarea" } }, hostDirectives: [{ directive: i1.BrnTextarea, inputs: ["id", "id", "forceInvalid", "forceInvalid"] }, { directive: i2.BrnFieldControlDescribedBy }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmTextarea, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmTextarea]',
                    hostDirectives: [{ directive: BrnTextarea, inputs: ['id', 'forceInvalid'] }, BrnFieldControlDescribedBy],
                    host: { 'data-slot': 'textarea' },
                }]
        }], ctorParameters: () => [] });

const HlmTextareaImports = [HlmTextarea];

/**
 * Generated bundle index. Do not edit.
 */

export { HlmTextarea, HlmTextareaImports };
//# sourceMappingURL=gosamply-ui-textarea.mjs.map
