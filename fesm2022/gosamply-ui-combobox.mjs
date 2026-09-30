import * as i0 from '@angular/core';
import { Directive, input, booleanAttribute, ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import * as i1 from '@spartan-ng/brain/combobox';
import { BrnCombobox, BrnComboboxChipRemove, BrnComboboxChip, BrnComboboxChipInput, injectBrnComboboxBase, BrnComboboxAnchor, BrnComboboxPopoverTrigger, BrnComboboxContent, BrnComboboxEmpty, BrnComboboxGroup, BrnComboboxImports, BrnComboboxItem, BrnComboboxLabel, BrnComboboxList, BrnComboboxMultiple, BrnComboboxPlaceholder, BrnComboboxSeparator, BrnComboboxStatus, BrnComboboxTrigger, BrnComboboxValue, BrnComboboxValueTemplate, BrnComboboxValues } from '@spartan-ng/brain/combobox';
import * as i2 from '@spartan-ng/brain/popover';
import { provideBrnPopoverConfig, provideBrnPopoverDefaultOptions, BrnPopover, BrnPopoverContent } from '@spartan-ng/brain/popover';
import { classes, hlm } from '@gosamply/ui/utils';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX, lucideChevronDown, lucideCheck } from '@ng-icons/lucide';
import { buttonVariants, HlmButton } from '@gosamply/ui/button';
import * as i2$1 from '@gosamply/ui/input-group';
import { HlmInputGroup, HlmInputGroupImports } from '@gosamply/ui/input-group';
import { BrnFieldControlDescribedBy } from '@spartan-ng/brain/field';

class HlmCombobox {
    constructor() {
        classes(() => 'block');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmCombobox, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmCombobox, isStandalone: true, selector: "[hlmCombobox],hlm-combobox", host: { attributes: { "data-slot": "combobox" } }, providers: [
            provideBrnPopoverConfig({
                align: 'start',
                sideOffset: 6,
            }),
            provideBrnPopoverDefaultOptions({ role: null }),
        ], hostDirectives: [{ directive: i1.BrnCombobox, inputs: ["autoHighlight", "autoHighlight", "closeOnSelect", "closeOnSelect", "disabled", "disabled", "filter", "filter", "search", "search", "value", "value", "itemToString", "itemToString", "filterOptions", "filterOptions", "isItemEqualToValue", "isItemEqualToValue"], outputs: ["searchChange", "searchChange", "valueChange", "valueChange"] }, { directive: i2.BrnPopover, inputs: ["align", "align", "closeOnOutsidePointerEvents", "closeOnOutsidePointerEvents", "sideOffset", "sideOffset", "state", "state", "offsetX", "offsetX", "scrollStrategy", "scrollStrategy"], outputs: ["stateChanged", "stateChanged", "closed", "closed"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmCombobox, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmCombobox],hlm-combobox',
                    providers: [
                        provideBrnPopoverConfig({
                            align: 'start',
                            sideOffset: 6,
                        }),
                        provideBrnPopoverDefaultOptions({ role: null }),
                    ],
                    hostDirectives: [
                        {
                            directive: BrnCombobox,
                            inputs: [
                                'autoHighlight',
                                'closeOnSelect',
                                'disabled',
                                'filter',
                                'search',
                                'value',
                                'itemToString',
                                'filterOptions',
                                'isItemEqualToValue',
                            ],
                            outputs: ['searchChange', 'valueChange'],
                        },
                        {
                            directive: BrnPopover,
                            inputs: ['align', 'closeOnOutsidePointerEvents', 'sideOffset', 'state', 'offsetX', 'scrollStrategy'],
                            outputs: ['stateChanged', 'closed'],
                        },
                    ],
                    host: { 'data-slot': 'combobox' },
                }]
        }], ctorParameters: () => [] });

