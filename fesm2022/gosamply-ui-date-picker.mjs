import * as i0 from '@angular/core';
import { InjectionToken, inject, computed, input, ChangeDetectionStrategy, Component, forwardRef, viewChild, contentChild, booleanAttribute, linkedSignal, signal, output, ElementRef, effect, Directive, numberAttribute, untracked } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX, lucideCalendar, lucideChevronDown } from '@ng-icons/lucide';
import { BrnDateInput, provideBrnDatePickerTrigger, BrnDatePickerTriggerToken, provideBrnDatePicker, injectBrnDatePicker } from '@spartan-ng/brain/date-picker';
import * as i1$1 from '@spartan-ng/brain/field';
import { BrnFieldControl, provideBrnLabelable, BrnFieldControlDescribedBy } from '@spartan-ng/brain/field';
import * as i1 from '@gosamply/ui/input-group';
import { HlmInputGroup, HlmInputGroupImports } from '@gosamply/ui/input-group';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BrnPopover } from '@spartan-ng/brain/popover';
import * as i3 from '@gosamply/ui/calendar';
import { HlmCalendar, HlmCalendarMulti, HlmCalendarRange, HlmCalendarImports } from '@gosamply/ui/calendar';
import * as i2 from '@gosamply/ui/popover';
import { HlmPopoverImports, HlmPopoverTrigger } from '@gosamply/ui/popover';
import { BrnOverlay } from '@spartan-ng/brain/overlay';
import * as i1$2 from '@gosamply/ui/button';
import { HlmButtonImports } from '@gosamply/ui/button';
import { hlm } from '@gosamply/ui/utils';

function getDefaultConfig$3() {
    return {
        formatDates: dates => dates.map(date => (date instanceof Date ? date.toDateString() : `${date}`)).join(', '),
        formatInputDates: dates => dates
            .map(date => {
            if (!(date instanceof Date))
                return `${date}`;
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        })
            .join(', '),
        transformDates: dates => dates,
        autoCloseOnMaxSelection: false,
        parseDate: value => {
            if (typeof value !== 'string')
                return null;
            const parts = value.split(',').map(v => v.trim());
            const result = [];
            for (const part of parts) {
                const match = part.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
                if (!match)
                    return null;
                const day = Number(match[1]);
                const month = Number(match[2]);
                const year = Number(match[3]);
                if (month < 1 || month > 12)
                    return null;
                if (day < 1 || day > 31)
                    return null;
                const date = new Date(year, month - 1, day);
                if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
                    return null;
                }
                result.push(date);
            }
            return result;
        },
    };
}
const HlmDatePickerMultiConfigToken = new InjectionToken('HlmDatePickerMultiConfig');
function provideHlmDatePickerMultiConfig(config) {
    return { provide: HlmDatePickerMultiConfigToken, useValue: { ...getDefaultConfig$3(), ...config } };
}
function injectHlmDatePickerMultiConfig() {
    const injectedConfig = inject(HlmDatePickerMultiConfigToken, { optional: true });
    return injectedConfig ? injectedConfig : getDefaultConfig$3();
}

class HlmDateMultiInput extends BrnDateInput {
    _config = injectHlmDatePickerMultiConfig();
    _fieldControl = inject(BrnFieldControl, { optional: true });
    _invalid = this._fieldControl?.invalid;
    _spartanInvalid = computed(() => this.forceInvalid() || this._fieldControl?.spartanInvalid(), ...(ngDevMode ? [{ debugName: "_spartanInvalid" }] : /* istanbul ignore next */ []));
    _dirty = this._fieldControl?.dirty;
    _touched = this._fieldControl?.touched;
    _ariaInvalid = computed(() => (this._invalid?.() ? 'true' : null), ...(ngDevMode ? [{ debugName: "_ariaInvalid" }] : /* istanbul ignore next */ []));
    /**
     * Parses input text into dates. Return `null` for invalid input - the
     * picker's dates are cleared while the text is preserved so the user can
     * fix it.
     *
     * Defaults to `parseDate` from `HlmDatePickerMultiConfig`.
     */
    parseDate = input(this._config.parseDate, ...(ngDevMode ? [{ debugName: "parseDate" }] : /* istanbul ignore next */ []));
    /**
     * Formats the current dates into the input/edit format shown while the
     * input is focused. On blur the picker's display format is restored.
     *
     * Defaults to `formatInputDates` from `HlmDatePickerMultiConfig`.
     */
    formatInputDates = input(this._config.formatInputDates, ...(ngDevMode ? [{ debugName: "formatInputDates" }] : /* istanbul ignore next */ []));
    parseValue(value) {
        return this.parseDate()(value);
    }
    formatInputValue(value) {
        return this.formatInputDates()(value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDateMultiInput, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.11", type: HlmDateMultiInput, isStandalone: true, selector: "hlm-date-multi-input", inputs: { parseDate: { classPropertyName: "parseDate", publicName: "parseDate", isSignal: true, isRequired: false, transformFunction: null }, formatInputDates: { classPropertyName: "formatInputDates", publicName: "formatInputDates", isSignal: true, isRequired: false, transformFunction: null } }, providers: [provideIcons({ lucideCalendar, lucideX }), provideBrnDatePickerTrigger(HlmDateMultiInput)], usesInheritance: true, hostDirectives: [{ directive: i1.HlmInputGroup }], ngImport: i0, template: `
    <input
      #input
      hlmInputGroupInput
      [value]="_inputValue()"
      [id]="inputId()"
      [placeholder]="placeholder()"
      [disabled]="_disabled()"
      [forceInvalid]="forceInvalid()"
      [attr.aria-invalid]="_ariaInvalid()"
      [attr.data-invalid]="_ariaInvalid()"
      [attr.data-touched]="_touched?.() ? 'true' : null"
      [attr.data-dirty]="_dirty?.() ? 'true' : null"
      [attr.data-matches-spartan-invalid]="_spartanInvalid() ? 'true' : null"
      (click)="_handleClick()"
      (keydown.arrowDown)="_open()"
      (keydown.enter)="_handleEnter($event)"
      (input)="_handleInputChange($event)"
      (focus)="_handleFocus()"
      (blur)="_handleBlur()"
    />
    <hlm-input-group-addon align="inline-end">
      @if (_showClearButton()) {
        <button
          hlmInputGroupButton
          size="icon-xs"
          variant="ghost"
          [attr.aria-label]="clearAriaLabel()"
          (click)="_clear()"
          [disabled]="_disabled()"
        >
          <ng-icon name="lucideX" />
        </button>
      }
      <button
        hlmInputGroupButton
        size="icon-xs"
        [attr.aria-label]="calendarAriaLabel()"
        (click)="_popover().open()"
        [disabled]="_disabled()"
      >
        <ng-icon name="lucideCalendar" />
      </button>
    </hlm-input-group-addon>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.HlmInputGroupAddon, selector: "[hlmInputGroupAddon],hlm-input-group-addon", inputs: ["align"] }, { kind: "directive", type: i1.HlmInputGroupButton, selector: "button[hlmInputGroupButton]", inputs: ["size", "type"] }, { kind: "directive", type: i1.HlmInputGroupInput, selector: "input[hlmInputGroupInput]" }, { kind: "component", type: NgIcon, selector: "ng-icon", inputs: ["name", "svg", "size", "strokeWidth", "color"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDateMultiInput, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-date-multi-input',
                    imports: [HlmInputGroupImports, NgIcon],
                    providers: [provideIcons({ lucideCalendar, lucideX }), provideBrnDatePickerTrigger(HlmDateMultiInput)],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    hostDirectives: [HlmInputGroup],
                    template: `
    <input
      #input
      hlmInputGroupInput
      [value]="_inputValue()"
      [id]="inputId()"
      [placeholder]="placeholder()"
      [disabled]="_disabled()"
      [forceInvalid]="forceInvalid()"
      [attr.aria-invalid]="_ariaInvalid()"
      [attr.data-invalid]="_ariaInvalid()"
      [attr.data-touched]="_touched?.() ? 'true' : null"
      [attr.data-dirty]="_dirty?.() ? 'true' : null"
      [attr.data-matches-spartan-invalid]="_spartanInvalid() ? 'true' : null"
      (click)="_handleClick()"
      (keydown.arrowDown)="_open()"
      (keydown.enter)="_handleEnter($event)"
      (input)="_handleInputChange($event)"
      (focus)="_handleFocus()"
      (blur)="_handleBlur()"
    />
    <hlm-input-group-addon align="inline-end">
      @if (_showClearButton()) {
        <button
          hlmInputGroupButton
          size="icon-xs"
          variant="ghost"
          [attr.aria-label]="clearAriaLabel()"
          (click)="_clear()"
          [disabled]="_disabled()"
        >
          <ng-icon name="lucideX" />
        </button>
      }
      <button
        hlmInputGroupButton
        size="icon-xs"
        [attr.aria-label]="calendarAriaLabel()"
        (click)="_popover().open()"
        [disabled]="_disabled()"
      >
        <ng-icon name="lucideCalendar" />
      </button>
    </hlm-input-group-addon>
  `,
                }]
        }], propDecorators: { parseDate: [{ type: i0.Input, args: [{ isSignal: true, alias: "parseDate", required: false }] }], formatInputDates: [{ type: i0.Input, args: [{ isSignal: true, alias: "formatInputDates", required: false }] }] } });

function getDefaultConfig$2() {
    return {
        formatDate: date => (date instanceof Date ? date.toDateString() : `${date}`),
        formatInputDate: date => (date instanceof Date ? date.toDateString() : `${date}`),
        transformDate: date => date,
        parseDate: value => {
            const date = new Date(value);
            return isNaN(date.getTime()) ? null : date;
        },
        autoCloseOnSelect: false,
    };
}
const HlmDatePickerConfigToken = new InjectionToken('HlmDatePickerConfig');
function provideHlmDatePickerConfig(config) {
    return { provide: HlmDatePickerConfigToken, useValue: { ...getDefaultConfig$2(), ...config } };
}
function injectHlmDatePickerConfig() {
    const injectedConfig = inject(HlmDatePickerConfigToken, { optional: true });
    return injectedConfig ? injectedConfig : getDefaultConfig$2();
}

