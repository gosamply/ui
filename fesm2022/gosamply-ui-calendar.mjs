import { NgTemplateOutlet } from '@angular/common';
import * as i0 from '@angular/core';
import { input, inject, computed, ChangeDetectionStrategy, Component } from '@angular/core';
import { provideIcons, NgIcon } from '@ng-icons/core';
import { lucideChevronRight, lucideChevronLeft } from '@ng-icons/lucide';
import * as i1 from '@spartan-ng/brain/calendar';
import { injectBrnCalendarI18n, BrnCalendar, BrnCalendarImports, BrnCalendarMulti, BrnCalendarRange, BrnMonthYearCalendar } from '@spartan-ng/brain/calendar';
import { injectDateAdapter } from '@spartan-ng/brain/date-time';
import * as i3 from '@gosamply/ui/button';
import { buttonVariants, HlmButtonImports } from '@gosamply/ui/button';
import * as i2 from '@gosamply/ui/select';
import { HlmSelectImports } from '@gosamply/ui/select';
import { hlm, classes } from '@gosamply/ui/utils';

class HlmCalendar {
    /** Access the calendar i18n */
    _i18n = injectBrnCalendarI18n();
    /** Access the date time adapter */
    _dateAdapter = injectDateAdapter();
    /** Show dropdowns to navigate between months or years. */
    captionLayout = input('label', ...(ngDevMode ? [{ debugName: "captionLayout" }] : /* istanbul ignore next */ []));
    /** Access the calendar directive */
    _calendar = inject(BrnCalendar);
    /** Get the heading for the current month and year */
    _heading = computed(() => {
        const config = this._i18n.config();
        const date = this._calendar.focusedDate();
        return {
            header: config.formatHeader(this._dateAdapter.getMonth(date), this._dateAdapter.getYear(date)),
            month: config.formatMonth(this._dateAdapter.getMonth(date)),
            year: config.formatYear(this._dateAdapter.getYear(date)),
        };
    }, ...(ngDevMode ? [{ debugName: "_heading" }] : /* istanbul ignore next */ []));
    _btnClass = hlm(buttonVariants({ variant: 'ghost', size: 'icon' }), 'data-[today=true]:bg-muted group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground dark:hover:bg-muted/50 dark:hover:text-foreground relative isolate z-10 flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 border-0 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-e-(--cell-radius) data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-s-(--cell-radius) [&>span]:text-xs [&>span]:opacity-70', 'data-[outside=true]:opacity-50', "data-[highlighted]:before:content-['']", 'data-[highlighted]:before:absolute', 'data-[highlighted]:before:bottom-1', 'data-[highlighted]:before:start-1/2', 'data-[highlighted]:before:h-1', 'data-[highlighted]:before:w-1', 'data-[highlighted]:before:-translate-x-1/2', 'data-[highlighted]:before:rounded-full', 'data-[highlighted]:before:bg-destructive');
    _selectClass = 'gap-0 px-1.5 py-2 [&>ng-icon]:ms-1';
    constructor() {
        classes(() => 'p-3 [--cell-radius:var(--radius-4xl)] [--cell-size:--spacing(8)] group/calendar bg-background block in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmCalendar, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.11", type: HlmCalendar, isStandalone: true, selector: "hlm-calendar", inputs: { captionLayout: { classPropertyName: "captionLayout", publicName: "captionLayout", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "data-slot": "calendar" } }, hostDirectives: [{ directive: i1.BrnCalendar, inputs: ["min", "min", "max", "max", "disabled", "disabled", "date", "date", "dateDisabled", "dateDisabled", "weekStartsOn", "weekStartsOn", "highlightDays", "highlightDays", "defaultFocusedDate", "defaultFocusedDate"], outputs: ["dateChange", "dateChange"] }], ngImport: i0, template: `
    <div class="inline-flex flex-col gap-4">
      <!-- Header -->
      <div class="flex w-full items-center justify-between gap-1.5">
        <ng-template #month>
          <hlm-select brnCalendarMonthSelect class="order-1">
            <hlm-select-trigger size="sm" [class]="_selectClass">
              <hlm-select-value />
            </hlm-select-trigger>
            <hlm-select-content *hlmSelectPortal class="max-h-80">
              <hlm-select-group>
                @for (month of _i18n.config().months(); track month) {
                  <hlm-select-item [value]="month">{{ month }}</hlm-select-item>
                }
              </hlm-select-group>
            </hlm-select-content>
          </hlm-select>
        </ng-template>
        <ng-template #year>
          <hlm-select brnCalendarYearSelect class="order-3">
            <hlm-select-trigger size="sm" [class]="_selectClass">
              <hlm-select-value />
            </hlm-select-trigger>
            <hlm-select-content *hlmSelectPortal class="max-h-80">
              <hlm-select-group>
                @for (year of _i18n.config().years(); track year) {
                  <hlm-select-item [value]="year">{{ year }}</hlm-select-item>
                }
              </hlm-select-group>
            </hlm-select-content>
          </hlm-select>
        </ng-template>
        @let heading = _heading();

        <button
          brnCalendarPreviousButton
          variant="ghost"
          hlmBtn
          class="order-first size-(--cell-size) p-0 select-none aria-disabled:opacity-50"
        >
          <ng-icon name="lucideChevronLeft" class="rtl:rotate-180" />
        </button>

        @switch (captionLayout()) {
          @case ('dropdown') {
            <ng-container [ngTemplateOutlet]="month" />
            <ng-container [ngTemplateOutlet]="year" />
          }
          @case ('dropdown-months') {
            <ng-container [ngTemplateOutlet]="month" />
            <div brnCalendarHeader class="order-4 text-sm font-medium">{{ heading.year }}</div>
          }
          @case ('dropdown-years') {
            <div brnCalendarHeader class="order-2 text-sm font-medium">{{ heading.month }}</div>
            <ng-container [ngTemplateOutlet]="year" />
          }
          @case ('label') {
            <div brnCalendarHeader class="order-5 text-sm font-medium">{{ heading.header }}</div>
          }
        }

        <button brnCalendarNextButton hlmBtn variant="ghost" class="order-last size-(--cell-size) p-0 select-none aria-disabled:opacity-50">
          <ng-icon name="lucideChevronRight" class="rtl:rotate-180" />
        </button>
      </div>

      <table class="w-full border-collapse space-y-1" brnCalendarGrid>
        <thead aria-hidden="true">
          <tr class="flex">
            <th
              *brnCalendarWeekday="let weekday"
              scope="col"
              class="text-muted-foreground flex-1 rounded-(--cell-radius) text-[0.8rem] font-normal select-none"
              [attr.aria-label]="_i18n.config().labelWeekday(weekday)"
            >
              {{ _i18n.config().formatWeekdayName(weekday) }}
            </th>
          </tr>
        </thead>

        <tbody role="rowgroup">
          <tr *brnCalendarWeek="let week" class="mt-2 flex w-full">
            @for (date of week; track _dateAdapter.getTime(date)) {
              <td
                brnCalendarCell
                class="group/day relative aspect-square h-full w-full rounded-(--cell-radius) p-0 text-center select-none [&:first-child[data-selected=true]_button]:rounded-s-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-e-(--cell-radius)"
              >
                <button brnCalendarCellButton [date]="date" [class]="_btnClass">
                  {{ _dateAdapter.getDate(date) }}
                </button>
              </td>
            }
          </tr>
        </tbody>
      </table>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.BrnCalendarCellButton, selector: "button[brnCalendarCellButton]", inputs: ["date"] }, { kind: "directive", type: i1.BrnCalendarGrid, selector: "[brnCalendarGrid]" }, { kind: "directive", type: i1.BrnCalendarHeader, selector: "[brnCalendarHeader]", inputs: ["id"] }, { kind: "directive", type: i1.BrnCalendarNextButton, selector: "button[brnCalendarNextButton]" }, { kind: "directive", type: i1.BrnCalendarPreviousButton, selector: "button[brnCalendarPreviousButton]" }, { kind: "directive", type: i1.BrnCalendarWeek, selector: "[brnCalendarWeek]" }, { kind: "directive", type: i1.BrnCalendarWeekday, selector: "[brnCalendarWeekday]" }, { kind: "directive", type: i1.BrnCalendarCell, selector: "[brnCalendarCell]" }, { kind: "directive", type: i1.BrnCalendarMonthSelect, selector: "brnSelect[brnCalendarMonthSelect],hlm-select[brnCalendarMonthSelect]" }, { kind: "directive", type: i1.BrnCalendarYearSelect, selector: "brnSelect[brnCalendarYearSelect],hlm-select[brnCalendarYearSelect]" }, { kind: "component", type: NgIcon, selector: "ng-icon", inputs: ["name", "svg", "size", "strokeWidth", "color"] }, { kind: "directive", type: i2.HlmSelect, selector: "[hlmSelect],hlm-select" }, { kind: "component", type: i2.HlmSelectContent, selector: "hlm-select-content", inputs: ["showScroll"] }, { kind: "directive", type: i2.HlmSelectGroup, selector: "[hlmSelectGroup],hlm-select-group" }, { kind: "component", type: i2.HlmSelectItem, selector: "hlm-select-item" }, { kind: "directive", type: i2.HlmSelectPortal, selector: "[hlmSelectPortal]" }, { kind: "component", type: i2.HlmSelectTrigger, selector: "hlm-select-trigger", inputs: ["class", "buttonId", "size", "forceInvalid"] }, { kind: "directive", type: i2.HlmSelectValue, selector: "[hlmSelectValue],hlm-select-value" }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i3.HlmButton, selector: "button[hlmBtn], a[hlmBtn]", inputs: ["variant", "size"], exportAs: ["hlmBtn"] }], viewProviders: [provideIcons({ lucideChevronLeft, lucideChevronRight })], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmCalendar, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-calendar',
                    imports: [BrnCalendarImports, NgIcon, HlmSelectImports, NgTemplateOutlet, HlmButtonImports],
                    viewProviders: [provideIcons({ lucideChevronLeft, lucideChevronRight })],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    hostDirectives: [
                        {
                            directive: BrnCalendar,
                            inputs: ['min', 'max', 'disabled', 'date', 'dateDisabled', 'weekStartsOn', 'highlightDays', 'defaultFocusedDate'],
                            outputs: ['dateChange'],
                        },
                    ],
                    host: { 'data-slot': 'calendar' },
                    template: `
    <div class="inline-flex flex-col gap-4">
      <!-- Header -->
      <div class="flex w-full items-center justify-between gap-1.5">
        <ng-template #month>
          <hlm-select brnCalendarMonthSelect class="order-1">
            <hlm-select-trigger size="sm" [class]="_selectClass">
              <hlm-select-value />
            </hlm-select-trigger>
            <hlm-select-content *hlmSelectPortal class="max-h-80">
              <hlm-select-group>
                @for (month of _i18n.config().months(); track month) {
                  <hlm-select-item [value]="month">{{ month }}</hlm-select-item>
                }
              </hlm-select-group>
            </hlm-select-content>
          </hlm-select>
        </ng-template>
        <ng-template #year>
          <hlm-select brnCalendarYearSelect class="order-3">
            <hlm-select-trigger size="sm" [class]="_selectClass">
              <hlm-select-value />
            </hlm-select-trigger>
            <hlm-select-content *hlmSelectPortal class="max-h-80">
              <hlm-select-group>
                @for (year of _i18n.config().years(); track year) {
                  <hlm-select-item [value]="year">{{ year }}</hlm-select-item>
                }
              </hlm-select-group>
            </hlm-select-content>
          </hlm-select>
        </ng-template>
        @let heading = _heading();

        <button
          brnCalendarPreviousButton
          variant="ghost"
          hlmBtn
          class="order-first size-(--cell-size) p-0 select-none aria-disabled:opacity-50"
        >
          <ng-icon name="lucideChevronLeft" class="rtl:rotate-180" />
        </button>

        @switch (captionLayout()) {
          @case ('dropdown') {
            <ng-container [ngTemplateOutlet]="month" />
            <ng-container [ngTemplateOutlet]="year" />
          }
          @case ('dropdown-months') {
            <ng-container [ngTemplateOutlet]="month" />
            <div brnCalendarHeader class="order-4 text-sm font-medium">{{ heading.year }}</div>
          }
          @case ('dropdown-years') {
            <div brnCalendarHeader class="order-2 text-sm font-medium">{{ heading.month }}</div>
            <ng-container [ngTemplateOutlet]="year" />
          }
          @case ('label') {
            <div brnCalendarHeader class="order-5 text-sm font-medium">{{ heading.header }}</div>
          }
        }

        <button brnCalendarNextButton hlmBtn variant="ghost" class="order-last size-(--cell-size) p-0 select-none aria-disabled:opacity-50">
          <ng-icon name="lucideChevronRight" class="rtl:rotate-180" />
        </button>
      </div>

      <table class="w-full border-collapse space-y-1" brnCalendarGrid>
        <thead aria-hidden="true">
          <tr class="flex">
            <th
              *brnCalendarWeekday="let weekday"
              scope="col"
              class="text-muted-foreground flex-1 rounded-(--cell-radius) text-[0.8rem] font-normal select-none"
              [attr.aria-label]="_i18n.config().labelWeekday(weekday)"
            >
              {{ _i18n.config().formatWeekdayName(weekday) }}
            </th>
          </tr>
        </thead>

        <tbody role="rowgroup">
          <tr *brnCalendarWeek="let week" class="mt-2 flex w-full">
            @for (date of week; track _dateAdapter.getTime(date)) {
              <td
                brnCalendarCell
                class="group/day relative aspect-square h-full w-full rounded-(--cell-radius) p-0 text-center select-none [&:first-child[data-selected=true]_button]:rounded-s-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-e-(--cell-radius)"
              >
                <button brnCalendarCellButton [date]="date" [class]="_btnClass">
                  {{ _dateAdapter.getDate(date) }}
                </button>
              </td>
            }
          </tr>
        </tbody>
      </table>
    </div>
  `,
                }]
        }], ctorParameters: () => [], propDecorators: { captionLayout: [{ type: i0.Input, args: [{ isSignal: true, alias: "captionLayout", required: false }] }] } });

