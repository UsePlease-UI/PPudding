import { expect, spyOn, userEvent, within } from '@storybook/test';

import { DeleteFilled } from '@fluentui/react-icons';

import Button from '@components/Button/Button';
import { getShapeStyle, getSizeStyle, getVariantStyle } from '@components/Button/styles';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Button/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      argTypes: {
        sort: 'requiredFirst',
      },
    },
    layout: 'centered',
  },
  args: {
    children: '삭제',
    startIcon: <DeleteFilled />,
    size: 'large',
    variant: 'outlined',
    shape: 'rounded',
    isDisabled: false,
    isFullWidth: false,
    onClick: () => console.log('Clicked!'),
  },
  argTypes: {
    startIcon: { table: { disable: true } },
    endIcon: { table: { disable: true } },
    onClick: { table: { disable: true } },
    children: {
      table: {
        category: 'required',
      },
      description: 'content of button',
      control: 'text',
    },
    isDisabled: {
      table: {
        category: 'optional',
      },
      control: 'boolean',
      description: 'disabled state',
    },
    isFullWidth: {
      table: {
        category: 'optional',
      },
      control: 'boolean',
      description: 'determines width of the button',
    },
    variant: {
      table: {
        category: 'optional',
      },
      description: 'style of the button',
      control: {
        type: 'inline-radio',
      },
      options: ['outlined', 'contained', 'text'],
    },
    size: {
      table: {
        category: 'optional',
      },
      description: 'size of the button',
      control: {
        type: 'inline-radio',
      },
      options: ['large', 'medium', 'small'],
    },
    shape: {
      table: {
        category: 'optional',
      },
      description: 'shape of the button',
      control: {
        type: 'inline-radio',
      },
      options: ['rounded', 'square', 'circular'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const consoleSpy = spyOn(console, 'log');

    await step('button should render its children (text or node)', async () => {
      await expect(await canvas.findByRole('button')).toBeInTheDocument();
      await expect(canvas.getByRole('button')).toHaveTextContent(args.children as string);
    });
    await step(`button variant : ${args.variant}`, async () => {
      await expect(canvas.getByRole('button')).toHaveClass(getVariantStyle(args.variant) as string);
    });
    await step(`button shape : ${args.shape}`, async () => {
      await expect(canvas.getByRole('button')).toHaveClass(getShapeStyle(args.shape) as string);
    });
    if (args.isFullWidth) {
      await step(`when set to full width, its width is overridden to fit the width of its parent`, async () => {
        await expect(canvas.getByRole('button')).toHaveClass('w-full');
      });
    } else {
      await step(`button size : ${args.size}`, async () => {
        await expect(canvas.getByRole('button')).toHaveClass(getSizeStyle(args.size) as string);
      });
    }
    await step('when clicked, it should fire onclick event', async () => {
      await userEvent.click(canvas.getByRole('button'));
      await expect(consoleSpy).toHaveBeenCalledWith('Clicked!');
    });
  },
};
