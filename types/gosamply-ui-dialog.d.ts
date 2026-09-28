import * as i1 from '@spartan-ng/brain/dialog';
import { BrnDialog, BrnDialogOptions, BrnDialogRef } from '@spartan-ng/brain/dialog';
import * as i0 from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { ComponentType } from '@angular/cdk/portal';
import { ClassValue } from 'clsx';

declare class HlmDialog extends BrnDialog {
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HlmDialog, "hlm-dialog", ["hlmDialog"], {}, {}, never, ["*"], true, never>;
}

declare class HlmDialogClose {
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmDialogClose, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmDialogClose, "button[hlmDialogClose]", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnDialogClose; inputs: {}; outputs: {}; }]>;
}

declare class HlmDialogContent {
    private readonly _dialogRef;
    private readonly _dialogContext;
    readonly showCloseButton: i0.InputSignalWithTransform<boolean, BooleanInput>;
    readonly state: i0.Signal<i1.BrnDialogState>;
    readonly component: ComponentType<unknown> | undefined;
    private readonly _dynamicComponentClass;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmDialogContent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HlmDialogContent, "hlm-dialog-content", never, { "showCloseButton": { "alias": "showCloseButton"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}

declare class HlmDialogDescription {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmDialogDescription, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmDialogDescription, "[hlmDialogDescription]", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnDialogDescription; inputs: {}; outputs: {}; }]>;
}

declare class HlmDialogFooter {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmDialogFooter, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmDialogFooter, "[hlmDialogFooter],hlm-dialog-footer", never, {}, {}, never, never, true, never>;
}

declare class HlmDialogHeader {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmDialogHeader, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmDialogHeader, "[hlmDialogHeader],hlm-dialog-header", never, {}, {}, never, never, true, never>;
}

declare const hlmDialogOverlayClass: string;
declare class HlmDialogOverlay {
    private readonly _classSettable;
    readonly userClass: i0.InputSignal<ClassValue>;
    protected readonly _computedClass: i0.Signal<string>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmDialogOverlay, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmDialogOverlay, "[hlmDialogOverlay],hlm-dialog-overlay", never, { "userClass": { "alias": "class"; "required": false; "isSignal": true; }; }, {}, never, never, true, [{ directive: typeof i1.BrnDialogOverlay; inputs: {}; outputs: {}; }]>;
}

declare class HlmDialogPortal {
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmDialogPortal, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmDialogPortal, "[hlmDialogPortal]", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnDialogContent; inputs: { "context": "context"; "class": "class"; }; outputs: {}; }]>;
}

declare class HlmDialogTitle {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmDialogTitle, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmDialogTitle, "[hlmDialogTitle]", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnDialogTitle; inputs: {}; outputs: {}; }]>;
}

declare class HlmDialogTrigger {
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmDialogTrigger, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmDialogTrigger, "button[hlmDialogTrigger],button[hlmDialogTriggerFor]", never, {}, {}, never, never, true, [{ directive: typeof i1.BrnDialogTrigger; inputs: { "id": "id"; "brnDialogTriggerFor": "hlmDialogTriggerFor"; "type": "type"; }; outputs: {}; }]>;
}

type HlmDialogOptions<DialogContext = unknown> = BrnDialogOptions & {
    contentClass?: string;
    showCloseButton?: boolean;
    context?: DialogContext;
};
declare class HlmDialogService {
    private readonly _brnDialogService;
    open<TResult = unknown, TContext = unknown>(component: ComponentType<unknown> | TemplateRef<unknown>, options?: Partial<HlmDialogOptions<TContext>>): BrnDialogRef<TResult>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmDialogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HlmDialogService>;
}

declare const HlmDialogImports: readonly [typeof HlmDialog, typeof HlmDialogContent, typeof HlmDialogDescription, typeof HlmDialogFooter, typeof HlmDialogHeader, typeof HlmDialogOverlay, typeof HlmDialogPortal, typeof HlmDialogTitle, typeof HlmDialogTrigger, typeof HlmDialogClose];

export { HlmDialog, HlmDialogClose, HlmDialogContent, HlmDialogDescription, HlmDialogFooter, HlmDialogHeader, HlmDialogImports, HlmDialogOverlay, HlmDialogPortal, HlmDialogService, HlmDialogTitle, HlmDialogTrigger, hlmDialogOverlayClass };
export type { HlmDialogOptions };
