import * as i0 from '@angular/core';
import { input, Directive, contentChildren, viewChild, computed, ChangeDetectionStrategy, Component } from '@angular/core';
import * as i1 from '@spartan-ng/brain/tabs';
import { BrnTabs, BrnTabsContent, BrnTabsContentLazy, BrnTabsList, BrnTabsPaginatedList, BrnTabsTrigger } from '@spartan-ng/brain/tabs';
import { classes, hlm } from '@gosamply/ui/utils';
import { cva } from 'class-variance-authority';
import { CdkObserveContent } from '@angular/cdk/observers';
import { toObservable } from '@angular/core/rxjs-interop';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronLeft, lucideChevronRight } from '@ng-icons/lucide';
import { buttonVariants } from '@gosamply/ui/button';

class HlmTabs {
    tab = input.required(...(ngDevMode ? [{ debugName: "tab" }] : /* istanbul ignore next */ []));
    constructor() {
        classes(() => 'group/tabs flex gap-2 data-[orientation=horizontal]:flex-col');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmTabs, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.11", type: HlmTabs, isStandalone: true, selector: "[hlmTabs],hlm-tabs", inputs: { tab: { classPropertyName: "tab", publicName: "tab", isSignal: true, isRequired: true, transformFunction: null } }, host: { attributes: { "data-slot": "tabs" } }, hostDirectives: [{ directive: i1.BrnTabs, inputs: ["orientation", "orientation", "activationMode", "activationMode", "brnTabs", "tab"], outputs: ["tabActivated", "tabActivated"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmTabs, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmTabs],hlm-tabs',
                    hostDirectives: [
                        {
                            directive: BrnTabs,
                            inputs: ['orientation', 'activationMode', 'brnTabs: tab'],
                            outputs: ['tabActivated'],
                        },
                    ],
                    host: {
                        'data-slot': 'tabs',
                    },
                }]
        }], ctorParameters: () => [], propDecorators: { tab: [{ type: i0.Input, args: [{ isSignal: true, alias: "tab", required: true }] }] } });

class HlmTabsContent {
    contentFor = input.required({ ...(ngDevMode ? { debugName: "contentFor" } : /* istanbul ignore next */ {}), alias: 'hlmTabsContent' });
    constructor() {
        classes(() => 'flex-1 text-sm outline-none');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmTabsContent, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.11", type: HlmTabsContent, isStandalone: true, selector: "[hlmTabsContent]", inputs: { contentFor: { classPropertyName: "contentFor", publicName: "hlmTabsContent", isSignal: true, isRequired: true, transformFunction: null } }, host: { attributes: { "data-slot": "tabs-content" } }, hostDirectives: [{ directive: i1.BrnTabsContent, inputs: ["brnTabsContent", "hlmTabsContent"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmTabsContent, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmTabsContent]',
                    hostDirectives: [{ directive: BrnTabsContent, inputs: ['brnTabsContent: hlmTabsContent'] }],
                    host: {
                        'data-slot': 'tabs-content',
                    },
                }]
        }], ctorParameters: () => [], propDecorators: { contentFor: [{ type: i0.Input, args: [{ isSignal: true, alias: "hlmTabsContent", required: true }] }] } });

class HlmTabsContentLazy {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmTabsContentLazy, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmTabsContentLazy, isStandalone: true, selector: "ng-template[hlmTabsContentLazy]", hostDirectives: [{ directive: i1.BrnTabsContentLazy }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmTabsContentLazy, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ng-template[hlmTabsContentLazy]',
                    hostDirectives: [BrnTabsContentLazy],
                }]
        }] });

const listVariants = cva('rounded-4xl p-[3px] group-data-horizontal/tabs:h-9 group-data-vertical/tabs:rounded-2xl data-[variant=line]:rounded-none group/tabs-list text-muted-foreground inline-flex w-fit items-center justify-center group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col', {
    variants: {
        variant: {
            default: 'bg-muted',
            line: 'gap-1 bg-transparent',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});
class HlmTabsList {
    variant = input('default', ...(ngDevMode ? [{ debugName: "variant" }] : /* istanbul ignore next */ []));
    constructor() {
        classes(() => listVariants({ variant: this.variant() }));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmTabsList, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.11", type: HlmTabsList, isStandalone: true, selector: "[hlmTabsList],hlm-tabs-list", inputs: { variant: { classPropertyName: "variant", publicName: "variant", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "data-slot": "tabs-list" }, properties: { "attr.data-variant": "variant()" } }, hostDirectives: [{ directive: i1.BrnTabsList }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmTabsList, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmTabsList],hlm-tabs-list',
                    hostDirectives: [BrnTabsList],
                    host: {
                        'data-slot': 'tabs-list',
                        '[attr.data-variant]': 'variant()',
                    },
                }]
        }], ctorParameters: () => [], propDecorators: { variant: [{ type: i0.Input, args: [{ isSignal: true, alias: "variant", required: false }] }] } });

