import type { Meta, StoryObj } from '@storybook/angular-vite';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HlmCalendar } from '@gosamply/ui/calendar';
import { HlmCard, HlmCardImports } from '@gosamply/ui/card';

@Component({
  selector: 'spartan-calendar-preview',
  imports: [HlmCalendar, HlmCardImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [HlmCard],
  host: {
    class: 'p-0 w-fit mx-auto',
  },
  template: `
    <div hlmCardContent class="p-0">
      <hlm-calendar [(date)]="selectedDate" [min]="minDate" [max]="maxDate" />
    </div>
  `,
})
export class CalendarPreview {
  /** The selected date */
  public selectedDate = new Date();

  /** The minimum date */
  public minDate = new Date(new Date().setMonth(new Date().getMonth() - 2));

  /** The maximum date */
  public maxDate = new Date(new Date().setMonth(new Date().getMonth() + 2));
}

const meta: Meta<CalendarPreview> = {
  title: 'Components/Calendar',
  component: CalendarPreview,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<CalendarPreview> = {};
