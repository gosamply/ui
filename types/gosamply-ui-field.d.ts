import * as i0 from '@angular/core';
import { OnDestroy } from '@angular/core';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import * as i1 from '@spartan-ng/brain/field';
import { BooleanInput } from '@angular/cdk/coercion';
import * as i1$1 from '@gosamply/ui/label';

declare const fieldVariants: (props?: ({
    orientation?: "vertical" | "horizontal" | "responsive" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type FieldVariants = VariantProps<typeof fieldVariants>;
declare class HlmField {
    readonly orientation: i0.InputSignal<"vertical" | "horizontal" | "responsive" | null | undefined>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmField, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmField, "[hlmField],hlm-field", never, { "orientation": { "alias": "orientation"; "required": false; "isSignal": true; }; }, {}, never, never, true, [{ directive: typeof i1.BrnField; inputs: { "data-invalid": "data-invalid"; "forceInvalid": "forceInvalid"; }; outputs: {}; }]>;
}

declare class HlmFieldContent {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmFieldContent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmFieldContent, "[hlmFieldContent],hlm-field-content", never, {}, {}, never, never, true, never>;
}

declare class HlmFieldDescription implements OnDestroy {
    private static _id;
    private readonly _a11y;
    readonly id: i0.InputSignal<string>;
    private _registeredId?;
    private readonly _cleanup;
    constructor();
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmFieldDescription, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmFieldDescription, "[hlmFieldDescription],hlm-field-description", never, { "id": { "alias": "id"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class HlmFieldError implements OnDestroy {
    private static _id;
    private readonly _field;
    private readonly _a11y;
    private _registeredId?;
    private readonly _hasParentField;
    /** The unique ID for the field error. If none is supplied, it will be auto-generated. */
    readonly id: i0.InputSignal<string>;
    /**
     * The name of the specific validator error key to match (e.g. 'required').
     * When omitted, the error is shown if any validation error is present.
     */
    readonly validator: i0.InputSignal<string | undefined>;
    /** Forces the error message to be visible regardless of the control's validation state. */
    readonly forceShow: i0.InputSignalWithTransform<boolean, BooleanInput>;
    protected readonly _display: i0.Signal<boolean>;
    protected readonly _hasError: i0.Signal<boolean>;
    private readonly _cleanup;
    constructor();
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmFieldError, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HlmFieldError, "hlm-field-error", never, { "id": { "alias": "id"; "required": false; "isSignal": true; }; "validator": { "alias": "validator"; "required": false; "isSignal": true; }; "forceShow": { "alias": "forceShow"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}

declare class HlmFieldGroup {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmFieldGroup, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmFieldGroup, "[hlmFieldGroup],hlm-field-group", never, {}, {}, never, never, true, never>;
}

declare class HlmFieldLabel {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmFieldLabel, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmFieldLabel, "[hlmFieldLabel],hlm-field-label", never, {}, {}, never, never, true, [{ directive: typeof i1$1.HlmLabel; inputs: {}; outputs: {}; }]>;
}

declare class HlmFieldLegend {
    readonly variant: i0.InputSignal<"label" | "legend">;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmFieldLegend, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmFieldLegend, "legend[hlmFieldLegend]", never, { "variant": { "alias": "variant"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class HlmFieldSeparator {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmFieldSeparator, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HlmFieldSeparator, "hlm-field-separator", never, {}, {}, never, ["*"], true, never>;
}

declare class HlmFieldSet {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmFieldSet, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmFieldSet, "fieldset[hlmFieldSet]", never, {}, {}, never, never, true, never>;
}

declare class HlmFieldTitle {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmFieldTitle, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmFieldTitle, "[hlmFieldTitle],hlm-field-title", never, {}, {}, never, never, true, never>;
}

declare const HlmFieldImports: readonly [typeof HlmField, typeof HlmFieldContent, typeof HlmFieldDescription, typeof HlmFieldError, typeof HlmFieldGroup, typeof HlmFieldLabel, typeof HlmFieldLegend, typeof HlmFieldSeparator, typeof HlmFieldSet, typeof HlmFieldTitle];

export { HlmField, HlmFieldContent, HlmFieldDescription, HlmFieldError, HlmFieldGroup, HlmFieldImports, HlmFieldLabel, HlmFieldLegend, HlmFieldSeparator, HlmFieldSet, HlmFieldTitle };
export type { FieldVariants };
