import * as _angular_core from '@angular/core';
import { ValueProvider } from '@angular/core';
import { BrnDateInput, BrnDatePickerTriggerBase, BrnDatePickerBase } from '@spartan-ng/brain/date-picker';
import * as i1 from '@gosamply/ui/input-group';
import { BooleanInput, NumberInput } from '@angular/cdk/coercion';
import { ControlValueAccessor } from '@angular/forms';
import { ChangeFn, TouchFn } from '@spartan-ng/brain/forms';
import { BrnOverlayState } from '@spartan-ng/brain/overlay';
import * as _spartan_ng_brain_popover from '@spartan-ng/brain/popover';
import { BrnPopover, BrnPopoverAlign } from '@spartan-ng/brain/popover';
import * as i1$1 from '@spartan-ng/brain/field';
import { ClassValue } from 'clsx';

declare class HlmDateMultiInput<T> extends BrnDateInput<T[]> implements BrnDatePickerTriggerBase {
    private readonly _config;
    private readonly _fieldControl;
    private readonly _invalid;
    protected readonly _spartanInvalid: _angular_core.Signal<boolean | null | undefined>;
    protected readonly _dirty: _angular_core.Signal<boolean | null> | undefined;
    protected readonly _touched: _angular_core.Signal<boolean | null> | undefined;
    protected readonly _ariaInvalid: _angular_core.Signal<"true" | null>;
    /**
     * Parses input text into dates. Return `null` for invalid input - the
     * picker's dates are cleared while the text is preserved so the user can
     * fix it.
     *
     * Defaults to `parseDate` from `HlmDatePickerMultiConfig`.
     */
    readonly parseDate: _angular_core.InputSignal<(value: string) => T[] | null>;
    /**
     * Formats the current dates into the input/edit format shown while the
     * input is focused. On blur the picker's display format is restored.
     *
     * Defaults to `formatInputDates` from `HlmDatePickerMultiConfig`.
     */
    readonly formatInputDates: _angular_core.InputSignal<(dates: T[]) => string>;
    protected parseValue(value: string): T[] | null;
    protected formatInputValue(value: T[]): string;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<HlmDateMultiInput<any>, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<HlmDateMultiInput<any>, "hlm-date-multi-input", never, { "parseDate": { "alias": "parseDate"; "required": false; "isSignal": true; }; "formatInputDates": { "alias": "formatInputDates"; "required": false; "isSignal": true; }; }, {}, never, never, true, [{ directive: typeof i1.HlmInputGroup; inputs: {}; outputs: {}; }]>;
}

