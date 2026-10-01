import * as i0 from '@angular/core';
import { Directive } from '@angular/core';
import { classes } from '@gosamply/ui/utils';

class HlmTableContainer {
    constructor() {
        classes(() => 'relative w-full overflow-x-auto');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmTableContainer, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmTableContainer, isStandalone: true, selector: "div[hlmTableContainer]", host: { attributes: { "data-slot": "table-container" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmTableContainer, decorators: [{
            type: Directive,
            args: [{
                    selector: 'div[hlmTableContainer]',
                    host: { 'data-slot': 'table-container' },
                }]
        }], ctorParameters: () => [] });
/**
 * Directive to apply Shadcn-like styling to a <table> element.
 */
class HlmTable {
    constructor() {
        classes(() => 'w-full caption-bottom text-sm');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmTable, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmTable, isStandalone: true, selector: "table[hlmTable]", host: { attributes: { "data-slot": "table" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmTable, decorators: [{
            type: Directive,
            args: [{
                    selector: 'table[hlmTable]',
                    host: { 'data-slot': 'table' },
                }]
        }], ctorParameters: () => [] });
/**
 * Directive to apply Shadcn-like styling to a <thead> element
 * within an HlmTable context.
 */
class HlmTHead {
    constructor() {
        classes(() => '[&_tr]:border-b');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmTHead, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmTHead, isStandalone: true, selector: "thead[hlmTHead],thead[hlmTableHeader]", host: { attributes: { "data-slot": "table-header" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmTHead, decorators: [{
            type: Directive,
            args: [{
                    selector: 'thead[hlmTHead],thead[hlmTableHeader]',
                    host: { 'data-slot': 'table-header' },
                }]
        }], ctorParameters: () => [] });
/**
 * Directive to apply Shadcn-like styling to a <tbody> element
 * within an HlmTable context.
 */
class HlmTBody {
    constructor() {
        classes(() => '[&_tr:last-child]:border-0');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmTBody, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmTBody, isStandalone: true, selector: "tbody[hlmTBody],tbody[hlmTableBody]", host: { attributes: { "data-slot": "table-body" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmTBody, decorators: [{
            type: Directive,
            args: [{
                    selector: 'tbody[hlmTBody],tbody[hlmTableBody]',
                    host: { 'data-slot': 'table-body' },
                }]
        }], ctorParameters: () => [] });
/**
 * Directive to apply Shadcn-like styling to a <tfoot> element
 * within an HlmTable context.
 */
class HlmTFoot {
    constructor() {
        classes(() => 'bg-muted/50 border-t font-medium [&>tr]:last:border-b-0');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmTFoot, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmTFoot, isStandalone: true, selector: "tfoot[hlmTFoot],tfoot[hlmTableFooter]", host: { attributes: { "data-slot": "table-footer" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmTFoot, decorators: [{
            type: Directive,
            args: [{
                    selector: 'tfoot[hlmTFoot],tfoot[hlmTableFooter]',
                    host: { 'data-slot': 'table-footer' },
                }]
        }], ctorParameters: () => [] });
/**
 * Directive to apply Shadcn-like styling to a <tr> element
 * within an HlmTable context.
 */
class HlmTr {
    constructor() {
        classes(() => 'hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors has-aria-expanded:bg-muted/50');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmTr, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmTr, isStandalone: true, selector: "tr[hlmTr],tr[hlmTableRow]", host: { attributes: { "data-slot": "table-row" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmTr, decorators: [{
            type: Directive,
            args: [{
                    selector: 'tr[hlmTr],tr[hlmTableRow]',
                    host: { 'data-slot': 'table-row' },
                }]
        }], ctorParameters: () => [] });
/**
 * Directive to apply Shadcn-like styling to a <th> element
 * within an HlmTable context.
 */
class HlmTh {
    constructor() {
        classes(() => 'text-foreground h-12 px-3 text-start align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pe-0');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmTh, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmTh, isStandalone: true, selector: "th[hlmTh],th[hlmTableHead]", host: { attributes: { "data-slot": "table-head" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmTh, decorators: [{
            type: Directive,
            args: [{
                    selector: 'th[hlmTh],th[hlmTableHead]',
                    host: { 'data-slot': 'table-head' },
                }]
        }], ctorParameters: () => [] });
/**
 * Directive to apply Shadcn-like styling to a <td> element
 * within an HlmTable context.
 */
class HlmTd {
    constructor() {
        classes(() => 'p-3 align-middle whitespace-nowrap [&:has([role=checkbox])]:pe-0');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmTd, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmTd, isStandalone: true, selector: "td[hlmTd],td[hlmTableCell]", host: { attributes: { "data-slot": "table-cell" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmTd, decorators: [{
            type: Directive,
            args: [{
                    selector: 'td[hlmTd],td[hlmTableCell]',
                    host: { 'data-slot': 'table-cell' },
                }]
        }], ctorParameters: () => [] });
/**
 * Directive to apply Shadcn-like styling to a <caption> element
 * within an HlmTable context.
 */
class HlmCaption {
    constructor() {
        classes(() => 'text-muted-foreground mt-4 text-sm');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmCaption, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmCaption, isStandalone: true, selector: "caption[hlmCaption],caption[hlmTableCaption]", host: { attributes: { "data-slot": "table-caption" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmCaption, decorators: [{
            type: Directive,
            args: [{
                    selector: 'caption[hlmCaption],caption[hlmTableCaption]',
                    host: { 'data-slot': 'table-caption' },
                }]
        }], ctorParameters: () => [] });

const HlmTableImports = [HlmCaption, HlmTableContainer, HlmTable, HlmTBody, HlmTd, HlmTFoot, HlmTh, HlmTHead, HlmTr];

/**
 * Generated bundle index. Do not edit.
 */

export { HlmCaption, HlmTBody, HlmTFoot, HlmTHead, HlmTable, HlmTableContainer, HlmTableImports, HlmTd, HlmTh, HlmTr };
//# sourceMappingURL=gosamply-ui-table.mjs.map
