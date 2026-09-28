import type { Meta, StoryObj } from '@storybook/angular-vite';
import { Component } from '@angular/core';
import { HlmLabel } from '@gosamply/ui/label';
import { HlmSwitch } from '@gosamply/ui/switch';

@Component({
  selector: 'spartan-switch-preview',
  imports: [HlmLabel, HlmSwitch],
  template: `
    <label class="flex items-center" hlmLabel>
      <hlm-switch class="mr-2" />
      Airplane mode
    </label>
  `,
})
export class SwitchPreview {}

const meta: Meta<SwitchPreview> = {
  title: 'Components/Switch',
  component: SwitchPreview,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<SwitchPreview> = {};
