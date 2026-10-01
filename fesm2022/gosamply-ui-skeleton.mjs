import * as i0 from '@angular/core';
import { Directive } from '@angular/core';
import { classes } from '@gosamply/ui/utils';

class HlmSkeleton {
    constructor() {
        classes(() => 'bg-muted rounded-xl block motion-safe:animate-pulse');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSkeleton, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSkeleton, isStandalone: true, selector: "[hlmSkeleton],hlm-skeleton", host: { attributes: { "data-slot": "skeleton" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSkeleton, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmSkeleton],hlm-skeleton',
                    host: {
                        'data-slot': 'skeleton',
                    },
                }]
        }], ctorParameters: () => [] });

const HlmSkeletonImports = [HlmSkeleton];

/**
 * Generated bundle index. Do not edit.
 */

export { HlmSkeleton, HlmSkeletonImports };
//# sourceMappingURL=gosamply-ui-skeleton.mjs.map
