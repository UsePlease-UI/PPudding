import { ComponentProps } from 'react';

import { expect, spyOn, userEvent, within } from '@storybook/test';

import Alert from '@components/Alert';

import { sleep } from '../../utils/common';

import type { Meta, StoryObj } from '@storybook/react';

type AlertPropsAndCustomArgs = {
  canDismiss: boolean;
  delay: number;
  variant: string;
} & ComponentProps<typeof Alert>;

const meta = {
  args: {
    canDismiss: true,
    delay: 6000,
    message: '로그인되었습니다.',
    onClose: () => console.log('Closed!'),
    variant: 'default',
  },
  argTypes: {
    canDismiss: {
      control: 'boolean',
      description: 'if true, component can be programmatically closed',
      table: {
        category: 'optional',
      },
    },
    delay: {
      control: 'number',
      description: 'duration of display',
      table: {
        category: 'optional',
      },
    },
    icon: { table: { disable: true } },
    message: {
      control: 'text',
      description: 'content of the component',
      table: {
        category: 'required',
      },
    },
    onClose: { table: { disable: true } },
    options: { table: { disable: true } },
    variant: {
      control: {
        type: 'inline-radio',
      },
      description: 'alert variant',
      options: ['default', 'success', 'error', 'info', 'warning'],
      table: {
        category: 'optional',
      },
    },
  },
  component: Alert,
  parameters: {
    docs: {
      argTypes: {
        sort: 'requiredFirst',
      },
    },
    layout: 'centered',
  },
  render: function Render({ canDismiss, delay, message, onClose, variant }) {
    return <Alert message={message} onClose={onClose} options={{ canDismiss, delay, variant }} />;
  },
  tags: ['autodocs'],
  title: 'Alert/Alert',
} satisfies Meta;

export default meta;

type Story = StoryObj<AlertPropsAndCustomArgs>;

const backgroundColor = {
  default: '#000000',
  error: '#ff2f2f',
  info: '#3b82f6',
  success: '#225cce',
  warning: '#eab308',
};

export const Default: Story = {
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const consoleSpy = spyOn(console, 'log');

    await step('displays user message', async () => {
      await expect(await canvas.findByRole('alert')).toBeInTheDocument();
      await expect(canvas.getByRole('alert')).toHaveTextContent(args.message);
    });
    await step(`variant : ${args.variant}`, async () => {
      await expect(canvas.getByRole('alert')).toHaveStyle({
        'background-color': backgroundColor[args.variant as keyof typeof backgroundColor],
      });
    });
    if (args.canDismiss) {
      await step('if dismissible, will execute function when dismissed', async () => {
        await expect(canvas.getByRole('button')).toHaveAttribute('aria-label', 'dismiss button');
        await userEvent.click(canvas.getByRole('button'));
        await expect(consoleSpy).toHaveBeenCalledWith('Closed!');
      });
    } else {
      await step(`will automatically disappear after ${args.delay}ms`, async () => {
        await sleep(args.delay || 6000);
        await expect(canvas.getByRole('alert')).not.toHaveStyle({ opacity: 1 });
      });
    }
  },
};
