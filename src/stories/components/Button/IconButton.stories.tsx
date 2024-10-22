import { expect, fn, userEvent, within } from '@storybook/test';

import { StarFilled } from '@fluentui/react-icons';

import IconButton from '@components/Button/IconButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Button/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { table: { disable: true } },
    onClick: { table: { disable: true } },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  render: (args) => <IconButton {...args}>{args.children}</IconButton>,
  args: {
    'aria-label': 'Starred',
    children: <StarFilled />, // arg 순서를 위해서
    type: 'button',
    isDisabled: false,
    size: 'large',
    variant: 'outlined',
    // https://github.com/storybookjs/storybook/issues/21551#issuecomment-1889574929
    onClick: fn(),
  },
};

Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button');
  await expect(button).toHaveStyle('height: 24px');
  await userEvent.click(button);
  await expect(args.onClick).toHaveBeenCalled();
};
