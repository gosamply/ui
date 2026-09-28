import type { Meta, StoryObj } from '@storybook/angular-vite';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HlmTextareaImports } from '@gosamply/ui/textarea';

@Component({
  selector: 'spartan-textarea-preview',
  imports: [HlmTextareaImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'min-w-xs sm:min-w-sm' },
  template: `
    <textarea hlmTextarea placeholder="Type your message here."></textarea>
  `,
})
export class TextareaPreview {}

const meta: Meta<TextareaPreview> = {
  title: 'Components/Textarea',
  component: TextareaPreview,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<TextareaPreview> = {};
