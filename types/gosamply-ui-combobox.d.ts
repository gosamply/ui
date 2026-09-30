import * as i0 from '@angular/core';
import * as i1 from '@spartan-ng/brain/combobox';
import * as i2 from '@spartan-ng/brain/popover';
import { BooleanInput } from '@angular/cdk/coercion';
import * as i2$1 from '@gosamply/ui/input-group';
import { ClassValue } from 'clsx';

declare class HlmCombobox {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmCombobox, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmCombobox, "[hlmCombobox],hlm-combobox", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnCombobox; inputs: { "autoHighlight": "autoHighlight"; "closeOnSelect": "closeOnSelect"; "disabled": "disabled"; "filter": "filter"; "search": "search"; "value": "value"; "itemToString": "itemToString"; "filterOptions": "filterOptions"; "isItemEqualToValue": "isItemEqualToValue"; }; outputs: { "searchChange": "searchChange"; "valueChange": "valueChange"; }; }, { directive: typeof i2.BrnPopover; inputs: { "align": "align"; "closeOnOutsidePointerEvents": "closeOnOutsidePointerEvents"; "sideOffset": "sideOffset"; "state": "state"; "offsetX": "offsetX"; "scrollStrategy": "scrollStrategy"; }; outputs: { "stateChanged": "stateChanged"; "closed": "closed"; }; }]>;
}

declare class HlmComboboxChip {
    readonly showRemove: i0.InputSignalWithTransform<boolean, BooleanInput>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmComboboxChip, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HlmComboboxChip, "hlm-combobox-chip", never, { "showRemove": { "alias": "showRemove"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, [{ directive: typeof i1.BrnComboboxChip; inputs: { "value": "value"; }; outputs: {}; }]>;
}

declare class HlmComboboxChipInput {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmComboboxChipInput, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmComboboxChipInput, "input[hlmComboboxChipInput]", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnComboboxChipInput; inputs: { "id": "id"; "aria-invalid": "aria-invalid"; }; outputs: {}; }]>;
}

declare class HlmComboboxChips {
    private readonly _combobox;
    readonly forceInvalid: i0.InputSignalWithTransform<boolean, BooleanInput>;
    protected readonly _spartanInvalid: i0.Signal<boolean | undefined>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmComboboxChips, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmComboboxChips, "[hlmComboboxChips],hlm-combobox-chips", never, { "forceInvalid": { "alias": "forceInvalid"; "required": false; "isSignal": true; }; }, {}, never, never, true, [{ directive: typeof i1.BrnComboboxAnchor; inputs: {}; outputs: {}; }, { directive: typeof i1.BrnComboboxPopoverTrigger; inputs: {}; outputs: {}; }]>;
}

declare class HlmComboboxContent {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmComboboxContent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmComboboxContent, "[hlmComboboxContent],hlm-combobox-content", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnComboboxContent; inputs: {}; outputs: {}; }]>;
}

declare class HlmComboboxEmpty {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmComboboxEmpty, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmComboboxEmpty, "[hlmComboboxEmpty],hlm-combobox-empty", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnComboboxEmpty; inputs: {}; outputs: {}; }]>;
}

declare class HlmComboboxGroup {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmComboboxGroup, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmComboboxGroup, "[hlmComboboxGroup]", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnComboboxGroup; inputs: {}; outputs: {}; }]>;
}

declare class HlmComboboxInput {
    private static _id;
    readonly inputId: i0.InputSignal<string>;
    readonly placeholder: i0.InputSignal<string>;
    readonly showTrigger: i0.InputSignalWithTransform<boolean, BooleanInput>;
    readonly showClear: i0.InputSignalWithTransform<boolean, BooleanInput>;
    readonly forceInvalid: i0.InputSignalWithTransform<boolean, BooleanInput>;
    /** Accessible name for the icon-only popover trigger button. */
    readonly triggerAriaLabel: i0.InputSignal<string>;
    /** Accessible name for the icon-only clear button. */
    readonly clearAriaLabel: i0.InputSignal<string>;
    /** Manual override for aria-invalid. When not set, auto-detects from the parent combobox error state. */
    readonly ariaInvalidOverride: i0.InputSignalWithTransform<boolean | undefined, BooleanInput>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmComboboxInput, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HlmComboboxInput, "hlm-combobox-input", never, { "inputId": { "alias": "inputId"; "required": false; "isSignal": true; }; "placeholder": { "alias": "placeholder"; "required": false; "isSignal": true; }; "showTrigger": { "alias": "showTrigger"; "required": false; "isSignal": true; }; "showClear": { "alias": "showClear"; "required": false; "isSignal": true; }; "forceInvalid": { "alias": "forceInvalid"; "required": false; "isSignal": true; }; "triggerAriaLabel": { "alias": "triggerAriaLabel"; "required": false; "isSignal": true; }; "clearAriaLabel": { "alias": "clearAriaLabel"; "required": false; "isSignal": true; }; "ariaInvalidOverride": { "alias": "aria-invalid"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, [{ directive: typeof i1.BrnComboboxAnchor; inputs: {}; outputs: {}; }, { directive: typeof i2$1.HlmInputGroup; inputs: {}; outputs: {}; }]>;
}

declare class HlmComboboxItem {
    private readonly _brnComboboxItem;
    protected readonly _active: i0.Signal<boolean>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmComboboxItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HlmComboboxItem, "hlm-combobox-item", never, {}, {}, never, ["*"], true, [{ directive: typeof i1.BrnComboboxItem; inputs: { "id": "id"; "disabled": "disabled"; "value": "value"; }; outputs: {}; }]>;
}

declare class HlmComboboxLabel {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmComboboxLabel, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmComboboxLabel, "[hlmComboboxLabel]", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnComboboxLabel; inputs: { "id": "id"; }; outputs: {}; }]>;
}

