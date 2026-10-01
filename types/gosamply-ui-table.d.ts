import * as i0 from '@angular/core';

declare class HlmTableContainer {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmTableContainer, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmTableContainer, "div[hlmTableContainer]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive to apply Shadcn-like styling to a <table> element.
 */
declare class HlmTable {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmTable, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmTable, "table[hlmTable]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive to apply Shadcn-like styling to a <thead> element
 * within an HlmTable context.
 */
declare class HlmTHead {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmTHead, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmTHead, "thead[hlmTHead],thead[hlmTableHeader]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive to apply Shadcn-like styling to a <tbody> element
 * within an HlmTable context.
 */
declare class HlmTBody {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmTBody, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmTBody, "tbody[hlmTBody],tbody[hlmTableBody]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive to apply Shadcn-like styling to a <tfoot> element
 * within an HlmTable context.
 */
declare class HlmTFoot {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmTFoot, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmTFoot, "tfoot[hlmTFoot],tfoot[hlmTableFooter]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive to apply Shadcn-like styling to a <tr> element
 * within an HlmTable context.
 */
declare class HlmTr {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmTr, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmTr, "tr[hlmTr],tr[hlmTableRow]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive to apply Shadcn-like styling to a <th> element
 * within an HlmTable context.
 */
declare class HlmTh {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmTh, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmTh, "th[hlmTh],th[hlmTableHead]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive to apply Shadcn-like styling to a <td> element
 * within an HlmTable context.
 */
declare class HlmTd {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmTd, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmTd, "td[hlmTd],td[hlmTableCell]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive to apply Shadcn-like styling to a <caption> element
 * within an HlmTable context.
 */
declare class HlmCaption {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmCaption, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmCaption, "caption[hlmCaption],caption[hlmTableCaption]", never, {}, {}, never, never, true, never>;
}

declare const HlmTableImports: readonly [typeof HlmCaption, typeof HlmTableContainer, typeof HlmTable, typeof HlmTBody, typeof HlmTd, typeof HlmTFoot, typeof HlmTh, typeof HlmTHead, typeof HlmTr];

export { HlmCaption, HlmTBody, HlmTFoot, HlmTHead, HlmTable, HlmTableContainer, HlmTableImports, HlmTd, HlmTh, HlmTr };
