import { Directive } from '@angular/core';
import { classes } from '@gosamply/ui/utils';

@Directive({
  selector: '[hlmSkeleton],hlm-skeleton',
  host: {
    'data-slot': 'skeleton',
  },
})
export class HlmSkeleton {
  constructor() {
    classes(() => 'bg-muted rounded-xl block motion-safe:animate-pulse');
  }
}
