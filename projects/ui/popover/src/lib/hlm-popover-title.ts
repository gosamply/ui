import { Directive } from '@angular/core';
import { classes } from '@gosamply/ui/utils';

@Directive({
  selector: '[hlmPopoverTitle]',
  host: { 'data-slot': 'popover-title' },
})
export class HlmPopoverTitle {
  constructor() {
    classes(() => 'text-base font-medium');
  }
}
