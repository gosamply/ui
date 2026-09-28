import type { Meta, StoryObj } from '@storybook/angular-vite';
import { Component } from '@angular/core';
import { HlmButtonImports } from '@gosamply/ui/button';
import { HlmTooltipImports } from '@gosamply/ui/tooltip';

@Component({
  selector: 'spartan-tooltip-preview',
  imports: [HlmTooltipImports, HlmButtonImports],
  template: `
    <button hlmTooltip="Add to library" hlmBtn variant="outline">Default</button>
  `,
})
export class TooltipPreview {}

const meta: Meta<TooltipPreview> = {
  title: 'Components/Tooltip',
  component: TooltipPreview,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<TooltipPreview> = {};
