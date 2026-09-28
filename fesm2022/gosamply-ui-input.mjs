import * as i0 from '@angular/core';
import { Directive } from '@angular/core';
import * as i2 from '@spartan-ng/brain/field';
import { BrnFieldControlDescribedBy } from '@spartan-ng/brain/field';
import * as i1 from '@spartan-ng/brain/input';
import { BrnInput } from '@spartan-ng/brain/input';
import { classes } from '@gosamply/ui/utils';

class HlmInput {
    constructor() {
        classes(() => 'bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 data-[matches-spartan-invalid=true]:ring-destructive/20 dark:data-[matches-spartan-invalid=true]:ring-destructive/40 data-[matches-spartan-invalid=true]:border-destructive dark:data-[matches-spartan-invalid=true]:border-destructive/50 h-9 rounded-4xl border px-3 py-1 text-base transition-colors file:h-7 file:text-sm file:font-medium focus-visible:ring-3 data-[matches-spartan-invalid=true]:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmInput, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmInput, isStandalone: true, selector: "[hlmInput]", host: { attributes: { "data-slot": "input" } }, hostDirectives: [{ directive: i1.BrnInput, inputs: ["id", "id", "forceInvalid", "forceInvalid"] }, { directive: i2.BrnFieldControlDescribedBy }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmInput, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmInput]',
                    hostDirectives: [{ directive: BrnInput, inputs: ['id', 'forceInvalid'] }, BrnFieldControlDescribedBy],
                    host: { 'data-slot': 'input' },
                }]
        }], ctorParameters: () => [] });

const HlmInputImports = [HlmInput];

/**
 * Generated bundle index. Do not edit.
 */

export { HlmInput, HlmInputImports };
//# sourceMappingURL=gosamply-ui-input.mjs.map
