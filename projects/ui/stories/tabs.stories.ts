import type { Meta, StoryObj } from '@storybook/angular-vite';
import { Component } from '@angular/core';
import { HlmButtonImports } from '@gosamply/ui/button';
import { HlmCardImports } from '@gosamply/ui/card';
import { HlmInputImports } from '@gosamply/ui/input';
import { HlmLabelImports } from '@gosamply/ui/label';
import { HlmTabsImports } from '@gosamply/ui/tabs';

@Component({
  selector: 'spartan-tabs-preview',
  imports: [HlmTabsImports, HlmCardImports, HlmLabelImports, HlmInputImports, HlmButtonImports],
  host: {
    class: 'block w-full max-w-lg',
  },
  template: `
    <hlm-tabs tab="account" class="w-full">
      <hlm-tabs-list aria-label="tabs example">
        <button hlmTabsTrigger="account">Account</button>
        <button hlmTabsTrigger="password">Password</button>
      </hlm-tabs-list>
      <div hlmTabsContent="account">
        <section hlmCard>
          <div hlmCardHeader>
            <h3 hlmCardTitle>Account</h3>
            <p hlmCardDescription>Make changes to your account here. Click save when you're done.</p>
          </div>
          <p hlmCardContent>
            <label class="my-4 block" hlmLabel>
              Name
              <input class="mt-1.5 w-full" value="Pedro Duarte" hlmInput />
            </label>
            <label class="my-4 block" hlmLabel>
              Username
              <input class="mt-1.5 w-full" placeholder="@peduarte" hlmInput />
            </label>
          </p>
          <div hlmCardFooter>
            <button hlmBtn>Save Changes</button>
          </div>
        </section>
      </div>
      <div hlmTabsContent="password">
        <section hlmCard>
          <div hlmCardHeader>
            <h3 hlmCardTitle>Password</h3>
            <p hlmCardDescription>Change your password here. After saving, you'll be logged out.</p>
          </div>
          <p hlmCardContent>
            <label class="my-4 block" hlmLabel>
              Old Password
              <input class="mt-1.5 w-full" type="password" hlmInput />
            </label>
            <label class="my-4 block" hlmLabel>
              New Password
              <input class="mt-1.5 w-full" type="password" hlmInput />
            </label>
          </p>
          <div hlmCardFooter>
            <button hlmBtn>Save Password</button>
          </div>
        </section>
      </div>
    </hlm-tabs>
  `,
})
export class TabsPreview {}

const meta: Meta<TabsPreview> = {
  title: 'Components/Tabs',
  component: TabsPreview,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<TabsPreview> = {};
