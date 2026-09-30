import * as i0 from '@angular/core';
import { Directive, input } from '@angular/core';
import { classes } from '@gosamply/ui/utils';
import { cva } from 'class-variance-authority';
import * as i1 from '@gosamply/ui/button';
import { provideBrnButtonConfig, HlmButton } from '@gosamply/ui/button';
import * as i1$1 from '@gosamply/ui/input';
import { HlmInput } from '@gosamply/ui/input';
import * as i1$2 from '@gosamply/ui/textarea';
import { HlmTextarea } from '@gosamply/ui/textarea';

class HlmInputGroup {
    constructor() {
        classes(() => 'border-input bg-input/30 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][data-matches-spartan-invalid=true]]:ring-destructive/20 has-[[data-slot][data-matches-spartan-invalid=true]]:border-destructive dark:has-[[data-slot][data-matches-spartan-invalid=true]]:ring-destructive/40 h-9 rounded-4xl border transition-colors in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-data-[align=block-end]:rounded-2xl has-data-[align=block-start]:rounded-2xl has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot][data-matches-spartan-invalid=true]]:ring-3 has-[textarea]:rounded-xl has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pe-1.5 has-[>[data-align=inline-start]]:[&>input]:ps-1.5 group/input-group relative flex w-full min-w-0 items-center outline-none has-[>textarea]:h-auto');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmInputGroup, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmInputGroup, isStandalone: true, selector: "[hlmInputGroup],hlm-input-group", host: { attributes: { "data-slot": "input-group", "role": "group" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmInputGroup, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmInputGroup],hlm-input-group',
                    host: {
                        'data-slot': 'input-group',
                        role: 'group',
                    },
                }]
        }], ctorParameters: () => [] });

const inputGroupAddonVariants$1 = cva("text-muted-foreground **:data-[slot=kbd]:bg-muted-foreground/10 h-auto gap-2 py-2 text-sm font-medium group-data-[disabled=true]/input-group:opacity-50 **:data-[slot=kbd]:rounded-4xl **:data-[slot=kbd]:px-1.5 [&>ng-icon:not([class*='text-'])]:text-[length:--spacing(4)] flex cursor-text items-center justify-center select-none", {
    variants: {
        align: {
            'inline-start': 'ps-3 has-[>button]:-ms-1 has-[>kbd]:ms-[-0.15rem] order-first',
            'inline-end': 'pe-3 has-[>button]:-me-1 has-[>kbd]:me-[-0.15rem] order-last',
            'block-start': 'px-3 pt-3 group-has-[>input]/input-group:pt-3 [.border-b]:pb-3 order-first w-full justify-start',
            'block-end': 'px-3 pb-3 group-has-[>input]/input-group:pb-3 [.border-t]:pt-3 order-last w-full justify-start',
        },
    },
    defaultVariants: {
        align: 'inline-start',
    },
});
class HlmInputGroupAddon {
    align = input('inline-start', ...(ngDevMode ? [{ debugName: "align" }] : /* istanbul ignore next */ []));
    constructor() {
        classes(() => inputGroupAddonVariants$1({ align: this.align() }));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmInputGroupAddon, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.11", type: HlmInputGroupAddon, isStandalone: true, selector: "[hlmInputGroupAddon],hlm-input-group-addon", inputs: { align: { classPropertyName: "align", publicName: "align", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "role": "group", "data-slot": "input-group-addon" }, properties: { "attr.data-align": "align()" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmInputGroupAddon, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmInputGroupAddon],hlm-input-group-addon',
                    host: {
                        role: 'group',
                        'data-slot': 'input-group-addon',
                        '[attr.data-align]': 'align()',
                    },
                }]
        }], ctorParameters: () => [], propDecorators: { align: [{ type: i0.Input, args: [{ isSignal: true, alias: "align", required: false }] }] } });

