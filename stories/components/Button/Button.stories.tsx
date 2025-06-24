import { expect, spyOn, userEvent, within } from 'storybook/test';

import { TrashIcon } from '@heroicons/react/24/solid';

import Button from '@components/Button/Button';
import { getButtonSizeStyle } from '@components/Button/Button/styles';
import { getCommonButtonShapeStyle, getCommonButtonVariantStyle } from '@components/Button/styles';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  args: {
    children: '삭제',
    endIcon: null,
    isDisabled: false,
    isFullWidth: false,
    onClick: () => console.log('Clicked!'),
    shape: 'rounded',
    size: 'large',
    startIcon: null,
    variant: 'outlined',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'content of the component',
      table: {
        category: 'required',
        type: {
          summary: 'ReactNode',
        },
      },
    },
    endIcon: {
      control: false,
      description: 'icon (svg element) placed after children',
      table: {
        category: 'optional',
        type: {
          summary: 'ReactNode',
        },
      },
    },
    isDisabled: {
      control: 'boolean',
      description: 'if true, the component will be disabled',
      table: {
        category: 'optional',
      },
    },
    isFullWidth: {
      control: 'boolean',
      description: 'if true, the component will take up the full width of its container',
      table: {
        category: 'optional',
      },
    },
    onClick: {
      control: false,
      description: 'click event handler',
      table: {
        category: 'optional',
        type: {
          summary: '(e: MouseEvent<ButtonElement>) => void',
        },
      },
    },
    shape: {
      control: {
        type: 'inline-radio',
      },
      description: 'button shape',
      options: ['rounded', 'square', 'circular'],
      table: {
        category: 'optional',
        type: {
          summary: 'rounded | square | circular',
        },
      },
    },
    size: {
      control: {
        type: 'inline-radio',
      },
      description: 'button size',
      options: ['large', 'medium', 'small'],
      table: {
        category: 'optional',
        type: {
          summary: 'large | medium | small',
        },
      },
    },
    startIcon: {
      control: false,
      description: 'icon (svg element) placed before children',
      table: {
        category: 'optional',
        type: {
          summary: 'ReactNode',
        },
      },
    },
    variant: {
      control: {
        type: 'inline-radio',
      },
      description: 'button variant',
      options: ['outlined', 'contained', 'text'],
      table: {
        category: 'optional',
        type: {
          summary: 'outlined | contained | text',
        },
      },
    },
  },
  component: Button,
  parameters: {
    docs: {
      argTypes: {
        sort: 'requiredFirst',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Button/Button',
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Button1Default: Story = {
  args: {
    children: '제출',
    isFullWidth: true,
    size: 'large',
    variant: 'contained',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const consoleSpy = spyOn(console, 'log');

    await step('button should render its children (text or node)', async () => {
      await expect(await canvas.findByRole('button')).toBeInTheDocument();
      await expect(canvas.getByRole('button')).toHaveTextContent(args.children as string);
    });

    await step(`button variant : ${args.variant}`, async () => {
      await expect(canvas.getByRole('button')).toHaveClass(getCommonButtonVariantStyle(args.variant) as string);
    });

    await step(`button shape : ${args.shape}`, async () => {
      await expect(canvas.getByRole('button')).toHaveClass(getCommonButtonShapeStyle(args.shape) as string);
    });

    if (args.isFullWidth) {
      await step(`when set to full width, its width is overridden to fit the width of its parent`, async () => {
        await expect(canvas.getByRole('button')).toHaveClass('w-full');
      });
    } else {
      await step(`button size : ${args.size}`, async () => {
        await expect(canvas.getByRole('button')).toHaveClass(getButtonSizeStyle(args.size) as string);
      });
    }

    if (!args.isDisabled) {
      await step('when clicked, it should fire onclick event', async () => {
        await userEvent.click(canvas.getByRole('button'));
        await expect(consoleSpy).toHaveBeenCalledWith('Clicked!');
      });
    }
  },
};

export const Button2WithIcon: Story = {
  args: {
    startIcon: <TrashIcon />,
  },
};
