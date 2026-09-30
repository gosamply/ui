import * as _angular_core from '@angular/core';
import { ElementRef } from '@angular/core';
import * as i1 from '@spartan-ng/brain/tabs';
import { BrnTabsPaginatedList, BrnTabsTrigger, BrnPaginatedTabHeaderItem } from '@spartan-ng/brain/tabs';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { ClassValue } from 'clsx';
import { Observable } from 'rxjs';

declare class HlmTabs {
    readonly tab: _angular_core.InputSignal<string>;
    constructor();
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<HlmTabs, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<HlmTabs, "[hlmTabs],hlm-tabs", never, { "tab": { "alias": "tab"; "required": true; "isSignal": true; }; }, {}, never, never, true, [{ directive: typeof i1.BrnTabs; inputs: { "orientation": "orientation"; "activationMode": "activationMode"; "brnTabs": "tab"; }; outputs: { "tabActivated": "tabActivated"; }; }]>;
}

declare class HlmTabsContent {
    readonly contentFor: _angular_core.InputSignal<string>;
    constructor();
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<HlmTabsContent, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<HlmTabsContent, "[hlmTabsContent]", never, { "contentFor": { "alias": "hlmTabsContent"; "required": true; "isSignal": true; }; }, {}, never, never, true, [{ directive: typeof i1.BrnTabsContent; inputs: { "brnTabsContent": "hlmTabsContent"; }; outputs: {}; }]>;
}

declare class HlmTabsContentLazy {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<HlmTabsContentLazy, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<HlmTabsContentLazy, "ng-template[hlmTabsContentLazy]", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnTabsContentLazy; inputs: {}; outputs: {}; }]>;
}

declare const listVariants: (props?: ({
    variant?: "default" | "line" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare class HlmTabsList {
    readonly variant: _angular_core.InputSignal<"default" | "line" | null | undefined>;
    constructor();
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<HlmTabsList, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<HlmTabsList, "[hlmTabsList],hlm-tabs-list", never, { "variant": { "alias": "variant"; "required": false; "isSignal": true; }; }, {}, never, never, true, [{ directive: typeof i1.BrnTabsList; inputs: {}; outputs: {}; }]>;
}

declare class HlmTabsPaginatedList extends BrnTabsPaginatedList {
    constructor();
    readonly items: _angular_core.Signal<readonly BrnTabsTrigger[]>;
    /** Explicitly annotating type to avoid non-portable inferred type */
    readonly itemsChanges: Observable<ReadonlyArray<BrnPaginatedTabHeaderItem>>;
    readonly tabListContainer: _angular_core.Signal<ElementRef<HTMLElement>>;
    readonly tabList: _angular_core.Signal<ElementRef<HTMLElement>>;
    readonly tabListInner: _angular_core.Signal<ElementRef<HTMLElement>>;
    readonly nextPaginator: _angular_core.Signal<ElementRef<HTMLElement>>;
    readonly previousPaginator: _angular_core.Signal<ElementRef<HTMLElement>>;
    readonly tabListClass: _angular_core.InputSignal<ClassValue>;
    protected readonly _tabListClass: _angular_core.Signal<string>;
    readonly paginationButtonClass: _angular_core.InputSignal<ClassValue>;
    protected readonly _paginationButtonClass: _angular_core.Signal<string>;
    protected _itemSelected(event: KeyboardEvent): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<HlmTabsPaginatedList, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<HlmTabsPaginatedList, "hlm-paginated-tabs-list", never, { "tabListClass": { "alias": "tabListClass"; "required": false; "isSignal": true; }; "paginationButtonClass": { "alias": "paginationButtonClass"; "required": false; "isSignal": true; }; }, {}, ["items"], ["*"], true, never>;
}

declare class HlmTabsTrigger {
    readonly triggerFor: _angular_core.InputSignal<string>;
    constructor();
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<HlmTabsTrigger, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<HlmTabsTrigger, "[hlmTabsTrigger]", never, { "triggerFor": { "alias": "hlmTabsTrigger"; "required": true; "isSignal": true; }; }, {}, never, never, true, [{ directive: typeof i1.BrnTabsTrigger; inputs: { "brnTabsTrigger": "hlmTabsTrigger"; "disabled": "disabled"; }; outputs: {}; }]>;
}

declare const HlmTabsImports: readonly [typeof HlmTabs, typeof HlmTabsList, typeof HlmTabsTrigger, typeof HlmTabsContent, typeof HlmTabsContentLazy, typeof HlmTabsPaginatedList];

export { HlmTabs, HlmTabsContent, HlmTabsContentLazy, HlmTabsImports, HlmTabsList, HlmTabsPaginatedList, HlmTabsTrigger, listVariants };
