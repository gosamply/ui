import type { Meta, StoryObj } from '@storybook/angular-vite';
import { Component } from '@angular/core';
import { HlmCheckboxImports } from '@gosamply/ui/checkbox';
import { HlmLabelImports } from '@gosamply/ui/label';

@Component({
  selector: 'spartan-label-preview',
  imports: [HlmLabelImports, HlmCheckboxImports],
  template: `
    <div class="flex gap-2">
      <hlm-checkbox inputId="terms" />
      <label hlmLabel for="terms">Accept terms and conditions</label>
    </div>
  `,
})
export class LabelPreview {}

const meta: Meta<LabelPreview> = {
  title: 'Components/Label',
  component: LabelPreview,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<LabelPreview> = {};