class HlmCalendarMulti {
    /** Show dropdowns to navigate between months or years. */
    captionLayout = input('label', ...(ngDevMode ? [{ debugName: "captionLayout" }] : /* istanbul ignore next */ []));
    /** Access the calendar i18n */
    _i18n = injectBrnCalendarI18n();
    /** Access the date time adapter */
    _dateAdapter = injectDateAdapter();
    /** Access the calendar directive */
    _calendar = inject(BrnCalendarMulti);
    /** Get the heading for the current month and year */
    _heading = computed(() => {
        const config = this._i18n.config();
        const date = this._calendar.focusedDate();
        return {
            header: config.formatHeader(this._dateAdapter.getMonth(date), this._dateAdapter.getYear(date)),
            month: config.formatMonth(this._dateAdapter.getMonth(date)),
            year: config.formatYear(this._dateAdapter.getYear(date)),
        };
    }, ...(ngDevMode ? [{ debugName: "_heading" }] : /* istanbul ignore next */ []));
    _btnClass = hlm(buttonVariants({ variant: 'ghost', size: 'icon' }), 'data-[today=true]:bg-muted group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground dark:hover:bg-muted/50 dark:hover:text-foreground relative isolate z-10 flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 border-0 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-e-(--cell-radius) data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-s-(--cell-radius) [&>span]:text-xs [&>span]:opacity-70', 'data-[outside=true]:opacity-50', "data-[highlighted]:before:content-['']", 'data-[highlighted]:before:absolute', 'data-[highlighted]:before:bottom-1', 'data-[highlighted]:before:start-1/2', 'data-[highlighted]:before:h-1', 'data-[highlighted]:before:w-1', 'data-[highlighted]:before:-translate-x-1/2', 'data-[highlighted]:before:rounded-full', 'data-[highlighted]:before:bg-destructive');
    _selectClass = 'gap-0 px-1.5 py-2 [&>ng-icon]:ms-1';
    constructor() {
        classes(() => 'p-3 [--cell-radius:var(--radius-4xl)] [--cell-size:--spacing(8)] group/calendar bg-background block in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmCalendarMulti, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.11", type: HlmCalendarMulti, isStandalone: true, selector: "hlm-calendar-multi", inputs: { captionLayout: { classPropertyName: "captionLayout", publicName: "captionLayout", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "data-slot": "calendar" } }, hostDirectives: [{ directive: i1.BrnCalendarMulti, inputs: ["min", "min", "max", "max", "minSelection", "minSelection", "maxSelection", "maxSelection", "disabled", "disabled", "date", "date", "dateDisabled", "dateDisabled", "weekStartsOn", "weekStartsOn", "highlightDays", "highlightDays", "defaultFocusedDate", "defaultFocusedDate"], outputs: ["dateChange", "dateChange"] }], ngImport: i0, template: `
    <div class="inline-flex flex-col space-y-4">
      <!-- Header -->
      <div class="flex w-full items-center justify-between gap-1.5">
        <ng-template #month>
          <hlm-select brnCalendarMonthSelect class="order-1">
            <hlm-select-trigger size="sm" [class]="_selectClass">
              <hlm-select-value />
            </hlm-select-trigger>
            <hlm-select-content *hlmSelectPortal class="max-h-80">
              <hlm-select-group>
                @for (month of _i18n.config().months(); track month) {
                  <hlm-select-item [value]="month">{{ month }}</hlm-select-item>
                }
              </hlm-select-group>
            </hlm-select-content>
          </hlm-select>
        </ng-template>
        <ng-template #year>
          <hlm-select brnCalendarYearSelect class="order-3">
            <hlm-select-trigger size="sm" [class]="_selectClass">
              <hlm-select-value />
            </hlm-select-trigger>
            <hlm-select-content *hlmSelectPortal class="max-h-80">
              <hlm-select-group>
                @for (year of _i18n.config().years(); track year) {
                  <hlm-select-item [value]="year">{{ year }}</hlm-select-item>
                }
              </hlm-select-group>
            </hlm-select-content>
          </hlm-select>
        </ng-template>
        @let heading = _heading();

        <button
          brnCalendarPreviousButton
          variant="ghost"
          hlmBtn
          class="order-first size-(--cell-size) p-0 select-none aria-disabled:opacity-50"
        >
          <ng-icon name="lucideChevronLeft" class="rtl:rotate-180" />
        </button>

        @switch (captionLayout()) {
          @case ('dropdown') {
            <ng-container [ngTemplateOutlet]="month" />
            <ng-container [ngTemplateOutlet]="year" />
          }
          @case ('dropdown-months') {
            <ng-container [ngTemplateOutlet]="month" />
            <div brnCalendarHeader class="order-4 text-sm font-medium">{{ heading.year }}</div>
          }
          @case ('dropdown-years') {
            <div brnCalendarHeader class="order-2 text-sm font-medium">{{ heading.month }}</div>
            <ng-container [ngTemplateOutlet]="year" />
          }
          @case ('label') {
            <div brnCalendarHeader class="order-5 text-sm font-medium">{{ heading.header }}</div>
          }
        }

        <button brnCalendarNextButton hlmBtn variant="ghost" class="order-last size-(--cell-size) p-0 select-none aria-disabled:opacity-50">
          <ng-icon name="lucideChevronRight" class="rtl:rotate-180" />
        </button>
      </div>

      <table class="w-full border-collapse" brnCalendarGrid>
        <thead aria-hidden="true">
          <tr class="flex">
            <th
              *brnCalendarWeekday="let weekday"
              scope="col"
              class="text-muted-foreground flex-1 rounded-(--cell-radius) text-[0.8rem] font-normal select-none"
              [attr.aria-label]="_i18n.config().labelWeekday(weekday)"
            >
              {{ _i18n.config().formatWeekdayName(weekday) }}
            </th>
          </tr>
        </thead>

        <tbody role="rowgroup">
          <tr *brnCalendarWeek="let week" class="mt-2 flex w-full">
            @for (date of week; track _dateAdapter.getTime(date)) {
              <td
                brnCalendarCell
                class="group/day relative aspect-square h-full w-full rounded-(--cell-radius) p-0 text-center select-none [&:first-child[data-selected=true]_button]:rounded-s-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-e-(--cell-radius)"
              >
                <button brnCalendarCellButton [date]="date" [class]="_btnClass">
                  {{ _dateAdapter.getDate(date) }}
                </button>
              </td>
            }
          </tr>
        </tbody>
      </table>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.BrnCalendarCellButton, selector: "button[brnCalendarCellButton]", inputs: ["date"] }, { kind: "directive", type: i1.BrnCalendarGrid, selector: "[brnCalendarGrid]" }, { kind: "directive", type: i1.BrnCalendarHeader, selector: "[brnCalendarHeader]", inputs: ["id"] }, { kind: "directive", type: i1.BrnCalendarNextButton, selector: "button[brnCalendarNextButton]" }, { kind: "directive", type: i1.BrnCalendarPreviousButton, selector: "button[brnCalendarPreviousButton]" }, { kind: "directive", type: i1.BrnCalendarWeek, selector: "[brnCalendarWeek]" }, { kind: "directive", type: i1.BrnCalendarWeekday, selector: "[brnCalendarWeekday]" }, { kind: "directive", type: i1.BrnCalendarCell, selector: "[brnCalendarCell]" }, { kind: "directive", type: i1.BrnCalendarMonthSelect, selector: "brnSelect[brnCalendarMonthSelect],hlm-select[brnCalendarMonthSelect]" }, { kind: "directive", type: i1.BrnCalendarYearSelect, selector: "brnSelect[brnCalendarYearSelect],hlm-select[brnCalendarYearSelect]" }, { kind: "component", type: NgIcon, selector: "ng-icon", inputs: ["name", "svg", "size", "strokeWidth", "color"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.HlmSelect, selector: "[hlmSelect],hlm-select" }, { kind: "component", type: i2.HlmSelectContent, selector: "hlm-select-content", inputs: ["showScroll"] }, { kind: "directive", type: i2.HlmSelectGroup, selector: "[hlmSelectGroup],hlm-select-group" }, { kind: "component", type: i2.HlmSelectItem, selector: "hlm-select-item" }, { kind: "directive", type: i2.HlmSelectPortal, selector: "[hlmSelectPortal]" }, { kind: "component", type: i2.HlmSelectTrigger, selector: "hlm-select-trigger", inputs: ["class", "buttonId", "size", "forceInvalid"] }, { kind: "directive", type: i2.HlmSelectValue, selector: "[hlmSelectValue],hlm-select-value" }, { kind: "directive", type: i3.HlmButton, selector: "button[hlmBtn], a[hlmBtn]", inputs: ["variant", "size"], exportAs: ["hlmBtn"] }], viewProviders: [provideIcons({ lucideChevronLeft, lucideChevronRight })], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmCalendarMulti, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-calendar-multi',
                    imports: [BrnCalendarImports, NgIcon, NgTemplateOutlet, HlmSelectImports, HlmButtonImports],
                    viewProviders: [provideIcons({ lucideChevronLeft, lucideChevronRight })],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    hostDirectives: [
                        {
                            directive: BrnCalendarMulti,
                            inputs: [
                                'min',
                                'max',
                                'minSelection',
                                'maxSelection',
                                'disabled',
                                'date',
                                'dateDisabled',
                                'weekStartsOn',
                                'highlightDays',
                                'defaultFocusedDate',
                            ],
                            outputs: ['dateChange'],
                        },
                    ],
                    host: { 'data-slot': 'calendar' },
                    template: `
    <div class="inline-flex flex-col space-y-4">
      <!-- Header -->
      <div class="flex w-full items-center justify-between gap-1.5">
        <ng-template #month>
          <hlm-select brnCalendarMonthSelect class="order-1">
            <hlm-select-trigger size="sm" [class]="_selectClass">
              <hlm-select-value />
            </hlm-select-trigger>
            <hlm-select-content *hlmSelectPortal class="max-h-80">
              <hlm-select-group>
                @for (month of _i18n.config().months(); track month) {
                  <hlm-select-item [value]="month">{{ month }}</hlm-select-item>
                }
              </hlm-select-group>
            </hlm-select-content>
          </hlm-select>
        </ng-template>
        <ng-template #year>
          <hlm-select brnCalendarYearSelect class="order-3">
            <hlm-select-trigger size="sm" [class]="_selectClass">
              <hlm-select-value />
            </hlm-select-trigger>
            <hlm-select-content *hlmSelectPortal class="max-h-80">
              <hlm-select-group>
                @for (year of _i18n.config().years(); track year) {
                  <hlm-select-item [value]="year">{{ year }}</hlm-select-item>
                }
              </hlm-select-group>
            </hlm-select-content>
          </hlm-select>
        </ng-template>
        @let heading = _heading();

        <button
          brnCalendarPreviousButton
          variant="ghost"
          hlmBtn
          class="order-first size-(--cell-size) p-0 select-none aria-disabled:opacity-50"
        >
          <ng-icon name="lucideChevronLeft" class="rtl:rotate-180" />
        </button>

        @switch (captionLayout()) {
          @case ('dropdown') {
            <ng-container [ngTemplateOutlet]="month" />
            <ng-container [ngTemplateOutlet]="year" />
          }
          @case ('dropdown-months') {
            <ng-container [ngTemplateOutlet]="month" />
            <div brnCalendarHeader class="order-4 text-sm font-medium">{{ heading.year }}</div>
          }
          @case ('dropdown-years') {
            <div brnCalendarHeader class="order-2 text-sm font-medium">{{ heading.month }}</div>
            <ng-container [ngTemplateOutlet]="year" />
          }
          @case ('label') {
            <div brnCalendarHeader class="order-5 text-sm font-medium">{{ heading.header }}</div>
          }
        }

        <button brnCalendarNextButton hlmBtn variant="ghost" class="order-last size-(--cell-size) p-0 select-none aria-disabled:opacity-50">
          <ng-icon name="lucideChevronRight" class="rtl:rotate-180" />
        </button>
      </div>

      <table class="w-full border-collapse" brnCalendarGrid>
        <thead aria-hidden="true">
          <tr class="flex">
            <th
              *brnCalendarWeekday="let weekday"
              scope="col"
              class="text-muted-foreground flex-1 rounded-(--cell-radius) text-[0.8rem] font-normal select-none"
              [attr.aria-label]="_i18n.config().labelWeekday(weekday)"
            >
              {{ _i18n.config().formatWeekdayName(weekday) }}
            </th>
          </tr>
        </thead>

        <tbody role="rowgroup">
          <tr *brnCalendarWeek="let week" class="mt-2 flex w-full">
            @for (date of week; track _dateAdapter.getTime(date)) {
              <td
                brnCalendarCell
                class="group/day relative aspect-square h-full w-full rounded-(--cell-radius) p-0 text-center select-none [&:first-child[data-selected=true]_button]:rounded-s-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-e-(--cell-radius)"
              >
                <button brnCalendarCellButton [date]="date" [class]="_btnClass">
                  {{ _dateAdapter.getDate(date) }}
                </button>
              </td>
            }
          </tr>
        </tbody>
      </table>
    </div>
  `,
                }]
        }], ctorParameters: () => [], propDecorators: { captionLayout: [{ type: i0.Input, args: [{ isSignal: true, alias: "captionLayout", required: false }] }] } });

