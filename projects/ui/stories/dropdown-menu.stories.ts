import type { Meta, StoryObj } from '@storybook/angular-vite';
import { Component } from '@angular/core';
import { HlmButtonImports } from '@gosamply/ui/button';
import { HlmDropdownMenuImports } from '@gosamply/ui/dropdown-menu';

@Component({
  selector: 'spartan-dropdown-menu-preview',
  imports: [HlmDropdownMenuImports, HlmButtonImports],
  template: `
    <button hlmBtn variant="outline" [hlmDropdownMenuTrigger]="menu">Open</button>

    <ng-template #menu>
      <hlm-dropdown-menu class="w-56">
        <hlm-dropdown-menu-label>My Account</hlm-dropdown-menu-label>
        <hlm-dropdown-menu-group>
          <button hlmDropdownMenuItem>
            Profile
            <hlm-dropdown-menu-shortcut>⇧⌘P</hlm-dropdown-menu-shortcut>
          </button>
          <button hlmDropdownMenuItem>
            Settings
            <hlm-dropdown-menu-shortcut>⌘S</hlm-dropdown-menu-shortcut>
          </button>
        </hlm-dropdown-menu-group>
        <hlm-dropdown-menu-separator />
        <button hlmDropdownMenuItem [hlmDropdownMenuTrigger]="more" side="right" align="start">
          More
          <hlm-dropdown-menu-item-sub-indicator />
        </button>
        <hlm-dropdown-menu-separator />
        <button hlmDropdownMenuItem variant="destructive">Log out</button>
      </hlm-dropdown-menu>
    </ng-template>

    <ng-template #more>
      <hlm-dropdown-menu-sub>
        <button hlmDropdownMenuItem>Email</button>
        <button hlmDropdownMenuItem>Message</button>
      </hlm-dropdown-menu-sub>
    </ng-template>
  `,
})
export class DropdownMenuPreview {}

const meta: Meta<DropdownMenuPreview> = {
  title: 'Components/Dropdown Menu',
  component: DropdownMenuPreview,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<DropdownMenuPreview> = {};
