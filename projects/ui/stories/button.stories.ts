import { HlmButton, HlmButtonImports } from '@gosamply/ui/button';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular-vite';

const meta: Meta<HlmButton> = {
  title: 'Components/Button',
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [HlmButtonImports] })],
  argTypes: {
    variant: { control: 'select', options: ['default', 'outline', 'secondary', 'ghost', 'destructive', 'link'] },
    size: { control: 'select', options: ['default', 'xs', 'sm', 'lg'] },
  },
  args: { variant: 'default', size: 'default' },
  render: args => ({
    props: args,
    template: `<button hlmBtn [variant]="variant" [size]="size">Button</button>`,
  }),
};

export default meta;
type Story = StoryObj<HlmButton>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => ({
    template: `
      <div class="flex flex-wrap gap-2">
        <button hlmBtn>Default</button>
        <button hlmBtn variant="secondary">Secondary</button>
        <button hlmBtn variant="outline">Outline</button>
        <button hlmBtn variant="ghost">Ghost</button>
        <button hlmBtn variant="destructive">Destructive</button>
        <button hlmBtn variant="link">Link</button>
      </div>`,
  }),
};

export const Disabled: Story = {
  render: () => ({ template: `<button hlmBtn disabled>Disabled</button>` }),
};
