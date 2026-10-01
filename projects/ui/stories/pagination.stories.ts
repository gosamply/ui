import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular-vite';
import { Component, signal } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HlmPaginationImports } from '@gosamply/ui/pagination';

@Component({
  selector: 'spartan-pagination-preview',
  imports: [HlmPaginationImports],
  template: `
    <nav hlmPagination>
      <ul hlmPaginationContent>
        <li hlmPaginationItem><hlm-pagination-previous link="." /></li>
        <li hlmPaginationItem><a hlmPaginationLink link=".">1</a></li>
        <li hlmPaginationItem><a hlmPaginationLink link="." isActive>2</a></li>
        <li hlmPaginationItem><a hlmPaginationLink link=".">3</a></li>
        <li hlmPaginationItem><hlm-pagination-ellipsis /></li>
        <li hlmPaginationItem><hlm-pagination-next link="." /></li>
      </ul>
    </nav>
  `,
})
export class PaginationPreview {}

@Component({
  selector: 'spartan-numbered-pagination-preview',
  imports: [HlmPaginationImports],
  template: `
    <hlm-numbered-pagination [(currentPage)]="page" [(itemsPerPage)]="pageSize" [totalItems]="500" />
  `,
})
export class NumberedPaginationPreview {
  protected readonly page = signal(1);
  protected readonly pageSize = signal(10);
}

const meta: Meta<PaginationPreview> = {
  title: 'Components/Pagination',
  component: PaginationPreview,
  tags: ['autodocs'],
  // hlmPaginationLink uses RouterLink as a host directive.
  decorators: [applicationConfig({ providers: [provideRouter([])] })],
};

export default meta;

export const Default: StoryObj<PaginationPreview> = {};

export const Numbered: StoryObj<NumberedPaginationPreview> = {
  render: () => ({ component: NumberedPaginationPreview }),
};
