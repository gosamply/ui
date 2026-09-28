import type { Meta, StoryObj } from '@storybook/angular-vite';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleCheck, lucideInfo, lucideCircleAlert } from '@ng-icons/lucide';
import { HlmAlertImports } from '@gosamply/ui/alert';

@Component({
  selector: 'spartan-alert-preview',
  imports: [HlmAlertImports, NgIcon],
  providers: [provideIcons({ lucideCircleCheck, lucideInfo, lucideCircleAlert })],
  template: `
    <div class="grid w-full max-w-md items-start gap-4">
      <hlm-alert>
        <ng-icon name="lucideCircleCheck" />
        <h4 hlmAlertTitle>Payment successful</h4>
        <p hlmAlertDescription>
          Your payment of $29.99 has been processed. A receipt has been sent to your email address.
        </p>
      </hlm-alert>
      <hlm-alert>
        <ng-icon name="lucideInfo" />
        <h4 hlmAlertTitle>New feature available</h4>
        <p hlmAlertDescription>We've added dark mode support. You can enable it in your account settings.</p>
      </hlm-alert>
      <hlm-alert variant="destructive">
        <ng-icon name="lucideCircleAlert" />
        <h4 hlmAlertTitle>Payment failed</h4>
        <p hlmAlertDescription>Your payment could not be processed. Please check your payment method and try again.</p>
      </hlm-alert>
    </div>
  `,
})
export class AlertPreview {}

const meta: Meta<AlertPreview> = {
  title: 'Components/Alert',
  component: AlertPreview,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<AlertPreview> = {};