class HlmComboboxChipRemove {
    constructor() {
        classes(() => ['-ms-1 opacity-50 hover:opacity-100', buttonVariants({ variant: 'ghost', size: 'icon-xs' })]);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxChipRemove, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmComboboxChipRemove, isStandalone: true, selector: "button[hlmComboboxChipRemove]", host: { attributes: { "data-slot": "combobox-chip-remove" } }, hostDirectives: [{ directive: i1.BrnComboboxChipRemove }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxChipRemove, decorators: [{
            type: Directive,
            args: [{
                    selector: 'button[hlmComboboxChipRemove]',
                    hostDirectives: [BrnComboboxChipRemove],
                    host: { 'data-slot': 'combobox-chip-remove' },
                }]
        }], ctorParameters: () => [] });

class HlmComboboxChip {
    showRemove = input(true, { ...(ngDevMode ? { debugName: "showRemove" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    constructor() {
        classes(() => 'bg-muted-foreground/10 text-foreground flex h-[calc(--spacing(5.5))] w-fit items-center justify-center gap-1 rounded-4xl px-2 text-xs font-medium whitespace-nowrap has-data-[slot=combobox-chip-remove]:pe-0 has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxChip, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.11", type: HlmComboboxChip, isStandalone: true, selector: "hlm-combobox-chip", inputs: { showRemove: { classPropertyName: "showRemove", publicName: "showRemove", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "data-slot": "combobox-chip" } }, providers: [provideIcons({ lucideX })], hostDirectives: [{ directive: i1.BrnComboboxChip, inputs: ["value", "value"] }], ngImport: i0, template: `
    <ng-content />

    @if (showRemove()) {
      <button hlmComboboxChipRemove>
        <ng-icon name="lucideX" />
      </button>
    }
  `, isInline: true, dependencies: [{ kind: "component", type: NgIcon, selector: "ng-icon", inputs: ["name", "svg", "size", "strokeWidth", "color"] }, { kind: "directive", type: HlmComboboxChipRemove, selector: "button[hlmComboboxChipRemove]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxChip, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-combobox-chip',
                    imports: [NgIcon, HlmComboboxChipRemove],
                    providers: [provideIcons({ lucideX })],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    hostDirectives: [{ directive: BrnComboboxChip, inputs: ['value'] }],
                    host: { 'data-slot': 'combobox-chip' },
                    template: `
    <ng-content />

    @if (showRemove()) {
      <button hlmComboboxChipRemove>
        <ng-icon name="lucideX" />
      </button>
    }
  `,
                }]
        }], ctorParameters: () => [], propDecorators: { showRemove: [{ type: i0.Input, args: [{ isSignal: true, alias: "showRemove", required: false }] }] } });

class HlmComboboxChipInput {
    constructor() {
        classes(() => 'placeholder:text-muted-foreground min-w-16 flex-1 outline-none');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxChipInput, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmComboboxChipInput, isStandalone: true, selector: "input[hlmComboboxChipInput]", host: { attributes: { "data-slot": "combobox-chip-input" } }, hostDirectives: [{ directive: i1.BrnComboboxChipInput, inputs: ["id", "id", "aria-invalid", "aria-invalid"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxChipInput, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[hlmComboboxChipInput]',
                    hostDirectives: [{ directive: BrnComboboxChipInput, inputs: ['id', 'aria-invalid'] }],
                    host: { 'data-slot': 'combobox-chip-input' },
                }]
        }], ctorParameters: () => [] });

class HlmComboboxChips {
    _combobox = injectBrnComboboxBase();
    forceInvalid = input(false, { ...(ngDevMode ? { debugName: "forceInvalid" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    _spartanInvalid = computed(() => this.forceInvalid() || this._combobox.controlState?.()?.spartanInvalid, ...(ngDevMode ? [{ debugName: "_spartanInvalid" }] : /* istanbul ignore next */ []));
    constructor() {
        classes(() => 'bg-input/30 border-input focus-within:border-ring focus-within:ring-ring/50 data-[matches-spartan-invalid=true]:ring-destructive/20 dark:data-[matches-spartan-invalid=true]:ring-destructive/40 data-[matches-spartan-invalid=true]:border-destructive dark:data-[matches-spartan-invalid=true]:border-destructive/50 flex min-h-9 flex-wrap items-center gap-1.5 rounded-4xl border bg-clip-padding px-2.5 py-1.5 text-sm shadow-xs transition-[color,box-shadow] focus-within:ring-[3px] has-data-[slot=combobox-chip]:px-1.5 data-[matches-spartan-invalid=true]:ring-[3px]');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxChips, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.11", type: HlmComboboxChips, isStandalone: true, selector: "[hlmComboboxChips],hlm-combobox-chips", inputs: { forceInvalid: { classPropertyName: "forceInvalid", publicName: "forceInvalid", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "data-slot": "combobox-chips" }, properties: { "attr.data-matches-spartan-invalid": "_spartanInvalid() ? \"true\" : null" } }, hostDirectives: [{ directive: i1.BrnComboboxAnchor }, { directive: i1.BrnComboboxPopoverTrigger }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxChips, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmComboboxChips],hlm-combobox-chips',
                    hostDirectives: [BrnComboboxAnchor, BrnComboboxPopoverTrigger],
                    host: {
                        'data-slot': 'combobox-chips',
                        '[attr.data-matches-spartan-invalid]': '_spartanInvalid() ? "true" : null',
                    },
                }]
        }], ctorParameters: () => [], propDecorators: { forceInvalid: [{ type: i0.Input, args: [{ isSignal: true, alias: "forceInvalid", required: false }] }] } });

class HlmComboboxContent {
    constructor() {
        classes(() => [
            'bg-popover text-popover-foreground data-open:animate-in **:has-[[data-slot=input-group-control]:focus-visible]:border-input data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/5 **:data-[slot=input-group]:bg-input/30 max-h-72 min-w-36 overflow-hidden rounded-2xl shadow-2xl ring-1 duration-100 **:has-[[data-slot=input-group-control]:focus-visible]:ring-0 **:data-[slot=input-group]:m-1 **:data-[slot=input-group]:mb-0 **:data-[slot=input-group]:h-9 **:data-[slot=input-group]:border-none **:data-[slot=input-group]:shadow-none group/combobox-content relative flex w-(--brn-combobox-width) flex-col p-0',
        ]);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxContent, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmComboboxContent, isStandalone: true, selector: "[hlmComboboxContent],hlm-combobox-content", hostDirectives: [{ directive: i1.BrnComboboxContent }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxContent, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmComboboxContent],hlm-combobox-content',
                    hostDirectives: [BrnComboboxContent],
                }]
        }], ctorParameters: () => [] });

class HlmComboboxEmpty {
    constructor() {
        classes(() => 'text-muted-foreground hidden w-full items-center justify-center py-2 text-center text-sm group-data-empty/combobox-content:flex');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxEmpty, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmComboboxEmpty, isStandalone: true, selector: "[hlmComboboxEmpty],hlm-combobox-empty", host: { attributes: { "data-slot": "combobox-empty" } }, hostDirectives: [{ directive: i1.BrnComboboxEmpty }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxEmpty, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmComboboxEmpty],hlm-combobox-empty',
                    hostDirectives: [BrnComboboxEmpty],
                    host: { 'data-slot': 'combobox-empty' },
                }]
        }], ctorParameters: () => [] });

class HlmComboboxGroup {
    constructor() {
        classes(() => 'data-hidden:hidden');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxGroup, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmComboboxGroup, isStandalone: true, selector: "[hlmComboboxGroup]", host: { attributes: { "data-slot": "combobox-group" } }, hostDirectives: [{ directive: i1.BrnComboboxGroup }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxGroup, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmComboboxGroup]',
                    hostDirectives: [BrnComboboxGroup],
                    host: { 'data-slot': 'combobox-group' },
                }]
        }], ctorParameters: () => [] });

class HlmComboboxInput {
    static _id = 0;
    inputId = input(`hlm-combobox-input-${HlmComboboxInput._id++}`, ...(ngDevMode ? [{ debugName: "inputId" }] : /* istanbul ignore next */ []));
    placeholder = input('', ...(ngDevMode ? [{ debugName: "placeholder" }] : /* istanbul ignore next */ []));
    showTrigger = input(true, { ...(ngDevMode ? { debugName: "showTrigger" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    showClear = input(false, { ...(ngDevMode ? { debugName: "showClear" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    forceInvalid = input(false, { ...(ngDevMode ? { debugName: "forceInvalid" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    /** Accessible name for the icon-only popover trigger button. */
    triggerAriaLabel = input('Toggle options', ...(ngDevMode ? [{ debugName: "triggerAriaLabel" }] : /* istanbul ignore next */ []));
    /** Accessible name for the icon-only clear button. */
    clearAriaLabel = input('Clear selection', ...(ngDevMode ? [{ debugName: "clearAriaLabel" }] : /* istanbul ignore next */ []));
    /** Manual override for aria-invalid. When not set, auto-detects from the parent combobox error state. */
    ariaInvalidOverride = input(undefined, { ...(ngDevMode ? { debugName: "ariaInvalidOverride" } : /* istanbul ignore next */ {}), transform: (v) => (v === '' || v === undefined ? undefined : booleanAttribute(v)),
        alias: 'aria-invalid' });
    constructor() {
        classes(() => 'w-auto');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxInput, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.11", type: HlmComboboxInput, isStandalone: true, selector: "hlm-combobox-input", inputs: { inputId: { classPropertyName: "inputId", publicName: "inputId", isSignal: true, isRequired: false, transformFunction: null }, placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null }, showTrigger: { classPropertyName: "showTrigger", publicName: "showTrigger", isSignal: true, isRequired: false, transformFunction: null }, showClear: { classPropertyName: "showClear", publicName: "showClear", isSignal: true, isRequired: false, transformFunction: null }, forceInvalid: { classPropertyName: "forceInvalid", publicName: "forceInvalid", isSignal: true, isRequired: false, transformFunction: null }, triggerAriaLabel: { classPropertyName: "triggerAriaLabel", publicName: "triggerAriaLabel", isSignal: true, isRequired: false, transformFunction: null }, clearAriaLabel: { classPropertyName: "clearAriaLabel", publicName: "clearAriaLabel", isSignal: true, isRequired: false, transformFunction: null }, ariaInvalidOverride: { classPropertyName: "ariaInvalidOverride", publicName: "aria-invalid", isSignal: true, isRequired: false, transformFunction: null } }, providers: [provideIcons({ lucideChevronDown, lucideX })], hostDirectives: [{ directive: i1.BrnComboboxAnchor }, { directive: i2$1.HlmInputGroup }], ngImport: i0, template: `
    <input
      brnComboboxInput
      #comboboxInput="brnComboboxInput"
      brnComboboxPopoverTrigger
      [closeOnTriggerClick]="false"
      hlmInputGroupInput
      [id]="inputId()"
      [placeholder]="placeholder()"
      [forceInvalid]="forceInvalid()"
      [aria-invalid]="ariaInvalidOverride()"
    />

    <hlm-input-group-addon align="inline-end">
      @if (showTrigger()) {
        <button
          brnComboboxPopoverTrigger
          hlmInputGroupButton
          data-slot="input-group-button"
          [disabled]="comboboxInput.disabled()"
          [attr.aria-label]="triggerAriaLabel()"
          size="icon-xs"
          variant="ghost"
          class="group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent"
        >
          <ng-icon name="lucideChevronDown" />
        </button>
      }

      @if (showClear()) {
        <button
          *brnComboboxClear
          hlmInputGroupButton
          data-slot="combobox-clear"
          [disabled]="comboboxInput.disabled()"
          [attr.aria-label]="clearAriaLabel()"
          size="icon-xs"
          variant="ghost"
        >
          <ng-icon name="lucideX" />
        </button>
      }
    </hlm-input-group-addon>

    <ng-content />
  `, isInline: true, dependencies: [{ kind: "directive", type: i2$1.HlmInputGroupAddon, selector: "[hlmInputGroupAddon],hlm-input-group-addon", inputs: ["align"] }, { kind: "directive", type: i2$1.HlmInputGroupButton, selector: "button[hlmInputGroupButton]", inputs: ["size", "type"] }, { kind: "directive", type: i2$1.HlmInputGroupInput, selector: "input[hlmInputGroupInput]" }, { kind: "component", type: NgIcon, selector: "ng-icon", inputs: ["name", "svg", "size", "strokeWidth", "color"] }, { kind: "directive", type: i1.BrnComboboxClear, selector: "[brnComboboxClear]" }, { kind: "directive", type: i1.BrnComboboxInput, selector: "input[brnComboboxInput]", inputs: ["id", "aria-invalid", "forceInvalid"], exportAs: ["brnComboboxInput"] }, { kind: "directive", type: i1.BrnComboboxPopoverTrigger, selector: "[brnComboboxPopoverTrigger]", inputs: ["closeOnTriggerClick"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxInput, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-combobox-input',
                    imports: [HlmInputGroupImports, NgIcon, BrnComboboxImports, BrnComboboxPopoverTrigger],
                    providers: [provideIcons({ lucideChevronDown, lucideX })],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    hostDirectives: [BrnComboboxAnchor, HlmInputGroup],
                    template: `
    <input
      brnComboboxInput
      #comboboxInput="brnComboboxInput"
      brnComboboxPopoverTrigger
      [closeOnTriggerClick]="false"
      hlmInputGroupInput
      [id]="inputId()"
      [placeholder]="placeholder()"
      [forceInvalid]="forceInvalid()"
      [aria-invalid]="ariaInvalidOverride()"
    />

    <hlm-input-group-addon align="inline-end">
      @if (showTrigger()) {
        <button
          brnComboboxPopoverTrigger
          hlmInputGroupButton
          data-slot="input-group-button"
          [disabled]="comboboxInput.disabled()"
          [attr.aria-label]="triggerAriaLabel()"
          size="icon-xs"
          variant="ghost"
          class="group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent"
        >
          <ng-icon name="lucideChevronDown" />
        </button>
      }

      @if (showClear()) {
        <button
          *brnComboboxClear
          hlmInputGroupButton
          data-slot="combobox-clear"
          [disabled]="comboboxInput.disabled()"
          [attr.aria-label]="clearAriaLabel()"
          size="icon-xs"
          variant="ghost"
        >
          <ng-icon name="lucideX" />
        </button>
      }
    </hlm-input-group-addon>

    <ng-content />
  `,
                }]
        }], ctorParameters: () => [], propDecorators: { inputId: [{ type: i0.Input, args: [{ isSignal: true, alias: "inputId", required: false }] }], placeholder: [{ type: i0.Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], showTrigger: [{ type: i0.Input, args: [{ isSignal: true, alias: "showTrigger", required: false }] }], showClear: [{ type: i0.Input, args: [{ isSignal: true, alias: "showClear", required: false }] }], forceInvalid: [{ type: i0.Input, args: [{ isSignal: true, alias: "forceInvalid", required: false }] }], triggerAriaLabel: [{ type: i0.Input, args: [{ isSignal: true, alias: "triggerAriaLabel", required: false }] }], clearAriaLabel: [{ type: i0.Input, args: [{ isSignal: true, alias: "clearAriaLabel", required: false }] }], ariaInvalidOverride: [{ type: i0.Input, args: [{ isSignal: true, alias: "aria-invalid", required: false }] }] } });

class HlmComboboxItem {
    _brnComboboxItem = inject(BrnComboboxItem);
    _active = this._brnComboboxItem.active;
    constructor() {
        classes(() => 'data-highlighted:bg-accent data-highlighted:text-accent-foreground not-data-[variant=destructive]:data-highlighted:**:text-accent-foreground gap-2.5 rounded-xl py-2 ps-3 pe-8 text-sm relative flex w-full cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-hidden:hidden [&_ng-icon]:pointer-events-none [&_ng-icon]:shrink-0');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxItem, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.11", type: HlmComboboxItem, isStandalone: true, selector: "hlm-combobox-item", host: { attributes: { "data-slot": "combobox-item" } }, providers: [provideIcons({ lucideCheck })], hostDirectives: [{ directive: i1.BrnComboboxItem, inputs: ["id", "id", "disabled", "disabled", "value", "value"] }], ngImport: i0, template: `
    <ng-content />
    @if (_active()) {
      <ng-icon
        name="lucideCheck"
        class="pointer-events-none absolute end-2 flex items-center justify-center text-[length:--spacing(4)]"
        aria-hidden="true"
      />
    }
  `, isInline: true, dependencies: [{ kind: "component", type: NgIcon, selector: "ng-icon", inputs: ["name", "svg", "size", "strokeWidth", "color"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-combobox-item',
                    imports: [NgIcon],
                    providers: [provideIcons({ lucideCheck })],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    hostDirectives: [{ directive: BrnComboboxItem, inputs: ['id', 'disabled', 'value'] }],
                    host: { 'data-slot': 'combobox-item' },
                    template: `
    <ng-content />
    @if (_active()) {
      <ng-icon
        name="lucideCheck"
        class="pointer-events-none absolute end-2 flex items-center justify-center text-[length:--spacing(4)]"
        aria-hidden="true"
      />
    }
  `,
                }]
        }], ctorParameters: () => [] });

class HlmComboboxLabel {
    constructor() {
        classes(() => 'text-muted-foreground px-3.5 py-2.5 text-xs');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxLabel, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmComboboxLabel, isStandalone: true, selector: "[hlmComboboxLabel]", host: { attributes: { "data-slot": "combobox-label" } }, hostDirectives: [{ directive: i1.BrnComboboxLabel, inputs: ["id", "id"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxLabel, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmComboboxLabel]',
                    hostDirectives: [{ directive: BrnComboboxLabel, inputs: ['id'] }],
                    host: { 'data-slot': 'combobox-label' },
                }]
        }], ctorParameters: () => [] });

class HlmComboboxList {
    constructor() {
        classes(() => 'no-scrollbar max-h-[calc(--spacing(72)---spacing(9))] scroll-py-1 p-1 data-empty:p-0 overflow-y-auto overscroll-contain');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxList, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmComboboxList, isStandalone: true, selector: "[hlmComboboxList]", host: { attributes: { "data-slot": "combobox-list" } }, hostDirectives: [{ directive: i1.BrnComboboxList, inputs: ["id", "id"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxList, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmComboboxList]',
                    hostDirectives: [{ directive: BrnComboboxList, inputs: ['id'] }],
                    host: { 'data-slot': 'combobox-list' },
                }]
        }], ctorParameters: () => [] });

class HlmComboboxMultiple {
    constructor() {
        classes(() => 'block');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxMultiple, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmComboboxMultiple, isStandalone: true, selector: "[hlmComboboxMultiple],hlm-combobox-multiple", host: { attributes: { "data-slot": "combobox" } }, providers: [
            provideBrnPopoverConfig({
                align: 'start',
                sideOffset: 6,
            }),
            provideBrnPopoverDefaultOptions({ role: null }),
        ], hostDirectives: [{ directive: i1.BrnComboboxMultiple, inputs: ["autoHighlight", "autoHighlight", "closeOnSelect", "closeOnSelect", "disabled", "disabled", "filter", "filter", "search", "search", "value", "value", "itemToString", "itemToString", "filterOptions", "filterOptions", "isItemEqualToValue", "isItemEqualToValue"], outputs: ["searchChange", "searchChange", "valueChange", "valueChange"] }, { directive: i2.BrnPopover, inputs: ["align", "align", "closeOnOutsidePointerEvents", "closeOnOutsidePointerEvents", "sideOffset", "sideOffset", "state", "state", "offsetX", "offsetX", "scrollStrategy", "scrollStrategy"], outputs: ["stateChanged", "stateChanged", "closed", "closed"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxMultiple, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmComboboxMultiple],hlm-combobox-multiple',
                    providers: [
                        provideBrnPopoverConfig({
                            align: 'start',
                            sideOffset: 6,
                        }),
                        provideBrnPopoverDefaultOptions({ role: null }),
                    ],
                    hostDirectives: [
                        {
                            directive: BrnComboboxMultiple,
                            inputs: [
                                'autoHighlight',
                                'closeOnSelect',
                                'disabled',
                                'filter',
                                'search',
                                'value',
                                'itemToString',
                                'filterOptions',
                                'isItemEqualToValue',
                            ],
                            outputs: ['searchChange', 'valueChange'],
                        },
                        {
                            directive: BrnPopover,
                            inputs: ['align', 'closeOnOutsidePointerEvents', 'sideOffset', 'state', 'offsetX', 'scrollStrategy'],
                            outputs: ['stateChanged', 'closed'],
                        },
                    ],
                    host: { 'data-slot': 'combobox' },
                }]
        }], ctorParameters: () => [] });

class HlmComboboxPlaceholder {
    constructor() {
        classes(() => "gap-2 [&_ng-icon:not([class*='text-'])]:text-[length:--spacing(4)] flex items-center data-hidden:hidden [&_ng-icon]:pointer-events-none [&_ng-icon]:shrink-0");
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxPlaceholder, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmComboboxPlaceholder, isStandalone: true, selector: "[hlmComboboxPlaceholder],hlm-combobox-placeholder", host: { attributes: { "data-slot": "combobox-placeholder" } }, hostDirectives: [{ directive: i1.BrnComboboxPlaceholder }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxPlaceholder, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmComboboxPlaceholder],hlm-combobox-placeholder',
                    hostDirectives: [BrnComboboxPlaceholder],
                    host: { 'data-slot': 'combobox-placeholder' },
                }]
        }], ctorParameters: () => [] });

class HlmComboboxPortal {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxPortal, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmComboboxPortal, isStandalone: true, selector: "[hlmComboboxPortal]", hostDirectives: [{ directive: i2.BrnPopoverContent, inputs: ["context", "context", "class", "class"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxPortal, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmComboboxPortal]',
                    hostDirectives: [{ directive: BrnPopoverContent, inputs: ['context', 'class'] }],
                }]
        }] });

class HlmComboboxSeparator {
    constructor() {
        classes(() => 'bg-border/50 -mx-1 my-1 h-px');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxSeparator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmComboboxSeparator, isStandalone: true, selector: "[hlmComboboxSeparator]", host: { attributes: { "data-slot": "combobox-separator" } }, hostDirectives: [{ directive: i1.BrnComboboxSeparator, inputs: ["orientation", "orientation"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxSeparator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmComboboxSeparator]',
                    hostDirectives: [{ directive: BrnComboboxSeparator, inputs: ['orientation'] }],
                    host: { 'data-slot': 'combobox-separator' },
                }]
        }], ctorParameters: () => [] });

class HlmComboboxStatus {
    constructor() {
        classes(() => 'text-muted-foreground gap-2 px-4 py-2 text-sm flex w-full items-center justify-center text-center');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxStatus, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmComboboxStatus, isStandalone: true, selector: "[hlmComboboxStatus],hlm-combobox-status", host: { attributes: { "data-slot": "combobox-status" } }, hostDirectives: [{ directive: i1.BrnComboboxStatus }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxStatus, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmComboboxStatus],hlm-combobox-status',
                    hostDirectives: [BrnComboboxStatus],
                    host: { 'data-slot': 'combobox-status' },
                }]
        }], ctorParameters: () => [] });

class HlmComboboxTrigger {
    static _id = 0;
    userClass = input('', { ...(ngDevMode ? { debugName: "userClass" } : /* istanbul ignore next */ {}), alias: 'class' });
    _computedClass = computed(() => hlm('data-placeholder:text-muted-foreground', this.userClass()), ...(ngDevMode ? [{ debugName: "_computedClass" }] : /* istanbul ignore next */ []));
    buttonId = input(`hlm-combobox-trigger-${HlmComboboxTrigger._id++}`, ...(ngDevMode ? [{ debugName: "buttonId" }] : /* istanbul ignore next */ []));
    variant = input('outline', ...(ngDevMode ? [{ debugName: "variant" }] : /* istanbul ignore next */ []));
    forceInvalid = input(false, { ...(ngDevMode ? { debugName: "forceInvalid" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxTrigger, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "21.2.11", type: HlmComboboxTrigger, isStandalone: true, selector: "hlm-combobox-trigger", inputs: { userClass: { classPropertyName: "userClass", publicName: "class", isSignal: true, isRequired: false, transformFunction: null }, buttonId: { classPropertyName: "buttonId", publicName: "buttonId", isSignal: true, isRequired: false, transformFunction: null }, variant: { classPropertyName: "variant", publicName: "variant", isSignal: true, isRequired: false, transformFunction: null }, forceInvalid: { classPropertyName: "forceInvalid", publicName: "forceInvalid", isSignal: true, isRequired: false, transformFunction: null } }, providers: [provideIcons({ lucideChevronDown })], ngImport: i0, template: `
    <button
      brnComboboxTrigger
      brnComboboxAnchor
      brnComboboxPopoverTrigger
      brnFieldControlDescribedBy
      hlmBtn
      data-slot="combobox-trigger"
      [id]="buttonId()"
      [class]="_computedClass()"
      [variant]="variant()"
      [forceInvalid]="forceInvalid()"
    >
      <ng-content />
      <ng-icon name="lucideChevronDown" class="text-muted-foreground text-[length:--spacing(4)]" />
    </button>
  `, isInline: true, dependencies: [{ kind: "component", type: NgIcon, selector: "ng-icon", inputs: ["name", "svg", "size", "strokeWidth", "color"] }, { kind: "directive", type: HlmButton, selector: "button[hlmBtn], a[hlmBtn]", inputs: ["variant", "size"], exportAs: ["hlmBtn"] }, { kind: "directive", type: BrnComboboxAnchor, selector: "[brnComboboxAnchor]" }, { kind: "directive", type: BrnComboboxTrigger, selector: "button[brnComboboxTrigger]", inputs: ["forceInvalid"] }, { kind: "directive", type: BrnComboboxPopoverTrigger, selector: "[brnComboboxPopoverTrigger]", inputs: ["closeOnTriggerClick"] }, { kind: "directive", type: BrnFieldControlDescribedBy, selector: "[brnFieldControlDescribedBy]", inputs: ["aria-describedby"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxTrigger, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-combobox-trigger',
                    imports: [NgIcon, HlmButton, BrnComboboxAnchor, BrnComboboxTrigger, BrnComboboxPopoverTrigger, BrnFieldControlDescribedBy],
                    providers: [provideIcons({ lucideChevronDown })],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: `
    <button
      brnComboboxTrigger
      brnComboboxAnchor
      brnComboboxPopoverTrigger
      brnFieldControlDescribedBy
      hlmBtn
      data-slot="combobox-trigger"
      [id]="buttonId()"
      [class]="_computedClass()"
      [variant]="variant()"
      [forceInvalid]="forceInvalid()"
    >
      <ng-content />
      <ng-icon name="lucideChevronDown" class="text-muted-foreground text-[length:--spacing(4)]" />
    </button>
  `,
                }]
        }], propDecorators: { userClass: [{ type: i0.Input, args: [{ isSignal: true, alias: "class", required: false }] }], buttonId: [{ type: i0.Input, args: [{ isSignal: true, alias: "buttonId", required: false }] }], variant: [{ type: i0.Input, args: [{ isSignal: true, alias: "variant", required: false }] }], forceInvalid: [{ type: i0.Input, args: [{ isSignal: true, alias: "forceInvalid", required: false }] }] } });

class HlmComboboxValue {
    constructor() {
        classes(() => 'data-hidden:hidden');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxValue, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmComboboxValue, isStandalone: true, selector: "[hlmComboboxValue],hlm-combobox-value", host: { attributes: { "data-slot": "combobox-value" } }, hostDirectives: [{ directive: i1.BrnComboboxValue, inputs: ["placeholder", "placeholder"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxValue, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmComboboxValue],hlm-combobox-value',
                    hostDirectives: [{ directive: BrnComboboxValue, inputs: ['placeholder'] }],
                    host: { 'data-slot': 'combobox-value' },
                }]
        }], ctorParameters: () => [] });

class HlmComboboxValueTemplate {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxValueTemplate, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmComboboxValueTemplate, isStandalone: true, selector: "[hlmComboboxValueTemplate]", hostDirectives: [{ directive: i1.BrnComboboxValueTemplate }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxValueTemplate, decorators: [{
            type: Directive,
            args: [{ selector: '[hlmComboboxValueTemplate]', hostDirectives: [BrnComboboxValueTemplate] }]
        }] });

class HlmComboboxValues {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxValues, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmComboboxValues, isStandalone: true, selector: "[hlmComboboxValues]", hostDirectives: [{ directive: i1.BrnComboboxValues }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmComboboxValues, decorators: [{
            type: Directive,
            args: [{ selector: '[hlmComboboxValues]', hostDirectives: [BrnComboboxValues] }]
        }] });

const HlmComboboxImports = [
    HlmCombobox,
    HlmComboboxChip,
    HlmComboboxChipInput,
    HlmComboboxChips,
    HlmComboboxContent,
    HlmComboboxEmpty,
    HlmComboboxGroup,
    HlmComboboxInput,
    HlmComboboxItem,
    HlmComboboxLabel,
    HlmComboboxList,
    HlmComboboxMultiple,
    HlmComboboxPlaceholder,
    HlmComboboxPortal,
    HlmComboboxSeparator,
    HlmComboboxStatus,
    HlmComboboxTrigger,
    HlmComboboxValue,
    HlmComboboxValueTemplate,
    HlmComboboxValues,
];

/**
 * Generated bundle index. Do not edit.
 */

export { HlmCombobox, HlmComboboxChip, HlmComboboxChipInput, HlmComboboxChips, HlmComboboxContent, HlmComboboxEmpty, HlmComboboxGroup, HlmComboboxImports, HlmComboboxInput, HlmComboboxItem, HlmComboboxLabel, HlmComboboxList, HlmComboboxMultiple, HlmComboboxPlaceholder, HlmComboboxPortal, HlmComboboxSeparator, HlmComboboxStatus, HlmComboboxTrigger, HlmComboboxValue, HlmComboboxValueTemplate, HlmComboboxValues };
//# sourceMappingURL=gosamply-ui-combobox.mjs.map
