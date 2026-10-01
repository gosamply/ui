import * as i0 from '@angular/core';
import { input, booleanAttribute, numberAttribute, computed, ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideLoader2, lucideOctagonX, lucideTriangleAlert, lucideInfo, lucideCircleCheck } from '@ng-icons/lucide';
import * as i1 from '@spartan-ng/brain/sonner';
import { BrnSonnerImports } from '@spartan-ng/brain/sonner';
import { hlm } from '@gosamply/ui/utils';

class HlmToaster {
    invert = input(false, { ...(ngDevMode ? { debugName: "invert" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    theme = input('light', ...(ngDevMode ? [{ debugName: "theme" }] : /* istanbul ignore next */ []));
    position = input('bottom-right', ...(ngDevMode ? [{ debugName: "position" }] : /* istanbul ignore next */ []));
    hotKey = input(['altKey', 'KeyT'], ...(ngDevMode ? [{ debugName: "hotKey" }] : /* istanbul ignore next */ []));
    richColors = input(false, { ...(ngDevMode ? { debugName: "richColors" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    expand = input(false, { ...(ngDevMode ? { debugName: "expand" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    duration = input(4000, { ...(ngDevMode ? { debugName: "duration" } : /* istanbul ignore next */ {}), transform: numberAttribute });
    visibleToasts = input(3, { ...(ngDevMode ? { debugName: "visibleToasts" } : /* istanbul ignore next */ {}), transform: numberAttribute });
    closeButton = input(false, { ...(ngDevMode ? { debugName: "closeButton" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    toastOptions = input({}, ...(ngDevMode ? [{ debugName: "toastOptions" }] : /* istanbul ignore next */ []));
    _computedToastOptions = computed(() => {
        const options = this.toastOptions();
        return {
            ...options,
            classes: {
                ...options?.classes,
                toast: hlm('rounded-2xl!', options?.classes?.toast),
            },
        };
    }, ...(ngDevMode ? [{ debugName: "_computedToastOptions" }] : /* istanbul ignore next */ []));
    offset = input(null, ...(ngDevMode ? [{ debugName: "offset" }] : /* istanbul ignore next */ []));
    userClass = input('', { ...(ngDevMode ? { debugName: "userClass" } : /* istanbul ignore next */ {}), alias: 'class' });
    userStyle = input({
        '--normal-bg': 'var(--popover)',
        '--normal-text': 'var(--popover-foreground)',
        '--normal-border': 'var(--border)',
        '--border-radius': 'var(--radius)',
    }, { ...(ngDevMode ? { debugName: "userStyle" } : /* istanbul ignore next */ {}), alias: 'style' });
    _computedClass = computed(() => hlm('toaster group', this.userClass()), ...(ngDevMode ? [{ debugName: "_computedClass" }] : /* istanbul ignore next */ []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmToaster, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "21.2.11", type: HlmToaster, isStandalone: true, selector: "hlm-toaster", inputs: { invert: { classPropertyName: "invert", publicName: "invert", isSignal: true, isRequired: false, transformFunction: null }, theme: { classPropertyName: "theme", publicName: "theme", isSignal: true, isRequired: false, transformFunction: null }, position: { classPropertyName: "position", publicName: "position", isSignal: true, isRequired: false, transformFunction: null }, hotKey: { classPropertyName: "hotKey", publicName: "hotKey", isSignal: true, isRequired: false, transformFunction: null }, richColors: { classPropertyName: "richColors", publicName: "richColors", isSignal: true, isRequired: false, transformFunction: null }, expand: { classPropertyName: "expand", publicName: "expand", isSignal: true, isRequired: false, transformFunction: null }, duration: { classPropertyName: "duration", publicName: "duration", isSignal: true, isRequired: false, transformFunction: null }, visibleToasts: { classPropertyName: "visibleToasts", publicName: "visibleToasts", isSignal: true, isRequired: false, transformFunction: null }, closeButton: { classPropertyName: "closeButton", publicName: "closeButton", isSignal: true, isRequired: false, transformFunction: null }, toastOptions: { classPropertyName: "toastOptions", publicName: "toastOptions", isSignal: true, isRequired: false, transformFunction: null }, offset: { classPropertyName: "offset", publicName: "offset", isSignal: true, isRequired: false, transformFunction: null }, userClass: { classPropertyName: "userClass", publicName: "class", isSignal: true, isRequired: false, transformFunction: null }, userStyle: { classPropertyName: "userStyle", publicName: "style", isSignal: true, isRequired: false, transformFunction: null } }, providers: [provideIcons({ lucideCircleCheck, lucideInfo, lucideTriangleAlert, lucideOctagonX, lucideLoader2 })], ngImport: i0, template: `
    <brn-sonner-toaster
      [class]="_computedClass()"
      [invert]="invert()"
      [theme]="theme()"
      [position]="position()"
      [hotKey]="hotKey()"
      [richColors]="richColors()"
      [expand]="expand()"
      [duration]="duration()"
      [visibleToasts]="visibleToasts()"
      [closeButton]="closeButton()"
      [toastOptions]="_computedToastOptions()"
      [offset]="offset()"
      [style]="userStyle()"
    >
      <ng-template #loadingIcon>
        <ng-icon name="lucideLoader2" class="overflow-visible! text-base [&>svg]:motion-safe:animate-spin" />
      </ng-template>
      <ng-template #successIcon>
        <ng-icon name="lucideCircleCheck" class="overflow-visible! text-base" />
      </ng-template>
      <ng-template #errorIcon>
        <ng-icon name="lucideOctagonX" class="overflow-visible! text-base" />
      </ng-template>
      <ng-template #infoIcon>
        <ng-icon name="lucideInfo" class="overflow-visible! text-base" />
      </ng-template>
      <ng-template #warningIcon>
        <ng-icon name="lucideTriangleAlert" class="overflow-visible! text-base" />
      </ng-template>
    </brn-sonner-toaster>
  `, isInline: true, dependencies: [{ kind: "component", type: i1.BrnSonnerToaster, selector: "brn-sonner-toaster", inputs: ["invert", "theme", "position", "hotKey", "richColors", "expand", "duration", "visibleToasts", "closeButton", "toastOptions", "offset", "class", "style"] }, { kind: "component", type: NgIcon, selector: "ng-icon", inputs: ["name", "svg", "size", "strokeWidth", "color"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmToaster, decorators: [{
            type: Component,
            args: [{
                    selector: 'hlm-toaster',
                    imports: [BrnSonnerImports, NgIcon],
                    providers: [provideIcons({ lucideCircleCheck, lucideInfo, lucideTriangleAlert, lucideOctagonX, lucideLoader2 })],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: `
    <brn-sonner-toaster
      [class]="_computedClass()"
      [invert]="invert()"
      [theme]="theme()"
      [position]="position()"
      [hotKey]="hotKey()"
      [richColors]="richColors()"
      [expand]="expand()"
      [duration]="duration()"
      [visibleToasts]="visibleToasts()"
      [closeButton]="closeButton()"
      [toastOptions]="_computedToastOptions()"
      [offset]="offset()"
      [style]="userStyle()"
    >
      <ng-template #loadingIcon>
        <ng-icon name="lucideLoader2" class="overflow-visible! text-base [&>svg]:motion-safe:animate-spin" />
      </ng-template>
      <ng-template #successIcon>
        <ng-icon name="lucideCircleCheck" class="overflow-visible! text-base" />
      </ng-template>
      <ng-template #errorIcon>
        <ng-icon name="lucideOctagonX" class="overflow-visible! text-base" />
      </ng-template>
      <ng-template #infoIcon>
        <ng-icon name="lucideInfo" class="overflow-visible! text-base" />
      </ng-template>
      <ng-template #warningIcon>
        <ng-icon name="lucideTriangleAlert" class="overflow-visible! text-base" />
      </ng-template>
    </brn-sonner-toaster>
  `,
                }]
        }], propDecorators: { invert: [{ type: i0.Input, args: [{ isSignal: true, alias: "invert", required: false }] }], theme: [{ type: i0.Input, args: [{ isSignal: true, alias: "theme", required: false }] }], position: [{ type: i0.Input, args: [{ isSignal: true, alias: "position", required: false }] }], hotKey: [{ type: i0.Input, args: [{ isSignal: true, alias: "hotKey", required: false }] }], richColors: [{ type: i0.Input, args: [{ isSignal: true, alias: "richColors", required: false }] }], expand: [{ type: i0.Input, args: [{ isSignal: true, alias: "expand", required: false }] }], duration: [{ type: i0.Input, args: [{ isSignal: true, alias: "duration", required: false }] }], visibleToasts: [{ type: i0.Input, args: [{ isSignal: true, alias: "visibleToasts", required: false }] }], closeButton: [{ type: i0.Input, args: [{ isSignal: true, alias: "closeButton", required: false }] }], toastOptions: [{ type: i0.Input, args: [{ isSignal: true, alias: "toastOptions", required: false }] }], offset: [{ type: i0.Input, args: [{ isSignal: true, alias: "offset", required: false }] }], userClass: [{ type: i0.Input, args: [{ isSignal: true, alias: "class", required: false }] }], userStyle: [{ type: i0.Input, args: [{ isSignal: true, alias: "style", required: false }] }] } });

const HlmToasterImports = [HlmToaster];

/**
 * Generated bundle index. Do not edit.
 */

export { HlmToaster, HlmToasterImports };
//# sourceMappingURL=gosamply-ui-sonner.mjs.map
