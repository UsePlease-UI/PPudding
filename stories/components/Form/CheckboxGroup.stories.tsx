import { expect, within } from 'storybook/test';

import Checkbox from '@components/Form/Checkbox';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  args: {
    children: null,
    gap: 10,
    isRow: true,
  },
  argTypes: {
    children: {
      control: false,
      description: 'radio component',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    className: { table: { disable: true } },
    gap: {
      control: 'number',
      description: 'horizontal / vertical spacing of the component',
    },
    isRow: {
      control: 'boolean',
      description: 'if true, the component be shown horizontally',
    },
  },
  component: Checkbox.Group,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Form/Checkbox/UI - 1. Checkbox Group',
} satisfies Meta<typeof Checkbox.Group>;

export default meta;

type Story = StoryObj<typeof Checkbox.Group>;

export const Default: Story = {
  args: {
    gap: 10,
    isRow: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkboxGroup = canvas.getByRole('group');
    await expect(checkboxGroup).toBeInTheDocument();
    await expect(checkboxGroup).toHaveStyle('flex-direction: row');

    const checkbox1 = canvas.getByRole('checkbox', { name: '사탕' });
    await expect(checkbox1).toBeChecked();
    const checkbox2 = canvas.getByRole('checkbox', { name: '초콜렛' });
    await expect(checkbox2).not.toBeChecked();
  },
  render: function Render(args) {
    return (
      <Checkbox.Group {...args}>
        <Checkbox defaultChecked label="사탕" value="candy" />
        <Checkbox label="초콜렛" value="blue" />
      </Checkbox.Group>
    );
  },
};