const inputGroupAddonVariants = cva('gap-2 rounded-4xl text-sm flex items-center shadow-none', {
    variants: {
        size: {
            xs: "h-6 gap-1 px-1.5 [&>ng-icon:not([class*='text-'])]:text-[length:--spacing(3.5)]",
            sm: '',
            'icon-xs': 'size-6 p-0 has-[>ng-icon]:p-0',
            'icon-sm': 'size-8 p-0 has-[>ng-icon]:p-0',
        },
    },
    defaultVariants: {
        size: 'xs',
    },
});
class HlmInputGroupButton {
    size = input('xs', ...(ngDevMode ? [{ debugName: "size" }] : /* istanbul ignore next */ []));
    type = input('button', ...(ngDevMode ? [{ debugName: "type" }] : /* istanbul ignore next */ []));
    constructor() {
        classes(() => inputGroupAddonVariants({ size: this.size() }));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmInputGroupButton, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.11", type: HlmInputGroupButton, isStandalone: true, selector: "button[hlmInputGroupButton]", inputs: { size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, type: { classPropertyName: "type", publicName: "type", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "attr.data-size": "size()", "type": "type()" } }, providers: [
            provideBrnButtonConfig({
                variant: 'ghost',
            }),
        ], hostDirectives: [{ directive: i1.HlmButton, inputs: ["variant", "variant"] }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmInputGroupButton, decorators: [{
            type: Directive,
            args: [{
                    selector: 'button[hlmInputGroupButton]',
                    providers: [
                        provideBrnButtonConfig({
                            variant: 'ghost',
                        }),
                    ],
                    hostDirectives: [
                        {
                            directive: HlmButton,
                            inputs: ['variant'],
                        },
                    ],
                    host: {
                        '[attr.data-size]': 'size()',
                        '[type]': 'type()',
                    },
                }]
        }], ctorParameters: () => [], propDecorators: { size: [{ type: i0.Input, args: [{ isSignal: true, alias: "size", required: false }] }], type: [{ type: i0.Input, args: [{ isSignal: true, alias: "type", required: false }] }] } });

class HlmInputGroupInput {
    constructor() {
        classes(() => `rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 data-[matches-spartan-invalid=true]:ring-0 dark:bg-transparent flex-1`);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmInputGroupInput, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmInputGroupInput, isStandalone: true, selector: "input[hlmInputGroupInput]", host: { attributes: { "data-slot": "input-group-control" } }, hostDirectives: [{ directive: i1$1.HlmInput }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmInputGroupInput, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[hlmInputGroupInput]',
                    hostDirectives: [HlmInput],
                    host: { 'data-slot': 'input-group-control' },
                }]
        }], ctorParameters: () => [] });

class HlmInputGroupText {
    constructor() {
        classes(() => "text-muted-foreground gap-2 text-sm [&_ng-icon:not([class*='text-'])]:text-[length:--spacing(4)] flex items-center [&_ng-icon]:pointer-events-none");
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmInputGroupText, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmInputGroupText, isStandalone: true, selector: "[hlmInputGroupText],hlm-input-group-text", ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmInputGroupText, decorators: [{
            type: Directive,
            args: [{
                    selector: '[hlmInputGroupText],hlm-input-group-text',
                }]
        }], ctorParameters: () => [] });

class HlmInputGroupTextarea {
    constructor() {
        classes(() => 'rounded-none border-0 bg-transparent py-2 shadow-none ring-0 focus-visible:ring-0 data-[matches-spartan-invalid=true]:ring-0 dark:bg-transparent flex-1 resize-none');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmInputGroupTextarea, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.11", type: HlmInputGroupTextarea, isStandalone: true, selector: "textarea[hlmInputGroupTextarea]", host: { attributes: { "data-slot": "input-group-control" } }, hostDirectives: [{ directive: i1$2.HlmTextarea }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.11", ngImport: i0, type: HlmInputGroupTextarea, decorators: [{
            type: Directive,
            args: [{
                    selector: 'textarea[hlmInputGroupTextarea]',
                    hostDirectives: [HlmTextarea],
                    host: { 'data-slot': 'input-group-control' },
                }]
        }], ctorParameters: () => [] });

const HlmInputGroupImports = [
    HlmInputGroup,
    HlmInputGroupAddon,
    HlmInputGroupButton,
    HlmInputGroupInput,
    HlmInputGroupText,
    HlmInputGroupTextarea,
];

/**
 * Generated bundle index. Do not edit.
 */

export { HlmInputGroup, HlmInputGroupAddon, HlmInputGroupButton, HlmInputGroupImports, HlmInputGroupInput, HlmInputGroupText, HlmInputGroupTextarea };
//# sourceMappingURL=gosamply-ui-input-group.mjs.map
