import type { Meta, StoryObj } from '@storybook/angular-vite';
import { Component } from '@angular/core';
import { HlmDatePickerImports } from '@gosamply/ui/date-picker';
import { HlmFieldImports } from '@gosamply/ui/field';

@Component({
  selector: 'spartan-date-picker-preview',
  imports: [HlmDatePickerImports, HlmFieldImports],
  template: `
    <hlm-field>
      <label hlmFieldLabel>Date of birth</label>
      <hlm-date-picker [minDate]="minDate" [maxDate]="maxDate">
        <hlm-date-picker-trigger buttonId="date">Pick a date</hlm-date-picker-trigger>
      </hlm-date-picker>
    </hlm-field>
  `,
})
export class DatePickerPreview {
  /** The minimum date */
  public minDate = new Date(2023, 0, 1);

  /** The maximum date */
  public maxDate = new Date(2030, 11, 31);
}

const meta: Meta<DatePickerPreview> = {
  title: 'Components/Date Picker',
  component: DatePickerPreview,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<DatePickerPreview> = {};
