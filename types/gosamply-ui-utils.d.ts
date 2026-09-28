import { ElementRef, Injector, EnvironmentProviders } from '@angular/core';
import { ClassValue } from 'clsx';

declare function hlm(...inputs: ClassValue[]): string;
/**
 * This function dynamically adds and removes classes for a given element without requiring
 * the a class binding (e.g. `[class]="..."`) which may interfere with other class bindings.
 *
 * 1. This will merge the existing classes on the element with the new classes.
 * 2. It will also remove any classes that were previously added by this function but are no longer present in the new classes.
 * 3. Multiple calls to this function on the same element will be merged efficiently.
 */
declare function classes(computed: () => ClassValue[] | string, options?: ClassesOptions): void;
interface ClassesOptions {
    elementRef?: ElementRef<HTMLElement>;
    injector?: Injector;
}

/**
 * Provides default configuration for Spartan Helm components.
 *
 * This utility configures the Angular CDK overlay to disable the `usePopover`
 * behavior introduced in Angular 21, which causes CDK overlay-based components
 * (sheets, dialogs, tooltips, etc.) to render above `position: fixed` elements
 * like `<hlm-toaster>`.
 *
 * @returns {EnvironmentProviders} Environment providers to be added to the application config.
 *
 * @example
 * ```ts
 * // app.config.ts
 * import { provideSpartanHlm } from '@gosamply/ui/utils';
 *
 * export const appConfig: ApplicationConfig = {
 *   providers: [
 *     provideSpartanHlm(),
 *     // ... other providers
 *   ],
 * };
 * ```
 */
declare function provideSpartanHlm(): EnvironmentProviders;

export { classes, hlm, provideSpartanHlm };
