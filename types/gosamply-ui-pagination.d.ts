import * as _angular_core from '@angular/core';
import { NumberInput, BooleanInput } from '@angular/cdk/coercion';
import * as _angular_router from '@angular/router';
import { ClassValue } from 'clsx';

declare class HlmNumberedPagination {
    /**
     * The current (active) page.
     */
    readonly currentPage: _angular_core.ModelSignal<number>;
    /**
     * The number of items per paginated page.
     */
    readonly itemsPerPage: _angular_core.ModelSignal<number>;
    /**
     * The total number of items in the collection. Only useful when
     * doing server-side paging, where the collection size is limited
     * to a single page returned by the server API.
     */
    readonly totalItems: _angular_core.InputSignalWithTransform<number, NumberInput>;
    /**
     * The number of page links to show.
     */
    readonly maxSize: _angular_core.InputSignalWithTransform<number, NumberInput>;
    /**
     * Show the first and last page buttons.
     */
    readonly showEdges: _angular_core.InputSignalWithTransform<boolean, BooleanInput>;
    /**
     * The page sizes to show.
     * Defaults to [10, 20, 50, 100]
     */
    readonly pageSizes: _angular_core.InputSignal<number[]>;
    protected readonly _pageSizesWithCurrent: _angular_core.Signal<number[]>;
    protected readonly _isFirstPageActive: _angular_core.Signal<boolean>;
    protected readonly _isLastPageActive: _angular_core.Signal<boolean>;
    protected readonly _lastPageNumber: _angular_core.Signal<number>;
    protected readonly _pages: _angular_core.Signal<Page[]>;
    protected goToPrevious(): void;
    protected goToNext(): void;
    protected goToFirst(): void;
    protected goToLast(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<HlmNumberedPagination, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<HlmNumberedPagination, "hlm-numbered-pagination", never, { "currentPage": { "alias": "currentPage"; "required": true; "isSignal": true; }; "itemsPerPage": { "alias": "itemsPerPage"; "required": true; "isSignal": true; }; "totalItems": { "alias": "totalItems"; "required": true; "isSignal": true; }; "maxSize": { "alias": "maxSize"; "required": false; "isSignal": true; }; "showEdges": { "alias": "showEdges"; "required": false; "isSignal": true; }; "pageSizes": { "alias": "pageSizes"; "required": false; "isSignal": true; }; }, { "currentPage": "currentPageChange"; "itemsPerPage": "itemsPerPageChange"; }, never, never, true, never>;
}
type Page = number | '...';
/**
 * Checks that the instance.currentPage property is within bounds for the current page range.
 * If not, return a correct value for currentPage, or the current value if OK.
 *
 * Copied from 'ngx-pagination' package
 */
declare function outOfBoundCorrection(totalItems: number, itemsPerPage: number, currentPage: number): number;
/**
 * Returns an array of Page objects to use in the pagination controls.
 *
 * Copied from 'ngx-pagination' package
 */
declare function createPageArray(currentPage: number, itemsPerPage: number, totalItems: number, paginationRange: number): Page[];

declare class HlmNumberedPaginationQueryParams {
    /**
     * The current (active) page.
     */
    readonly currentPage: _angular_core.ModelSignal<number>;
    /**
     * The number of items per paginated page.
     */
    readonly itemsPerPage: _angular_core.ModelSignal<number>;
    /**
     * The total number of items in the collection. Only useful when
     * doing server-side paging, where the collection size is limited
     * to a single page returned by the server API.
     */
    readonly totalItems: _angular_core.InputSignalWithTransform<number, NumberInput>;
    /**
     * The URL path to use for the pagination links.
     * Defaults to '.' (current path).
     */
    readonly link: _angular_core.InputSignal<string>;
    /**
     * The number of page links to show.
     */
    readonly maxSize: _angular_core.InputSignalWithTransform<number, NumberInput>;
    /**
     * Show the first and last page buttons.
     */
    readonly showEdges: _angular_core.InputSignalWithTransform<boolean, BooleanInput>;
    /**
     * The page sizes to show.
     * Defaults to [10, 20, 50, 100]
     */
    readonly pageSizes: _angular_core.InputSignal<number[]>;
    protected readonly _pageSizesWithCurrent: _angular_core.Signal<number[]>;
    protected readonly _isFirstPageActive: _angular_core.Signal<boolean>;
    protected readonly _isLastPageActive: _angular_core.Signal<boolean>;
    protected readonly _lastPageNumber: _angular_core.Signal<number>;
    protected readonly _pages: _angular_core.Signal<(number | "...")[]>;
    constructor();
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<HlmNumberedPaginationQueryParams, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<HlmNumberedPaginationQueryParams, "hlm-numbered-pagination-query-params", never, { "currentPage": { "alias": "currentPage"; "required": true; "isSignal": true; }; "itemsPerPage": { "alias": "itemsPerPage"; "required": true; "isSignal": true; }; "totalItems": { "alias": "totalItems"; "required": true; "isSignal": true; }; "link": { "alias": "link"; "required": false; "isSignal": true; }; "maxSize": { "alias": "maxSize"; "required": false; "isSignal": true; }; "showEdges": { "alias": "showEdges"; "required": false; "isSignal": true; }; "pageSizes": { "alias": "pageSizes"; "required": false; "isSignal": true; }; }, { "currentPage": "currentPageChange"; "itemsPerPage": "itemsPerPageChange"; }, never, never, true, never>;
}

declare class HlmPagination {
    /** The aria-label for the pagination component. */
    readonly ariaLabel: _angular_core.InputSignal<string>;
    constructor();
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<HlmPagination, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<HlmPagination, "[hlmPagination],hlm-pagination", never, { "ariaLabel": { "alias": "aria-label"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class HlmPaginationContent {
    constructor();
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<HlmPaginationContent, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<HlmPaginationContent, "ul[hlmPaginationContent]", never, {}, {}, never, never, true, never>;
}

declare class HlmPaginationEllipsis {
    /** Screen reader only text for the ellipsis */
    readonly srOnlyText: _angular_core.InputSignal<string>;
    constructor();
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<HlmPaginationEllipsis, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<HlmPaginationEllipsis, "hlm-pagination-ellipsis", never, { "srOnlyText": { "alias": "srOnlyText"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class HlmPaginationItem {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<HlmPaginationItem, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<HlmPaginationItem, "li[hlmPaginationItem]", never, {}, {}, never, never, true, never>;
}

declare class HlmPaginationLink {
    /** Whether the link is active (i.e., the current page). */
    readonly isActive: _angular_core.InputSignalWithTransform<boolean, BooleanInput>;
    /** The size of the button. */
    readonly size: _angular_core.InputSignal<"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg" | null | undefined>;
    /** The link to navigate to the page. */
    readonly link: _angular_core.InputSignal<string | readonly any[] | _angular_router.UrlTree | null | undefined>;
    constructor();
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<HlmPaginationLink, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<HlmPaginationLink, "[hlmPaginationLink]", never, { "isActive": { "alias": "isActive"; "required": false; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "link": { "alias": "link"; "required": false; "isSignal": true; }; }, {}, never, never, true, [{ directive: typeof _angular_router.RouterLink; inputs: { "target": "target"; "queryParams": "queryParams"; "fragment": "fragment"; "queryParamsHandling": "queryParamsHandling"; "state": "state"; "info": "info"; "relativeTo": "relativeTo"; "preserveFragment": "preserveFragment"; "skipLocationChange": "skipLocationChange"; "replaceUrl": "replaceUrl"; "routerLink": "link"; }; outputs: {}; }]>;
}

declare class HlmPaginationNext {
    readonly userClass: _angular_core.InputSignal<ClassValue>;
    /** The link to navigate to the next page. */
    readonly link: _angular_core.InputSignal<string | readonly any[] | _angular_router.UrlTree | null | undefined>;
    /** The query parameters to pass to the next page. */
    readonly queryParams: _angular_core.InputSignal<_angular_router.Params | null | undefined>;
    /** How to handle query parameters when navigating to the next page. */
    readonly queryParamsHandling: _angular_core.InputSignal<_angular_router.QueryParamsHandling | null | undefined>;
    /** The aria-label for the next page link. */
    readonly ariaLabel: _angular_core.InputSignal<string>;
    /** The text to display for the next page link. */
    readonly text: _angular_core.InputSignal<string>;
    /** Whether the button should only display the icon. */
    readonly iconOnly: _angular_core.InputSignalWithTransform<boolean, BooleanInput>;
    protected readonly _labelClass: _angular_core.Signal<"sr-only" | "hidden sm:block">;
    protected readonly _size: _angular_core.Signal<"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg" | null | undefined>;
    protected readonly _computedClass: _angular_core.Signal<string>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<HlmPaginationNext, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<HlmPaginationNext, "hlm-pagination-next", never, { "userClass": { "alias": "class"; "required": false; "isSignal": true; }; "link": { "alias": "link"; "required": false; "isSignal": true; }; "queryParams": { "alias": "queryParams"; "required": false; "isSignal": true; }; "queryParamsHandling": { "alias": "queryParamsHandling"; "required": false; "isSignal": true; }; "ariaLabel": { "alias": "aria-label"; "required": false; "isSignal": true; }; "text": { "alias": "text"; "required": false; "isSignal": true; }; "iconOnly": { "alias": "iconOnly"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class HlmPaginationPrevious {
    readonly userClass: _angular_core.InputSignal<ClassValue>;
    /** The link to navigate to the previous page. */
    readonly link: _angular_core.InputSignal<string | readonly any[] | _angular_router.UrlTree | null | undefined>;
    /** The query parameters to pass to the previous page. */
    readonly queryParams: _angular_core.InputSignal<_angular_router.Params | null | undefined>;
    /** How to handle query parameters when navigating to the previous page. */
    readonly queryParamsHandling: _angular_core.InputSignal<_angular_router.QueryParamsHandling | null | undefined>;
    /** The aria-label for the previous page link. */
    readonly ariaLabel: _angular_core.InputSignal<string>;
    /** The text to display for the previous page link. */
    readonly text: _angular_core.InputSignal<string>;
    /** Whether the button should only display the icon. */
    readonly iconOnly: _angular_core.InputSignalWithTransform<boolean, BooleanInput>;
    protected readonly _labelClass: _angular_core.Signal<string>;
    protected readonly _size: _angular_core.Signal<"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg" | null | undefined>;
    protected readonly _computedClass: _angular_core.Signal<string>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<HlmPaginationPrevious, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<HlmPaginationPrevious, "hlm-pagination-previous", never, { "userClass": { "alias": "class"; "required": false; "isSignal": true; }; "link": { "alias": "link"; "required": false; "isSignal": true; }; "queryParams": { "alias": "queryParams"; "required": false; "isSignal": true; }; "queryParamsHandling": { "alias": "queryParamsHandling"; "required": false; "isSignal": true; }; "ariaLabel": { "alias": "aria-label"; "required": false; "isSignal": true; }; "text": { "alias": "text"; "required": false; "isSignal": true; }; "iconOnly": { "alias": "iconOnly"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare const HlmPaginationImports: readonly [typeof HlmPagination, typeof HlmPaginationContent, typeof HlmPaginationItem, typeof HlmPaginationLink, typeof HlmPaginationPrevious, typeof HlmPaginationNext, typeof HlmPaginationEllipsis, typeof HlmNumberedPagination, typeof HlmNumberedPaginationQueryParams];

export { HlmNumberedPagination, HlmNumberedPaginationQueryParams, HlmPagination, HlmPaginationContent, HlmPaginationEllipsis, HlmPaginationImports, HlmPaginationItem, HlmPaginationLink, HlmPaginationNext, HlmPaginationPrevious, createPageArray, outOfBoundCorrection };
