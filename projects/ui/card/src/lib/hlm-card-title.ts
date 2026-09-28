import { Directive } from '@angular/core';
import { classes } from '@gosamply/ui/utils';

@Directive({
  selector: '[hlmCardTitle]',
  host: { 'data-slot': 'card-title' },
})
export class HlmCardTitle {
  constructor() {
    classes(() => 'text-base font-medium');
  }
}