declare const HLM_DATE_PICKER_VALUE_ACCESSOR: {
    provide: _angular_core.InjectionToken<readonly ControlValueAccessor[]>;
    useExisting: _angular_core.Type<any>;
    multi: boolean;
};
declare class HlmDatePicker<T> implements BrnDatePickerBase<T>, ControlValueAccessor {
    private readonly _config;
    readonly popover: _angular_core.Signal<BrnPopover>;
    private readonly _trigger;
    readonly align: _angular_core.InputSignal<BrnPopoverAlign>;
    /** Show dropdowns to navigate between months or years. */
    readonly captionLayout: _angular_core.InputSignal<"dropdown" | "label" | "dropdown-months" | "dropdown-years">;
    /** The minimum date that can be selected. */
    readonly minDate: _angular_core.InputSignal<T | undefined>;
    /** The maximum date that can be selected. */
    readonly maxDate: _angular_core.InputSignal<T | undefined>;
    /** Determine if the date picker is disabled. */
    readonly disabled: _angular_core.InputSignalWithTransform<boolean, BooleanInput>;
    /** The selected value. */
    readonly date: _angular_core.InputSignal<T | undefined>;
    /** The date the calendar focuses on first open when no date is selected. */
    readonly defaultFocusedDate: _angular_core.InputSignal<T | undefined>;
    protected readonly _mutableDate: _angular_core.WritableSignal<T | undefined>;
    /** If true, the date picker will close when a date is selected. */
    readonly autoCloseOnSelect: _angular_core.InputSignalWithTransform<boolean, BooleanInput>;
    /** Defines how the date should be displayed in the UI.  */
    readonly formatDate: _angular_core.InputSignal<(date: T) => string>;
    /** Defines how the date should be transformed before saving to model/form. */
    readonly transformDate: _angular_core.InputSignal<(date: T) => T>;
    protected readonly _popoverState: _angular_core.WritableSignal<BrnOverlayState | null>;
    protected readonly _disabled: _angular_core.WritableSignal<boolean>;
    /** @internal The disabled state as a readonly signal */
    readonly disabledState: _angular_core.Signal<boolean>;
    readonly formattedDate: _angular_core.Signal<string | undefined>;
    readonly dateChange: _angular_core.OutputEmitterRef<T | null>;
    readonly labelableId: _angular_core.Signal<string | undefined>;
    readonly hasDate: _angular_core.Signal<boolean>;
    /** @internal The current raw value, used by inputs to reformat on focus. */
    readonly value: _angular_core.Signal<NonNullable<T> | null>;
    protected _onChange?: ChangeFn<T | null>;
    protected _onTouched?: TouchFn;
    protected _onStateChange(state: BrnOverlayState): void;
    protected _handleChange(value: T | undefined): void;
    /**
     * Commit a date to the picker. Updates the internal model, notifies form
     * controls, and emits `dateChange`. Unlike `_handleChange`, this does not
     * close the popover - it's intended to be called from a text input that
     * is parsing user-entered values while typing.
     */
    updateDate(value: T | null): void;
    /** CONTROL VALUE ACCESSOR */
    writeValue(value: T | null): void;
    registerOnChange(fn: ChangeFn<T | null>): void;
    registerOnTouched(fn: TouchFn): void;
    touched(): void;
    setDisabledState(isDisabled: boolean): void;
    open(): void;
    close(): void;
    reset(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<HlmDatePicker<any>, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<HlmDatePicker<any>, "hlm-date-picker", never, { "align": { "alias": "align"; "required": false; "isSignal": true; }; "captionLayout": { "alias": "captionLayout"; "required": false; "isSignal": true; }; "minDate": { "alias": "minDate"; "required": false; "isSignal": true; }; "maxDate": { "alias": "maxDate"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "date": { "alias": "date"; "required": false; "isSignal": true; }; "defaultFocusedDate": { "alias": "defaultFocusedDate"; "required": false; "isSignal": true; }; "autoCloseOnSelect": { "alias": "autoCloseOnSelect"; "required": false; "isSignal": true; }; "formatDate": { "alias": "formatDate"; "required": false; "isSignal": true; }; "transformDate": { "alias": "transformDate"; "required": false; "isSignal": true; }; }, { "dateChange": "dateChange"; }, ["_trigger"], ["*", "[hlmDatePickerHeader]", "[hlmDatePickerFooter]"], true, [{ directive: typeof i1$1.BrnFieldControl; inputs: {}; outputs: {}; }]>;
}

declare class HlmDatePickerAnchor {
    private readonly _host;
    private readonly _brnOverlay;
    readonly hlmDatePickerAnchorForInput: _angular_core.InputSignal<BrnPopover | undefined>;
    readonly hlmDatePickerAnchorFor: _angular_core.WritableSignal<BrnPopover | undefined>;
    constructor();
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<HlmDatePickerAnchor, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<HlmDatePickerAnchor, "[hlmDatePickerAnchor]", never, { "hlmDatePickerAnchorForInput": { "alias": "hlmDatePickerAnchorFor"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class HlmDatePickerInput<T> extends BrnDateInput<T> implements BrnDatePickerTriggerBase {
    private readonly _config;
    private readonly _fieldControl;
    private readonly _invalid;
    protected readonly _spartanInvalid: _angular_core.Signal<boolean | null | undefined>;
    protected readonly _dirty: _angular_core.Signal<boolean | null> | undefined;
    protected readonly _touched: _angular_core.Signal<boolean | null> | undefined;
    protected readonly _ariaInvalid: _angular_core.Signal<"true" | null>;
    /**
     * Parses input text into a date value. Return `null` for invalid
     * input - the picker's date is cleared while the text is preserved so
     * the user can fix it.
     *
     * Defaults to `parseDate` from `HlmDatePickerConfig`.
     */
    readonly parseDate: _angular_core.InputSignal<(value: string) => T | null>;
    /**
     * Formats the current date into the input/edit format shown while the
     * input is focused. On blur the picker's display format is restored.
     *
     * Defaults to `formatInputDate` from `HlmDatePickerConfig`.
     */
    readonly formatInputDate: _angular_core.InputSignal<(date: T) => string>;
    protected parseValue(value: string): T | null;
    protected formatInputValue(value: T): string;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<HlmDatePickerInput<any>, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<HlmDatePickerInput<any>, "hlm-date-picker-input", never, { "parseDate": { "alias": "parseDate"; "required": false; "isSignal": true; }; "formatInputDate": { "alias": "formatInputDate"; "required": false; "isSignal": true; }; }, {}, never, never, true, [{ directive: typeof i1.HlmInputGroup; inputs: {}; outputs: {}; }]>;
}

declare const HLM_DATE_PICKER_MULTI_VALUE_ACCESSOR: {
    provide: _angular_core.InjectionToken<readonly ControlValueAccessor[]>;
    useExisting: _angular_core.Type<any>;
    multi: boolean;
};
declare class HlmDatePickerMulti<T> implements BrnDatePickerBase<T[]>, ControlValueAccessor {
    private readonly _config;
    readonly popover: _angular_core.Signal<BrnPopover>;
    private readonly _trigger;
    readonly align: _angular_core.InputSignal<BrnPopoverAlign>;
    /** Show dropdowns to navigate between months or years. */
    readonly captionLayout: _angular_core.InputSignal<"dropdown" | "label" | "dropdown-months" | "dropdown-years">;
    /** The minimum date that can be selected.*/
    readonly minDate: _angular_core.InputSignal<T | undefined>;
    /** The maximum date that can be selected. */
    readonly maxDate: _angular_core.InputSignal<T | undefined>;
    /** The minimum selectable dates.  */
    readonly minSelection: _angular_core.InputSignalWithTransform<number | undefined, NumberInput>;
    /** The maximum selectable dates.  */
    readonly maxSelection: _angular_core.InputSignalWithTransform<number | undefined, NumberInput>;
    /** Determine if the date picker is disabled. */
    readonly disabled: _angular_core.InputSignalWithTransform<boolean, BooleanInput>;
    /** The selected value. */
    readonly date: _angular_core.InputSignal<T[] | undefined>;
    protected readonly _mutableDate: _angular_core.WritableSignal<T[] | undefined>;
    /** If true, the date picker will close when the max selection of dates is reached. */
    readonly autoCloseOnMaxSelection: _angular_core.InputSignalWithTransform<boolean, BooleanInput>;
    /** Defines how the date should be displayed in the UI.  */
    readonly formatDates: _angular_core.InputSignal<(date: T[]) => string>;
    /** Defines how the date should be transformed before saving to model/form. */
    readonly transformDates: _angular_core.InputSignal<(date: T[]) => T[]>;
    protected readonly _popoverState: _angular_core.WritableSignal<BrnOverlayState | null>;
    protected readonly _disabled: _angular_core.WritableSignal<boolean>;
    /** @internal The disabled state as a readonly signal */
    readonly disabledState: _angular_core.Signal<boolean>;
    readonly formattedDate: _angular_core.Signal<string | undefined>;
    readonly dateChange: _angular_core.OutputEmitterRef<T[]>;
    readonly labelableId: _angular_core.Signal<string | undefined>;
    readonly hasDate: _angular_core.Signal<boolean>;
    /** @internal The current raw value, used by inputs to reformat on focus. */
    readonly value: _angular_core.Signal<T[] | null>;
    protected _onChange?: ChangeFn<T[]>;
    protected _onTouched?: TouchFn;
    protected _onStateChange(state: BrnOverlayState): void;
    protected _handleChange(value: T[] | undefined): void;
    /**
     * Commit dates to the picker. Updates the internal model, notifies form
     * controls, and emits `dateChange`. Intended to be called from a text input
     * that parses user-entered values. Pass `null` to clear the selection.
     */
    updateDate(value: T[] | null): void;
    touched(): void;
    /** CONTROL VALUE ACCESSOR */
    writeValue(value: T[] | null): void;
    registerOnChange(fn: ChangeFn<T[]>): void;
    registerOnTouched(fn: TouchFn): void;
    setDisabledState(isDisabled: boolean): void;
    open(): void;
    close(): void;
    reset(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<HlmDatePickerMulti<any>, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<HlmDatePickerMulti<any>, "hlm-date-picker-multi", never, { "align": { "alias": "align"; "required": false; "isSignal": true; }; "captionLayout": { "alias": "captionLayout"; "required": false; "isSignal": true; }; "minDate": { "alias": "minDate"; "required": false; "isSignal": true; }; "maxDate": { "alias": "maxDate"; "required": false; "isSignal": true; }; "minSelection": { "alias": "minSelection"; "required": false; "isSignal": true; }; "maxSelection": { "alias": "maxSelection"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "date": { "alias": "date"; "required": false; "isSignal": true; }; "autoCloseOnMaxSelection": { "alias": "autoCloseOnMaxSelection"; "required": false; "isSignal": true; }; "formatDates": { "alias": "formatDates"; "required": false; "isSignal": true; }; "transformDates": { "alias": "transformDates"; "required": false; "isSignal": true; }; }, { "dateChange": "dateChange"; }, ["_trigger"], ["*", "[hlmDatePickerHeader]", "[hlmDatePickerFooter]"], true, [{ directive: typeof i1$1.BrnFieldControl; inputs: {}; outputs: {}; }]>;
}

declare class HlmDatePickerTrigger implements BrnDatePickerTriggerBase {
    private static _nextId;
    private readonly _fieldControl;
    private readonly _datePicker;
    private readonly _invalid;
    protected readonly _spartanInvalid: _angular_core.Signal<boolean | null | undefined>;
    protected readonly _dirty: _angular_core.Signal<boolean | null> | undefined;
    protected readonly _touched: _angular_core.Signal<boolean | null> | undefined;
    protected readonly _ariaInvalid: _angular_core.Signal<"true" | null>;
    readonly userClass: _angular_core.InputSignal<ClassValue>;
    protected readonly _computedClass: _angular_core.Signal<string>;
    protected readonly _isPlaceholder: _angular_core.Signal<boolean>;
    /** The id of the button that opens the date picker. */
    readonly buttonId: _angular_core.InputSignal<string>;
    /** @internal The id of the button that opens the date picker, used for labeling. */
    readonly triggerId: _angular_core.InputSignal<string>;
    /** Forces the invalid state visually, regardless of form control state. */
    readonly forceInvalid: _angular_core.InputSignalWithTransform<boolean, BooleanInput>;
    readonly variant: _angular_core.InputSignal<"default" | "outline" | "secondary" | "ghost" | "destructive" | "link" | null | undefined>;
    readonly showTrigger: _angular_core.InputSignalWithTransform<boolean, BooleanInput>;
    protected readonly _popover: _angular_core.Signal<_spartan_ng_brain_popover.BrnPopover>;
    protected readonly _disabled: _angular_core.Signal<boolean>;
    protected readonly _formattedDate: _angular_core.Signal<string | undefined>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<HlmDatePickerTrigger, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<HlmDatePickerTrigger, "hlm-date-picker-trigger", never, { "userClass": { "alias": "class"; "required": false; "isSignal": true; }; "buttonId": { "alias": "buttonId"; "required": false; "isSignal": true; }; "forceInvalid": { "alias": "forceInvalid"; "required": false; "isSignal": true; }; "variant": { "alias": "variant"; "required": false; "isSignal": true; }; "showTrigger": { "alias": "showTrigger"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}

declare class HlmDateRangeInput<T> extends BrnDateInput<[T, T]> implements BrnDatePickerTriggerBase {
    private readonly _config;
    private readonly _fieldControl;
    private readonly _invalid;
    protected readonly _spartanInvalid: _angular_core.Signal<boolean | null | undefined>;
    protected readonly _dirty: _angular_core.Signal<boolean | null> | undefined;
    protected readonly _touched: _angular_core.Signal<boolean | null> | undefined;
    protected readonly _ariaInvalid: _angular_core.Signal<"true" | null>;
    /**
     * Parses input text into a date range. Return `null` for invalid
     * input - the picker's range is cleared while the text is preserved so
     * the user can fix it.
     *
     * Defaults to `parseDate` from `HlmDateRangePickerConfig`.
     */
    readonly parseDate: _angular_core.InputSignal<(value: string) => [T, T] | null>;
    /**
     * Formats the current range into the input/edit format shown while the
     * input is focused. On blur the picker's display format is restored.
     *
     * Defaults to `formatInputDates` from `HlmDateRangePickerConfig`.
     */
    readonly formatInputDates: _angular_core.InputSignal<(dates: [T | null, T | null]) => string>;
    protected parseValue(value: string): [T, T] | null;
    protected formatInputValue(value: [T, T]): string;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<HlmDateRangeInput<any>, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<HlmDateRangeInput<any>, "hlm-date-range-input", never, { "parseDate": { "alias": "parseDate"; "required": false; "isSignal": true; }; "formatInputDates": { "alias": "formatInputDates"; "required": false; "isSignal": true; }; }, {}, never, never, true, [{ directive: typeof i1.HlmInputGroup; inputs: {}; outputs: {}; }]>;
}

declare const HLM_DATE_RANGE_PICKER_VALUE_ACCESSOR: {
    provide: _angular_core.InjectionToken<readonly ControlValueAccessor[]>;
    useExisting: _angular_core.Type<any>;
    multi: boolean;
};
declare class HlmDateRangePicker<T> implements BrnDatePickerBase<[T, T]>, ControlValueAccessor {
    private readonly _config;
    readonly popover: _angular_core.Signal<BrnPopover>;
    private readonly _trigger;
    readonly align: _angular_core.InputSignal<BrnPopoverAlign>;
    /** Show dropdowns to navigate between months or years. */
    readonly captionLayout: _angular_core.InputSignal<"dropdown" | "label" | "dropdown-months" | "dropdown-years">;
    /** The minimum date that can be selected.*/
    readonly minDate: _angular_core.InputSignal<T | undefined>;
    /** The maximum date that can be selected. */
    readonly maxDate: _angular_core.InputSignal<T | undefined>;
    /** Determine if the date picker is disabled. */
    readonly disabled: _angular_core.InputSignalWithTransform<boolean, BooleanInput>;
    /** The selected value. */
    readonly date: _angular_core.InputSignal<[T, T] | undefined>;
    protected readonly _mutableDate: _angular_core.WritableSignal<[T, T] | undefined>;
    protected readonly _start: _angular_core.WritableSignal<T | undefined>;
    protected readonly _end: _angular_core.WritableSignal<T | undefined>;
    /** If true, the date picker will close when the end date is selected */
    readonly autoCloseOnEndSelection: _angular_core.InputSignalWithTransform<boolean, BooleanInput>;
    /** Defines how the date should be displayed in the UI.  */
    readonly formatDates: _angular_core.InputSignal<(dates: [T | null, T | null]) => string>;
    /** Defines how the date should be transformed before saving to model/form. */
    readonly transformDates: _angular_core.InputSignal<(date: [T, T]) => [T, T]>;
    protected readonly _popoverState: _angular_core.WritableSignal<BrnOverlayState | null>;
    protected readonly _disabled: _angular_core.WritableSignal<boolean>;
    /** @internal The disabled state as a readonly signal */
    readonly disabledState: _angular_core.Signal<boolean>;
    readonly formattedDate: _angular_core.Signal<string | undefined>;
    readonly dateChange: _angular_core.OutputEmitterRef<[T, T] | null>;
    readonly labelableId: _angular_core.Signal<string | undefined>;
    readonly hasDate: _angular_core.Signal<boolean>;
    /** @internal The current raw value, used by inputs to reformat on focus. */
    readonly value: _angular_core.Signal<[T, T] | null>;
    protected _onChange?: ChangeFn<[T, T] | null>;
    protected _onTouched?: TouchFn;
    protected _onStateChange(state: BrnOverlayState): void;
    protected _handleStartDayChange(value: T | undefined): void;
    protected _handleEndDateChange(value: T | undefined): void;
    /**
     * Commit a range to the picker. Updates the internal model, notifies form
     * controls, and emits `dateChange`. Intended to be called from a text input
     * that parses user-entered values. Pass `null` to clear the range.
     */
    updateDate(value: [T, T] | null): void;
    touched(): void;
    /** CONTROL VALUE ACCESSOR */
    writeValue(value: [T, T] | null): void;
    registerOnChange(fn: ChangeFn<[T, T] | null>): void;
    registerOnTouched(fn: TouchFn): void;
    setDisabledState(isDisabled: boolean): void;
    open(): void;
    close(): void;
    reset(): void;
    protected _onClose(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<HlmDateRangePicker<any>, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<HlmDateRangePicker<any>, "hlm-date-range-picker", never, { "align": { "alias": "align"; "required": false; "isSignal": true; }; "captionLayout": { "alias": "captionLayout"; "required": false; "isSignal": true; }; "minDate": { "alias": "minDate"; "required": false; "isSignal": true; }; "maxDate": { "alias": "maxDate"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "date": { "alias": "date"; "required": false; "isSignal": true; }; "autoCloseOnEndSelection": { "alias": "autoCloseOnEndSelection"; "required": false; "isSignal": true; }; "formatDates": { "alias": "formatDates"; "required": false; "isSignal": true; }; "transformDates": { "alias": "transformDates"; "required": false; "isSignal": true; }; }, { "dateChange": "dateChange"; }, ["_trigger"], ["*", "[hlmDatePickerHeader]", "[hlmDatePickerFooter]"], true, [{ directive: typeof i1$1.BrnFieldControl; inputs: {}; outputs: {}; }]>;
}

declare class HlmMonthYearInput<T> extends BrnDateInput<T> implements BrnDatePickerTriggerBase {
    private readonly _config;
    private readonly _fieldControl;
    private readonly _invalid;
    protected readonly _spartanInvalid: _angular_core.Signal<boolean | null | undefined>;
    protected readonly _dirty: _angular_core.Signal<boolean | null> | undefined;
    protected readonly _touched: _angular_core.Signal<boolean | null> | undefined;
    protected readonly _ariaInvalid: _angular_core.Signal<"true" | null>;
    /**
     * Parses input text into a date value. Return `null` for invalid
     * input - the picker's date is cleared while the text is preserved so
     * the user can fix it.
     *
     * Defaults to `parseDate` from `HlmMonthYearPickerConfig`.
     */
    readonly parseDate: _angular_core.InputSignal<(value: string) => T | null>;
    /**
     * Formats the current date into the input/edit format shown while the
     * input is focused. On blur the picker's display format is restored.
     *
     * Defaults to `formatInputDate` from `HlmMonthYearPickerConfig`.
     */
    readonly formatInputDate: _angular_core.InputSignal<(date: T) => string>;
    protected parseValue(value: string): T | null;
    protected formatInputValue(value: T): string;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<HlmMonthYearInput<any>, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<HlmMonthYearInput<any>, "hlm-month-year-input", never, { "parseDate": { "alias": "parseDate"; "required": false; "isSignal": true; }; "formatInputDate": { "alias": "formatInputDate"; "required": false; "isSignal": true; }; }, {}, never, never, true, [{ directive: typeof i1.HlmInputGroup; inputs: {}; outputs: {}; }]>;
}

declare const HLM_MONTH_YEAR_PICKER_VALUE_ACCESSOR: {
    provide: _angular_core.InjectionToken<readonly ControlValueAccessor[]>;
    useExisting: _angular_core.Type<any>;
    multi: boolean;
};
declare class HlmMonthYearPicker<T> implements BrnDatePickerBase<T>, ControlValueAccessor {
    private readonly _config;
    readonly popover: _angular_core.Signal<BrnPopover>;
    private readonly _trigger;
    readonly align: _angular_core.InputSignal<BrnPopoverAlign>;
    /** The minimum date that can be selected.*/
    readonly minDate: _angular_core.InputSignal<T | undefined>;
    /** The maximum date that can be selected. */
    readonly maxDate: _angular_core.InputSignal<T | undefined>;
    /** Determine if the date picker is disabled. */
    readonly disabled: _angular_core.InputSignalWithTransform<boolean, BooleanInput>;
    /** The selected value. */
    readonly date: _angular_core.InputSignal<T | undefined>;
    /** The date the calendar focuses on first open when no date is selected. */
    readonly defaultFocusedDate: _angular_core.InputSignal<T | undefined>;
    protected readonly _mutableDate: _angular_core.WritableSignal<T | undefined>;
    /** If true, the date picker will close when a date is selected. */
    readonly autoCloseOnSelect: _angular_core.InputSignalWithTransform<boolean, BooleanInput>;
    /** Defines how the date should be displayed in the UI.  */
    readonly formatDate: _angular_core.InputSignal<(date: T) => string>;
    /** Defines how the date should be transformed before saving to model/form. */
    readonly transformDate: _angular_core.InputSignal<(date: T) => T>;
    protected readonly _popoverState: _angular_core.WritableSignal<BrnOverlayState | null>;
    protected readonly _disabled: _angular_core.WritableSignal<boolean>;
    /** @internal The disabled state as a readonly signal */
    readonly disabledState: _angular_core.Signal<boolean>;
    readonly formattedDate: _angular_core.Signal<string | undefined>;
    readonly dateChange: _angular_core.OutputEmitterRef<T | null>;
    readonly labelableId: _angular_core.Signal<string | undefined>;
    readonly hasDate: _angular_core.Signal<boolean>;
    /** @internal The current raw value, used by inputs to reformat on focus. */
    readonly value: _angular_core.Signal<NonNullable<T> | null>;
    protected _onChange?: ChangeFn<T | null>;
    protected _onTouched?: TouchFn;
    protected _onStateChange(state: BrnOverlayState): void;
    protected _handleChange(value: T | undefined): void;
    /**
     * Commit a date to the picker. Updates the internal model, notifies form
     * controls, and emits `dateChange`. Unlike `_handleChange`, this does not
     * close the popover - it's intended to be called from a text input that
     * is parsing user-entered values while typing.
     */
    updateDate(value: T | null): void;
    /** CONTROL VALUE ACCESSOR */
    writeValue(value: T | null): void;
    registerOnChange(fn: ChangeFn<T | null>): void;
    registerOnTouched(fn: TouchFn): void;
    touched(): void;
    setDisabledState(isDisabled: boolean): void;
    open(): void;
    close(): void;
    reset(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<HlmMonthYearPicker<any>, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<HlmMonthYearPicker<any>, "hlm-month-year-picker", never, { "align": { "alias": "align"; "required": false; "isSignal": true; }; "minDate": { "alias": "minDate"; "required": false; "isSignal": true; }; "maxDate": { "alias": "maxDate"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "date": { "alias": "date"; "required": false; "isSignal": true; }; "defaultFocusedDate": { "alias": "defaultFocusedDate"; "required": false; "isSignal": true; }; "autoCloseOnSelect": { "alias": "autoCloseOnSelect"; "required": false; "isSignal": true; }; "formatDate": { "alias": "formatDate"; "required": false; "isSignal": true; }; "transformDate": { "alias": "transformDate"; "required": false; "isSignal": true; }; }, { "dateChange": "dateChange"; }, ["_trigger"], ["*", "[hlmDatePickerHeader]", "[hlmDatePickerFooter]"], true, [{ directive: typeof i1$1.BrnFieldControl; inputs: {}; outputs: {}; }]>;
}

interface HlmDatePickerMultiConfig<T> {
    /**
     * If true, the date picker will close when the max selection of dates is reached.
     */
    autoCloseOnMaxSelection: boolean;
    /**
     * Defines how the date should be displayed in the UI.
     *
     * @param dates
     * @returns formatted date
     */
    formatDates: (dates: T[]) => string;
    /**
     * Defines how the dates should be displayed while the input is focused,
     * i.e. the format the user is expected to type in.
     *
     * @param dates
     * @returns formatted dates in the input/edit format
     */
    formatInputDates: (dates: T[]) => string;
    /**
     * Defines how the date should be transformed before saving to model/form.
     *
     * @param dates
     * @returns transformed date
     */
    transformDates: (dates: T[]) => T[];
    /**
     * Parse a user-entered string into a date.
     *
     * @param value the raw string from the input
     * @returns the parsed date, or `null` when the value can't be parsed
     */
    parseDate: (value: string) => T[] | null;
}
declare function provideHlmDatePickerMultiConfig<T>(config: Partial<HlmDatePickerMultiConfig<T>>): ValueProvider;
declare function injectHlmDatePickerMultiConfig<T>(): HlmDatePickerMultiConfig<T>;

interface HlmDatePickerConfig<T> {
    /**
     * If true, the date picker will close when a date is selected.
     */
    autoCloseOnSelect: boolean;
    /**
     * Defines how the date should be displayed in the UI.
     *
     * @param date
     * @returns formatted date
     */
    formatDate: (date: T) => string;
    /**
     * Defines how the date should be displayed while the input is focused,
     * i.e. the format the user is expected to type in.
     *
     * @param date
     * @returns formatted date in the input/edit format
     */
    formatInputDate: (date: T) => string;
    /**
     * Defines how the date should be transformed before saving to model/form.
     *
     * @param date
     * @returns transformed date
     */
    transformDate: (date: T) => T;
    /**
     * Parse a user-entered string into a date.
     *
     * @param value the raw string from the input
     * @returns the parsed date, or `null` when the value can't be parsed
     */
    parseDate: (value: string) => T | null;
}
declare function provideHlmDatePickerConfig<T>(config: Partial<HlmDatePickerConfig<T>>): ValueProvider;
declare function injectHlmDatePickerConfig<T>(): HlmDatePickerConfig<T>;

interface HlmDateRangePickerConfig<T> {
    /**
     * If true, the date picker will close when the max selection of dates is reached.
     */
    autoCloseOnEndSelection: boolean;
    /**
     * Defines how the date should be displayed in the UI.
     *
     * @param dates
     * @returns formatted date
     */
    formatDates: (dates: [T | null, T | null]) => string;
    /**
     * Defines how the range should be displayed while the input is focused,
     * i.e. the format the user is expected to type in.
     *
     * @param dates
     * @returns formatted range in the input/edit format
     */
    formatInputDates: (dates: [T | null, T | null]) => string;
    /**
     * Defines how the date should be transformed before saving to model/form.
     *
     * @param dates
     * @returns transformed date
     */
    transformDates: (dates: [T, T]) => [T, T];
    /**
     * Parse a user-entered string into a date range.
     *
     * @param value the raw string from the input
     * @returns the parsed range, or `null` when the value can't be parsed
     */
    parseDate: (value: string) => [T, T] | null;
}
declare function provideHlmDateRangePickerConfig<T>(config: Partial<HlmDateRangePickerConfig<T>>): ValueProvider;
declare function injectHlmDateRangePickerConfig<T>(): HlmDateRangePickerConfig<T>;

interface HlmMonthYearPickerConfig<T> {
    /**
     * If true, the date picker will close when a date is selected.
     */
    autoCloseOnSelect: boolean;
    /**
     * Defines how the date should be displayed in the UI.
     *
     * @param date
     * @returns formatted date
     */
    formatDate: (date: T) => string;
    /**
     * Defines how the date should be displayed while the input is focused,
     * i.e. the format the user is expected to type in.
     *
     * @param date
     * @returns formatted date in the input/edit format
     */
    formatInputDate: (date: T) => string;
    /**
     * Defines how the date should be transformed before saving to model/form.
     *
     * @param date
     * @returns transformed date
     */
    transformDate: (date: T) => T;
    /**
     * Parse a user-entered string into a date.
     *
     * @param value the raw string from the input
     * @returns the parsed date, or `null` when the value can't be parsed
     */
    parseDate: (value: string) => T | null;
}
declare function provideHlmMonthYearPickerConfig<T>(config: Partial<HlmMonthYearPickerConfig<T>>): ValueProvider;
declare function injectHlmMonthYearPickerConfig<T>(): HlmMonthYearPickerConfig<T>;

declare const HlmDatePickerImports: readonly [typeof HlmDatePicker, typeof HlmDatePickerAnchor, typeof HlmDatePickerInput, typeof HlmDatePickerMulti, typeof HlmDateMultiInput, typeof HlmDateRangeInput, typeof HlmDateRangePicker, typeof HlmDatePickerTrigger, typeof HlmMonthYearPicker, typeof HlmMonthYearInput];

export { HLM_DATE_PICKER_MULTI_VALUE_ACCESSOR, HLM_DATE_PICKER_VALUE_ACCESSOR, HLM_DATE_RANGE_PICKER_VALUE_ACCESSOR, HLM_MONTH_YEAR_PICKER_VALUE_ACCESSOR, HlmDateMultiInput, HlmDatePicker, HlmDatePickerAnchor, HlmDatePickerImports, HlmDatePickerInput, HlmDatePickerMulti, HlmDatePickerTrigger, HlmDateRangeInput, HlmDateRangePicker, HlmMonthYearInput, HlmMonthYearPicker, injectHlmDatePickerConfig, injectHlmDatePickerMultiConfig, injectHlmDateRangePickerConfig, injectHlmMonthYearPickerConfig, provideHlmDatePickerConfig, provideHlmDatePickerMultiConfig, provideHlmDateRangePickerConfig, provideHlmMonthYearPickerConfig };
export type { HlmDatePickerConfig, HlmDatePickerMultiConfig, HlmDateRangePickerConfig, HlmMonthYearPickerConfig };