declare class HlmComboboxList {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmComboboxList, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmComboboxList, "[hlmComboboxList]", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnComboboxList; inputs: { "id": "id"; }; outputs: {}; }]>;
}

declare class HlmComboboxMultiple {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmComboboxMultiple, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmComboboxMultiple, "[hlmComboboxMultiple],hlm-combobox-multiple", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnComboboxMultiple; inputs: { "autoHighlight": "autoHighlight"; "closeOnSelect": "closeOnSelect"; "disabled": "disabled"; "filter": "filter"; "search": "search"; "value": "value"; "itemToString": "itemToString"; "filterOptions": "filterOptions"; "isItemEqualToValue": "isItemEqualToValue"; }; outputs: { "searchChange": "searchChange"; "valueChange": "valueChange"; }; }, { directive: typeof i2.BrnPopover; inputs: { "align": "align"; "closeOnOutsidePointerEvents": "closeOnOutsidePointerEvents"; "sideOffset": "sideOffset"; "state": "state"; "offsetX": "offsetX"; "scrollStrategy": "scrollStrategy"; }; outputs: { "stateChanged": "stateChanged"; "closed": "closed"; }; }]>;
}

declare class HlmComboboxPlaceholder {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmComboboxPlaceholder, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmComboboxPlaceholder, "[hlmComboboxPlaceholder],hlm-combobox-placeholder", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnComboboxPlaceholder; inputs: {}; outputs: {}; }]>;
}

declare class HlmComboboxPortal {
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmComboboxPortal, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmComboboxPortal, "[hlmComboboxPortal]", never, {}, {}, never, never, true, [{ directive: typeof i2.BrnPopoverContent; inputs: { "context": "context"; "class": "class"; }; outputs: {}; }]>;
}

declare class HlmComboboxSeparator {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmComboboxSeparator, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmComboboxSeparator, "[hlmComboboxSeparator]", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnComboboxSeparator; inputs: { "orientation": "orientation"; }; outputs: {}; }]>;
}

declare class HlmComboboxStatus {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmComboboxStatus, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmComboboxStatus, "[hlmComboboxStatus],hlm-combobox-status", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnComboboxStatus; inputs: {}; outputs: {}; }]>;
}

declare class HlmComboboxTrigger {
    private static _id;
    readonly userClass: i0.InputSignal<ClassValue>;
    protected readonly _computedClass: i0.Signal<string>;
    readonly buttonId: i0.InputSignal<string>;
    readonly variant: i0.InputSignal<"default" | "outline" | "secondary" | "ghost" | "destructive" | "link" | null | undefined>;
    readonly forceInvalid: i0.InputSignalWithTransform<boolean, BooleanInput>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmComboboxTrigger, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HlmComboboxTrigger, "hlm-combobox-trigger", never, { "userClass": { "alias": "class"; "required": false; "isSignal": true; }; "buttonId": { "alias": "buttonId"; "required": false; "isSignal": true; }; "variant": { "alias": "variant"; "required": false; "isSignal": true; }; "forceInvalid": { "alias": "forceInvalid"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}

declare class HlmComboboxValue {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmComboboxValue, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmComboboxValue, "[hlmComboboxValue],hlm-combobox-value", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnComboboxValue; inputs: { "placeholder": "placeholder"; }; outputs: {}; }]>;
}

declare class HlmComboboxValueTemplate {
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmComboboxValueTemplate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmComboboxValueTemplate, "[hlmComboboxValueTemplate]", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnComboboxValueTemplate; inputs: {}; outputs: {}; }]>;
}

declare class HlmComboboxValues {
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmComboboxValues, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmComboboxValues, "[hlmComboboxValues]", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnComboboxValues; inputs: {}; outputs: {}; }]>;
}

declare const HlmComboboxImports: readonly [typeof HlmCombobox, typeof HlmComboboxChip, typeof HlmComboboxChipInput, typeof HlmComboboxChips, typeof HlmComboboxContent, typeof HlmComboboxEmpty, typeof HlmComboboxGroup, typeof HlmComboboxInput, typeof HlmComboboxItem, typeof HlmComboboxLabel, typeof HlmComboboxList, typeof HlmComboboxMultiple, typeof HlmComboboxPlaceholder, typeof HlmComboboxPortal, typeof HlmComboboxSeparator, typeof HlmComboboxStatus, typeof HlmComboboxTrigger, typeof HlmComboboxValue, typeof HlmComboboxValueTemplate, typeof HlmComboboxValues];

export { HlmCombobox, HlmComboboxChip, HlmComboboxChipInput, HlmComboboxChips, HlmComboboxContent, HlmComboboxEmpty, HlmComboboxGroup, HlmComboboxImports, HlmComboboxInput, HlmComboboxItem, HlmComboboxLabel, HlmComboboxList, HlmComboboxMultiple, HlmComboboxPlaceholder, HlmComboboxPortal, HlmComboboxSeparator, HlmComboboxStatus, HlmComboboxTrigger, HlmComboboxValue, HlmComboboxValueTemplate, HlmComboboxValues };