const HLM_DATE_PICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => HlmDatePicker),
    multi: true,
};
class HlmDatePicker {
    _config = injectHlmDatePickerConfig();
    popover = viewChild.required(BrnPopover);
    _trigger = contentChild(BrnDatePickerTriggerToken, ...(ngDevMode ? [{ debugName: "_trigger" }] : /* istanbul ignore next */ []));
    align = input('center', ...(ngDevMode ? [{ debugName: "align" }] : /* istanbul ignore next */ []));
    /** Show dropdowns to navigate between months or years. */
    captionLayout = input('label', ...(ngDevMode ? [{ debugName: "captionLayout" }] : /* istanbul ignore next */ []));
    /** The minimum date that can be selected. */
    minDate = input(...(ngDevMode ? [undefined, { debugName: "minDate" }] : /* istanbul ignore next */ []));
    /** The maximum date that can be selected. */
    maxDate = input(...(ngDevMode ? [undefined, { debugName: "maxDate" }] : /* istanbul ignore next */ []));
    /** Determine if the date picker is disabled. */
    disabled = input(false, { ...(ngDevMode ? { debugName: "disabled" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    /** The selected value. */
    date = input(...(ngDevMode ? [undefined, { debugName: "date" }] : /* istanbul ignore next */ []));
    /** The date the calendar focuses on first open when no date is selected. */
    defaultFocusedDate = input(...(ngDevMode ? [undefined, { debugName: "defaultFocusedDate" }] : /* istanbul ignore next */ []));
    _mutableDate = linkedSignal(this.date, ...(ngDevMode ? [{ debugName: "_mutableDate" }] : /* istanbul ignore next */ []));
    /** If true, the date picker will close when a date is selected. */
    autoCloseOnSelect = input(this._config.autoCloseOnSelect, { ...(ngDevMode ? { debugName: "autoCloseOnSelect" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    /** Defines how the date should be displayed in the UI.  */
    formatDate = input(this._config.formatDate, ...(ngDevMode ? [{ debugName: "formatDate" }] : /* istanbul ignore next */ []));
    /** Defines how the date should be transformed before saving to model/form. */
    transformDate = input(this._config.transformDate, ...(ngDevMode ? [{ debugName: "transformDate" }] : /* istanbul ignore next */ []));
    _popoverState = signal(null, ...(ngDevMode ? [{ debugName: "_popoverState" }] : /* istanbul ignore next */ []));
    _disabled = linkedSignal(this.disabled, ...(ngDevMode ? [{ debugName: "_disabled" }] : /* istanbul ignore next */ []));
    /** @internal The disabled state as a readonly signal */
    disabledState = this._disabled.asReadonly();
    formattedDate = computed(() => {
        const date = this._mutableDate();
        return date ? this.formatDate()(date) : undefined;
    }, ...(ngDevMode ? [{ debugName: "formattedDate" }] : /* istanbul ignore next */ []));
    dateChange = output();
    labelableId = computed(() => this._trigger()?.triggerId(), ...(ngDevMode ? [{ debugName: "labelableId" }] : /* istanbul ignore next */ []));
    hasDate = computed(() => !!this._mutableDate(), ...(ngDevMode ? [{ debugName: "hasDate" }] : /* istanbul ignore next */ []));
    /** @internal The current raw value, used by inputs to reformat on focus. */
    value = computed(() => this._mutableDate() ?? null, ...(ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []));
    _onChange;
    _onTouched;
    _onStateChange(state) {
        this._popoverState.set(state);
        if (state === 'closed')
            this._onTouched?.();
    }
    _handleChange(value) {
        if (this._disabled())
            return;
        this.updateDate(value ?? null);
        if (this.autoCloseOnSelect()) {
            this._popoverState.set('closed');
        }
    }
    /**
     * Commit a date to the picker. Updates the internal model, notifies form
     * controls, and emits `dateChange`. Unlike `_handleChange`, this does not
     * close the popover - it's intended to be called from a text input that
     * is parsing user-entered values while typing.
     */
    updateDate(value) {
        if (this._disabled())
            return;
        const transformedDate = value != null ? this.transformDate()(value) : undefined;
        this._mutableDate.set(transformedDate);
        this._onChange?.(transformedDate ?? null);
        this.dateChange.emit(transformedDate ?? null);
    }
    /** CONTROL VALUE ACCESSOR */
    writeValue(value) {
        this._mutableDate.set(value ? this.transformDate()(value) : undefined);
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    touched() {
        this._onTouched?.();
    }
    setDisabledState(isDisabled) {
        this._disabled.set(isDisabled);
    }
    open() {
        this._popoverState.set('open');
    }
    close() {
        this._popoverState.set('closed');
    }
    reset() {
        this._mutableDate.set(undefined);
        this._onChange?.(null);
        this.dateChange.emit(null);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDatePicker, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "21.2.11", type: HlmDatePicker, isStandalone: true, selector: "hlm-date-picker", inputs: { align: { classPropertyName: "align", publicName: "align", isSignal: true, isRequired: false, transformFunction: null }, captionLayout: { classPropertyName: "captionLayout", publicName: "captionLayout", isSignal: true, isRequired: false, transformFunction: null }, minDate: { classPropertyName: "minDate", publicName: "minDate", isSignal: true, isRequired: false, transformFunction: null }, maxDate: { classPropertyName: "maxDate", publicName: "maxDate", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, date: { classPropertyName: "date", publicName: "date", isSignal: true, isRequired: false, transformFunction: null }, defaultFocusedDate: { classPropertyName: "defaultFocusedDate", publicName: "defaultFocusedDate", isSignal: true, isRequired: false, transformFunction: null }, autoCloseOnSelect: { classPropertyName: "autoCloseOnSelect", publicName: "autoCloseOnSelect", isSignal: true, isRequired: false, transformFunction: null }, formatDate: { classPropertyName: "formatDate", publicName: "formatDate", isSignal: true, isRequired: false, transformFunction: null }, transformDate: { classPropertyName: "transformDate", publicName: "transformDate", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { dateChange: "dateChange" }, host: { classAttribute: "block" }, providers: [HLM_DATE_PICKER_VALUE_ACCESSOR, provideBrnDatePicker(HlmDatePicker), provideBrnLabelable(HlmDatePicker)], queries: [{ propertyName: "_trigger", first: true, predicate: BrnDatePickerTriggerToken, descendants: true, isSignal: true }], viewQueries: [{ propertyName: "popover", first: true, predicate: BrnPopover, descendants: true, isSignal: true }], hostDirectives: [{ directive: i1$1.BrnFieldControl }], ngImport: i0, template: `
    <hlm-popover [align]="align()" sideOffset="5" [state]="_popoverState()" (stateChanged)="_onStateChange($event)">
      <ng-content />

      <hlm-popover-content class="w-fit p-0" *hlmPopoverPortal="let ctx">
        <ng-content select="[hlmDatePickerHeader]" />
        <hlm-calendar
          class="rounded-none border-0"
          [captionLayout]="captionLayout()"
          [date]="_mutableDate()"
          [defaultFocusedDate]="_mutableDate() ?? defaultFocusedDate()"
          [min]="minDate()"
          [max]="maxDate()"
          [disabled]="_disabled()"
          (dateChange)="_handleChange($event)"
        />
        <ng-content select="[hlmDatePickerFooter]" />
      </hlm-popover-content>
    </hlm-popover>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.HlmPopover, selector: "[hlmPopover],hlm-popover" }, { kind: "directive", type: i2.HlmPopoverContent, selector: "[hlmPopoverContent],hlm-popover-content" }, { kind: "directive", type: i2.HlmPopoverPortal, selector: "[hlmPopoverPortal]" }, { kind: "component", type: HlmCalendar, selector: "hlm-calendar", inputs: ["captionLayout"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDatePicker, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-date-picker',
                    imports: [HlmPopoverImports, HlmCalendar],
                    providers: [HLM_DATE_PICKER_VALUE_ACCESSOR, provideBrnDatePicker(HlmDatePicker), provideBrnLabelable(HlmDatePicker)],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    hostDirectives: [BrnFieldControl],
                    host: { class: 'block' },
                    template: `
    <hlm-popover [align]="align()" sideOffset="5" [state]="_popoverState()" (stateChanged)="_onStateChange($event)">
      <ng-content />

      <hlm-popover-content class="w-fit p-0" *hlmPopoverPortal="let ctx">
        <ng-content select="[hlmDatePickerHeader]" />
        <hlm-calendar
          class="rounded-none border-0"
          [captionLayout]="captionLayout()"
          [date]="_mutableDate()"
          [defaultFocusedDate]="_mutableDate() ?? defaultFocusedDate()"
          [min]="minDate()"
          [max]="maxDate()"
          [disabled]="_disabled()"
          (dateChange)="_handleChange($event)"
        />
        <ng-content select="[hlmDatePickerFooter]" />
      </hlm-popover-content>
    </hlm-popover>
  `,
                }]
        }], propDecorators: { popover: [{ type: i0.ViewChild, args: [i0.forwardRef(() => BrnPopover), { isSignal: true }] }], _trigger: [{ type: i0.ContentChild, args: [i0.forwardRef(() => BrnDatePickerTriggerToken), { isSignal: true }] }], align: [{ type: i0.Input, args: [{ isSignal: true, alias: "align", required: false }] }], captionLayout: [{ type: i0.Input, args: [{ isSignal: true, alias: "captionLayout", required: false }] }], minDate: [{ type: i0.Input, args: [{ isSignal: true, alias: "minDate", required: false }] }], maxDate: [{ type: i0.Input, args: [{ isSignal: true, alias: "maxDate", required: false }] }], disabled: [{ type: i0.Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], date: [{ type: i0.Input, args: [{ isSignal: true, alias: "date", required: false }] }], defaultFocusedDate: [{ type: i0.Input, args: [{ isSignal: true, alias: "defaultFocusedDate", required: false }] }], autoCloseOnSelect: [{ type: i0.Input, args: [{ isSignal: true, alias: "autoCloseOnSelect", required: false }] }], formatDate: [{ type: i0.Input, args: [{ isSignal: true, alias: "formatDate", required: false }] }], transformDate: [{ type: i0.Input, args: [{ isSignal: true, alias: "transformDate", required: false }] }], dateChange: [{ type: i0.Output, args: ["dateChange"] }] } });

class HlmDatePickerAnchor {
    _host = inject(ElementRef, { host: true });
    _brnOverlay = inject(BrnOverlay, { optional: true });
    hlmDatePickerAnchorForInput = input(undefined, { ...(ngDevMode ? { debugName: "hlmDatePickerAnchorForInput" } : /* istanbul ignore next */ {}), alias: 'hlmDatePickerAnchorFor' });
    hlmDatePickerAnchorFor = linkedSignal(this.hlmDatePickerAnchorForInput, ...(ngDevMode ? [{ debugName: "hlmDatePickerAnchorFor" }] : /* istanbul ignore next */ []));
    constructor() {
        effect(() => {
            this.hlmDatePickerAnchorFor()?.setOrigin(this._host.nativeElement);
        });
        this._brnOverlay?.setOrigin(this._host.nativeElement);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDatePickerAnchor, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.11", type: HlmDatePickerAnchor, isStandalone: true, selector: "[hlmDatePickerAnchor]", inputs: { hlmDatePickerAnchorForInput: { classPropertyName: "hlmDatePickerAnchorForInput", publicName: "hlmDatePickerAnchorFor", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDatePickerAnchor, decorators: [{
            type: Directive,
            args: [{ selector: '[hlmDatePickerAnchor]' }]
        }], ctorParameters: () => [], propDecorators: { hlmDatePickerAnchorForInput: [{ type: i0.Input, args: [{ isSignal: true, alias: "hlmDatePickerAnchorFor", required: false }] }] } });

class HlmDatePickerInput extends BrnDateInput {
    _config = injectHlmDatePickerConfig();
    _fieldControl = inject(BrnFieldControl, { optional: true });
    _invalid = this._fieldControl?.invalid;
    _spartanInvalid = computed(() => this.forceInvalid() || this._fieldControl?.spartanInvalid(), ...(ngDevMode ? [{ debugName: "_spartanInvalid" }] : /* istanbul ignore next */ []));
    _dirty = this._fieldControl?.dirty;
    _touched = this._fieldControl?.touched;
    _ariaInvalid = computed(() => (this._invalid?.() ? 'true' : null), ...(ngDevMode ? [{ debugName: "_ariaInvalid" }] : /* istanbul ignore next */ []));
    /**
     * Parses input text into a date value. Return `null` for invalid
     * input - the picker's date is cleared while the text is preserved so
     * the user can fix it.
     *
     * Defaults to `parseDate` from `HlmDatePickerConfig`.
     */
    parseDate = input(this._config.parseDate, ...(ngDevMode ? [{ debugName: "parseDate" }] : /* istanbul ignore next */ []));
    /**
     * Formats the current date into the input/edit format shown while the
     * input is focused. On blur the picker's display format is restored.
     *
     * Defaults to `formatInputDate` from `HlmDatePickerConfig`.
     */
    formatInputDate = input(this._config.formatInputDate, ...(ngDevMode ? [{ debugName: "formatInputDate" }] : /* istanbul ignore next */ []));
    parseValue(value) {
        return this.parseDate()(value);
    }
    formatInputValue(value) {
        return this.formatInputDate()(value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDatePickerInput, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.11", type: HlmDatePickerInput, isStandalone: true, selector: "hlm-date-picker-input", inputs: { parseDate: { classPropertyName: "parseDate", publicName: "parseDate", isSignal: true, isRequired: false, transformFunction: null }, formatInputDate: { classPropertyName: "formatInputDate", publicName: "formatInputDate", isSignal: true, isRequired: false, transformFunction: null } }, providers: [provideIcons({ lucideCalendar, lucideX }), provideBrnDatePickerTrigger(HlmDatePickerInput)], usesInheritance: true, hostDirectives: [{ directive: i1.HlmInputGroup }], ngImport: i0, template: `
    <input
      #input
      hlmInputGroupInput
      [value]="_inputValue()"
      [id]="inputId()"
      [placeholder]="placeholder()"
      [disabled]="_disabled()"
      [forceInvalid]="forceInvalid()"
      [attr.aria-invalid]="_ariaInvalid()"
      [attr.data-invalid]="_ariaInvalid()"
      [attr.data-touched]="_touched?.() ? 'true' : null"
      [attr.data-dirty]="_dirty?.() ? 'true' : null"
      [attr.data-matches-spartan-invalid]="_spartanInvalid() ? 'true' : null"
      (click)="_handleClick()"
      (keydown.arrowDown)="_open()"
      (keydown.enter)="_handleEnter($event)"
      (input)="_handleInputChange($event)"
      (focus)="_handleFocus()"
      (blur)="_handleBlur()"
    />
    <hlm-input-group-addon align="inline-end">
      @if (_showClearButton()) {
        <button
          hlmInputGroupButton
          size="icon-xs"
          variant="ghost"
          [attr.aria-label]="clearAriaLabel()"
          (click)="_clear()"
          [disabled]="_disabled()"
        >
          <ng-icon name="lucideX" />
        </button>
      }
      <button
        hlmInputGroupButton
        size="icon-xs"
        [attr.aria-label]="calendarAriaLabel()"
        (click)="_popover().open()"
        [disabled]="_disabled()"
      >
        <ng-icon name="lucideCalendar" />
      </button>
    </hlm-input-group-addon>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.HlmInputGroupAddon, selector: "[hlmInputGroupAddon],hlm-input-group-addon", inputs: ["align"] }, { kind: "directive", type: i1.HlmInputGroupButton, selector: "button[hlmInputGroupButton]", inputs: ["size", "type"] }, { kind: "directive", type: i1.HlmInputGroupInput, selector: "input[hlmInputGroupInput]" }, { kind: "component", type: NgIcon, selector: "ng-icon", inputs: ["name", "svg", "size", "strokeWidth", "color"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDatePickerInput, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-date-picker-input',
                    imports: [HlmInputGroupImports, NgIcon],
                    providers: [provideIcons({ lucideCalendar, lucideX }), provideBrnDatePickerTrigger(HlmDatePickerInput)],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    hostDirectives: [HlmInputGroup],
                    template: `
    <input
      #input
      hlmInputGroupInput
      [value]="_inputValue()"
      [id]="inputId()"
      [placeholder]="placeholder()"
      [disabled]="_disabled()"
      [forceInvalid]="forceInvalid()"
      [attr.aria-invalid]="_ariaInvalid()"
      [attr.data-invalid]="_ariaInvalid()"
      [attr.data-touched]="_touched?.() ? 'true' : null"
      [attr.data-dirty]="_dirty?.() ? 'true' : null"
      [attr.data-matches-spartan-invalid]="_spartanInvalid() ? 'true' : null"
      (click)="_handleClick()"
      (keydown.arrowDown)="_open()"
      (keydown.enter)="_handleEnter($event)"
      (input)="_handleInputChange($event)"
      (focus)="_handleFocus()"
      (blur)="_handleBlur()"
    />
    <hlm-input-group-addon align="inline-end">
      @if (_showClearButton()) {
        <button
          hlmInputGroupButton
          size="icon-xs"
          variant="ghost"
          [attr.aria-label]="clearAriaLabel()"
          (click)="_clear()"
          [disabled]="_disabled()"
        >
          <ng-icon name="lucideX" />
        </button>
      }
      <button
        hlmInputGroupButton
        size="icon-xs"
        [attr.aria-label]="calendarAriaLabel()"
        (click)="_popover().open()"
        [disabled]="_disabled()"
      >
        <ng-icon name="lucideCalendar" />
      </button>
    </hlm-input-group-addon>
  `,
                }]
        }], propDecorators: { parseDate: [{ type: i0.Input, args: [{ isSignal: true, alias: "parseDate", required: false }] }], formatInputDate: [{ type: i0.Input, args: [{ isSignal: true, alias: "formatInputDate", required: false }] }] } });

const HLM_DATE_PICKER_MULTI_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => HlmDatePickerMulti),
    multi: true,
};
class HlmDatePickerMulti {
    _config = injectHlmDatePickerMultiConfig();
    popover = viewChild.required(BrnPopover);
    _trigger = contentChild(BrnDatePickerTriggerToken, ...(ngDevMode ? [{ debugName: "_trigger" }] : /* istanbul ignore next */ []));
    align = input('center', ...(ngDevMode ? [{ debugName: "align" }] : /* istanbul ignore next */ []));
    /** Show dropdowns to navigate between months or years. */
    captionLayout = input('label', ...(ngDevMode ? [{ debugName: "captionLayout" }] : /* istanbul ignore next */ []));
    /** The minimum date that can be selected.*/
    minDate = input(...(ngDevMode ? [undefined, { debugName: "minDate" }] : /* istanbul ignore next */ []));
    /** The maximum date that can be selected. */
    maxDate = input(...(ngDevMode ? [undefined, { debugName: "maxDate" }] : /* istanbul ignore next */ []));
    /** The minimum selectable dates.  */
    minSelection = input(undefined, { ...(ngDevMode ? { debugName: "minSelection" } : /* istanbul ignore next */ {}), transform: numberAttribute });
    /** The maximum selectable dates.  */
    maxSelection = input(undefined, { ...(ngDevMode ? { debugName: "maxSelection" } : /* istanbul ignore next */ {}), transform: numberAttribute });
    /** Determine if the date picker is disabled. */
    disabled = input(false, { ...(ngDevMode ? { debugName: "disabled" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    /** The selected value. */
    date = input(...(ngDevMode ? [undefined, { debugName: "date" }] : /* istanbul ignore next */ []));
    _mutableDate = linkedSignal(this.date, ...(ngDevMode ? [{ debugName: "_mutableDate" }] : /* istanbul ignore next */ []));
    /** If true, the date picker will close when the max selection of dates is reached. */
    autoCloseOnMaxSelection = input(this._config.autoCloseOnMaxSelection, { ...(ngDevMode ? { debugName: "autoCloseOnMaxSelection" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    /** Defines how the date should be displayed in the UI.  */
    formatDates = input(this._config.formatDates, ...(ngDevMode ? [{ debugName: "formatDates" }] : /* istanbul ignore next */ []));
    /** Defines how the date should be transformed before saving to model/form. */
    transformDates = input(this._config.transformDates, ...(ngDevMode ? [{ debugName: "transformDates" }] : /* istanbul ignore next */ []));
    _popoverState = signal(null, ...(ngDevMode ? [{ debugName: "_popoverState" }] : /* istanbul ignore next */ []));
    _disabled = linkedSignal(this.disabled, ...(ngDevMode ? [{ debugName: "_disabled" }] : /* istanbul ignore next */ []));
    /** @internal The disabled state as a readonly signal */
    disabledState = this._disabled.asReadonly();
    formattedDate = computed(() => {
        const dates = this._mutableDate();
        return dates ? this.formatDates()(dates) : undefined;
    }, ...(ngDevMode ? [{ debugName: "formattedDate" }] : /* istanbul ignore next */ []));
    dateChange = output();
    labelableId = computed(() => this._trigger()?.triggerId(), ...(ngDevMode ? [{ debugName: "labelableId" }] : /* istanbul ignore next */ []));
    hasDate = computed(() => !!this._mutableDate()?.length, ...(ngDevMode ? [{ debugName: "hasDate" }] : /* istanbul ignore next */ []));
    /** @internal The current raw value, used by inputs to reformat on focus. */
    value = computed(() => this._mutableDate() ?? null, ...(ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []));
    _onChange;
    _onTouched;
    _onStateChange(state) {
        this._popoverState.set(state);
        if (state === 'closed')
            this._onTouched?.();
    }
    _handleChange(value) {
        if (value === undefined)
            return;
        if (this._disabled())
            return;
        const transformedDate = value !== undefined ? this.transformDates()(value) : value;
        this._mutableDate.set(transformedDate);
        this._onChange?.(transformedDate);
        this.dateChange.emit(transformedDate);
        if (this.autoCloseOnMaxSelection() && this._mutableDate()?.length === this.maxSelection()) {
            this._popoverState.set('closed');
        }
    }
    /**
     * Commit dates to the picker. Updates the internal model, notifies form
     * controls, and emits `dateChange`. Intended to be called from a text input
     * that parses user-entered values. Pass `null` to clear the selection.
     */
    updateDate(value) {
        if (this._disabled())
            return;
        const transformedDate = value ? this.transformDates()(value) : undefined;
        this._mutableDate.set(transformedDate);
        this._onChange?.(transformedDate ?? []);
        this.dateChange.emit(transformedDate ?? []);
    }
    touched() {
        this._onTouched?.();
    }
    /** CONTROL VALUE ACCESSOR */
    writeValue(value) {
        this._mutableDate.set(value ? this.transformDates()(value) : undefined);
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this._disabled.set(isDisabled);
    }
    open() {
        this._popoverState.set('open');
    }
    close() {
        this._popoverState.set('closed');
    }
    reset() {
        this._mutableDate.set(undefined);
        this._onChange?.([]);
        this.dateChange.emit([]);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDatePickerMulti, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "21.2.11", type: HlmDatePickerMulti, isStandalone: true, selector: "hlm-date-picker-multi", inputs: { align: { classPropertyName: "align", publicName: "align", isSignal: true, isRequired: false, transformFunction: null }, captionLayout: { classPropertyName: "captionLayout", publicName: "captionLayout", isSignal: true, isRequired: false, transformFunction: null }, minDate: { classPropertyName: "minDate", publicName: "minDate", isSignal: true, isRequired: false, transformFunction: null }, maxDate: { classPropertyName: "maxDate", publicName: "maxDate", isSignal: true, isRequired: false, transformFunction: null }, minSelection: { classPropertyName: "minSelection", publicName: "minSelection", isSignal: true, isRequired: false, transformFunction: null }, maxSelection: { classPropertyName: "maxSelection", publicName: "maxSelection", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, date: { classPropertyName: "date", publicName: "date", isSignal: true, isRequired: false, transformFunction: null }, autoCloseOnMaxSelection: { classPropertyName: "autoCloseOnMaxSelection", publicName: "autoCloseOnMaxSelection", isSignal: true, isRequired: false, transformFunction: null }, formatDates: { classPropertyName: "formatDates", publicName: "formatDates", isSignal: true, isRequired: false, transformFunction: null }, transformDates: { classPropertyName: "transformDates", publicName: "transformDates", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { dateChange: "dateChange" }, host: { classAttribute: "block" }, providers: [HLM_DATE_PICKER_MULTI_VALUE_ACCESSOR, provideBrnDatePicker(HlmDatePickerMulti), provideBrnLabelable(HlmDatePickerMulti)], queries: [{ propertyName: "_trigger", first: true, predicate: BrnDatePickerTriggerToken, descendants: true, isSignal: true }], viewQueries: [{ propertyName: "popover", first: true, predicate: BrnPopover, descendants: true, isSignal: true }], hostDirectives: [{ directive: i1$1.BrnFieldControl }], ngImport: i0, template: `
    <hlm-popover [align]="align()" sideOffset="5" [state]="_popoverState()" (stateChanged)="_onStateChange($event)">
      <ng-content />

      <hlm-popover-content class="w-fit p-0" *hlmPopoverPortal="let ctx">
        <ng-content select="[hlmDatePickerHeader]" />
        <hlm-calendar-multi
          class="rounded-none border-0"
          [date]="_mutableDate()"
          [captionLayout]="captionLayout()"
          [min]="minDate()"
          [max]="maxDate()"
          [minSelection]="minSelection()"
          [maxSelection]="maxSelection()"
          [disabled]="_disabled()"
          (dateChange)="_handleChange($event)"
        />
        <ng-content select="[hlmDatePickerFooter]" />
      </hlm-popover-content>
    </hlm-popover>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.HlmPopover, selector: "[hlmPopover],hlm-popover" }, { kind: "directive", type: i2.HlmPopoverContent, selector: "[hlmPopoverContent],hlm-popover-content" }, { kind: "directive", type: i2.HlmPopoverPortal, selector: "[hlmPopoverPortal]" }, { kind: "component", type: HlmCalendarMulti, selector: "hlm-calendar-multi", inputs: ["captionLayout"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDatePickerMulti, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-date-picker-multi',
                    imports: [HlmPopoverImports, HlmCalendarMulti],
                    providers: [HLM_DATE_PICKER_MULTI_VALUE_ACCESSOR, provideBrnDatePicker(HlmDatePickerMulti), provideBrnLabelable(HlmDatePickerMulti)],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    hostDirectives: [BrnFieldControl],
                    host: { class: 'block' },
                    template: `
    <hlm-popover [align]="align()" sideOffset="5" [state]="_popoverState()" (stateChanged)="_onStateChange($event)">
      <ng-content />

      <hlm-popover-content class="w-fit p-0" *hlmPopoverPortal="let ctx">
        <ng-content select="[hlmDatePickerHeader]" />
        <hlm-calendar-multi
          class="rounded-none border-0"
          [date]="_mutableDate()"
          [captionLayout]="captionLayout()"
          [min]="minDate()"
          [max]="maxDate()"
          [minSelection]="minSelection()"
          [maxSelection]="maxSelection()"
          [disabled]="_disabled()"
          (dateChange)="_handleChange($event)"
        />
        <ng-content select="[hlmDatePickerFooter]" />
      </hlm-popover-content>
    </hlm-popover>
  `,
                }]
        }], propDecorators: { popover: [{ type: i0.ViewChild, args: [i0.forwardRef(() => BrnPopover), { isSignal: true }] }], _trigger: [{ type: i0.ContentChild, args: [i0.forwardRef(() => BrnDatePickerTriggerToken), { isSignal: true }] }], align: [{ type: i0.Input, args: [{ isSignal: true, alias: "align", required: false }] }], captionLayout: [{ type: i0.Input, args: [{ isSignal: true, alias: "captionLayout", required: false }] }], minDate: [{ type: i0.Input, args: [{ isSignal: true, alias: "minDate", required: false }] }], maxDate: [{ type: i0.Input, args: [{ isSignal: true, alias: "maxDate", required: false }] }], minSelection: [{ type: i0.Input, args: [{ isSignal: true, alias: "minSelection", required: false }] }], maxSelection: [{ type: i0.Input, args: [{ isSignal: true, alias: "maxSelection", required: false }] }], disabled: [{ type: i0.Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], date: [{ type: i0.Input, args: [{ isSignal: true, alias: "date", required: false }] }], autoCloseOnMaxSelection: [{ type: i0.Input, args: [{ isSignal: true, alias: "autoCloseOnMaxSelection", required: false }] }], formatDates: [{ type: i0.Input, args: [{ isSignal: true, alias: "formatDates", required: false }] }], transformDates: [{ type: i0.Input, args: [{ isSignal: true, alias: "transformDates", required: false }] }], dateChange: [{ type: i0.Output, args: ["dateChange"] }] } });

class HlmDatePickerTrigger {
    static _nextId = 0;
    _fieldControl = inject(BrnFieldControl, { optional: true });
    _datePicker = injectBrnDatePicker();
    _invalid = this._fieldControl?.invalid;
    _spartanInvalid = computed(() => this.forceInvalid() || this._fieldControl?.spartanInvalid(), ...(ngDevMode ? [{ debugName: "_spartanInvalid" }] : /* istanbul ignore next */ []));
    _dirty = this._fieldControl?.dirty;
    _touched = this._fieldControl?.touched;
    _ariaInvalid = computed(() => (this._invalid?.() ? 'true' : null), ...(ngDevMode ? [{ debugName: "_ariaInvalid" }] : /* istanbul ignore next */ []));
    userClass = input('', { ...(ngDevMode ? { debugName: "userClass" } : /* istanbul ignore next */ {}), alias: 'class' });
    _computedClass = computed(() => hlm('data-placeholder:text-muted-foreground justify-between', this.userClass()), ...(ngDevMode ? [{ debugName: "_computedClass" }] : /* istanbul ignore next */ []));
    _isPlaceholder = computed(() => !this._datePicker.hasDate(), ...(ngDevMode ? [{ debugName: "_isPlaceholder" }] : /* istanbul ignore next */ []));
    /** The id of the button that opens the date picker. */
    buttonId = input(`hlm-date-picker-${++HlmDatePickerTrigger._nextId}`, ...(ngDevMode ? [{ debugName: "buttonId" }] : /* istanbul ignore next */ []));
    /** @internal The id of the button that opens the date picker, used for labeling. */
    triggerId = this.buttonId;
    /** Forces the invalid state visually, regardless of form control state. */
    forceInvalid = input(false, { ...(ngDevMode ? { debugName: "forceInvalid" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    variant = input('outline', ...(ngDevMode ? [{ debugName: "variant" }] : /* istanbul ignore next */ []));
    showTrigger = input(true, { ...(ngDevMode ? { debugName: "showTrigger" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    _popover = this._datePicker.popover;
    _disabled = this._datePicker.disabledState;
    _formattedDate = this._datePicker.formattedDate;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDatePickerTrigger, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.11", type: HlmDatePickerTrigger, isStandalone: true, selector: "hlm-date-picker-trigger", inputs: { userClass: { classPropertyName: "userClass", publicName: "class", isSignal: true, isRequired: false, transformFunction: null }, buttonId: { classPropertyName: "buttonId", publicName: "buttonId", isSignal: true, isRequired: false, transformFunction: null }, forceInvalid: { classPropertyName: "forceInvalid", publicName: "forceInvalid", isSignal: true, isRequired: false, transformFunction: null }, variant: { classPropertyName: "variant", publicName: "variant", isSignal: true, isRequired: false, transformFunction: null }, showTrigger: { classPropertyName: "showTrigger", publicName: "showTrigger", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "data-slot": "date-picker-trigger" } }, providers: [provideIcons({ lucideChevronDown }), provideBrnDatePickerTrigger(HlmDatePickerTrigger)], ngImport: i0, template: `
    <button
      [id]="buttonId()"
      type="button"
      [class]="_computedClass()"
      [disabled]="_disabled()"
      [attr.aria-invalid]="_ariaInvalid()"
      [attr.data-invalid]="_ariaInvalid()"
      [attr.data-touched]="_touched?.() ? 'true' : null"
      [attr.data-dirty]="_dirty?.() ? 'true' : null"
      [attr.data-matches-spartan-invalid]="_spartanInvalid() ? 'true' : null"
      hlmBtn
      [variant]="variant()"
      hlmPopoverTrigger
      [hlmPopoverTriggerFor]="_popover()"
      brnFieldControlDescribedBy
      [attr.data-placeholder]="_isPlaceholder() ? '' : null"
    >
      <span class="truncate">
        @if (_formattedDate(); as formattedDate) {
          {{ formattedDate }}
        } @else {
          <ng-content />
        }
      </span>

      @if (showTrigger()) {
        <ng-icon name="lucideChevronDown" />
      }
    </button>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1$2.HlmButton, selector: "button[hlmBtn], a[hlmBtn]", inputs: ["variant", "size"], exportAs: ["hlmBtn"] }, { kind: "directive", type: HlmPopoverTrigger, selector: "button[hlmPopoverTrigger],button[hlmPopoverTriggerFor]" }, { kind: "component", type: NgIcon, selector: "ng-icon", inputs: ["name", "svg", "size", "strokeWidth", "color"] }, { kind: "directive", type: BrnFieldControlDescribedBy, selector: "[brnFieldControlDescribedBy]", inputs: ["aria-describedby"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDatePickerTrigger, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-date-picker-trigger',
                    imports: [HlmButtonImports, HlmPopoverTrigger, NgIcon, BrnFieldControlDescribedBy],
                    providers: [provideIcons({ lucideChevronDown }), provideBrnDatePickerTrigger(HlmDatePickerTrigger)],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: { 'data-slot': 'date-picker-trigger' },
                    template: `
    <button
      [id]="buttonId()"
      type="button"
      [class]="_computedClass()"
      [disabled]="_disabled()"
      [attr.aria-invalid]="_ariaInvalid()"
      [attr.data-invalid]="_ariaInvalid()"
      [attr.data-touched]="_touched?.() ? 'true' : null"
      [attr.data-dirty]="_dirty?.() ? 'true' : null"
      [attr.data-matches-spartan-invalid]="_spartanInvalid() ? 'true' : null"
      hlmBtn
      [variant]="variant()"
      hlmPopoverTrigger
      [hlmPopoverTriggerFor]="_popover()"
      brnFieldControlDescribedBy
      [attr.data-placeholder]="_isPlaceholder() ? '' : null"
    >
      <span class="truncate">
        @if (_formattedDate(); as formattedDate) {
          {{ formattedDate }}
        } @else {
          <ng-content />
        }
      </span>

      @if (showTrigger()) {
        <ng-icon name="lucideChevronDown" />
      }
    </button>
  `,
                }]
        }], propDecorators: { userClass: [{ type: i0.Input, args: [{ isSignal: true, alias: "class", required: false }] }], buttonId: [{ type: i0.Input, args: [{ isSignal: true, alias: "buttonId", required: false }] }], forceInvalid: [{ type: i0.Input, args: [{ isSignal: true, alias: "forceInvalid", required: false }] }], variant: [{ type: i0.Input, args: [{ isSignal: true, alias: "variant", required: false }] }], showTrigger: [{ type: i0.Input, args: [{ isSignal: true, alias: "showTrigger", required: false }] }] } });

function getDefaultConfig$1() {
    return {
        formatDates: dates => dates
            .filter(Boolean)
            .map(date => (date instanceof Date ? date.toDateString() : `${date}`))
            .join(' - '),
        formatInputDates: dates => dates
            .filter(Boolean)
            .map(date => (date instanceof Date ? date.toDateString() : `${date}`))
            .join(' - '),
        transformDates: dates => dates,
        autoCloseOnEndSelection: false,
        parseDate: value => {
            if (typeof value !== 'string')
                return null;
            const parts = value.split(' - ').map(part => part.trim());
            if (parts.length === 0 || parts.length > 2)
                return null;
            const start = new Date(parts[0]);
            if (isNaN(start.getTime()))
                return null;
            const end = parts.length === 2 ? new Date(parts[1]) : start;
            return [start, isNaN(end.getTime()) ? start : end];
        },
    };
}
const HlmDateRangePickerConfigToken = new InjectionToken('HlmDateRangePickerConfig');
function provideHlmDateRangePickerConfig(config) {
    return { provide: HlmDateRangePickerConfigToken, useValue: { ...getDefaultConfig$1(), ...config } };
}
function injectHlmDateRangePickerConfig() {
    const injectedConfig = inject(HlmDateRangePickerConfigToken, { optional: true });
    return injectedConfig ? injectedConfig : getDefaultConfig$1();
}

class HlmDateRangeInput extends BrnDateInput {
    _config = injectHlmDateRangePickerConfig();
    _fieldControl = inject(BrnFieldControl, { optional: true });
    _invalid = this._fieldControl?.invalid;
    _spartanInvalid = computed(() => this.forceInvalid() || this._fieldControl?.spartanInvalid(), ...(ngDevMode ? [{ debugName: "_spartanInvalid" }] : /* istanbul ignore next */ []));
    _dirty = this._fieldControl?.dirty;
    _touched = this._fieldControl?.touched;
    _ariaInvalid = computed(() => (this._invalid?.() ? 'true' : null), ...(ngDevMode ? [{ debugName: "_ariaInvalid" }] : /* istanbul ignore next */ []));
    /**
     * Parses input text into a date range. Return `null` for invalid
     * input - the picker's range is cleared while the text is preserved so
     * the user can fix it.
     *
     * Defaults to `parseDate` from `HlmDateRangePickerConfig`.
     */
    parseDate = input(this._config.parseDate, ...(ngDevMode ? [{ debugName: "parseDate" }] : /* istanbul ignore next */ []));
    /**
     * Formats the current range into the input/edit format shown while the
     * input is focused. On blur the picker's display format is restored.
     *
     * Defaults to `formatInputDates` from `HlmDateRangePickerConfig`.
     */
    formatInputDates = input(this._config.formatInputDates, ...(ngDevMode ? [{ debugName: "formatInputDates" }] : /* istanbul ignore next */ []));
    parseValue(value) {
        return this.parseDate()(value);
    }
    formatInputValue(value) {
        return this.formatInputDates()(value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDateRangeInput, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.11", type: HlmDateRangeInput, isStandalone: true, selector: "hlm-date-range-input", inputs: { parseDate: { classPropertyName: "parseDate", publicName: "parseDate", isSignal: true, isRequired: false, transformFunction: null }, formatInputDates: { classPropertyName: "formatInputDates", publicName: "formatInputDates", isSignal: true, isRequired: false, transformFunction: null } }, providers: [provideIcons({ lucideCalendar, lucideX }), provideBrnDatePickerTrigger(HlmDateRangeInput)], usesInheritance: true, hostDirectives: [{ directive: i1.HlmInputGroup }], ngImport: i0, template: `
    <input
      #input
      hlmInputGroupInput
      [value]="_inputValue()"
      [id]="inputId()"
      [placeholder]="placeholder()"
      [disabled]="_disabled()"
      [forceInvalid]="forceInvalid()"
      [attr.aria-invalid]="_ariaInvalid()"
      [attr.data-invalid]="_ariaInvalid()"
      [attr.data-touched]="_touched?.() ? 'true' : null"
      [attr.data-dirty]="_dirty?.() ? 'true' : null"
      [attr.data-matches-spartan-invalid]="_spartanInvalid() ? 'true' : null"
      (click)="_handleClick()"
      (keydown.arrowDown)="_open()"
      (keydown.enter)="_handleEnter($event)"
      (input)="_handleInputChange($event)"
      (focus)="_handleFocus()"
      (blur)="_handleBlur()"
    />
    <hlm-input-group-addon align="inline-end">
      @if (_showClearButton()) {
        <button
          hlmInputGroupButton
          size="icon-xs"
          variant="ghost"
          [attr.aria-label]="clearAriaLabel()"
          (click)="_clear()"
          [disabled]="_disabled()"
        >
          <ng-icon name="lucideX" />
        </button>
      }
      <button
        hlmInputGroupButton
        size="icon-xs"
        [attr.aria-label]="calendarAriaLabel()"
        (click)="_popover().open()"
        [disabled]="_disabled()"
      >
        <ng-icon name="lucideCalendar" />
      </button>
    </hlm-input-group-addon>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.HlmInputGroupAddon, selector: "[hlmInputGroupAddon],hlm-input-group-addon", inputs: ["align"] }, { kind: "directive", type: i1.HlmInputGroupButton, selector: "button[hlmInputGroupButton]", inputs: ["size", "type"] }, { kind: "directive", type: i1.HlmInputGroupInput, selector: "input[hlmInputGroupInput]" }, { kind: "component", type: NgIcon, selector: "ng-icon", inputs: ["name", "svg", "size", "strokeWidth", "color"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDateRangeInput, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-date-range-input',
                    imports: [HlmInputGroupImports, NgIcon],
                    providers: [provideIcons({ lucideCalendar, lucideX }), provideBrnDatePickerTrigger(HlmDateRangeInput)],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    hostDirectives: [HlmInputGroup],
                    template: `
    <input
      #input
      hlmInputGroupInput
      [value]="_inputValue()"
      [id]="inputId()"
      [placeholder]="placeholder()"
      [disabled]="_disabled()"
      [forceInvalid]="forceInvalid()"
      [attr.aria-invalid]="_ariaInvalid()"
      [attr.data-invalid]="_ariaInvalid()"
      [attr.data-touched]="_touched?.() ? 'true' : null"
      [attr.data-dirty]="_dirty?.() ? 'true' : null"
      [attr.data-matches-spartan-invalid]="_spartanInvalid() ? 'true' : null"
      (click)="_handleClick()"
      (keydown.arrowDown)="_open()"
      (keydown.enter)="_handleEnter($event)"
      (input)="_handleInputChange($event)"
      (focus)="_handleFocus()"
      (blur)="_handleBlur()"
    />
    <hlm-input-group-addon align="inline-end">
      @if (_showClearButton()) {
        <button
          hlmInputGroupButton
          size="icon-xs"
          variant="ghost"
          [attr.aria-label]="clearAriaLabel()"
          (click)="_clear()"
          [disabled]="_disabled()"
        >
          <ng-icon name="lucideX" />
        </button>
      }
      <button
        hlmInputGroupButton
        size="icon-xs"
        [attr.aria-label]="calendarAriaLabel()"
        (click)="_popover().open()"
        [disabled]="_disabled()"
      >
        <ng-icon name="lucideCalendar" />
      </button>
    </hlm-input-group-addon>
  `,
                }]
        }], propDecorators: { parseDate: [{ type: i0.Input, args: [{ isSignal: true, alias: "parseDate", required: false }] }], formatInputDates: [{ type: i0.Input, args: [{ isSignal: true, alias: "formatInputDates", required: false }] }] } });

const HLM_DATE_RANGE_PICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => HlmDateRangePicker),
    multi: true,
};
class HlmDateRangePicker {
    _config = injectHlmDateRangePickerConfig();
    popover = viewChild.required(BrnPopover);
    _trigger = contentChild(BrnDatePickerTriggerToken, ...(ngDevMode ? [{ debugName: "_trigger" }] : /* istanbul ignore next */ []));
    align = input('center', ...(ngDevMode ? [{ debugName: "align" }] : /* istanbul ignore next */ []));
    /** Show dropdowns to navigate between months or years. */
    captionLayout = input('label', ...(ngDevMode ? [{ debugName: "captionLayout" }] : /* istanbul ignore next */ []));
    /** The minimum date that can be selected.*/
    minDate = input(...(ngDevMode ? [undefined, { debugName: "minDate" }] : /* istanbul ignore next */ []));
    /** The maximum date that can be selected. */
    maxDate = input(...(ngDevMode ? [undefined, { debugName: "maxDate" }] : /* istanbul ignore next */ []));
    /** Determine if the date picker is disabled. */
    disabled = input(false, { ...(ngDevMode ? { debugName: "disabled" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    /** The selected value. */
    date = input(...(ngDevMode ? [undefined, { debugName: "date" }] : /* istanbul ignore next */ []));
    _mutableDate = linkedSignal(this.date, ...(ngDevMode ? [{ debugName: "_mutableDate" }] : /* istanbul ignore next */ []));
    _start = linkedSignal(() => this._mutableDate()?.[0], ...(ngDevMode ? [{ debugName: "_start" }] : /* istanbul ignore next */ []));
    _end = linkedSignal(() => this._mutableDate()?.[1], ...(ngDevMode ? [{ debugName: "_end" }] : /* istanbul ignore next */ []));
    /** If true, the date picker will close when the end date is selected */
    autoCloseOnEndSelection = input(this._config.autoCloseOnEndSelection, { ...(ngDevMode ? { debugName: "autoCloseOnEndSelection" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    /** Defines how the date should be displayed in the UI.  */
    formatDates = input(this._config.formatDates, ...(ngDevMode ? [{ debugName: "formatDates" }] : /* istanbul ignore next */ []));
    /** Defines how the date should be transformed before saving to model/form. */
    transformDates = input(this._config.transformDates, ...(ngDevMode ? [{ debugName: "transformDates" }] : /* istanbul ignore next */ []));
    _popoverState = signal(null, ...(ngDevMode ? [{ debugName: "_popoverState" }] : /* istanbul ignore next */ []));
    _disabled = linkedSignal(this.disabled, ...(ngDevMode ? [{ debugName: "_disabled" }] : /* istanbul ignore next */ []));
    /** @internal The disabled state as a readonly signal */
    disabledState = this._disabled.asReadonly();
    formattedDate = computed(() => {
        const start = this._start();
        const end = this._end();
        return start || end ? this.formatDates()([start ?? null, end ?? null]) : undefined;
    }, ...(ngDevMode ? [{ debugName: "formattedDate" }] : /* istanbul ignore next */ []));
    dateChange = output();
    labelableId = computed(() => this._trigger()?.triggerId(), ...(ngDevMode ? [{ debugName: "labelableId" }] : /* istanbul ignore next */ []));
    hasDate = computed(() => !!this._start() || !!this._end(), ...(ngDevMode ? [{ debugName: "hasDate" }] : /* istanbul ignore next */ []));
    /** @internal The current raw value, used by inputs to reformat on focus. */
    value = computed(() => this._mutableDate() ?? null, ...(ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []));
    _onChange;
    _onTouched;
    _onStateChange(state) {
        this._popoverState.set(state);
        if (state === 'closed') {
            this._onClose();
            this._onTouched?.();
        }
    }
    _handleStartDayChange(value) {
        this._start.set(value);
    }
    _handleEndDateChange(value) {
        this._end.set(value);
        if (this._disabled())
            return;
        const start = this._start();
        if (start && value) {
            const transformedDates = this.transformDates()([start, value]);
            this._mutableDate.set(transformedDates);
            this.dateChange.emit(transformedDates);
            this._onChange?.(transformedDates);
            if (this.autoCloseOnEndSelection()) {
                this._popoverState.set('closed');
            }
        }
    }
    /**
     * Commit a range to the picker. Updates the internal model, notifies form
     * controls, and emits `dateChange`. Intended to be called from a text input
     * that parses user-entered values. Pass `null` to clear the range.
     */
    updateDate(value) {
        if (this._disabled())
            return;
        if (!value) {
            this._mutableDate.set(undefined);
            this._start.set(undefined);
            this._end.set(undefined);
            this._onChange?.(null);
            this.dateChange.emit(null);
            return;
        }
        const transformedDates = this.transformDates()(value);
        this._mutableDate.set(transformedDates);
        this._start.set(transformedDates[0]);
        this._end.set(transformedDates[1]);
        this._onChange?.(transformedDates);
        this.dateChange.emit(transformedDates);
    }
    touched() {
        this._onTouched?.();
    }
    /** CONTROL VALUE ACCESSOR */
    writeValue(value) {
        untracked(() => {
            if (!value) {
                this._mutableDate.set(undefined);
            }
            else {
                this._mutableDate.set(this.transformDates()(value));
            }
        });
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this._disabled.set(isDisabled);
    }
    open() {
        this._popoverState.set('open');
    }
    close() {
        this._popoverState.set('closed');
    }
    reset() {
        this._mutableDate.set(undefined);
        this._start.set(undefined);
        this._end.set(undefined);
        this._onChange?.(null);
        this.dateChange.emit(null);
    }
    _onClose() {
        const dates = this._mutableDate();
        if (this._start() && !this._end() && dates) {
            this._start.set(dates[0]);
            this._end.set(dates[1]);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDateRangePicker, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "21.2.11", type: HlmDateRangePicker, isStandalone: true, selector: "hlm-date-range-picker", inputs: { align: { classPropertyName: "align", publicName: "align", isSignal: true, isRequired: false, transformFunction: null }, captionLayout: { classPropertyName: "captionLayout", publicName: "captionLayout", isSignal: true, isRequired: false, transformFunction: null }, minDate: { classPropertyName: "minDate", publicName: "minDate", isSignal: true, isRequired: false, transformFunction: null }, maxDate: { classPropertyName: "maxDate", publicName: "maxDate", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, date: { classPropertyName: "date", publicName: "date", isSignal: true, isRequired: false, transformFunction: null }, autoCloseOnEndSelection: { classPropertyName: "autoCloseOnEndSelection", publicName: "autoCloseOnEndSelection", isSignal: true, isRequired: false, transformFunction: null }, formatDates: { classPropertyName: "formatDates", publicName: "formatDates", isSignal: true, isRequired: false, transformFunction: null }, transformDates: { classPropertyName: "transformDates", publicName: "transformDates", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { dateChange: "dateChange" }, host: { classAttribute: "block" }, providers: [HLM_DATE_RANGE_PICKER_VALUE_ACCESSOR, provideBrnDatePicker(HlmDateRangePicker), provideBrnLabelable(HlmDateRangePicker)], queries: [{ propertyName: "_trigger", first: true, predicate: BrnDatePickerTriggerToken, descendants: true, isSignal: true }], viewQueries: [{ propertyName: "popover", first: true, predicate: BrnPopover, descendants: true, isSignal: true }], hostDirectives: [{ directive: i1$1.BrnFieldControl }], ngImport: i0, template: `
    <hlm-popover [align]="align()" sideOffset="5" [state]="_popoverState()" (stateChanged)="_onStateChange($event)">
      <ng-content />

      <hlm-popover-content class="w-fit p-0" *hlmPopoverPortal="let ctx">
        <ng-content select="[hlmDatePickerHeader]" />
        <hlm-calendar-range
          class="rounded-none border-0"
          [startDate]="_start()"
          [captionLayout]="captionLayout()"
          [endDate]="_end()"
          [min]="minDate()"
          [max]="maxDate()"
          [disabled]="_disabled()"
          (startDateChange)="_handleStartDayChange($event)"
          (endDateChange)="_handleEndDateChange($event)"
        />
        <ng-content select="[hlmDatePickerFooter]" />
      </hlm-popover-content>
    </hlm-popover>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.HlmPopover, selector: "[hlmPopover],hlm-popover" }, { kind: "directive", type: i2.HlmPopoverContent, selector: "[hlmPopoverContent],hlm-popover-content" }, { kind: "directive", type: i2.HlmPopoverPortal, selector: "[hlmPopoverPortal]" }, { kind: "component", type: HlmCalendarRange, selector: "hlm-calendar-range", inputs: ["captionLayout"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmDateRangePicker, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-date-range-picker',
                    imports: [HlmPopoverImports, HlmCalendarRange],
                    providers: [HLM_DATE_RANGE_PICKER_VALUE_ACCESSOR, provideBrnDatePicker(HlmDateRangePicker), provideBrnLabelable(HlmDateRangePicker)],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    hostDirectives: [BrnFieldControl],
                    host: { class: 'block' },
                    template: `
    <hlm-popover [align]="align()" sideOffset="5" [state]="_popoverState()" (stateChanged)="_onStateChange($event)">
      <ng-content />

      <hlm-popover-content class="w-fit p-0" *hlmPopoverPortal="let ctx">
        <ng-content select="[hlmDatePickerHeader]" />
        <hlm-calendar-range
          class="rounded-none border-0"
          [startDate]="_start()"
          [captionLayout]="captionLayout()"
          [endDate]="_end()"
          [min]="minDate()"
          [max]="maxDate()"
          [disabled]="_disabled()"
          (startDateChange)="_handleStartDayChange($event)"
          (endDateChange)="_handleEndDateChange($event)"
        />
        <ng-content select="[hlmDatePickerFooter]" />
      </hlm-popover-content>
    </hlm-popover>
  `,
                }]
        }], propDecorators: { popover: [{ type: i0.ViewChild, args: [i0.forwardRef(() => BrnPopover), { isSignal: true }] }], _trigger: [{ type: i0.ContentChild, args: [i0.forwardRef(() => BrnDatePickerTriggerToken), { isSignal: true }] }], align: [{ type: i0.Input, args: [{ isSignal: true, alias: "align", required: false }] }], captionLayout: [{ type: i0.Input, args: [{ isSignal: true, alias: "captionLayout", required: false }] }], minDate: [{ type: i0.Input, args: [{ isSignal: true, alias: "minDate", required: false }] }], maxDate: [{ type: i0.Input, args: [{ isSignal: true, alias: "maxDate", required: false }] }], disabled: [{ type: i0.Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], date: [{ type: i0.Input, args: [{ isSignal: true, alias: "date", required: false }] }], autoCloseOnEndSelection: [{ type: i0.Input, args: [{ isSignal: true, alias: "autoCloseOnEndSelection", required: false }] }], formatDates: [{ type: i0.Input, args: [{ isSignal: true, alias: "formatDates", required: false }] }], transformDates: [{ type: i0.Input, args: [{ isSignal: true, alias: "transformDates", required: false }] }], dateChange: [{ type: i0.Output, args: ["dateChange"] }] } });

const mmYYYY = (date) => {
    if (!(date instanceof Date))
        return `${date}`;
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${year}`;
};
function getDefaultConfig() {
    return {
        formatDate: mmYYYY,
        formatInputDate: mmYYYY,
        transformDate: date => date,
        parseDate: value => {
            if (typeof value !== 'string')
                return null;
            const match = value.match(/^(\d{2})\/(\d{4})$/);
            if (!match)
                return null;
            const month = Number(match[1]);
            const year = Number(match[2]);
            if (month < 1 || month > 12)
                return null;
            const date = new Date(year, month - 1, 1);
            return date;
        },
        autoCloseOnSelect: false,
    };
}
const HlmMonthYearPickerConfigToken = new InjectionToken('HlmMonthYearPickerConfig');
function provideHlmMonthYearPickerConfig(config) {
    return { provide: HlmMonthYearPickerConfigToken, useValue: { ...getDefaultConfig(), ...config } };
}
function injectHlmMonthYearPickerConfig() {
    const injectedConfig = inject(HlmMonthYearPickerConfigToken, { optional: true });
    return injectedConfig ? injectedConfig : getDefaultConfig();
}

class HlmMonthYearInput extends BrnDateInput {
    _config = injectHlmMonthYearPickerConfig();
    _fieldControl = inject(BrnFieldControl, { optional: true });
    _invalid = this._fieldControl?.invalid;
    _spartanInvalid = computed(() => this.forceInvalid() || this._fieldControl?.spartanInvalid(), ...(ngDevMode ? [{ debugName: "_spartanInvalid" }] : /* istanbul ignore next */ []));
    _dirty = this._fieldControl?.dirty;
    _touched = this._fieldControl?.touched;
    _ariaInvalid = computed(() => (this._invalid?.() ? 'true' : null), ...(ngDevMode ? [{ debugName: "_ariaInvalid" }] : /* istanbul ignore next */ []));
    /**
     * Parses input text into a date value. Return `null` for invalid
     * input - the picker's date is cleared while the text is preserved so
     * the user can fix it.
     *
     * Defaults to `parseDate` from `HlmMonthYearPickerConfig`.
     */
    parseDate = input(this._config.parseDate, ...(ngDevMode ? [{ debugName: "parseDate" }] : /* istanbul ignore next */ []));
    /**
     * Formats the current date into the input/edit format shown while the
     * input is focused. On blur the picker's display format is restored.
     *
     * Defaults to `formatInputDate` from `HlmMonthYearPickerConfig`.
     */
    formatInputDate = input(this._config.formatInputDate, ...(ngDevMode ? [{ debugName: "formatInputDate" }] : /* istanbul ignore next */ []));
    parseValue(value) {
        return this.parseDate()(value);
    }
    formatInputValue(value) {
        return this.formatInputDate()(value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmMonthYearInput, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.11", type: HlmMonthYearInput, isStandalone: true, selector: "hlm-month-year-input", inputs: { parseDate: { classPropertyName: "parseDate", publicName: "parseDate", isSignal: true, isRequired: false, transformFunction: null }, formatInputDate: { classPropertyName: "formatInputDate", publicName: "formatInputDate", isSignal: true, isRequired: false, transformFunction: null } }, providers: [provideIcons({ lucideCalendar, lucideX }), provideBrnDatePickerTrigger(HlmMonthYearInput)], usesInheritance: true, hostDirectives: [{ directive: i1.HlmInputGroup }], ngImport: i0, template: `
    <input
      #input
      hlmInputGroupInput
      [value]="_inputValue()"
      [id]="inputId()"
      [placeholder]="placeholder()"
      [disabled]="_disabled()"
      [forceInvalid]="forceInvalid()"
      [attr.aria-invalid]="_ariaInvalid()"
      [attr.data-invalid]="_ariaInvalid()"
      [attr.data-touched]="_touched?.() ? 'true' : null"
      [attr.data-dirty]="_dirty?.() ? 'true' : null"
      [attr.data-matches-spartan-invalid]="_spartanInvalid() ? 'true' : null"
      (click)="_handleClick()"
      (keydown.arrowDown)="_open()"
      (keydown.enter)="_handleEnter($event)"
      (input)="_handleInputChange($event)"
      (focus)="_handleFocus()"
      (blur)="_handleBlur()"
    />
    <hlm-input-group-addon align="inline-end">
      @if (_showClearButton()) {
        <button
          hlmInputGroupButton
          size="icon-xs"
          variant="ghost"
          [attr.aria-label]="clearAriaLabel()"
          (click)="_clear()"
          [disabled]="_disabled()"
        >
          <ng-icon name="lucideX" />
        </button>
      }
      <button
        hlmInputGroupButton
        size="icon-xs"
        [attr.aria-label]="calendarAriaLabel()"
        (click)="_popover().open()"
        [disabled]="_disabled()"
      >
        <ng-icon name="lucideCalendar" />
      </button>
    </hlm-input-group-addon>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.HlmInputGroupAddon, selector: "[hlmInputGroupAddon],hlm-input-group-addon", inputs: ["align"] }, { kind: "directive", type: i1.HlmInputGroupButton, selector: "button[hlmInputGroupButton]", inputs: ["size", "type"] }, { kind: "directive", type: i1.HlmInputGroupInput, selector: "input[hlmInputGroupInput]" }, { kind: "component", type: NgIcon, selector: "ng-icon", inputs: ["name", "svg", "size", "strokeWidth", "color"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmMonthYearInput, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-month-year-input',
                    imports: [HlmInputGroupImports, NgIcon],
                    providers: [provideIcons({ lucideCalendar, lucideX }), provideBrnDatePickerTrigger(HlmMonthYearInput)],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    hostDirectives: [HlmInputGroup],
                    template: `
    <input
      #input
      hlmInputGroupInput
      [value]="_inputValue()"
      [id]="inputId()"
      [placeholder]="placeholder()"
      [disabled]="_disabled()"
      [forceInvalid]="forceInvalid()"
      [attr.aria-invalid]="_ariaInvalid()"
      [attr.data-invalid]="_ariaInvalid()"
      [attr.data-touched]="_touched?.() ? 'true' : null"
      [attr.data-dirty]="_dirty?.() ? 'true' : null"
      [attr.data-matches-spartan-invalid]="_spartanInvalid() ? 'true' : null"
      (click)="_handleClick()"
      (keydown.arrowDown)="_open()"
      (keydown.enter)="_handleEnter($event)"
      (input)="_handleInputChange($event)"
      (focus)="_handleFocus()"
      (blur)="_handleBlur()"
    />
    <hlm-input-group-addon align="inline-end">
      @if (_showClearButton()) {
        <button
          hlmInputGroupButton
          size="icon-xs"
          variant="ghost"
          [attr.aria-label]="clearAriaLabel()"
          (click)="_clear()"
          [disabled]="_disabled()"
        >
          <ng-icon name="lucideX" />
        </button>
      }
      <button
        hlmInputGroupButton
        size="icon-xs"
        [attr.aria-label]="calendarAriaLabel()"
        (click)="_popover().open()"
        [disabled]="_disabled()"
      >
        <ng-icon name="lucideCalendar" />
      </button>
    </hlm-input-group-addon>
  `,
                }]
        }], propDecorators: { parseDate: [{ type: i0.Input, args: [{ isSignal: true, alias: "parseDate", required: false }] }], formatInputDate: [{ type: i0.Input, args: [{ isSignal: true, alias: "formatInputDate", required: false }] }] } });

const HLM_MONTH_YEAR_PICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => HlmMonthYearPicker),
    multi: true,
};
class HlmMonthYearPicker {
    _config = injectHlmMonthYearPickerConfig();
    popover = viewChild.required(BrnPopover);
    _trigger = contentChild(BrnDatePickerTriggerToken, ...(ngDevMode ? [{ debugName: "_trigger" }] : /* istanbul ignore next */ []));
    align = input('center', ...(ngDevMode ? [{ debugName: "align" }] : /* istanbul ignore next */ []));
    /** The minimum date that can be selected.*/
    minDate = input(...(ngDevMode ? [undefined, { debugName: "minDate" }] : /* istanbul ignore next */ []));
    /** The maximum date that can be selected. */
    maxDate = input(...(ngDevMode ? [undefined, { debugName: "maxDate" }] : /* istanbul ignore next */ []));
    /** Determine if the date picker is disabled. */
    disabled = input(false, { ...(ngDevMode ? { debugName: "disabled" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    /** The selected value. */
    date = input(...(ngDevMode ? [undefined, { debugName: "date" }] : /* istanbul ignore next */ []));
    /** The date the calendar focuses on first open when no date is selected. */
    defaultFocusedDate = input(...(ngDevMode ? [undefined, { debugName: "defaultFocusedDate" }] : /* istanbul ignore next */ []));
    _mutableDate = linkedSignal(this.date, ...(ngDevMode ? [{ debugName: "_mutableDate" }] : /* istanbul ignore next */ []));
    /** If true, the date picker will close when a date is selected. */
    autoCloseOnSelect = input(this._config.autoCloseOnSelect, { ...(ngDevMode ? { debugName: "autoCloseOnSelect" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    /** Defines how the date should be displayed in the UI.  */
    formatDate = input(this._config.formatDate, ...(ngDevMode ? [{ debugName: "formatDate" }] : /* istanbul ignore next */ []));
    /** Defines how the date should be transformed before saving to model/form. */
    transformDate = input(this._config.transformDate, ...(ngDevMode ? [{ debugName: "transformDate" }] : /* istanbul ignore next */ []));
    _popoverState = signal(null, ...(ngDevMode ? [{ debugName: "_popoverState" }] : /* istanbul ignore next */ []));
    _disabled = linkedSignal(this.disabled, ...(ngDevMode ? [{ debugName: "_disabled" }] : /* istanbul ignore next */ []));
    /** @internal The disabled state as a readonly signal */
    disabledState = this._disabled.asReadonly();
    formattedDate = computed(() => {
        const date = this._mutableDate();
        return date ? this.formatDate()(date) : undefined;
    }, ...(ngDevMode ? [{ debugName: "formattedDate" }] : /* istanbul ignore next */ []));
    dateChange = output();
    labelableId = computed(() => this._trigger()?.triggerId(), ...(ngDevMode ? [{ debugName: "labelableId" }] : /* istanbul ignore next */ []));
    hasDate = computed(() => !!this._mutableDate(), ...(ngDevMode ? [{ debugName: "hasDate" }] : /* istanbul ignore next */ []));
    /** @internal The current raw value, used by inputs to reformat on focus. */
    value = computed(() => this._mutableDate() ?? null, ...(ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []));
    _onChange;
    _onTouched;
    _onStateChange(state) {
        this._popoverState.set(state);
        if (state === 'closed')
            this._onTouched?.();
    }
    _handleChange(value) {
        if (this._disabled())
            return;
        this.updateDate(value ?? null);
        if (this.autoCloseOnSelect()) {
            this._popoverState.set('closed');
        }
    }
    /**
     * Commit a date to the picker. Updates the internal model, notifies form
     * controls, and emits `dateChange`. Unlike `_handleChange`, this does not
     * close the popover - it's intended to be called from a text input that
     * is parsing user-entered values while typing.
     */
    updateDate(value) {
        if (this._disabled())
            return;
        const transformedDate = value != null ? this.transformDate()(value) : undefined;
        this._mutableDate.set(transformedDate);
        this._onChange?.(transformedDate ?? null);
        this.dateChange.emit(transformedDate ?? null);
    }
    /** CONTROL VALUE ACCESSOR */
    writeValue(value) {
        this._mutableDate.set(value ? this.transformDate()(value) : undefined);
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    touched() {
        this._onTouched?.();
    }
    setDisabledState(isDisabled) {
        this._disabled.set(isDisabled);
    }
    open() {
        this._popoverState.set('open');
    }
    close() {
        this._popoverState.set('closed');
    }
    reset() {
        this._mutableDate.set(undefined);
        this._onChange?.(null);
        this.dateChange.emit(null);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmMonthYearPicker, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "21.2.11", type: HlmMonthYearPicker, isStandalone: true, selector: "hlm-month-year-picker", inputs: { align: { classPropertyName: "align", publicName: "align", isSignal: true, isRequired: false, transformFunction: null }, minDate: { classPropertyName: "minDate", publicName: "minDate", isSignal: true, isRequired: false, transformFunction: null }, maxDate: { classPropertyName: "maxDate", publicName: "maxDate", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, date: { classPropertyName: "date", publicName: "date", isSignal: true, isRequired: false, transformFunction: null }, defaultFocusedDate: { classPropertyName: "defaultFocusedDate", publicName: "defaultFocusedDate", isSignal: true, isRequired: false, transformFunction: null }, autoCloseOnSelect: { classPropertyName: "autoCloseOnSelect", publicName: "autoCloseOnSelect", isSignal: true, isRequired: false, transformFunction: null }, formatDate: { classPropertyName: "formatDate", publicName: "formatDate", isSignal: true, isRequired: false, transformFunction: null }, transformDate: { classPropertyName: "transformDate", publicName: "transformDate", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { dateChange: "dateChange" }, host: { classAttribute: "block" }, providers: [HLM_MONTH_YEAR_PICKER_VALUE_ACCESSOR, provideBrnDatePicker(HlmMonthYearPicker), provideBrnLabelable(HlmMonthYearPicker)], queries: [{ propertyName: "_trigger", first: true, predicate: BrnDatePickerTriggerToken, descendants: true, isSignal: true }], viewQueries: [{ propertyName: "popover", first: true, predicate: BrnPopover, descendants: true, isSignal: true }], hostDirectives: [{ directive: i1$1.BrnFieldControl }], ngImport: i0, template: `
    <hlm-popover [align]="align()" sideOffset="5" [state]="_popoverState()" (stateChanged)="_onStateChange($event)">
      <ng-content />

      <hlm-popover-content class="w-fit p-0" *hlmPopoverPortal="let ctx">
        <ng-content select="[hlmDatePickerHeader]" />
        <hlm-month-year-calendar
          class="rounded-none border-0"
          [date]="_mutableDate()"
          [defaultFocusedDate]="_mutableDate() ?? defaultFocusedDate()"
          [min]="minDate()"
          [max]="maxDate()"
          [disabled]="_disabled()"
          (dateChange)="_handleChange($event)"
        />
        <ng-content select="[hlmDatePickerFooter]" />
      </hlm-popover-content>
    </hlm-popover>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.HlmPopover, selector: "[hlmPopover],hlm-popover" }, { kind: "directive", type: i2.HlmPopoverContent, selector: "[hlmPopoverContent],hlm-popover-content" }, { kind: "directive", type: i2.HlmPopoverPortal, selector: "[hlmPopoverPortal]" }, { kind: "component", type: i3.HlmMonthYearCalendar, selector: "hlm-month-year-calendar" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmMonthYearPicker, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-month-year-picker',
                    imports: [HlmPopoverImports, HlmCalendarImports],
                    providers: [HLM_MONTH_YEAR_PICKER_VALUE_ACCESSOR, provideBrnDatePicker(HlmMonthYearPicker), provideBrnLabelable(HlmMonthYearPicker)],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    hostDirectives: [BrnFieldControl],
                    host: { class: 'block' },
                    template: `
    <hlm-popover [align]="align()" sideOffset="5" [state]="_popoverState()" (stateChanged)="_onStateChange($event)">
      <ng-content />

      <hlm-popover-content class="w-fit p-0" *hlmPopoverPortal="let ctx">
        <ng-content select="[hlmDatePickerHeader]" />
        <hlm-month-year-calendar
          class="rounded-none border-0"
          [date]="_mutableDate()"
          [defaultFocusedDate]="_mutableDate() ?? defaultFocusedDate()"
          [min]="minDate()"
          [max]="maxDate()"
          [disabled]="_disabled()"
          (dateChange)="_handleChange($event)"
        />
        <ng-content select="[hlmDatePickerFooter]" />
      </hlm-popover-content>
    </hlm-popover>
  `,
                }]
        }], propDecorators: { popover: [{ type: i0.ViewChild, args: [i0.forwardRef(() => BrnPopover), { isSignal: true }] }], _trigger: [{ type: i0.ContentChild, args: [i0.forwardRef(() => BrnDatePickerTriggerToken), { isSignal: true }] }], align: [{ type: i0.Input, args: [{ isSignal: true, alias: "align", required: false }] }], minDate: [{ type: i0.Input, args: [{ isSignal: true, alias: "minDate", required: false }] }], maxDate: [{ type: i0.Input, args: [{ isSignal: true, alias: "maxDate", required: false }] }], disabled: [{ type: i0.Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], date: [{ type: i0.Input, args: [{ isSignal: true, alias: "date", required: false }] }], defaultFocusedDate: [{ type: i0.Input, args: [{ isSignal: true, alias: "defaultFocusedDate", required: false }] }], autoCloseOnSelect: [{ type: i0.Input, args: [{ isSignal: true, alias: "autoCloseOnSelect", required: false }] }], formatDate: [{ type: i0.Input, args: [{ isSignal: true, alias: "formatDate", required: false }] }], transformDate: [{ type: i0.Input, args: [{ isSignal: true, alias: "transformDate", required: false }] }], dateChange: [{ type: i0.Output, args: ["dateChange"] }] } });

const HlmDatePickerImports = [
    HlmDatePicker,
    HlmDatePickerAnchor,
    HlmDatePickerInput,
    HlmDatePickerMulti,
    HlmDateMultiInput,
    HlmDateRangeInput,
    HlmDateRangePicker,
    HlmDatePickerTrigger,
    HlmMonthYearPicker,
    HlmMonthYearInput,
];

/**
 * Generated bundle index. Do not edit.
 */

export { HLM_DATE_PICKER_MULTI_VALUE_ACCESSOR, HLM_DATE_PICKER_VALUE_ACCESSOR, HLM_DATE_RANGE_PICKER_VALUE_ACCESSOR, HLM_MONTH_YEAR_PICKER_VALUE_ACCESSOR, HlmDateMultiInput, HlmDatePicker, HlmDatePickerAnchor, HlmDatePickerImports, HlmDatePickerInput, HlmDatePickerMulti, HlmDatePickerTrigger, HlmDateRangeInput, HlmDateRangePicker, HlmMonthYearInput, HlmMonthYearPicker, injectHlmDatePickerConfig, injectHlmDatePickerMultiConfig, injectHlmDateRangePickerConfig, injectHlmMonthYearPickerConfig, provideHlmDatePickerConfig, provideHlmDatePickerMultiConfig, provideHlmDateRangePickerConfig, provideHlmMonthYearPickerConfig };
//# sourceMappingURL=gosamply-ui-date-picker.mjs.map
