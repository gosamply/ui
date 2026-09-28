import type { Meta, StoryObj } from '@storybook/angular-vite';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HlmFieldImports } from '@gosamply/ui/field';
import { HlmInputImports } from '@gosamply/ui/input';

@Component({
  selector: 'spartan-input-preview',
  imports: [HlmInputImports, HlmFieldImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'min-w-xs sm:min-w-sm' },
  template: `
    <hlm-field>
      <label hlmFieldLabel for="input-demo-api-key">API Key</label>
      <input hlmInput id="input-demo-api-key" type="password" placeholder="sk-..." />
      <hlm-field-description>Your API key is encrypted and stored securely.</hlm-field-description>
    </hlm-field>
  `,
})
export class InputPreview {}

const meta: Meta<InputPreview> = {
  title: 'Components/Input',
  component: InputPreview,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<InputPreview> = {};
