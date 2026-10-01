import type { Meta, StoryObj } from '@storybook/angular-vite';
import { Component } from '@angular/core';
import { HlmBadgeImports } from '@gosamply/ui/badge';

@Component({
  selector: 'spartan-badge-preview',
  imports: [HlmBadgeImports],
  template: `
    <div class="flex flex-wrap gap-2">
      <span hlmBadge>Default</span>
      <span hlmBadge variant="secondary">Secondary</span>
      <span hlmBadge variant="destructive">Destructive</span>
      <span hlmBadge variant="outline">Outline</span>
      <span hlmBadge variant="ghost">Ghost</span>
      <a hlmBadge variant="link" href="#">Link</a>
    </div>
  `,
})
export class BadgePreview {}

const meta: Meta<BadgePreview> = {
  title: 'Components/Badge',
  component: BadgePreview,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<BadgePreview> = {};
