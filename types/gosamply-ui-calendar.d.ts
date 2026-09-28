import * as i0 from '@angular/core';
import * as _spartan_ng_brain_date_time from '@spartan-ng/brain/date-time';
import * as _spartan_ng_brain_calendar from '@spartan-ng/brain/calendar';
import { BrnMonthYearCalendar } from '@spartan-ng/brain/calendar';

declare class HlmCalendar<T> {
    /** Access the calendar i18n */
    protected readonly _i18n: _spartan_ng_brain_calendar.BrnCalendarI18nService;
    /** Access the date time adapter */
    protected readonly _dateAdapter: _spartan_ng_brain_date_time.BrnDateAdapter<T>;
    /** Show dropdowns to navigate between months or years. */
    readonly captionLayout: i0.InputSignal<"dropdown" | "label" | "dropdown-months" | "dropdown-years">;
    /** Access the calendar directive */
    private readonly _calendar;
    /** Get the heading for the current month and year */
    protected readonly _heading: i0.Signal<{
        header: string;
        month: string;
        year: string;
    }>;
    protected readonly _btnClass: string;
    protected readonly _selectClass = "gap-0 px-1.5 py-2 [&>ng-icon]:ms-1";
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmCalendar<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HlmCalendar<any>, "hlm-calendar", never, { "captionLayout": { "alias": "captionLayout"; "required": false; "isSignal": true; }; }, {}, never, never, true, [{ directive: typeof _spartan_ng_brain_calendar.BrnCalendar; inputs: { "min": "min"; "max": "max"; "disabled": "disabled"; "date": "date"; "dateDisabled": "dateDisabled"; "weekStartsOn": "weekStartsOn"; "highlightDays": "highlightDays"; "defaultFocusedDate": "defaultFocusedDate"; }; outputs: { "dateChange": "dateChange"; }; }]>;
}

declare class HlmCalendarMulti<T> {
    /** Show dropdowns to navigate between months or years. */
    readonly captionLayout: i0.InputSignal<"dropdown" | "label" | "dropdown-months" | "dropdown-years">;
    /** Access the calendar i18n */
    protected readonly _i18n: _spartan_ng_brain_calendar.BrnCalendarI18nService;
    /** Access the date time adapter */
    protected readonly _dateAdapter: _spartan_ng_brain_date_time.BrnDateAdapter<T>;
    /** Access the calendar directive */
    private readonly _calendar;
    /** Get the heading for the current month and year */
    protected readonly _heading: i0.Signal<{
        header: string;
        month: string;
        year: string;
    }>;
    protected readonly _btnClass: string;
    protected readonly _selectClass = "gap-0 px-1.5 py-2 [&>ng-icon]:ms-1";
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmCalendarMulti<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HlmCalendarMulti<any>, "hlm-calendar-multi", never, { "captionLayout": { "alias": "captionLayout"; "required": false; "isSignal": true; }; }, {}, never, never, true, [{ directive: typeof _spartan_ng_brain_calendar.BrnCalendarMulti; inputs: { "min": "min"; "max": "max"; "minSelection": "minSelection"; "maxSelection": "maxSelection"; "disabled": "disabled"; "date": "date"; "dateDisabled": "dateDisabled"; "weekStartsOn": "weekStartsOn"; "highlightDays": "highlightDays"; "defaultFocusedDate": "defaultFocusedDate"; }; outputs: { "dateChange": "dateChange"; }; }]>;
}

declare class HlmCalendarRange<T> {
    /** Show dropdowns to navigate between months or years. */
    readonly captionLayout: i0.InputSignal<"dropdown" | "label" | "dropdown-months" | "dropdown-years">;
    /** Access the calendar i18n */
    protected readonly _i18n: _spartan_ng_brain_calendar.BrnCalendarI18nService;
    /** Access the date time adapter */
    protected readonly _dateAdapter: _spartan_ng_brain_date_time.BrnDateAdapter<T>;
    /** Access the calendar directive */
    private readonly _calendar;
    /** Get the heading for the current month and year */
    protected readonly _heading: i0.Signal<{
        header: string;
        month: string;
        year: string;
    }>;
    protected readonly _btnClass: string;
    protected readonly _selectClass = "gap-0 px-1.5 py-2 [&>ng-icon]:ms-1";
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmCalendarRange<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HlmCalendarRange<any>, "hlm-calendar-range", never, { "captionLayout": { "alias": "captionLayout"; "required": false; "isSignal": true; }; }, {}, never, never, true, [{ directive: typeof _spartan_ng_brain_calendar.BrnCalendarRange; inputs: { "min": "min"; "max": "max"; "disabled": "disabled"; "startDate": "startDate"; "endDate": "endDate"; "dateDisabled": "dateDisabled"; "weekStartsOn": "weekStartsOn"; "highlightDays": "highlightDays"; "defaultFocusedDate": "defaultFocusedDate"; }; outputs: { "endDateChange": "endDateChange"; "startDateChange": "startDateChange"; }; }]>;
}

declare class HlmMonthYearCalendar<T> {
    /** Access the calendar i18n */
    protected readonly _i18n: _spartan_ng_brain_calendar.BrnCalendarI18nService;
    /** Access the date adapter */
    protected readonly _dateAdapter: _spartan_ng_brain_date_time.BrnDateAdapter<T>;
    /** Access the picker directive */
    protected readonly _picker: BrnMonthYearCalendar<T>;
    /** The heading for the current view. */
    protected readonly _heading: i0.Signal<string>;
    protected readonly _btnClass: string;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmMonthYearCalendar<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HlmMonthYearCalendar<any>, "hlm-month-year-calendar", never, {}, {}, never, never, true, [{ directive: typeof _spartan_ng_brain_calendar.BrnMonthYearCalendar; inputs: { "min": "min"; "max": "max"; "disabled": "disabled"; "date": "date"; "defaultFocusedDate": "defaultFocusedDate"; "view": "view"; }; outputs: { "dateChange": "dateChange"; }; }]>;
}

declare const HlmCalendarImports: readonly [typeof HlmCalendar, typeof HlmCalendarMulti, typeof HlmCalendarRange, typeof HlmMonthYearCalendar];

export { HlmCalendar, HlmCalendarImports, HlmCalendarMulti, HlmCalendarRange, HlmMonthYearCalendar };
