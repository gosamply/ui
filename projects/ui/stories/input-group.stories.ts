import type { Meta, StoryObj } from '@storybook/angular-vite';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSearch } from '@ng-icons/lucide';
import { HlmInputGroupImports } from '@gosamply/ui/input-group';

@Component({
  selector: 'spartan-input-group-preview',
  imports: [HlmInputGroupImports, NgIcon],
  providers: [provideIcons({ lucideSearch })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'max-w-sm' },
  template: `
    <hlm-input-group>
      <input hlmInputGroupInput placeholder="Search..." />
      <hlm-input-group-addon>
        <ng-icon name="lucideSearch" />
      </hlm-input-group-addon>
      <hlm-input-group-addon align="inline-end">12 results</hlm-input-group-addon>
    </hlm-input-group>
  `,
})
export class InputGroupPreview {}

const meta: Meta<InputGroupPreview> = {
  title: 'Components/Input Group',
  component: InputGroupPreview,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<InputGroupPreview> = {};
