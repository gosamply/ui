import * as i0 from '@angular/core';
import { input, Directive, ChangeDetectionStrategy, Component, booleanAttribute, computed, model, numberAttribute, untracked } from '@angular/core';
import * as i1$1 from '@gosamply/ui/select';
import { HlmSelectImports } from '@gosamply/ui/select';
import { classes, hlm } from '@gosamply/ui/utils';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideEllipsis, lucideChevronRight, lucideChevronLeft } from '@ng-icons/lucide';
import * as i1 from '@angular/router';
import { RouterLink } from '@angular/router';
import { buttonVariants } from '@gosamply/ui/button';

class HlmPagination {
    /** The aria-label for the pagination component. */
    ariaLabel = input('pagination', { ...(ngDevMode ? { debugName: "ariaLabel" } : /* istanbul ignore next */ {}), alias: 'aria-label' });
    constructor() {
        classes(() => 'mx-auto flex w-full justify-center');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmPagination, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.11", type: HlmPagination, isStandalone: true, selector: "[hlmPagination],hlm-pagination", inputs: { ariaLabel: { classPropertyName: "ariaLabel", publicName: "aria-label", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "data-slot": "pagination", "role": "navigation" }, properties: { "attr.aria-label": "ariaLabel()" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmPagination, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmPagination],hlm-pagination',
                    host: {
                        'data-slot': 'pagination',
                        role: 'navigation',
                        '[attr.aria-label]': 'ariaLabel()',
                    },
                }]
        }], ctorParameters: () => [], propDecorators: { ariaLabel: [{ type: i0.Input, args: [{ isSignal: true, alias: "aria-label", required: false }] }] } });

class HlmPaginationContent {
    constructor() {
        classes(() => 'gap-1 flex items-center');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmPaginationContent, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmPaginationContent, isStandalone: true, selector: "ul[hlmPaginationContent]", host: { attributes: { "data-slot": "pagination-content" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmPaginationContent, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ul[hlmPaginationContent]',
                    host: { 'data-slot': 'pagination-content' },
                }]
        }], ctorParameters: () => [] });

class HlmPaginationEllipsis {
    /** Screen reader only text for the ellipsis */
    srOnlyText = input('More pages', ...(ngDevMode ? [{ debugName: "srOnlyText" }] : /* istanbul ignore next */ []));
    constructor() {
        classes(() => "size-9 [&_ng-icon:not([class*='text-'])]:text-[length:--spacing(4)] flex items-center justify-center");
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmPaginationEllipsis, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "21.2.11", type: HlmPaginationEllipsis, isStandalone: true, selector: "hlm-pagination-ellipsis", inputs: { srOnlyText: { classPropertyName: "srOnlyText", publicName: "srOnlyText", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "data-slot": "pagination-ellipsis" } }, providers: [provideIcons({ lucideEllipsis })], ngImport: i0, template: `
    <ng-icon name="lucideEllipsis" />
    <span class="sr-only">{{ srOnlyText() }}</span>
  `, isInline: true, dependencies: [{ kind: "component", type: NgIcon, selector: "ng-icon", inputs: ["name", "svg", "size", "strokeWidth", "color"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmPaginationEllipsis, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-pagination-ellipsis',
                    imports: [NgIcon],
                    providers: [provideIcons({ lucideEllipsis })],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: { 'data-slot': 'pagination-ellipsis' },
                    template: `
    <ng-icon name="lucideEllipsis" />
    <span class="sr-only">{{ srOnlyText() }}</span>
  `,
                }]
        }], ctorParameters: () => [], propDecorators: { srOnlyText: [{ type: i0.Input, args: [{ isSignal: true, alias: "srOnlyText", required: false }] }] } });

