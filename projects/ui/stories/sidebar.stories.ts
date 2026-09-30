import type { Meta, StoryObj } from '@storybook/angular-vite';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideHouse, lucideInbox, lucideSettings } from '@ng-icons/lucide';
import { HlmSidebarImports } from '@gosamply/ui/sidebar';

@Component({
  selector: 'spartan-sidebar-preview',
  imports: [HlmSidebarImports, NgIcon],
  providers: [provideIcons({ lucideHouse, lucideInbox, lucideSettings })],
  template: `
    <div hlmSidebarWrapper>
      <hlm-sidebar collapsible="icon">
        <div hlmSidebarContent>
          <div hlmSidebarGroup>
            <div hlmSidebarGroupLabel>Application</div>
            <div hlmSidebarGroupContent>
              <ul hlmSidebarMenu>
                @for (item of items; track item.title) {
                  <li hlmSidebarMenuItem>
                    <a hlmSidebarMenuButton href="#">
                      <ng-icon [name]="item.icon" />
                      <span>{{ item.title }}</span>
                    </a>
                  </li>
                }
              </ul>
            </div>
          </div>
        </div>
      </hlm-sidebar>
      <main hlmSidebarInset class="p-4">
        <button hlmSidebarTrigger></button>
      </main>
    </div>
  `,
})
export class SidebarPreview {
  protected readonly items = [
    { title: 'Home', icon: 'lucideHouse' },
    { title: 'Inbox', icon: 'lucideInbox' },
    { title: 'Settings', icon: 'lucideSettings' },
  ];
}

const meta: Meta<SidebarPreview> = {
  title: 'Components/Sidebar',
  component: SidebarPreview,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const Default: StoryObj<SidebarPreview> = {};
