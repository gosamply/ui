import type { Meta, StoryObj } from '@storybook/angular-vite';
import { Component } from '@angular/core';
import { HlmComboboxImports } from '@gosamply/ui/combobox';

@Component({
  selector: 'spartan-combobox-preview',
  imports: [HlmComboboxImports],
  template: `
    <hlm-combobox>
      <hlm-combobox-input placeholder="Select a framework" />
      <hlm-combobox-content *hlmComboboxPortal>
        <hlm-combobox-empty>No items found.</hlm-combobox-empty>
        <div hlmComboboxList>
          @for (framework of frameworks; track $index) {
            <hlm-combobox-item [value]="framework">{{ framework.label }}</hlm-combobox-item>
          }
        </div>
      </hlm-combobox-content>
    </hlm-combobox>
  `,
})
export class ComboboxPreview {
  public frameworks = [
    {
      label: 'AnalogJs',
      value: 'analogjs',
    },
    {
      label: 'Angular',
      value: 'angular',
    },
    {
      label: 'Vue',
      value: 'vue',
    },
    {
      label: 'Nuxt',
      value: 'nuxt',
    },
    {
      label: 'React',
      value: 'react',
    },
    {
      label: 'NextJs',
      value: 'nextjs',
    },
  ];
}

const meta: Meta<ComboboxPreview> = {
  title: 'Components/Combobox',
  component: ComboboxPreview,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<ComboboxPreview> = {};
