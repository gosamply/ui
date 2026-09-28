import type { Meta, StoryObj } from '@storybook/angular-vite';
import { Component } from '@angular/core';
import { toast } from '@spartan-ng/brain/sonner';
import { HlmButtonImports } from '@gosamply/ui/button';
import { HlmToasterImports } from '@gosamply/ui/sonner';

@Component({
  selector: 'spartan-sonner-preview',
  imports: [HlmToasterImports, HlmButtonImports],
  template: `
    <hlm-toaster />
    <button hlmBtn variant="outline" (click)="showToast()">Show Toast</button>
  `,
})
export class SonnerPreview {
  showToast() {
    toast('Event has been created', {
      description: 'Sunday, December 03, 2023 at 9:00 AM',
      action: {
        label: 'Undo',
        onClick: () => console.log('Undo'),
      },
    });
  }
}

const meta: Meta<SonnerPreview> = {
  title: 'Components/Sonner',
  component: SonnerPreview,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<SonnerPreview> = {};