class HlmTabsPaginatedList extends BrnTabsPaginatedList {
    constructor() {
        super();
        classes(() => 'relative flex flex-shrink-0 items-center gap-1 overflow-hidden');
    }
    items = contentChildren(BrnTabsTrigger, { ...(ngDevMode ? { debugName: "items" } : /* istanbul ignore next */ {}), descendants: false });
    /** Explicitly annotating type to avoid non-portable inferred type */
    itemsChanges = toObservable(this.items);
    tabListContainer = viewChild.required('tabListContainer');
    tabList = viewChild.required('tabList');
    tabListInner = viewChild.required('tabListInner');
    nextPaginator = viewChild.required('nextPaginator');
    previousPaginator = viewChild.required('previousPaginator');
    tabListClass = input('', { ...(ngDevMode ? { debugName: "tabListClass" } : /* istanbul ignore next */ {}), alias: 'tabListClass' });
    _tabListClass = computed(() => hlm(listVariants(), this.tabListClass()), ...(ngDevMode ? [{ debugName: "_tabListClass" }] : /* istanbul ignore next */ []));
    paginationButtonClass = input('', ...(ngDevMode ? [{ debugName: "paginationButtonClass" }] : /* istanbul ignore next */ []));
    _paginationButtonClass = computed(() => hlm('relative z-[2] select-none disabled:cursor-default', buttonVariants({ variant: 'ghost', size: 'icon-sm' }), this.paginationButtonClass(), this.showPaginationControls() ? 'inline-flex' : 'hidden'), ...(ngDevMode ? [{ debugName: "_paginationButtonClass" }] : /* istanbul ignore next */ []));
    _itemSelected(event) {
        event.preventDefault();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmTabsPaginatedList, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "21.2.11", type: HlmTabsPaginatedList, isStandalone: true, selector: "hlm-paginated-tabs-list", inputs: { tabListClass: { classPropertyName: "tabListClass", publicName: "tabListClass", isSignal: true, isRequired: false, transformFunction: null }, paginationButtonClass: { classPropertyName: "paginationButtonClass", publicName: "paginationButtonClass", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "data-slot": "tabs-paginated-list" } }, providers: [provideIcons({ lucideChevronRight, lucideChevronLeft })], queries: [{ propertyName: "items", predicate: BrnTabsTrigger, isSignal: true }], viewQueries: [{ propertyName: "tabListContainer", first: true, predicate: ["tabListContainer"], descendants: true, isSignal: true }, { propertyName: "tabList", first: true, predicate: ["tabList"], descendants: true, isSignal: true }, { propertyName: "tabListInner", first: true, predicate: ["tabListInner"], descendants: true, isSignal: true }, { propertyName: "nextPaginator", first: true, predicate: ["nextPaginator"], descendants: true, isSignal: true }, { propertyName: "previousPaginator", first: true, predicate: ["previousPaginator"], descendants: true, isSignal: true }], usesInheritance: true, ngImport: i0, template: `
    <button
      #previousPaginator
      data-pagination="previous"
      type="button"
      aria-hidden="true"
      tabindex="-1"
      [class]="_paginationButtonClass()"
      [disabled]="disableScrollBefore || null"
      (click)="_handlePaginatorClick('before')"
      (mousedown)="_handlePaginatorPress('before', $event)"
      (touchend)="_stopInterval()"
    >
      <ng-icon name="lucideChevronLeft" />
    </button>

    <div #tabListContainer class="z-[1] flex grow overflow-hidden" (keydown)="_handleKeydown($event)">
      <div class="relative grow transition-transform" #tabList role="tablist" (cdkObserveContent)="_onContentChanges()">
        <div #tabListInner [class]="_tabListClass()">
          <ng-content />
        </div>
      </div>
    </div>

    <button
      #nextPaginator
      data-pagination="next"
      type="button"
      aria-hidden="true"
      tabindex="-1"
      [class]="_paginationButtonClass()"
      [disabled]="disableScrollAfter || null"
      (click)="_handlePaginatorClick('after')"
      (mousedown)="_handlePaginatorPress('after', $event)"
      (touchend)="_stopInterval()"
    >
      <ng-icon name="lucideChevronRight" />
    </button>
  `, isInline: true, dependencies: [{ kind: "directive", type: CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }, { kind: "component", type: NgIcon, selector: "ng-icon", inputs: ["name", "svg", "size", "strokeWidth", "color"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmTabsPaginatedList, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-paginated-tabs-list',
                    imports: [CdkObserveContent, NgIcon],
                    providers: [provideIcons({ lucideChevronRight, lucideChevronLeft })],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        'data-slot': 'tabs-paginated-list',
                    },
                    template: `
    <button
      #previousPaginator
      data-pagination="previous"
      type="button"
      aria-hidden="true"
      tabindex="-1"
      [class]="_paginationButtonClass()"
      [disabled]="disableScrollBefore || null"
      (click)="_handlePaginatorClick('before')"
      (mousedown)="_handlePaginatorPress('before', $event)"
      (touchend)="_stopInterval()"
    >
      <ng-icon name="lucideChevronLeft" />
    </button>

    <div #tabListContainer class="z-[1] flex grow overflow-hidden" (keydown)="_handleKeydown($event)">
      <div class="relative grow transition-transform" #tabList role="tablist" (cdkObserveContent)="_onContentChanges()">
        <div #tabListInner [class]="_tabListClass()">
          <ng-content />
        </div>
      </div>
    </div>

    <button
      #nextPaginator
      data-pagination="next"
      type="button"
      aria-hidden="true"
      tabindex="-1"
      [class]="_paginationButtonClass()"
      [disabled]="disableScrollAfter || null"
      (click)="_handlePaginatorClick('after')"
      (mousedown)="_handlePaginatorPress('after', $event)"
      (touchend)="_stopInterval()"
    >
      <ng-icon name="lucideChevronRight" />
    </button>
  `,
                }]
        }], ctorParameters: () => [], propDecorators: { items: [{ type: i0.ContentChildren, args: [i0.forwardRef(() => BrnTabsTrigger), { ...{ descendants: false }, isSignal: true }] }], tabListContainer: [{ type: i0.ViewChild, args: ['tabListContainer', { isSignal: true }] }], tabList: [{ type: i0.ViewChild, args: ['tabList', { isSignal: true }] }], tabListInner: [{ type: i0.ViewChild, args: ['tabListInner', { isSignal: true }] }], nextPaginator: [{ type: i0.ViewChild, args: ['nextPaginator', { isSignal: true }] }], previousPaginator: [{ type: i0.ViewChild, args: ['previousPaginator', { isSignal: true }] }], tabListClass: [{ type: i0.Input, args: [{ isSignal: true, alias: "tabListClass", required: false }] }], paginationButtonClass: [{ type: i0.Input, args: [{ isSignal: true, alias: "paginationButtonClass", required: false }] }] } });