class HlmCalendarRange {
    /** Show dropdowns to navigate between months or years. */
    captionLayout = input('label', ...(ngDevMode ? [{ debugName: "captionLayout" }] : /* istanbul ignore next */ []));
    /** Access the calendar i18n */
    _i18n = injectBrnCalendarI18n();
    /** Access the date time adapter */
    _dateAdapter = injectDateAdapter();
    /** Access the calendar directive */
    _calendar = inject(BrnCalendarRange);
    /** Get the heading for the current month and year */
    _heading = computed(() => {
        const config = this._i18n.config();
        const date = this._calendar.focusedDate();
        return {
            header: config.formatHeader(this._dateAdapter.getMonth(date), this._dateAdapter.getYear(date)),
            month: config.formatMonth(this._dateAdapter.getMonth(date)),
            year: config.formatYear(this._dateAdapter.getYear(date)),
        };
    }, ...(ngDevMode ? [{ debugName: "_heading" }] : /* istanbul ignore next */ []));
    _btnClass = hlm(buttonVariants({ variant: 'ghost', size: 'icon' }), 'data-[today=true]:bg-muted group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground dark:hover:bg-muted/50 dark:hover:text-foreground relative isolate z-10 flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 border-0 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-e-(--cell-radius) data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-s-(--cell-radius) [&>span]:text-xs [&>span]:opacity-70', 'data-[outside=true]:opacity-50', "data-[highlighted]:before:content-['']", 'data-[highlighted]:before:absolute', 'data-[highlighted]:before:bottom-1', 'data-[highlighted]:before:start-1/2', 'data-[highlighted]:before:h-1', 'data-[highlighted]:before:w-1', 'data-[highlighted]:before:-translate-x-1/2', 'data-[highlighted]:before:rounded-full', 'data-[highlighted]:before:bg-destructive');
    _selectClass = 'gap-0 px-1.5 py-2 [&>ng-icon]:ms-1';
    constructor() {
        classes(() => 'p-3 [--cell-radius:var(--radius-4xl)] [--cell-size:--spacing(8)] group/calendar bg-background block in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmCalendarRange, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.11", type: HlmCalendarRange, isStandalone: true, selector: "hlm-calendar-range", inputs: { captionLayout: { classPropertyName: "captionLayout", publicName: "captionLayout", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "data-slot": "calendar" } }, hostDirectives: [{ directive: i1.BrnCalendarRange, inputs: ["min", "min", "max", "max", "disabled", "disabled", "startDate", "startDate", "endDate", "endDate", "dateDisabled", "dateDisabled", "weekStartsOn", "weekStartsOn", "highlightDays", "highlightDays", "defaultFocusedDate", "defaultFocusedDate"], outputs: ["endDateChange", "endDateChange", "startDateChange", "startDateChange"] }], ngImport: i0, template: `
    <div class="inline-flex flex-col space-y-4">
      <!-- Header -->
      <div class="flex w-full items-center justify-between gap-1.5">
        <ng-template #month>
          <hlm-select brnCalendarMonthSelect class="order-1">
            <hlm-select-trigger size="sm" [class]="_selectClass">
              <hlm-select-value />
            </hlm-select-trigger>
            <hlm-select-content *hlmSelectPortal class="max-h-80">
              <hlm-select-group>
                @for (month of _i18n.config().months(); track month) {
                  <hlm-select-item [value]="month">{{ month }}</hlm-select-item>
                }
              </hlm-select-group>
            </hlm-select-content>
          </hlm-select>
        </ng-template>
        <ng-template #year>
          <hlm-select brnCalendarYearSelect class="order-3">
            <hlm-select-trigger size="sm" [class]="_selectClass">
              <hlm-select-value />
            </hlm-select-trigger>
            <hlm-select-content *hlmSelectPortal class="max-h-80">
              <hlm-select-group>
                @for (year of _i18n.config().years(); track year) {
                  <hlm-select-item [value]="year">{{ year }}</hlm-select-item>
                }
              </hlm-select-group>
            </hlm-select-content>
          </hlm-select>
        </ng-template>
        @let heading = _heading();

        <button
          brnCalendarPreviousButton
          variant="ghost"
          hlmBtn
          class="order-first size-(--cell-size) p-0 select-none aria-disabled:opacity-50"
        >
          <ng-icon name="lucideChevronLeft" class="rtl:rotate-180" />
        </button>

        @switch (captionLayout()) {
          @case ('dropdown') {
            <ng-container [ngTemplateOutlet]="month" />
            <ng-container [ngTemplateOutlet]="year" />
          }
          @case ('dropdown-months') {
            <ng-container [ngTemplateOutlet]="month" />
            <div brnCalendarHeader class="order-4 text-sm font-medium">{{ heading.year }}</div>
          }
          @case ('dropdown-years') {
            <div brnCalendarHeader class="order-2 text-sm font-medium">{{ heading.month }}</div>
            <ng-container [ngTemplateOutlet]="year" />
          }
          @case ('label') {
            <div brnCalendarHeader class="order-5 text-sm font-medium">{{ heading.header }}</div>
          }
        }

        <button brnCalendarNextButton hlmBtn variant="ghost" class="order-last size-(--cell-size) p-0 select-none aria-disabled:opacity-50">
          <ng-icon name="lucideChevronRight" class="rtl:rotate-180" />
        </button>
      </div>

      <table class="w-full border-collapse space-y-1" brnCalendarGrid>
        <thead aria-hidden="true">
          <tr class="flex">
            <th
              *brnCalendarWeekday="let weekday"
              scope="col"
              class="text-muted-foreground flex-1 rounded-(--cell-radius) text-[0.8rem] font-normal select-none"
              [attr.aria-label]="_i18n.config().labelWeekday(weekday)"
            >
              {{ _i18n.config().formatWeekdayName(weekday) }}
            </th>
          </tr>
        </thead>

        <tbody role="rowgroup">
          <tr *brnCalendarWeek="let week" class="mt-2 flex w-full">
            @for (date of week; track _dateAdapter.getTime(date)) {
              <td
                brnCalendarCell
                class="group/day has-[button[data-range-start=true]]:bg-muted has-[button[data-range-start=true]]:after:bg-muted has-[button[data-range-end=true]]:bg-muted has-[button[data-range-end=true]]:after:bg-muted relative isolate z-0 aspect-square h-full w-full rounded-(--cell-radius) p-0 text-center select-none has-[button[data-range-end=true]]:rounded-e-(--cell-radius) has-[button[data-range-end=true]]:after:absolute has-[button[data-range-end=true]]:after:inset-y-0 has-[button[data-range-end=true]]:after:start-0 has-[button[data-range-end=true]]:after:w-4 has-[button[data-range-start=true]]:rounded-s-(--cell-radius) has-[button[data-range-start=true]]:after:absolute has-[button[data-range-start=true]]:after:inset-y-0 has-[button[data-range-start=true]]:after:end-0 has-[button[data-range-start=true]]:after:w-4 [&:first-child[data-selected=true]_button]:rounded-s-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-e-(--cell-radius)"
              >
                <button brnCalendarCellButton [date]="date" [class]="_btnClass">
                  {{ _dateAdapter.getDate(date) }}
                </button>
              </td>
            }
          </tr>
        </tbody>
      </table>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.BrnCalendarCellButton, selector: "button[brnCalendarCellButton]", inputs: ["date"] }, { kind: "directive", type: i1.BrnCalendarGrid, selector: "[brnCalendarGrid]" }, { kind: "directive", type: i1.BrnCalendarHeader, selector: "[brnCalendarHeader]", inputs: ["id"] }, { kind: "directive", type: i1.BrnCalendarNextButton, selector: "button[brnCalendarNextButton]" }, { kind: "directive", type: i1.BrnCalendarPreviousButton, selector: "button[brnCalendarPreviousButton]" }, { kind: "directive", type: i1.BrnCalendarWeek, selector: "[brnCalendarWeek]" }, { kind: "directive", type: i1.BrnCalendarWeekday, selector: "[brnCalendarWeekday]" }, { kind: "directive", type: i1.BrnCalendarCell, selector: "[brnCalendarCell]" }, { kind: "directive", type: i1.BrnCalendarMonthSelect, selector: "brnSelect[brnCalendarMonthSelect],hlm-select[brnCalendarMonthSelect]" }, { kind: "directive", type: i1.BrnCalendarYearSelect, selector: "brnSelect[brnCalendarYearSelect],hlm-select[brnCalendarYearSelect]" }, { kind: "component", type: NgIcon, selector: "ng-icon", inputs: ["name", "svg", "size", "strokeWidth", "color"] }, { kind: "directive", type: i2.HlmSelect, selector: "[hlmSelect],hlm-select" }, { kind: "component", type: i2.HlmSelectContent, selector: "hlm-select-content", inputs: ["showScroll"] }, { kind: "directive", type: i2.HlmSelectGroup, selector: "[hlmSelectGroup],hlm-select-group" }, { kind: "component", type: i2.HlmSelectItem, selector: "hlm-select-item" }, { kind: "directive", type: i2.HlmSelectPortal, selector: "[hlmSelectPortal]" }, { kind: "component", type: i2.HlmSelectTrigger, selector: "hlm-select-trigger", inputs: ["class", "buttonId", "size", "forceInvalid"] }, { kind: "directive", type: i2.HlmSelectValue, selector: "[hlmSelectValue],hlm-select-value" }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i3.HlmButton, selector: "button[hlmBtn], a[hlmBtn]", inputs: ["variant", "size"], exportAs: ["hlmBtn"] }], viewProviders: [provideIcons({ lucideChevronLeft, lucideChevronRight })], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmCalendarRange, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-calendar-range',
                    imports: [BrnCalendarImports, NgIcon, HlmSelectImports, NgTemplateOutlet, HlmButtonImports],
                    viewProviders: [provideIcons({ lucideChevronLeft, lucideChevronRight })],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    hostDirectives: [
                        {
                            directive: BrnCalendarRange,
                            inputs: ['min', 'max', 'disabled', 'startDate', 'endDate', 'dateDisabled', 'weekStartsOn', 'highlightDays', 'defaultFocusedDate'],
                            outputs: ['endDateChange', 'startDateChange'],
                        },
                    ],
                    host: { 'data-slot': 'calendar' },
                    template: `
    <div class="inline-flex flex-col space-y-4">
      <!-- Header -->
      <div class="flex w-full items-center justify-between gap-1.5">
        <ng-template #month>
          <hlm-select brnCalendarMonthSelect class="order-1">
            <hlm-select-trigger size="sm" [class]="_selectClass">
              <hlm-select-value />
            </hlm-select-trigger>
            <hlm-select-content *hlmSelectPortal class="max-h-80">
              <hlm-select-group>
                @for (month of _i18n.config().months(); track month) {
                  <hlm-select-item [value]="month">{{ month }}</hlm-select-item>
                }
              </hlm-select-group>
            </hlm-select-content>
          </hlm-select>
        </ng-template>
        <ng-template #year>
          <hlm-select brnCalendarYearSelect class="order-3">
            <hlm-select-trigger size="sm" [class]="_selectClass">
              <hlm-select-value />
            </hlm-select-trigger>
            <hlm-select-content *hlmSelectPortal class="max-h-80">
              <hlm-select-group>
                @for (year of _i18n.config().years(); track year) {
                  <hlm-select-item [value]="year">{{ year }}</hlm-select-item>
                }
              </hlm-select-group>
            </hlm-select-content>
          </hlm-select>
        </ng-template>
        @let heading = _heading();

        <button
          brnCalendarPreviousButton
          variant="ghost"
          hlmBtn
          class="order-first size-(--cell-size) p-0 select-none aria-disabled:opacity-50"
        >
          <ng-icon name="lucideChevronLeft" class="rtl:rotate-180" />
        </button>

        @switch (captionLayout()) {
          @case ('dropdown') {
            <ng-container [ngTemplateOutlet]="month" />
            <ng-container [ngTemplateOutlet]="year" />
          }
          @case ('dropdown-months') {
            <ng-container [ngTemplateOutlet]="month" />
            <div brnCalendarHeader class="order-4 text-sm font-medium">{{ heading.year }}</div>
          }
          @case ('dropdown-years') {
            <div brnCalendarHeader class="order-2 text-sm font-medium">{{ heading.month }}</div>
            <ng-container [ngTemplateOutlet]="year" />
          }
          @case ('label') {
            <div brnCalendarHeader class="order-5 text-sm font-medium">{{ heading.header }}</div>
          }
        }

        <button brnCalendarNextButton hlmBtn variant="ghost" class="order-last size-(--cell-size) p-0 select-none aria-disabled:opacity-50">
          <ng-icon name="lucideChevronRight" class="rtl:rotate-180" />
        </button>
      </div>

      <table class="w-full border-collapse space-y-1" brnCalendarGrid>
        <thead aria-hidden="true">
          <tr class="flex">
            <th
              *brnCalendarWeekday="let weekday"
              scope="col"
              class="text-muted-foreground flex-1 rounded-(--cell-radius) text-[0.8rem] font-normal select-none"
              [attr.aria-label]="_i18n.config().labelWeekday(weekday)"
            >
              {{ _i18n.config().formatWeekdayName(weekday) }}
            </th>
          </tr>
        </thead>

        <tbody role="rowgroup">
          <tr *brnCalendarWeek="let week" class="mt-2 flex w-full">
            @for (date of week; track _dateAdapter.getTime(date)) {
              <td
                brnCalendarCell
                class="group/day has-[button[data-range-start=true]]:bg-muted has-[button[data-range-start=true]]:after:bg-muted has-[button[data-range-end=true]]:bg-muted has-[button[data-range-end=true]]:after:bg-muted relative isolate z-0 aspect-square h-full w-full rounded-(--cell-radius) p-0 text-center select-none has-[button[data-range-end=true]]:rounded-e-(--cell-radius) has-[button[data-range-end=true]]:after:absolute has-[button[data-range-end=true]]:after:inset-y-0 has-[button[data-range-end=true]]:after:start-0 has-[button[data-range-end=true]]:after:w-4 has-[button[data-range-start=true]]:rounded-s-(--cell-radius) has-[button[data-range-start=true]]:after:absolute has-[button[data-range-start=true]]:after:inset-y-0 has-[button[data-range-start=true]]:after:end-0 has-[button[data-range-start=true]]:after:w-4 [&:first-child[data-selected=true]_button]:rounded-s-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-e-(--cell-radius)"
              >
                <button brnCalendarCellButton [date]="date" [class]="_btnClass">
                  {{ _dateAdapter.getDate(date) }}
                </button>
              </td>
            }
          </tr>
        </tbody>
      </table>
    </div>
  `,
                }]
        }], ctorParameters: () => [], propDecorators: { captionLayout: [{ type: i0.Input, args: [{ isSignal: true, alias: "captionLayout", required: false }] }] } });

