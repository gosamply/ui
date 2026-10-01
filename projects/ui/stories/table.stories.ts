import type { Meta, StoryObj } from '@storybook/angular-vite';
import { Component } from '@angular/core';
import { HlmTableImports } from '@gosamply/ui/table';

@Component({
  selector: 'spartan-table-preview',
  imports: [HlmTableImports],
  template: `
    <div hlmTableContainer>
      <table hlmTable>
        <caption hlmCaption>A list of your recent invoices.</caption>
        <thead hlmTHead>
          <tr hlmTr>
            <th hlmTh class="w-[100px]">Invoice</th>
            <th hlmTh>Status</th>
            <th hlmTh>Method</th>
            <th hlmTh class="text-right">Amount</th>
          </tr>
        </thead>
        <tbody hlmTBody>
          @for (invoice of invoices; track invoice.id) {
            <tr hlmTr>
              <td hlmTd class="font-medium">{{ invoice.id }}</td>
              <td hlmTd>{{ invoice.status }}</td>
              <td hlmTd>{{ invoice.method }}</td>
              <td hlmTd class="text-right">{{ invoice.amount }}</td>
            </tr>
          }
        </tbody>
        <tfoot hlmTFoot>
          <tr hlmTr>
            <td hlmTd colspan="3">Total</td>
            <td hlmTd class="text-right">$750.00</td>
          </tr>
        </tfoot>
      </table>
    </div>
  `,
})
export class TablePreview {
  protected readonly invoices = [
    { id: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
    { id: 'INV002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
    { id: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: '$350.00' },
  ];
}

const meta: Meta<TablePreview> = {
  title: 'Components/Table',
  component: TablePreview,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<TablePreview> = {};
