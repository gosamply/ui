import * as _spartan_ng_brain_sonner from '@spartan-ng/brain/sonner';
import * as _angular_core from '@angular/core';
import { BooleanInput, NumberInput } from '@angular/cdk/coercion';
import { ClassValue } from 'clsx';

declare class HlmToaster {
    readonly invert: _angular_core.InputSignalWithTransform<boolean, BooleanInput>;
    readonly theme: _angular_core.InputSignal<"light" | "dark" | "system">;
    readonly position: _angular_core.InputSignal<_spartan_ng_brain_sonner.Position>;
    readonly hotKey: _angular_core.InputSignal<string[]>;
    readonly richColors: _angular_core.InputSignalWithTransform<boolean, BooleanInput>;
    readonly expand: _angular_core.InputSignalWithTransform<boolean, BooleanInput>;
    readonly duration: _angular_core.InputSignalWithTransform<number, NumberInput>;
    readonly visibleToasts: _angular_core.InputSignalWithTransform<number, NumberInput>;
    readonly closeButton: _angular_core.InputSignalWithTransform<boolean, BooleanInput>;
    readonly toastOptions: _angular_core.InputSignal<_spartan_ng_brain_sonner.ToastOptions>;
    protected readonly _computedToastOptions: _angular_core.Signal<{
        classes: {
            toast: string;
            title?: string;
            description?: string;
            loader?: string;
            closeButton?: string;
            cancelButton?: string;
            actionButton?: string;
            action?: string | undefined;
            success?: string | undefined;
            info?: string | undefined;
            warning?: string | undefined;
            error?: string | undefined;
            loading?: string | undefined;
            default?: string | undefined;
        };
        class?: string;
        descriptionClass?: string;
        style?: Record<string, unknown>;
        cancelButtonStyle?: string;
        actionButtonStyle?: string;
        duration?: number;
        unstyled?: boolean;
    }>;
    readonly offset: _angular_core.InputSignal<string | number | null>;
    readonly userClass: _angular_core.InputSignal<ClassValue>;
    readonly userStyle: _angular_core.InputSignal<Record<string, string>>;
    protected readonly _computedClass: _angular_core.Signal<string>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<HlmToaster, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<HlmToaster, "hlm-toaster", never, { "invert": { "alias": "invert"; "required": false; "isSignal": true; }; "theme": { "alias": "theme"; "required": false; "isSignal": true; }; "position": { "alias": "position"; "required": false; "isSignal": true; }; "hotKey": { "alias": "hotKey"; "required": false; "isSignal": true; }; "richColors": { "alias": "richColors"; "required": false; "isSignal": true; }; "expand": { "alias": "expand"; "required": false; "isSignal": true; }; "duration": { "alias": "duration"; "required": false; "isSignal": true; }; "visibleToasts": { "alias": "visibleToasts"; "required": false; "isSignal": true; }; "closeButton": { "alias": "closeButton"; "required": false; "isSignal": true; }; "toastOptions": { "alias": "toastOptions"; "required": false; "isSignal": true; }; "offset": { "alias": "offset"; "required": false; "isSignal": true; }; "userClass": { "alias": "class"; "required": false; "isSignal": true; }; "userStyle": { "alias": "style"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare const HlmToasterImports: readonly [typeof HlmToaster];

export { HlmToaster, HlmToasterImports };