class HlmPaginationItem {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmPaginationItem, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmPaginationItem, isStandalone: true, selector: "li[hlmPaginationItem]", host: { attributes: { "data-slot": "pagination-item" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmPaginationItem, decorators: [{
            type: Directive,
            args: [{
                    selector: 'li[hlmPaginationItem]',
                    host: { 'data-slot': 'pagination-item' },
                }]
        }] });

class HlmPaginationLink {
    /** Whether the link is active (i.e., the current page). */
    isActive = input(false, { ...(ngDevMode ? { debugName: "isActive" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    /** The size of the button. */
    size = input('icon', ...(ngDevMode ? [{ debugName: "size" }] : /* istanbul ignore next */ []));
    /** The link to navigate to the page. */
    link = input(...(ngDevMode ? [undefined, { debugName: "link" }] : /* istanbul ignore next */ []));
    constructor() {
        classes(() => [
            'relative',
            buttonVariants({
                variant: this.isActive() ? 'outline' : 'ghost',
                size: this.size(),
            }),
            this.link() === undefined && 'cursor-pointer',
        ]);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmPaginationLink, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.11", type: HlmPaginationLink, isStandalone: true, selector: "[hlmPaginationLink]", inputs: { isActive: { classPropertyName: "isActive", publicName: "isActive", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, link: { classPropertyName: "link", publicName: "link", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "data-slot": "pagination-link" }, properties: { "attr.data-active": "isActive() ? \"true\" : null", "attr.aria-current": "isActive() ? \"page\" : null" } }, hostDirectives: [{ directive: i1.RouterLink, inputs: ["target", "target", "queryParams", "queryParams", "fragment", "fragment", "queryParamsHandling", "queryParamsHandling", "state", "state", "info", "info", "relativeTo", "relativeTo", "preserveFragment", "preserveFragment", "skipLocationChange", "skipLocationChange", "replaceUrl", "replaceUrl", "routerLink", "link"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmPaginationLink, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmPaginationLink]',
                    hostDirectives: [
                        {
                            directive: RouterLink,
                            inputs: [
                                'target',
                                'queryParams',
                                'fragment',
                                'queryParamsHandling',
                                'state',
                                'info',
                                'relativeTo',
                                'preserveFragment',
                                'skipLocationChange',
                                'replaceUrl',
                                'routerLink: link',
                            ],
                        },
                    ],
                    host: {
                        'data-slot': 'pagination-link',
                        '[attr.data-active]': 'isActive() ? "true" : null',
                        '[attr.aria-current]': 'isActive() ? "page" : null',
                    },
                }]
        }], ctorParameters: () => [], propDecorators: { isActive: [{ type: i0.Input, args: [{ isSignal: true, alias: "isActive", required: false }] }], size: [{ type: i0.Input, args: [{ isSignal: true, alias: "size", required: false }] }], link: [{ type: i0.Input, args: [{ isSignal: true, alias: "link", required: false }] }] } });

class HlmPaginationNext {
    userClass = input('', { ...(ngDevMode ? { debugName: "userClass" } : /* istanbul ignore next */ {}), alias: 'class' });
    /** The link to navigate to the next page. */
    link = input(...(ngDevMode ? [undefined, { debugName: "link" }] : /* istanbul ignore next */ []));
    /** The query parameters to pass to the next page. */
    queryParams = input(...(ngDevMode ? [undefined, { debugName: "queryParams" }] : /* istanbul ignore next */ []));
    /** How to handle query parameters when navigating to the next page. */
    queryParamsHandling = input(...(ngDevMode ? [undefined, { debugName: "queryParamsHandling" }] : /* istanbul ignore next */ []));
    /** The aria-label for the next page link. */
    ariaLabel = input('Go to next page', { ...(ngDevMode ? { debugName: "ariaLabel" } : /* istanbul ignore next */ {}), alias: 'aria-label' });
    /** The text to display for the next page link. */
    text = input('Next', ...(ngDevMode ? [{ debugName: "text" }] : /* istanbul ignore next */ []));
    /** Whether the button should only display the icon. */
    iconOnly = input(false, { ...(ngDevMode ? { debugName: "iconOnly" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    _labelClass = computed(() => (this.iconOnly() ? 'sr-only' : 'hidden sm:block'), ...(ngDevMode ? [{ debugName: "_labelClass" }] : /* istanbul ignore next */ []));
    _size = computed(() => (this.iconOnly() ? 'icon' : 'default'), ...(ngDevMode ? [{ debugName: "_size" }] : /* istanbul ignore next */ []));
    _computedClass = computed(() => hlm(!this.iconOnly() && 'pe-2!', this.userClass()), ...(ngDevMode ? [{ debugName: "_computedClass" }] : /* istanbul ignore next */ []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmPaginationNext, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "21.2.11", type: HlmPaginationNext, isStandalone: true, selector: "hlm-pagination-next", inputs: { userClass: { classPropertyName: "userClass", publicName: "class", isSignal: true, isRequired: false, transformFunction: null }, link: { classPropertyName: "link", publicName: "link", isSignal: true, isRequired: false, transformFunction: null }, queryParams: { classPropertyName: "queryParams", publicName: "queryParams", isSignal: true, isRequired: false, transformFunction: null }, queryParamsHandling: { classPropertyName: "queryParamsHandling", publicName: "queryParamsHandling", isSignal: true, isRequired: false, transformFunction: null }, ariaLabel: { classPropertyName: "ariaLabel", publicName: "aria-label", isSignal: true, isRequired: false, transformFunction: null }, text: { classPropertyName: "text", publicName: "text", isSignal: true, isRequired: false, transformFunction: null }, iconOnly: { classPropertyName: "iconOnly", publicName: "iconOnly", isSignal: true, isRequired: false, transformFunction: null } }, providers: [provideIcons({ lucideChevronRight })], ngImport: i0, template: `
    <a
      hlmPaginationLink
      [class]="_computedClass()"
      [link]="link()"
      [queryParams]="queryParams()"
      [queryParamsHandling]="queryParamsHandling()"
      [size]="_size()"
      [attr.aria-label]="ariaLabel()"
    >
      <span [class]="_labelClass()">{{ text() }}</span>
      <ng-icon name="lucideChevronRight" class="rtl:rotate-180" />
    </a>
  `, isInline: true, dependencies: [{ kind: "directive", type: HlmPaginationLink, selector: "[hlmPaginationLink]", inputs: ["isActive", "size", "link"] }, { kind: "component", type: NgIcon, selector: "ng-icon", inputs: ["name", "svg", "size", "strokeWidth", "color"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmPaginationNext, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-pagination-next',
                    imports: [HlmPaginationLink, NgIcon],
                    providers: [provideIcons({ lucideChevronRight })],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: `
    <a
      hlmPaginationLink
      [class]="_computedClass()"
      [link]="link()"
      [queryParams]="queryParams()"
      [queryParamsHandling]="queryParamsHandling()"
      [size]="_size()"
      [attr.aria-label]="ariaLabel()"
    >
      <span [class]="_labelClass()">{{ text() }}</span>
      <ng-icon name="lucideChevronRight" class="rtl:rotate-180" />
    </a>
  `,
                }]
        }], propDecorators: { userClass: [{ type: i0.Input, args: [{ isSignal: true, alias: "class", required: false }] }], link: [{ type: i0.Input, args: [{ isSignal: true, alias: "link", required: false }] }], queryParams: [{ type: i0.Input, args: [{ isSignal: true, alias: "queryParams", required: false }] }], queryParamsHandling: [{ type: i0.Input, args: [{ isSignal: true, alias: "queryParamsHandling", required: false }] }], ariaLabel: [{ type: i0.Input, args: [{ isSignal: true, alias: "aria-label", required: false }] }], text: [{ type: i0.Input, args: [{ isSignal: true, alias: "text", required: false }] }], iconOnly: [{ type: i0.Input, args: [{ isSignal: true, alias: "iconOnly", required: false }] }] } });

class HlmPaginationPrevious {
    userClass = input('', { ...(ngDevMode ? { debugName: "userClass" } : /* istanbul ignore next */ {}), alias: 'class' });
    /** The link to navigate to the previous page. */
    link = input(...(ngDevMode ? [undefined, { debugName: "link" }] : /* istanbul ignore next */ []));
    /** The query parameters to pass to the previous page. */
    queryParams = input(...(ngDevMode ? [undefined, { debugName: "queryParams" }] : /* istanbul ignore next */ []));
    /** How to handle query parameters when navigating to the previous page. */
    queryParamsHandling = input(...(ngDevMode ? [undefined, { debugName: "queryParamsHandling" }] : /* istanbul ignore next */ []));
    /** The aria-label for the previous page link. */
    ariaLabel = input('Go to previous page', { ...(ngDevMode ? { debugName: "ariaLabel" } : /* istanbul ignore next */ {}), alias: 'aria-label' });
    /** The text to display for the previous page link. */
    text = input('Previous', ...(ngDevMode ? [{ debugName: "text" }] : /* istanbul ignore next */ []));
    /** Whether the button should only display the icon. */
    iconOnly = input(false, { ...(ngDevMode ? { debugName: "iconOnly" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    _labelClass = computed(() => hlm(this.iconOnly() ? 'sr-only' : 'hidden sm:block'), ...(ngDevMode ? [{ debugName: "_labelClass" }] : /* istanbul ignore next */ []));
    _size = computed(() => (this.iconOnly() ? 'icon' : 'default'), ...(ngDevMode ? [{ debugName: "_size" }] : /* istanbul ignore next */ []));
    _computedClass = computed(() => hlm(!this.iconOnly() && 'ps-2!', this.userClass()), ...(ngDevMode ? [{ debugName: "_computedClass" }] : /* istanbul ignore next */ []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmPaginationPrevious, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "21.2.11", type: HlmPaginationPrevious, isStandalone: true, selector: "hlm-pagination-previous", inputs: { userClass: { classPropertyName: "userClass", publicName: "class", isSignal: true, isRequired: false, transformFunction: null }, link: { classPropertyName: "link", publicName: "link", isSignal: true, isRequired: false, transformFunction: null }, queryParams: { classPropertyName: "queryParams", publicName: "queryParams", isSignal: true, isRequired: false, transformFunction: null }, queryParamsHandling: { classPropertyName: "queryParamsHandling", publicName: "queryParamsHandling", isSignal: true, isRequired: false, transformFunction: null }, ariaLabel: { classPropertyName: "ariaLabel", publicName: "aria-label", isSignal: true, isRequired: false, transformFunction: null }, text: { classPropertyName: "text", publicName: "text", isSignal: true, isRequired: false, transformFunction: null }, iconOnly: { classPropertyName: "iconOnly", publicName: "iconOnly", isSignal: true, isRequired: false, transformFunction: null } }, providers: [provideIcons({ lucideChevronLeft })], ngImport: i0, template: `
    <a
      hlmPaginationLink
      [class]="_computedClass()"
      [link]="link()"
      [queryParams]="queryParams()"
      [queryParamsHandling]="queryParamsHandling()"
      [size]="_size()"
      [attr.aria-label]="ariaLabel()"
    >
      <ng-icon name="lucideChevronLeft" class="rtl:rotate-180" />
      <span [class]="_labelClass()">{{ text() }}</span>
    </a>
  `, isInline: true, dependencies: [{ kind: "directive", type: HlmPaginationLink, selector: "[hlmPaginationLink]", inputs: ["isActive", "size", "link"] }, { kind: "component", type: NgIcon, selector: "ng-icon", inputs: ["name", "svg", "size", "strokeWidth", "color"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmPaginationPrevious, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-pagination-previous',
                    imports: [HlmPaginationLink, NgIcon],
                    providers: [provideIcons({ lucideChevronLeft })],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: `
    <a
      hlmPaginationLink
      [class]="_computedClass()"
      [link]="link()"
      [queryParams]="queryParams()"
      [queryParamsHandling]="queryParamsHandling()"
      [size]="_size()"
      [attr.aria-label]="ariaLabel()"
    >
      <ng-icon name="lucideChevronLeft" class="rtl:rotate-180" />
      <span [class]="_labelClass()">{{ text() }}</span>
    </a>
  `,
                }]
        }], propDecorators: { userClass: [{ type: i0.Input, args: [{ isSignal: true, alias: "class", required: false }] }], link: [{ type: i0.Input, args: [{ isSignal: true, alias: "link", required: false }] }], queryParams: [{ type: i0.Input, args: [{ isSignal: true, alias: "queryParams", required: false }] }], queryParamsHandling: [{ type: i0.Input, args: [{ isSignal: true, alias: "queryParamsHandling", required: false }] }], ariaLabel: [{ type: i0.Input, args: [{ isSignal: true, alias: "aria-label", required: false }] }], text: [{ type: i0.Input, args: [{ isSignal: true, alias: "text", required: false }] }], iconOnly: [{ type: i0.Input, args: [{ isSignal: true, alias: "iconOnly", required: false }] }] } });

class HlmNumberedPagination {
    /**
     * The current (active) page.
     */
    currentPage = model.required(...(ngDevMode ? [{ debugName: "currentPage" }] : /* istanbul ignore next */ []));
    /**
     * The number of items per paginated page.
     */
    itemsPerPage = model.required(...(ngDevMode ? [{ debugName: "itemsPerPage" }] : /* istanbul ignore next */ []));
    /**
     * The total number of items in the collection. Only useful when
     * doing server-side paging, where the collection size is limited
     * to a single page returned by the server API.
     */
    totalItems = input.required({ ...(ngDevMode ? { debugName: "totalItems" } : /* istanbul ignore next */ {}), transform: numberAttribute });
    /**
     * The number of page links to show.
     */
    maxSize = input(7, { ...(ngDevMode ? { debugName: "maxSize" } : /* istanbul ignore next */ {}), transform: numberAttribute });
    /**
     * Show the first and last page buttons.
     */
    showEdges = input(true, { ...(ngDevMode ? { debugName: "showEdges" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    /**
     * The page sizes to show.
     * Defaults to [10, 20, 50, 100]
     */
    pageSizes = input([10, 20, 50, 100], ...(ngDevMode ? [{ debugName: "pageSizes" }] : /* istanbul ignore next */ []));
    _pageSizesWithCurrent = computed(() => {
        const pageSizes = this.pageSizes();
        return pageSizes.includes(this.itemsPerPage())
            ? pageSizes // if current page size is included, return the same array
            : [...pageSizes, this.itemsPerPage()].sort((a, b) => a - b); // otherwise, add current page size and sort the array
    }, ...(ngDevMode ? [{ debugName: "_pageSizesWithCurrent" }] : /* istanbul ignore next */ []));
    _isFirstPageActive = computed(() => this.currentPage() === 1, ...(ngDevMode ? [{ debugName: "_isFirstPageActive" }] : /* istanbul ignore next */ []));
    _isLastPageActive = computed(() => this.currentPage() === this._lastPageNumber(), ...(ngDevMode ? [{ debugName: "_isLastPageActive" }] : /* istanbul ignore next */ []));
    _lastPageNumber = computed(() => {
        if (this.totalItems() < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(this.totalItems() / this.itemsPerPage());
    }, ...(ngDevMode ? [{ debugName: "_lastPageNumber" }] : /* istanbul ignore next */ []));
    _pages = computed(() => {
        const correctedCurrentPage = outOfBoundCorrection(this.totalItems(), this.itemsPerPage(), this.currentPage());
        if (correctedCurrentPage !== this.currentPage()) {
            // update the current page
            untracked(() => this.currentPage.set(correctedCurrentPage));
        }
        return createPageArray(correctedCurrentPage, this.itemsPerPage(), this.totalItems(), this.maxSize());
    }, ...(ngDevMode ? [{ debugName: "_pages" }] : /* istanbul ignore next */ []));
    goToPrevious() {
        this.currentPage.set(this.currentPage() - 1);
    }
    goToNext() {
        this.currentPage.set(this.currentPage() + 1);
    }
    goToFirst() {
        this.currentPage.set(1);
    }
    goToLast() {
        this.currentPage.set(this._lastPageNumber());
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmNumberedPagination, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.11", type: HlmNumberedPagination, isStandalone: true, selector: "hlm-numbered-pagination", inputs: { currentPage: { classPropertyName: "currentPage", publicName: "currentPage", isSignal: true, isRequired: true, transformFunction: null }, itemsPerPage: { classPropertyName: "itemsPerPage", publicName: "itemsPerPage", isSignal: true, isRequired: true, transformFunction: null }, totalItems: { classPropertyName: "totalItems", publicName: "totalItems", isSignal: true, isRequired: true, transformFunction: null }, maxSize: { classPropertyName: "maxSize", publicName: "maxSize", isSignal: true, isRequired: false, transformFunction: null }, showEdges: { classPropertyName: "showEdges", publicName: "showEdges", isSignal: true, isRequired: false, transformFunction: null }, pageSizes: { classPropertyName: "pageSizes", publicName: "pageSizes", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { currentPage: "currentPageChange", itemsPerPage: "itemsPerPageChange" }, ngImport: i0, template: `
    <div class="flex items-center justify-between gap-2 px-4 py-2">
      <div class="flex items-center gap-1 text-sm text-nowrap text-gray-600">
        <b>{{ totalItems() }}</b>
        total items |
        <b>{{ _lastPageNumber() }}</b>
        pages
      </div>

      <nav hlmPagination>
        <ul hlmPaginationContent>
          @if (showEdges() && !_isFirstPageActive()) {
            <li hlmPaginationItem (click)="goToPrevious()">
              <hlm-pagination-previous />
            </li>
          }

          @for (page of _pages(); track page) {
            <li hlmPaginationItem>
              @if (page === '...') {
                <hlm-pagination-ellipsis />
              } @else {
                <a hlmPaginationLink [isActive]="currentPage() === page" (click)="currentPage.set(page)">
                  {{ page }}
                </a>
              }
            </li>
          }

          @if (showEdges() && !_isLastPageActive()) {
            <li hlmPaginationItem (click)="goToNext()">
              <hlm-pagination-next />
            </li>
          }
        </ul>
      </nav>

      <!-- Show Page Size selector -->
      <hlm-select [(value)]="itemsPerPage" class="ml-auto">
        <hlm-select-trigger class="w-fit">
          <hlm-select-value />
        </hlm-select-trigger>
        <hlm-select-content *hlmSelectPortal>
          <hlm-select-group>
            @for (pageSize of _pageSizesWithCurrent(); track pageSize) {
              <hlm-select-item [value]="pageSize">{{ pageSize }}</hlm-select-item>
            }
          </hlm-select-group>
        </hlm-select-content>
      </hlm-select>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: HlmPagination, selector: "[hlmPagination],hlm-pagination", inputs: ["aria-label"] }, { kind: "directive", type: HlmPaginationContent, selector: "ul[hlmPaginationContent]" }, { kind: "directive", type: HlmPaginationItem, selector: "li[hlmPaginationItem]" }, { kind: "component", type: HlmPaginationPrevious, selector: "hlm-pagination-previous", inputs: ["class", "link", "queryParams", "queryParamsHandling", "aria-label", "text", "iconOnly"] }, { kind: "component", type: HlmPaginationNext, selector: "hlm-pagination-next", inputs: ["class", "link", "queryParams", "queryParamsHandling", "aria-label", "text", "iconOnly"] }, { kind: "directive", type: HlmPaginationLink, selector: "[hlmPaginationLink]", inputs: ["isActive", "size", "link"] }, { kind: "component", type: HlmPaginationEllipsis, selector: "hlm-pagination-ellipsis", inputs: ["srOnlyText"] }, { kind: "directive", type: i1$1.HlmSelect, selector: "[hlmSelect],hlm-select" }, { kind: "component", type: i1$1.HlmSelectContent, selector: "hlm-select-content", inputs: ["showScroll"] }, { kind: "directive", type: i1$1.HlmSelectGroup, selector: "[hlmSelectGroup],hlm-select-group" }, { kind: "component", type: i1$1.HlmSelectItem, selector: "hlm-select-item" }, { kind: "directive", type: i1$1.HlmSelectPortal, selector: "[hlmSelectPortal]" }, { kind: "component", type: i1$1.HlmSelectTrigger, selector: "hlm-select-trigger", inputs: ["class", "buttonId", "size", "forceInvalid"] }, { kind: "directive", type: i1$1.HlmSelectValue, selector: "[hlmSelectValue],hlm-select-value" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmNumberedPagination, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-numbered-pagination',
                    imports: [
                        HlmPagination,
                        HlmPaginationContent,
                        HlmPaginationItem,
                        HlmPaginationPrevious,
                        HlmPaginationNext,
                        HlmPaginationLink,
                        HlmPaginationEllipsis,
                        HlmSelectImports,
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: `
    <div class="flex items-center justify-between gap-2 px-4 py-2">
      <div class="flex items-center gap-1 text-sm text-nowrap text-gray-600">
        <b>{{ totalItems() }}</b>
        total items |
        <b>{{ _lastPageNumber() }}</b>
        pages
      </div>

      <nav hlmPagination>
        <ul hlmPaginationContent>
          @if (showEdges() && !_isFirstPageActive()) {
            <li hlmPaginationItem (click)="goToPrevious()">
              <hlm-pagination-previous />
            </li>
          }

          @for (page of _pages(); track page) {
            <li hlmPaginationItem>
              @if (page === '...') {
                <hlm-pagination-ellipsis />
              } @else {
                <a hlmPaginationLink [isActive]="currentPage() === page" (click)="currentPage.set(page)">
                  {{ page }}
                </a>
              }
            </li>
          }

          @if (showEdges() && !_isLastPageActive()) {
            <li hlmPaginationItem (click)="goToNext()">
              <hlm-pagination-next />
            </li>
          }
        </ul>
      </nav>

      <!-- Show Page Size selector -->
      <hlm-select [(value)]="itemsPerPage" class="ml-auto">
        <hlm-select-trigger class="w-fit">
          <hlm-select-value />
        </hlm-select-trigger>
        <hlm-select-content *hlmSelectPortal>
          <hlm-select-group>
            @for (pageSize of _pageSizesWithCurrent(); track pageSize) {
              <hlm-select-item [value]="pageSize">{{ pageSize }}</hlm-select-item>
            }
          </hlm-select-group>
        </hlm-select-content>
      </hlm-select>
    </div>
  `,
                }]
        }], propDecorators: { currentPage: [{ type: i0.Input, args: [{ isSignal: true, alias: "currentPage", required: true }] }, { type: i0.Output, args: ["currentPageChange"] }], itemsPerPage: [{ type: i0.Input, args: [{ isSignal: true, alias: "itemsPerPage", required: true }] }, { type: i0.Output, args: ["itemsPerPageChange"] }], totalItems: [{ type: i0.Input, args: [{ isSignal: true, alias: "totalItems", required: true }] }], maxSize: [{ type: i0.Input, args: [{ isSignal: true, alias: "maxSize", required: false }] }], showEdges: [{ type: i0.Input, args: [{ isSignal: true, alias: "showEdges", required: false }] }], pageSizes: [{ type: i0.Input, args: [{ isSignal: true, alias: "pageSizes", required: false }] }] } });
/**
 * Checks that the instance.currentPage property is within bounds for the current page range.
 * If not, return a correct value for currentPage, or the current value if OK.
 *
 * Copied from 'ngx-pagination' package
 */
function outOfBoundCorrection(totalItems, itemsPerPage, currentPage) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    if (totalPages < currentPage && 0 < totalPages) {
        return totalPages;
    }
    if (currentPage < 1) {
        return 1;
    }
    return currentPage;
}
/**
 * Returns an array of Page objects to use in the pagination controls.
 *
 * Copied from 'ngx-pagination' package
 */
function createPageArray(currentPage, itemsPerPage, totalItems, paginationRange) {
    // paginationRange could be a string if passed from attribute, so cast to number.
    paginationRange = +paginationRange;
    const pages = [];
    // Return 1 as default page number
    // Make sense to show 1 instead of empty when there are no items
    const totalPages = Math.max(Math.ceil(totalItems / itemsPerPage), 1);
    const halfWay = Math.ceil(paginationRange / 2);
    const isStart = currentPage <= halfWay;
    const isEnd = totalPages - halfWay < currentPage;
    const isMiddle = !isStart && !isEnd;
    const ellipsesNeeded = paginationRange < totalPages;
    let i = 1;
    while (i <= totalPages && i <= paginationRange) {
        let label;
        const pageNumber = calculatePageNumber(i, currentPage, paginationRange, totalPages);
        const openingEllipsesNeeded = i === 2 && (isMiddle || isEnd);
        const closingEllipsesNeeded = i === paginationRange - 1 && (isMiddle || isStart);
        if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
            label = '...';
        }
        else {
            label = pageNumber;
        }
        pages.push(label);
        i++;
    }
    return pages;
}
/**
 * Given the position in the sequence of pagination links [i],
 * figure out what page number corresponds to that position.
 *
 * Copied from 'ngx-pagination' package
 */
function calculatePageNumber(i, currentPage, paginationRange, totalPages) {
    const halfWay = Math.ceil(paginationRange / 2);
    if (i === paginationRange) {
        return totalPages;
    }
    if (i === 1) {
        return i;
    }
    if (paginationRange < totalPages) {
        if (totalPages - halfWay < currentPage) {
            return totalPages - paginationRange + i;
        }
        if (halfWay < currentPage) {
            return currentPage - halfWay + i;
        }
        return i;
    }
    return i;
}

class HlmNumberedPaginationQueryParams {
    /**
     * The current (active) page.
     */
    currentPage = model.required(...(ngDevMode ? [{ debugName: "currentPage" }] : /* istanbul ignore next */ []));
    /**
     * The number of items per paginated page.
     */
    itemsPerPage = model.required(...(ngDevMode ? [{ debugName: "itemsPerPage" }] : /* istanbul ignore next */ []));
    /**
     * The total number of items in the collection. Only useful when
     * doing server-side paging, where the collection size is limited
     * to a single page returned by the server API.
     */
    totalItems = input.required({ ...(ngDevMode ? { debugName: "totalItems" } : /* istanbul ignore next */ {}), transform: numberAttribute });
    /**
     * The URL path to use for the pagination links.
     * Defaults to '.' (current path).
     */
    link = input('.', ...(ngDevMode ? [{ debugName: "link" }] : /* istanbul ignore next */ []));
    /**
     * The number of page links to show.
     */
    maxSize = input(7, { ...(ngDevMode ? { debugName: "maxSize" } : /* istanbul ignore next */ {}), transform: numberAttribute });
    /**
     * Show the first and last page buttons.
     */
    showEdges = input(true, { ...(ngDevMode ? { debugName: "showEdges" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    /**
     * The page sizes to show.
     * Defaults to [10, 20, 50, 100]
     */
    pageSizes = input([10, 20, 50, 100], ...(ngDevMode ? [{ debugName: "pageSizes" }] : /* istanbul ignore next */ []));
    _pageSizesWithCurrent = computed(() => {
        const pageSizes = this.pageSizes();
        return pageSizes.includes(this.itemsPerPage())
            ? pageSizes // if current page size is included, return the same array
            : [...pageSizes, this.itemsPerPage()].sort((a, b) => a - b); // otherwise, add current page size and sort the array
    }, ...(ngDevMode ? [{ debugName: "_pageSizesWithCurrent" }] : /* istanbul ignore next */ []));
    _isFirstPageActive = computed(() => this.currentPage() === 1, ...(ngDevMode ? [{ debugName: "_isFirstPageActive" }] : /* istanbul ignore next */ []));
    _isLastPageActive = computed(() => this.currentPage() === this._lastPageNumber(), ...(ngDevMode ? [{ debugName: "_isLastPageActive" }] : /* istanbul ignore next */ []));
    _lastPageNumber = computed(() => {
        if (this.totalItems() < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(this.totalItems() / this.itemsPerPage());
    }, ...(ngDevMode ? [{ debugName: "_lastPageNumber" }] : /* istanbul ignore next */ []));
    _pages = computed(() => {
        const correctedCurrentPage = outOfBoundCorrection(this.totalItems(), this.itemsPerPage(), this.currentPage());
        if (correctedCurrentPage !== this.currentPage()) {
            // update the current page
            untracked(() => this.currentPage.set(correctedCurrentPage));
        }
        return createPageArray(correctedCurrentPage, this.itemsPerPage(), this.totalItems(), this.maxSize());
    }, ...(ngDevMode ? [{ debugName: "_pages" }] : /* istanbul ignore next */ []));
    constructor() {
        classes(() => 'flex items-center justify-between gap-2 px-4 py-2');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmNumberedPaginationQueryParams, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.11", type: HlmNumberedPaginationQueryParams, isStandalone: true, selector: "hlm-numbered-pagination-query-params", inputs: { currentPage: { classPropertyName: "currentPage", publicName: "currentPage", isSignal: true, isRequired: true, transformFunction: null }, itemsPerPage: { classPropertyName: "itemsPerPage", publicName: "itemsPerPage", isSignal: true, isRequired: true, transformFunction: null }, totalItems: { classPropertyName: "totalItems", publicName: "totalItems", isSignal: true, isRequired: true, transformFunction: null }, link: { classPropertyName: "link", publicName: "link", isSignal: true, isRequired: false, transformFunction: null }, maxSize: { classPropertyName: "maxSize", publicName: "maxSize", isSignal: true, isRequired: false, transformFunction: null }, showEdges: { classPropertyName: "showEdges", publicName: "showEdges", isSignal: true, isRequired: false, transformFunction: null }, pageSizes: { classPropertyName: "pageSizes", publicName: "pageSizes", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { currentPage: "currentPageChange", itemsPerPage: "itemsPerPageChange" }, ngImport: i0, template: `
    <div class="flex items-center gap-1 text-sm text-nowrap text-gray-600">
      <b>{{ totalItems() }}</b>
      total items |
      <b>{{ _lastPageNumber() }}</b>
      pages
    </div>

    <nav hlmPagination>
      <ul hlmPaginationContent>
        @if (showEdges() && !_isFirstPageActive()) {
          <li hlmPaginationItem>
            <hlm-pagination-previous [link]="link()" [queryParams]="{ page: currentPage() - 1 }" queryParamsHandling="merge" />
          </li>
        }

        @for (page of _pages(); track page) {
          <li hlmPaginationItem>
            @if (page === '...') {
              <hlm-pagination-ellipsis />
            } @else {
              <a
                hlmPaginationLink
                [link]="currentPage() !== page ? link() : undefined"
                [queryParams]="{ page }"
                queryParamsHandling="merge"
                [isActive]="currentPage() === page"
              >
                {{ page }}
              </a>
            }
          </li>
        }

        @if (showEdges() && !_isLastPageActive()) {
          <li hlmPaginationItem>
            <hlm-pagination-next [link]="link()" [queryParams]="{ page: currentPage() + 1 }" queryParamsHandling="merge" />
          </li>
        }
      </ul>
    </nav>

    <!-- Show Page Size selector -->
    <hlm-select [(value)]="itemsPerPage" class="ml-auto">
      <hlm-select-trigger class="w-fit">
        <hlm-select-value />
      </hlm-select-trigger>
      <hlm-select-content *hlmSelectPortal>
        <hlm-select-group>
          @for (pageSize of _pageSizesWithCurrent(); track pageSize) {
            <hlm-select-item [value]="pageSize">{{ pageSize }}</hlm-select-item>
          }
        </hlm-select-group>
      </hlm-select-content>
    </hlm-select>
  `, isInline: true, dependencies: [{ kind: "directive", type: HlmPagination, selector: "[hlmPagination],hlm-pagination", inputs: ["aria-label"] }, { kind: "directive", type: HlmPaginationContent, selector: "ul[hlmPaginationContent]" }, { kind: "directive", type: HlmPaginationItem, selector: "li[hlmPaginationItem]" }, { kind: "component", type: HlmPaginationPrevious, selector: "hlm-pagination-previous", inputs: ["class", "link", "queryParams", "queryParamsHandling", "aria-label", "text", "iconOnly"] }, { kind: "component", type: HlmPaginationNext, selector: "hlm-pagination-next", inputs: ["class", "link", "queryParams", "queryParamsHandling", "aria-label", "text", "iconOnly"] }, { kind: "directive", type: HlmPaginationLink, selector: "[hlmPaginationLink]", inputs: ["isActive", "size", "link"] }, { kind: "component", type: HlmPaginationEllipsis, selector: "hlm-pagination-ellipsis", inputs: ["srOnlyText"] }, { kind: "directive", type: i1$1.HlmSelect, selector: "[hlmSelect],hlm-select" }, { kind: "component", type: i1$1.HlmSelectContent, selector: "hlm-select-content", inputs: ["showScroll"] }, { kind: "directive", type: i1$1.HlmSelectGroup, selector: "[hlmSelectGroup],hlm-select-group" }, { kind: "component", type: i1$1.HlmSelectItem, selector: "hlm-select-item" }, { kind: "directive", type: i1$1.HlmSelectPortal, selector: "[hlmSelectPortal]" }, { kind: "component", type: i1$1.HlmSelectTrigger, selector: "hlm-select-trigger", inputs: ["class", "buttonId", "size", "forceInvalid"] }, { kind: "directive", type: i1$1.HlmSelectValue, selector: "[hlmSelectValue],hlm-select-value" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmNumberedPaginationQueryParams, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-numbered-pagination-query-params',
                    imports: [
                        HlmPagination,
                        HlmPaginationContent,
                        HlmPaginationItem,
                        HlmPaginationPrevious,
                        HlmPaginationNext,
                        HlmPaginationLink,
                        HlmPaginationEllipsis,
                        HlmSelectImports,
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: `
    <div class="flex items-center gap-1 text-sm text-nowrap text-gray-600">
      <b>{{ totalItems() }}</b>
      total items |
      <b>{{ _lastPageNumber() }}</b>
      pages
    </div>

    <nav hlmPagination>
      <ul hlmPaginationContent>
        @if (showEdges() && !_isFirstPageActive()) {
          <li hlmPaginationItem>
            <hlm-pagination-previous [link]="link()" [queryParams]="{ page: currentPage() - 1 }" queryParamsHandling="merge" />
          </li>
        }

        @for (page of _pages(); track page) {
          <li hlmPaginationItem>
            @if (page === '...') {
              <hlm-pagination-ellipsis />
            } @else {
              <a
                hlmPaginationLink
                [link]="currentPage() !== page ? link() : undefined"
                [queryParams]="{ page }"
                queryParamsHandling="merge"
                [isActive]="currentPage() === page"
              >
                {{ page }}
              </a>
            }
          </li>
        }

        @if (showEdges() && !_isLastPageActive()) {
          <li hlmPaginationItem>
            <hlm-pagination-next [link]="link()" [queryParams]="{ page: currentPage() + 1 }" queryParamsHandling="merge" />
          </li>
        }
      </ul>
    </nav>

    <!-- Show Page Size selector -->
    <hlm-select [(value)]="itemsPerPage" class="ml-auto">
      <hlm-select-trigger class="w-fit">
        <hlm-select-value />
      </hlm-select-trigger>
      <hlm-select-content *hlmSelectPortal>
        <hlm-select-group>
          @for (pageSize of _pageSizesWithCurrent(); track pageSize) {
            <hlm-select-item [value]="pageSize">{{ pageSize }}</hlm-select-item>
          }
        </hlm-select-group>
      </hlm-select-content>
    </hlm-select>
  `,
                }]
        }], ctorParameters: () => [], propDecorators: { currentPage: [{ type: i0.Input, args: [{ isSignal: true, alias: "currentPage", required: true }] }, { type: i0.Output, args: ["currentPageChange"] }], itemsPerPage: [{ type: i0.Input, args: [{ isSignal: true, alias: "itemsPerPage", required: true }] }, { type: i0.Output, args: ["itemsPerPageChange"] }], totalItems: [{ type: i0.Input, args: [{ isSignal: true, alias: "totalItems", required: true }] }], link: [{ type: i0.Input, args: [{ isSignal: true, alias: "link", required: false }] }], maxSize: [{ type: i0.Input, args: [{ isSignal: true, alias: "maxSize", required: false }] }], showEdges: [{ type: i0.Input, args: [{ isSignal: true, alias: "showEdges", required: false }] }], pageSizes: [{ type: i0.Input, args: [{ isSignal: true, alias: "pageSizes", required: false }] }] } });

const HlmPaginationImports = [
    HlmPagination,
    HlmPaginationContent,
    HlmPaginationItem,
    HlmPaginationLink,
    HlmPaginationPrevious,
    HlmPaginationNext,
    HlmPaginationEllipsis,
    HlmNumberedPagination,
    HlmNumberedPaginationQueryParams,
];

/**
 * Generated bundle index. Do not edit.
 */

export { HlmNumberedPagination, HlmNumberedPaginationQueryParams, HlmPagination, HlmPaginationContent, HlmPaginationEllipsis, HlmPaginationImports, HlmPaginationItem, HlmPaginationLink, HlmPaginationNext, HlmPaginationPrevious, createPageArray, outOfBoundCorrection };
//# sourceMappingURL=gosamply-ui-pagination.mjs.map
