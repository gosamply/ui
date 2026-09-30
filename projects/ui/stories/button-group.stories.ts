import type { Meta, StoryObj } from '@storybook/angular-vite';
import { Component } from '@angular/core';
import { HlmButtonImports } from '@gosamply/ui/button';
import { HlmButtonGroupImports } from '@gosamply/ui/button-group';

@Component({
  selector: 'spartan-button-group-preview',
  imports: [HlmButtonGroupImports, HlmButtonImports],
  template: `
    <div hlmButtonGroup>
      <button hlmBtn variant="outline">Archive</button>
      <button hlmBtn variant="outline">Report</button>
      <div hlmButtonGroupSeparator></div>
      <button hlmBtn variant="outline">Snooze</button>
    </div>
  `,
})
export class ButtonGroupPreview {}

const meta: Meta<ButtonGroupPreview> = {
  title: 'Components/Button Group',
  component: ButtonGroupPreview,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<ButtonGroupPreview> = {};