class HlmMonthYearCalendar {
    /** Access the calendar i18n */
    _i18n = injectBrnCalendarI18n();
    /** Access the date adapter */
    _dateAdapter = injectDateAdapter();
    /** Access the picker directive */
    _picker = inject((BrnMonthYearCalendar));
    /** The heading for the current view. */
    _heading = computed(() => {
        const config = this._i18n.config();
        if (this._picker.view() === 'month') {
            return config.formatYear(this._dateAdapter.getYear(this._picker.focusedDate()));
        }
        const { start, end } = this._picker.yearRange();
        return `${config.formatYear(start)} – ${config.formatYear(end)}`;
    }, ...(ngDevMode ? [{ debugName: "_heading" }] : /* istanbul ignore next */ []));
    _btnClass = hlm(buttonVariants({ variant: 'ghost' }), 'data-[today=true]:bg-muted', 'data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground data-[selected=true]:hover:bg-primary data-[selected=true]:hover:text-primary-foreground', 'data-[focused=true]:border-ring data-[focused=true]:ring-ring/50 data-[focused=true]:ring-[3px]', 'aria-disabled:pointer-events-none aria-disabled:opacity-50', 'h-(--cell-size)');
    constructor() {
        classes(() => 'p-3 [--cell-radius:var(--radius-4xl)] [--cell-size:--spacing(8)] group/calendar bg-background block in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmMonthYearCalendar, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.11", type: HlmMonthYearCalendar, isStandalone: true, selector: "hlm-month-year-calendar", host: { attributes: { "data-slot": "month-year-calendar" } }, hostDirectives: [{ directive: i1.BrnMonthYearCalendar, inputs: ["min", "min", "max", "max", "disabled", "disabled", "date", "date", "defaultFocusedDate", "defaultFocusedDate", "view", "view"], outputs: ["dateChange", "dateChange"] }], ngImport: i0, template: `
    <div class="flex flex-col gap-4">
      <!-- Header -->
      <div class="flex w-full items-center justify-between gap-1.5">
        <button
          brnMonthYearCalendarPreviousButton
          hlmBtn
          variant="ghost"
          class="order-first size-(--cell-size) p-0 select-none aria-disabled:opacity-50"
        >
          <ng-icon name="lucideChevronLeft" class="rtl:rotate-180" />
        </button>

        <button hlmBtn variant="ghost" class="h-(--cell-size) py-0 select-none aria-disabled:opacity-50" brnMonthYearCalendarHeader>
          {{ _heading() }}
        </button>

        <button
          brnMonthYearCalendarNextButton
          hlmBtn
          variant="ghost"
          class="order-last size-(--cell-size) p-0 select-none aria-disabled:opacity-50"
        >
          <ng-icon name="lucideChevronRight" class="rtl:rotate-180" />
        </button>
      </div>

      <!-- Grid -->
      @switch (_picker.view()) {
        @case ('year') {
          <div brnMonthYearCalendarGrid class="grid grid-cols-4 gap-2">
            @for (year of _picker.years(); track _dateAdapter.getYear(year)) {
              <button brnMonthYearCalendarYearButton [date]="year" [class]="_btnClass">
                {{ _i18n.config().formatYear(_dateAdapter.getYear(year)) }}
              </button>
            }
          </div>
        }
        @case ('month') {
          <div brnMonthYearCalendarGrid class="grid grid-cols-4 gap-2">
            @for (month of _picker.months(); track _dateAdapter.getMonth(month)) {
              <button brnMonthYearCalendarMonthButton [date]="month" [class]="_btnClass">
                {{ _i18n.config().months()[_dateAdapter.getMonth(month)] }}
              </button>
            }
          </div>
        }
      }
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.BrnMonthYearCalendarGrid, selector: "[brnMonthYearCalendarGrid]" }, { kind: "directive", type: i1.BrnMonthYearCalendarHeader, selector: "button[brnMonthYearCalendarHeader]", inputs: ["id"] }, { kind: "directive", type: i1.BrnMonthYearCalendarMonthButton, selector: "button[brnMonthYearCalendarMonthButton]", inputs: ["date"] }, { kind: "directive", type: i1.BrnMonthYearCalendarNextButton, selector: "button[brnMonthYearCalendarNextButton]" }, { kind: "directive", type: i1.BrnMonthYearCalendarPreviousButton, selector: "button[brnMonthYearCalendarPreviousButton]" }, { kind: "directive", type: i1.BrnMonthYearCalendarYearButton, selector: "button[brnMonthYearCalendarYearButton]", inputs: ["date"] }, { kind: "component", type: NgIcon, selector: "ng-icon", inputs: ["name", "svg", "size", "strokeWidth", "color"] }, { kind: "directive", type: i3.HlmButton, selector: "button[hlmBtn], a[hlmBtn]", inputs: ["variant", "size"], exportAs: ["hlmBtn"] }], viewProviders: [provideIcons({ lucideChevronLeft, lucideChevronRight })], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmMonthYearCalendar, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-month-year-calendar',
                    imports: [BrnCalendarImports, NgIcon, HlmButtonImports],
                    viewProviders: [provideIcons({ lucideChevronLeft, lucideChevronRight })],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    hostDirectives: [
                        {
                            directive: BrnMonthYearCalendar,
                            inputs: ['min', 'max', 'disabled', 'date', 'defaultFocusedDate', 'view'],
                            outputs: ['dateChange'],
                        },
                    ],
                    host: { 'data-slot': 'month-year-calendar' },
                    template: `
    <div class="flex flex-col gap-4">
      <!-- Header -->
      <div class="flex w-full items-center justify-between gap-1.5">
        <button
          brnMonthYearCalendarPreviousButton
          hlmBtn
          variant="ghost"
          class="order-first size-(--cell-size) p-0 select-none aria-disabled:opacity-50"
        >
          <ng-icon name="lucideChevronLeft" class="rtl:rotate-180" />
        </button>

        <button hlmBtn variant="ghost" class="h-(--cell-size) py-0 select-none aria-disabled:opacity-50" brnMonthYearCalendarHeader>
          {{ _heading() }}
        </button>

        <button
          brnMonthYearCalendarNextButton
          hlmBtn
          variant="ghost"
          class="order-last size-(--cell-size) p-0 select-none aria-disabled:opacity-50"
        >
          <ng-icon name="lucideChevronRight" class="rtl:rotate-180" />
        </button>
      </div>

      <!-- Grid -->
      @switch (_picker.view()) {
        @case ('year') {
          <div brnMonthYearCalendarGrid class="grid grid-cols-4 gap-2">
            @for (year of _picker.years(); track _dateAdapter.getYear(year)) {
              <button brnMonthYearCalendarYearButton [date]="year" [class]="_btnClass">
                {{ _i18n.config().formatYear(_dateAdapter.getYear(year)) }}
              </button>
            }
          </div>
        }
        @case ('month') {
          <div brnMonthYearCalendarGrid class="grid grid-cols-4 gap-2">
            @for (month of _picker.months(); track _dateAdapter.getMonth(month)) {
              <button brnMonthYearCalendarMonthButton [date]="month" [class]="_btnClass">
                {{ _i18n.config().months()[_dateAdapter.getMonth(month)] }}
              </button>
            }
          </div>
        }
      }
    </div>
  `,
                }]
        }], ctorParameters: () => [] });

const HlmCalendarImports = [HlmCalendar, HlmCalendarMulti, HlmCalendarRange, HlmMonthYearCalendar];

/**
 * Generated bundle index. Do not edit.
 */

export { HlmCalendar, HlmCalendarImports, HlmCalendarMulti, HlmCalendarRange, HlmMonthYearCalendar };
//# sourceMappingURL=gosamply-ui-calendar.mjs.map
