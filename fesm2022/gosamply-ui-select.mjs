import * as i0 from '@angular/core';
import { Directive, ChangeDetectionStrategy, Component, computed, input, booleanAttribute, inject } from '@angular/core';
import * as i2 from '@spartan-ng/brain/popover';
import { provideBrnPopoverConfig, provideBrnPopoverDefaultOptions, BrnPopover, BrnPopoverContent } from '@spartan-ng/brain/popover';
import * as i1 from '@spartan-ng/brain/select';
import { BrnSelect, BrnSelectScrollDown, BrnSelectScrollUp, BrnSelectContent, BrnSelectGroup, BrnSelectItem, BrnSelectLabel, BrnSelectMultiple, BrnSelectPlaceholder, BrnSelectSeparator, BrnSelectTrigger, BrnSelectValue, BrnSelectValueTemplate, BrnSelectValues } from '@spartan-ng/brain/select';
import { classes, hlm } from '@gosamply/ui/utils';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideChevronUp, lucideCheck } from '@ng-icons/lucide';
import { BrnFieldControlDescribedBy } from '@spartan-ng/brain/field';

class HlmSelect {
    constructor() {
        classes(() => 'block');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSelect, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSelect, isStandalone: true, selector: "[hlmSelect],hlm-select", host: { attributes: { "data-slot": "select" } }, providers: [
            provideBrnPopoverConfig({
                align: 'start',
                sideOffset: 6,
            }),
            provideBrnPopoverDefaultOptions({ role: null }),
        ], hostDirectives: [{ directive: i1.BrnSelect, inputs: ["disabled", "disabled", "value", "value", "isItemEqualToValue", "isItemEqualToValue", "itemToString", "itemToString"], outputs: ["valueChange", "valueChange"] }, { directive: i2.BrnPopover, inputs: ["align", "align", "closeOnOutsidePointerEvents", "closeOnOutsidePointerEvents", "sideOffset", "sideOffset", "state", "state", "offsetX", "offsetX", "scrollStrategy", "scrollStrategy"], outputs: ["stateChanged", "stateChanged", "closed", "closed"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSelect, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmSelect],hlm-select',
                    providers: [
                        provideBrnPopoverConfig({
                            align: 'start',
                            sideOffset: 6,
                        }),
                        provideBrnPopoverDefaultOptions({ role: null }),
                    ],
                    hostDirectives: [
                        {
                            directive: BrnSelect,
                            inputs: ['disabled', 'value', 'isItemEqualToValue', 'itemToString'],
                            outputs: ['valueChange'],
                        },
                        {
                            directive: BrnPopover,
                            inputs: ['align', 'closeOnOutsidePointerEvents', 'sideOffset', 'state', 'offsetX', 'scrollStrategy'],
                            outputs: ['stateChanged', 'closed'],
                        },
                    ],
                    host: { 'data-slot': 'select' },
                }]
        }], ctorParameters: () => [] });

class HlmSelectScrollDown {
    constructor() {
        classes(() => "bg-popover z-10 flex cursor-default items-center justify-center py-1 [&_ng-icon:not([class*='text-'])]:text-[length:--spacing(4)] sticky bottom-0 w-full data-hidden:hidden");
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSelectScrollDown, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.11", type: HlmSelectScrollDown, isStandalone: true, selector: "hlm-select-scroll-down", providers: [provideIcons({ lucideChevronDown })], hostDirectives: [{ directive: i1.BrnSelectScrollDown }], ngImport: i0, template: ` <ng-icon name="lucideChevronDown" /> `, isInline: true, dependencies: [{ kind: "component", type: NgIcon, selector: "ng-icon", inputs: ["name", "svg", "size", "strokeWidth", "color"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSelectScrollDown, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-select-scroll-down',
                    imports: [NgIcon],
                    providers: [provideIcons({ lucideChevronDown })],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    hostDirectives: [BrnSelectScrollDown],
                    template: ` <ng-icon name="lucideChevronDown" /> `,
                }]
        }], ctorParameters: () => [] });

