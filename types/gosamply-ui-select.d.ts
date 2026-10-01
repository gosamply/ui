import * as i0 from '@angular/core';
import * as i1 from '@spartan-ng/brain/select';
import * as i2 from '@spartan-ng/brain/popover';
import { BooleanInput } from '@angular/cdk/coercion';
import { ClassValue } from 'clsx';

declare class HlmSelect {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSelect, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSelect, "[hlmSelect],hlm-select", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnSelect; inputs: { "disabled": "disabled"; "value": "value"; "isItemEqualToValue": "isItemEqualToValue"; "itemToString": "itemToString"; }; outputs: { "valueChange": "valueChange"; }; }, { directive: typeof i2.BrnPopover; inputs: { "align": "align"; "closeOnOutsidePointerEvents": "closeOnOutsidePointerEvents"; "sideOffset": "sideOffset"; "state": "state"; "offsetX": "offsetX"; "scrollStrategy": "scrollStrategy"; }; outputs: { "stateChanged": "stateChanged"; "closed": "closed"; }; }]>;
}

declare class HlmSelectContent {
    protected readonly _computedListboxClasses: i0.Signal<string>;
    readonly showScroll: i0.InputSignalWithTransform<boolean, BooleanInput>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSelectContent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HlmSelectContent, "hlm-select-content", never, { "showScroll": { "alias": "showScroll"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, [{ directive: typeof i1.BrnSelectContent; inputs: {}; outputs: {}; }]>;
}

declare class HlmSelectGroup {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSelectGroup, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSelectGroup, "[hlmSelectGroup],hlm-select-group", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnSelectGroup; inputs: {}; outputs: {}; }]>;
}

declare class HlmSelectItem {
    private readonly _brnSelectItem;
    protected readonly _active: i0.Signal<boolean>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSelectItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HlmSelectItem, "hlm-select-item", never, {}, {}, never, ["*"], true, [{ directive: typeof i1.BrnSelectItem; inputs: { "id": "id"; "disabled": "disabled"; "value": "value"; }; outputs: {}; }]>;
}

declare class HlmSelectLabel {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSelectLabel, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSelectLabel, "[hlmSelectLabel],hlm-select-label", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnSelectLabel; inputs: { "id": "id"; }; outputs: {}; }]>;
}

declare class HlmSelectMultiple {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSelectMultiple, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSelectMultiple, "[hlmSelectMultiple],hlm-select-multiple", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnSelectMultiple; inputs: { "disabled": "disabled"; "value": "value"; "isItemEqualToValue": "isItemEqualToValue"; "itemToString": "itemToString"; }; outputs: { "valueChange": "valueChange"; }; }, { directive: typeof i2.BrnPopover; inputs: { "align": "align"; "closeOnOutsidePointerEvents": "closeOnOutsidePointerEvents"; "sideOffset": "sideOffset"; "state": "state"; "offsetX": "offsetX"; "scrollStrategy": "scrollStrategy"; }; outputs: { "stateChanged": "stateChanged"; "closed": "closed"; }; }]>;
}

declare class HlmSelectPlaceholder {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSelectPlaceholder, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSelectPlaceholder, "[hlmSelectPlaceholder],hlm-select-placeholder", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnSelectPlaceholder; inputs: {}; outputs: {}; }]>;
}

declare class HlmSelectPortal {
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSelectPortal, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSelectPortal, "[hlmSelectPortal]", never, {}, {}, never, never, true, [{ directive: typeof i2.BrnPopoverContent; inputs: { "context": "context"; "class": "class"; }; outputs: {}; }]>;
}

declare class HlmSelectScrollDown {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSelectScrollDown, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HlmSelectScrollDown, "hlm-select-scroll-down", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnSelectScrollDown; inputs: {}; outputs: {}; }]>;
}

declare class HlmSelectScrollUp {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSelectScrollUp, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HlmSelectScrollUp, "hlm-select-scroll-up", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnSelectScrollUp; inputs: {}; outputs: {}; }]>;
}

declare class HlmSelectSeparator {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSelectSeparator, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSelectSeparator, "[hlmSelectSeparator],hlm-select-separator", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnSelectSeparator; inputs: { "orientation": "orientation"; }; outputs: {}; }]>;
}

declare class HlmSelectTrigger {
    private static _id;
    readonly userClass: i0.InputSignal<ClassValue>;
    protected readonly _computedClass: i0.Signal<string>;
    readonly buttonId: i0.InputSignal<string>;
    readonly size: i0.InputSignal<"default" | "sm">;
    /** Whether to force the trigger into an invalid state. */
    readonly forceInvalid: i0.InputSignalWithTransform<boolean, BooleanInput>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSelectTrigger, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HlmSelectTrigger, "hlm-select-trigger", never, { "userClass": { "alias": "class"; "required": false; "isSignal": true; }; "buttonId": { "alias": "buttonId"; "required": false; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "forceInvalid": { "alias": "forceInvalid"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}

declare class HlmSelectValue {
    private readonly _brnSelectValue;
    protected readonly _hidden: i0.Signal<boolean>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSelectValue, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSelectValue, "[hlmSelectValue],hlm-select-value", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnSelectValue; inputs: { "placeholder": "placeholder"; }; outputs: {}; }]>;
}

declare class HlmSelectValueTemplate {
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSelectValueTemplate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSelectValueTemplate, "[hlmSelectValueTemplate]", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnSelectValueTemplate; inputs: {}; outputs: {}; }]>;
}

declare class HlmSelectValues {
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSelectValues, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSelectValues, "[hlmSelectValues]", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnSelectValues; inputs: {}; outputs: {}; }]>;
}

declare class HlmSelectValuesContent {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmSelectValuesContent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmSelectValuesContent, "[hlmSelectValuesContent],hlm-select-values-content", never, {}, {}, never, never, true, never>;
}

declare const HlmSelectImports: readonly [typeof HlmSelect, typeof HlmSelectContent, typeof HlmSelectGroup, typeof HlmSelectItem, typeof HlmSelectLabel, typeof HlmSelectMultiple, typeof HlmSelectPlaceholder, typeof HlmSelectPortal, typeof HlmSelectScrollDown, typeof HlmSelectScrollUp, typeof HlmSelectSeparator, typeof HlmSelectTrigger, typeof HlmSelectValue, typeof HlmSelectValues, typeof HlmSelectValuesContent, typeof HlmSelectValueTemplate];

export { HlmSelect, HlmSelectContent, HlmSelectGroup, HlmSelectImports, HlmSelectItem, HlmSelectLabel, HlmSelectMultiple, HlmSelectPlaceholder, HlmSelectPortal, HlmSelectScrollDown, HlmSelectScrollUp, HlmSelectSeparator, HlmSelectTrigger, HlmSelectValue, HlmSelectValueTemplate, HlmSelectValues, HlmSelectValuesContent };