class HlmTabsTrigger {
    triggerFor = input.required({ ...(ngDevMode ? { debugName: "triggerFor" } : /* istanbul ignore next */ {}), alias: 'hlmTabsTrigger' });
    constructor() {
        classes(() => [
            `gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium group-data-vertical/tabs:px-2.5 group-data-vertical/tabs:py-1.5 [&_ng-icon:not([class*='text-'])]:text-[length:--spacing(4)] focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground/60 hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center whitespace-nowrap transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_ng-icon]:pointer-events-none [&_ng-icon]:shrink-0`,
            'group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent',
            'data-active:bg-background dark:data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 data-active:text-foreground',
            'after:bg-foreground after:absolute after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100',
        ]);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmTabsTrigger, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.11", type: HlmTabsTrigger, isStandalone: true, selector: "[hlmTabsTrigger]", inputs: { triggerFor: { classPropertyName: "triggerFor", publicName: "hlmTabsTrigger", isSignal: true, isRequired: true, transformFunction: null } }, host: { attributes: { "data-slot": "tabs-trigger" } }, hostDirectives: [{ directive: i1.BrnTabsTrigger, inputs: ["brnTabsTrigger", "hlmTabsTrigger", "disabled", "disabled"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmTabsTrigger, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmTabsTrigger]',
                    hostDirectives: [{ directive: BrnTabsTrigger, inputs: ['brnTabsTrigger: hlmTabsTrigger', 'disabled'] }],
                    host: {
                        'data-slot': 'tabs-trigger',
                    },
                }]
        }], ctorParameters: () => [], propDecorators: { triggerFor: [{ type: i0.Input, args: [{ isSignal: true, alias: "hlmTabsTrigger", required: true }] }] } });

const HlmTabsImports = [HlmTabs, HlmTabsList, HlmTabsTrigger, HlmTabsContent, HlmTabsContentLazy, HlmTabsPaginatedList];

/**
 * Generated bundle index. Do not edit.
 */

export { HlmTabs, HlmTabsContent, HlmTabsContentLazy, HlmTabsImports, HlmTabsList, HlmTabsPaginatedList, HlmTabsTrigger, listVariants };
//# sourceMappingURL=gosamply-ui-tabs.mjs.map
