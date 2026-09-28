import type { Meta, StoryObj } from '@storybook/angular-vite';
import { Component } from '@angular/core';
import { HlmButtonImports } from '@gosamply/ui/button';
import { HlmCheckboxImports } from '@gosamply/ui/checkbox';
import { HlmFieldImports } from '@gosamply/ui/field';
import { HlmInputImports } from '@gosamply/ui/input';
import { HlmSelectImports } from '@gosamply/ui/select';
import { HlmTextareaImports } from '@gosamply/ui/textarea';

@Component({
  selector: 'spartan-field-preview',
  imports: [
    HlmCheckboxImports,
    HlmTextareaImports,
    HlmButtonImports,
    HlmInputImports,
    HlmFieldImports,
    HlmSelectImports,
  ],
  host: {
    class: 'w-full max-w-md',
  },
  template: `
    <form>
      <div hlmFieldGroup>
        <fieldset hlmFieldSet>
          <legend hlmFieldLegend>Payment Method</legend>
          <p hlmFieldDescription>All transactions are secure and encrypted</p>

          <div hlmFieldGroup>
            <div hlmField>
              <label hlmFieldLabel for="field-preview-name-on-card">Name on card</label>
              <input hlmInput placeholder="John Doe" id="field-preview-name-on-card" />
            </div>
            <div hlmField class="col-span-2">
              <label hlmFieldLabel for="field-preview-card-number">Card number</label>
              <input hlmInput placeholder="1234 1234 1234 1234" id="field-preview-card-number" />
              <p hlmFieldDescription>Enter your 16-digit card number</p>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div hlmField>
                <label hlmFieldLabel for="field-exp-month--trigger">Month</label>
                <hlm-select id="field-exp-month" class="inline-block">
                  <hlm-select-trigger class="w-full">
                    <hlm-select-value />
                  </hlm-select-trigger>
                  <hlm-select-content *hlmSelectPortal>
                    <hlm-select-group>
                      <hlm-select-item value="01">01</hlm-select-item>
                      <hlm-select-item value="02">02</hlm-select-item>
                      <hlm-select-item value="03">03</hlm-select-item>
                      <hlm-select-item value="04">04</hlm-select-item>
                      <hlm-select-item value="05">05</hlm-select-item>
                      <hlm-select-item value="06">06</hlm-select-item>
                      <hlm-select-item value="07">07</hlm-select-item>
                      <hlm-select-item value="08">08</hlm-select-item>
                      <hlm-select-item value="09">09</hlm-select-item>
                      <hlm-select-item value="10">10</hlm-select-item>
                      <hlm-select-item value="11">11</hlm-select-item>
                      <hlm-select-item value="12">12</hlm-select-item>
                    </hlm-select-group>
                  </hlm-select-content>
                </hlm-select>
              </div>
              <div hlmField>
                <label hlmFieldLabel for="field-exp-year--trigger">Year</label>
                <hlm-select id="field-exp-year" class="inline-block">
                  <hlm-select-trigger class="w-full">
                    <hlm-select-value placeholder="YYYY" />
                  </hlm-select-trigger>
                  <hlm-select-content *hlmSelectPortal>
                    <hlm-select-group>
                      <hlm-select-item value="2024">2024</hlm-select-item>
                      <hlm-select-item value="2025">2025</hlm-select-item>
                      <hlm-select-item value="2026">2026</hlm-select-item>
                      <hlm-select-item value="2027">2027</hlm-select-item>
                      <hlm-select-item value="2028">2028</hlm-select-item>
                      <hlm-select-item value="2029">2029</hlm-select-item>
                    </hlm-select-group>
                  </hlm-select-content>
                </hlm-select>
              </div>
              <div hlmField>
                <label hlmFieldLabel for="field-preview-cvv">CVV</label>
                <input hlmInput placeholder="123" id="field-preview-cvv" />
              </div>
            </div>
          </div>
        </fieldset>
        <hlm-field-separator />
        <fieldset hlmFieldSet>
          <legend hlmFieldLegend>Billing Address</legend>
          <p hlmFieldDescription>The billing address associated with your payment method</p>
          <div hlmFieldGroup>
            <div hlmField orientation="horizontal">
              <hlm-checkbox inputId="field-preview-billing-address" [checked]="true" />
              <label hlmFieldLabel for="field-preview-billing-address">Same as shipping address.</label>
            </div>
          </div>
        </fieldset>
        <fieldset hlmFieldSet>
          <div hlmFieldGroup>
            <div hlmField>
              <label hlmFieldLabel for="field-preview-comments">Comments</label>
              <textarea hlmTextarea class="resize-none" id="field-preview-comments"></textarea>
            </div>
          </div>
        </fieldset>
        <div hlmField orientation="horizontal">
          <button hlmBtn>Submit</button>
          <button hlmBtn variant="outline">Cancel</button>
        </div>
      </div>
    </form>
  `,
})
export class FieldPreview {}

const meta: Meta<FieldPreview> = {
  title: 'Components/Field',
  component: FieldPreview,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<FieldPreview> = {};