class HlmSelectScrollUp {
    constructor() {
        classes(() => "bg-popover z-10 flex cursor-default items-center justify-center py-1 [&_ng-icon:not([class*='text-'])]:text-[length:--spacing(4)] sticky top-0 w-full data-hidden:hidden");
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSelectScrollUp, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.11", type: HlmSelectScrollUp, isStandalone: true, selector: "hlm-select-scroll-up", providers: [provideIcons({ lucideChevronUp })], hostDirectives: [{ directive: i1.BrnSelectScrollUp }], ngImport: i0, template: ` <ng-icon name="lucideChevronUp" /> `, isInline: true, dependencies: [{ kind: "component", type: NgIcon, selector: "ng-icon", inputs: ["name", "svg", "size", "strokeWidth", "color"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSelectScrollUp, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-select-scroll-up',
                    imports: [NgIcon],
                    providers: [provideIcons({ lucideChevronUp })],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    hostDirectives: [BrnSelectScrollUp],
                    template: ` <ng-icon name="lucideChevronUp" /> `,
                }]
        }], ctorParameters: () => [] });

class HlmSelectContent {
    _computedListboxClasses = computed(() => hlm('flex flex-col'), ...(ngDevMode ? [{ debugName: "_computedListboxClasses" }] : /* istanbul ignore next */ []));
    showScroll = input(false, { ...(ngDevMode ? { debugName: "showScroll" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    constructor() {
        classes(() => 'bg-popover no-scrollbar text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/5 max-h-72 min-w-36 flex-col rounded-2xl shadow-2xl ring-1 duration-100 relative flex w-(--brn-select-width) overflow-x-hidden overflow-y-auto');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSelectContent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.11", type: HlmSelectContent, isStandalone: true, selector: "hlm-select-content", inputs: { showScroll: { classPropertyName: "showScroll", publicName: "showScroll", isSignal: true, isRequired: false, transformFunction: null } }, hostDirectives: [{ directive: i1.BrnSelectContent }], ngImport: i0, template: `
    @if (showScroll()) {
      <hlm-select-scroll-up />
    }

    <div role="listbox" [class]="_computedListboxClasses()">
      <ng-content />
    </div>

    @if (showScroll()) {
      <hlm-select-scroll-down />
    }
  `, isInline: true, dependencies: [{ kind: "component", type: HlmSelectScrollUp, selector: "hlm-select-scroll-up" }, { kind: "component", type: HlmSelectScrollDown, selector: "hlm-select-scroll-down" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSelectContent, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-select-content',
                    imports: [HlmSelectScrollUp, HlmSelectScrollDown],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    hostDirectives: [BrnSelectContent],
                    template: `
    @if (showScroll()) {
      <hlm-select-scroll-up />
    }

    <div role="listbox" [class]="_computedListboxClasses()">
      <ng-content />
    </div>

    @if (showScroll()) {
      <hlm-select-scroll-down />
    }
  `,
                }]
        }], ctorParameters: () => [], propDecorators: { showScroll: [{ type: i0.Input, args: [{ isSignal: true, alias: "showScroll", required: false }] }] } });

class HlmSelectGroup {
    constructor() {
        classes(() => 'scroll-my-1 p-1');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSelectGroup, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSelectGroup, isStandalone: true, selector: "[hlmSelectGroup],hlm-select-group", host: { attributes: { "data-slot": "select-group" } }, hostDirectives: [{ directive: i1.BrnSelectGroup }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSelectGroup, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmSelectGroup],hlm-select-group',
                    hostDirectives: [{ directive: BrnSelectGroup }],
                    host: { 'data-slot': 'select-group' },
                }]
        }], ctorParameters: () => [] });

class HlmSelectItem {
    _brnSelectItem = inject(BrnSelectItem);
    _active = this._brnSelectItem.active;
    constructor() {
        classes(() => 'data-highlighted:bg-accent data-highlighted:text-accent-foreground not-data-[variant=destructive]:data-highlighted:**:text-accent-foreground gap-2.5 rounded-xl py-2 ps-3 pe-8 text-sm *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2 relative flex w-full cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_ng-icon]:pointer-events-none [&_ng-icon]:shrink-0');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSelectItem, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.11", type: HlmSelectItem, isStandalone: true, selector: "hlm-select-item", host: { attributes: { "data-slot": "select-item" } }, providers: [provideIcons({ lucideCheck })], hostDirectives: [{ directive: i1.BrnSelectItem, inputs: ["id", "id", "disabled", "disabled", "value", "value"] }], ngImport: i0, template: `
    <ng-content />
    @if (_active()) {
      <ng-icon name="lucideCheck" class="absolute end-2 flex items-center justify-center text-[length:--spacing(4)]" aria-hidden="true" />
    }
  `, isInline: true, dependencies: [{ kind: "component", type: NgIcon, selector: "ng-icon", inputs: ["name", "svg", "size", "strokeWidth", "color"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSelectItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-select-item',
                    imports: [NgIcon],
                    providers: [provideIcons({ lucideCheck })],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    hostDirectives: [{ directive: BrnSelectItem, inputs: ['id', 'disabled', 'value'] }],
                    host: { 'data-slot': 'select-item' },
                    template: `
    <ng-content />
    @if (_active()) {
      <ng-icon name="lucideCheck" class="absolute end-2 flex items-center justify-center text-[length:--spacing(4)]" aria-hidden="true" />
    }
  `,
                }]
        }], ctorParameters: () => [] });

class HlmSelectLabel {
    constructor() {
        classes(() => 'text-muted-foreground px-3 py-2.5 text-xs flex');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSelectLabel, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSelectLabel, isStandalone: true, selector: "[hlmSelectLabel],hlm-select-label", host: { attributes: { "data-slot": "select-label" } }, hostDirectives: [{ directive: i1.BrnSelectLabel, inputs: ["id", "id"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSelectLabel, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmSelectLabel],hlm-select-label',
                    hostDirectives: [{ directive: BrnSelectLabel, inputs: ['id'] }],
                    host: { 'data-slot': 'select-label' },
                }]
        }], ctorParameters: () => [] });

class HlmSelectMultiple {
    constructor() {
        classes(() => 'block');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSelectMultiple, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSelectMultiple, isStandalone: true, selector: "[hlmSelectMultiple],hlm-select-multiple", host: { attributes: { "data-slot": "select" } }, providers: [
            provideBrnPopoverConfig({
                align: 'start',
                sideOffset: 6,
            }),
            provideBrnPopoverDefaultOptions({ role: null }),
        ], hostDirectives: [{ directive: i1.BrnSelectMultiple, inputs: ["disabled", "disabled", "value", "value", "isItemEqualToValue", "isItemEqualToValue", "itemToString", "itemToString"], outputs: ["valueChange", "valueChange"] }, { directive: i2.BrnPopover, inputs: ["align", "align", "closeOnOutsidePointerEvents", "closeOnOutsidePointerEvents", "sideOffset", "sideOffset", "state", "state", "offsetX", "offsetX", "scrollStrategy", "scrollStrategy"], outputs: ["stateChanged", "stateChanged", "closed", "closed"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSelectMultiple, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmSelectMultiple],hlm-select-multiple',
                    providers: [
                        provideBrnPopoverConfig({
                            align: 'start',
                            sideOffset: 6,
                        }),
                        provideBrnPopoverDefaultOptions({ role: null }),
                    ],
                    hostDirectives: [
                        {
                            directive: BrnSelectMultiple,
                            inputs: ['disabled', 'value', 'isItemEqualToValue', 'itemToString'],
                            outputs: ['valueChange'],
                        },
                        {
                            directive: BrnPopover,
                            inputs: ['align', 'closeOnOutsidePointerEvents', 'sideOffset', 'state', 'offsetX', 'scrollStrategy'],
                            outputs: ['stateChanged', 'closed'],
                        },
                    ],
                    host: { 'data-slot': 'select' },
                }]
        }], ctorParameters: () => [] });

class HlmSelectPlaceholder {
    constructor() {
        classes(() => "gap-2 [&_ng-icon:not([class*='text-'])]:text-[length:--spacing(4)] flex items-center data-hidden:hidden [&_ng-icon]:pointer-events-none [&_ng-icon]:shrink-0");
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSelectPlaceholder, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSelectPlaceholder, isStandalone: true, selector: "[hlmSelectPlaceholder],hlm-select-placeholder", host: { attributes: { "data-slot": "select-placeholder" } }, hostDirectives: [{ directive: i1.BrnSelectPlaceholder }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSelectPlaceholder, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmSelectPlaceholder],hlm-select-placeholder',
                    hostDirectives: [BrnSelectPlaceholder],
                    host: { 'data-slot': 'select-placeholder' },
                }]
        }], ctorParameters: () => [] });

class HlmSelectPortal {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSelectPortal, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSelectPortal, isStandalone: true, selector: "[hlmSelectPortal]", hostDirectives: [{ directive: i2.BrnPopoverContent, inputs: ["context", "context", "class", "class"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSelectPortal, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmSelectPortal]',
                    hostDirectives: [{ directive: BrnPopoverContent, inputs: ['context', 'class'] }],
                }]
        }] });

class HlmSelectSeparator {
    constructor() {
        classes(() => 'bg-border/50 -mx-1 my-1 h-px pointer-events-none');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSelectSeparator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSelectSeparator, isStandalone: true, selector: "[hlmSelectSeparator],hlm-select-separator", host: { attributes: { "data-slot": "select-separator" } }, hostDirectives: [{ directive: i1.BrnSelectSeparator, inputs: ["orientation", "orientation"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSelectSeparator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmSelectSeparator],hlm-select-separator',
                    hostDirectives: [{ directive: BrnSelectSeparator, inputs: ['orientation'] }],
                    host: { 'data-slot': 'select-separator' },
                }]
        }], ctorParameters: () => [] });

class HlmSelectTrigger {
    static _id = 0;
    userClass = input('', { ...(ngDevMode ? { debugName: "userClass" } : /* istanbul ignore next */ {}), alias: 'class' });
    _computedClass = computed(() => hlm('border-input data-placeholder:text-muted-foreground bg-input/30 dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-ring/50 data-[matches-spartan-invalid=true]:ring-destructive/20 dark:data-[matches-spartan-invalid=true]:ring-destructive/40 data-[matches-spartan-invalid=true]:border-destructive dark:data-[matches-spartan-invalid=true]:border-destructive/50 gap-1.5 rounded-4xl border px-3 py-2 text-sm transition-colors focus-visible:ring-3 data-[matches-spartan-invalid=true]:ring-3 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:gap-1.5 flex w-fit items-center justify-between whitespace-nowrap outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center [&_ng-icon]:pointer-events-none [&_ng-icon]:shrink-0', this.userClass()), ...(ngDevMode ? [{ debugName: "_computedClass" }] : /* istanbul ignore next */ []));
    buttonId = input(`hlm-select-trigger-${HlmSelectTrigger._id++}`, ...(ngDevMode ? [{ debugName: "buttonId" }] : /* istanbul ignore next */ []));
    size = input('default', ...(ngDevMode ? [{ debugName: "size" }] : /* istanbul ignore next */ []));
    /** Whether to force the trigger into an invalid state. */
    forceInvalid = input(false, { ...(ngDevMode ? { debugName: "forceInvalid" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSelectTrigger, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "21.2.11", type: HlmSelectTrigger, isStandalone: true, selector: "hlm-select-trigger", inputs: { userClass: { classPropertyName: "userClass", publicName: "class", isSignal: true, isRequired: false, transformFunction: null }, buttonId: { classPropertyName: "buttonId", publicName: "buttonId", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, forceInvalid: { classPropertyName: "forceInvalid", publicName: "forceInvalid", isSignal: true, isRequired: false, transformFunction: null } }, providers: [provideIcons({ lucideChevronDown })], ngImport: i0, template: `
    <button
      brnSelectTrigger
      brnFieldControlDescribedBy
      [forceInvalid]="forceInvalid()"
      [id]="buttonId()"
      [class]="_computedClass()"
      [attr.data-size]="size()"
      data-slot="select-trigger"
    >
      <ng-content />
      <ng-icon name="lucideChevronDown" class="text-muted-foreground text-[length:--spacing(4)] ms-auto" />
    </button>
  `, isInline: true, dependencies: [{ kind: "component", type: NgIcon, selector: "ng-icon", inputs: ["name", "svg", "size", "strokeWidth", "color"] }, { kind: "directive", type: BrnSelectTrigger, selector: "button[brnSelectTrigger]", inputs: ["id", "forceInvalid"] }, { kind: "directive", type: BrnFieldControlDescribedBy, selector: "[brnFieldControlDescribedBy]", inputs: ["aria-describedby"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSelectTrigger, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-select-trigger',
                    imports: [NgIcon, BrnSelectTrigger, BrnFieldControlDescribedBy],
                    providers: [provideIcons({ lucideChevronDown })],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: `
    <button
      brnSelectTrigger
      brnFieldControlDescribedBy
      [forceInvalid]="forceInvalid()"
      [id]="buttonId()"
      [class]="_computedClass()"
      [attr.data-size]="size()"
      data-slot="select-trigger"
    >
      <ng-content />
      <ng-icon name="lucideChevronDown" class="text-muted-foreground text-[length:--spacing(4)] ms-auto" />
    </button>
  `,
                }]
        }], propDecorators: { userClass: [{ type: i0.Input, args: [{ isSignal: true, alias: "class", required: false }] }], buttonId: [{ type: i0.Input, args: [{ isSignal: true, alias: "buttonId", required: false }] }], size: [{ type: i0.Input, args: [{ isSignal: true, alias: "size", required: false }] }], forceInvalid: [{ type: i0.Input, args: [{ isSignal: true, alias: "forceInvalid", required: false }] }] } });

class HlmSelectValue {
    _brnSelectValue = inject(BrnSelectValue);
    _hidden = this._brnSelectValue.hidden;
    constructor() {
        classes(() => 'data-hidden:hidden');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSelectValue, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSelectValue, isStandalone: true, selector: "[hlmSelectValue],hlm-select-value", host: { properties: { "attr.data-slot": "!_hidden() ? \"select-value\" : null" } }, hostDirectives: [{ directive: i1.BrnSelectValue, inputs: ["placeholder", "placeholder"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSelectValue, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmSelectValue],hlm-select-value',
                    hostDirectives: [{ directive: BrnSelectValue, inputs: ['placeholder'] }],
                    host: { '[attr.data-slot]': '!_hidden() ? "select-value" : null' },
                }]
        }], ctorParameters: () => [] });

class HlmSelectValueTemplate {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSelectValueTemplate, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSelectValueTemplate, isStandalone: true, selector: "[hlmSelectValueTemplate]", hostDirectives: [{ directive: i1.BrnSelectValueTemplate }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSelectValueTemplate, decorators: [{
            type: Directive,
            args: [{ selector: '[hlmSelectValueTemplate]', hostDirectives: [BrnSelectValueTemplate] }]
        }] });

class HlmSelectValues {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSelectValues, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSelectValues, isStandalone: true, selector: "[hlmSelectValues]", hostDirectives: [{ directive: i1.BrnSelectValues }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSelectValues, decorators: [{
            type: Directive,
            args: [{ selector: '[hlmSelectValues]', hostDirectives: [BrnSelectValues] }]
        }] });

class HlmSelectValuesContent {
    constructor() {
        classes(() => 'gap-2 flex');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSelectValuesContent, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmSelectValuesContent, isStandalone: true, selector: "[hlmSelectValuesContent],hlm-select-values-content", ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmSelectValuesContent, decorators: [{
            type: Directive,
            args: [{ selector: '[hlmSelectValuesContent],hlm-select-values-content' }]
        }], ctorParameters: () => [] });

const HlmSelectImports = [
    HlmSelect,
    HlmSelectContent,
    HlmSelectGroup,
    HlmSelectItem,
    HlmSelectLabel,
    HlmSelectMultiple,
    HlmSelectPlaceholder,
    HlmSelectPortal,
    HlmSelectScrollDown,
    HlmSelectScrollUp,
    HlmSelectSeparator,
    HlmSelectTrigger,
    HlmSelectValue,
    HlmSelectValues,
    HlmSelectValuesContent,
    HlmSelectValueTemplate,
];

/**
 * Generated bundle index. Do not edit.
 */

export { HlmSelect, HlmSelectContent, HlmSelectGroup, HlmSelectImports, HlmSelectItem, HlmSelectLabel, HlmSelectMultiple, HlmSelectPlaceholder, HlmSelectPortal, HlmSelectScrollDown, HlmSelectScrollUp, HlmSelectSeparator, HlmSelectTrigger, HlmSelectValue, HlmSelectValueTemplate, HlmSelectValues, HlmSelectValuesContent };
//# sourceMappingURL=gosamply-ui-select.mjs.map
