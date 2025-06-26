import { ComponentProps } from 'react';

import { expect, spyOn, userEvent, within } from 'storybook/test';

import Alert from '@components/Alert';
import Button from '@components/Button/Button';
import { AlertOptionsType, useAlert } from '@components/useAlert';

import { sleep } from '../../utils/common';

import type { Meta, StoryObj } from '@storybook/react-vite';

type AlertPropsAndCustomArgs = AlertOptionsType & ComponentProps<typeof Alert>;

const meta = {
  args: {
    canDismiss: true,
    delay: Number.MAX_SAFE_INTEGER,
    message: '로그인되었습니다.',
    onClose: () => console.log('Closed!'),
    variant: 'default',
  },
  argTypes: {
    canDismiss: {
      control: 'boolean',
      description: 'if true, component can be programmatically closed',
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    delay: {
      control: 'number',
      description: 'duration of display (in seconds)',
      table: {
        defaultValue: {
          summary: '4.5',
        },
        type: {
          summary: 'number',
        },
      },
    },
    icon: {
      control: false,
      description: 'custom icon (svg element)',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    message: {
      control: 'text',
      description: 'content of the component',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    onClose: {
      control: false,
      description: 'dismiss button click event handler',
      table: {
        type: {
          summary: '() => void',
        },
      },
    },
    options: {
      control: false,
      description: 'alert options',
      table: {
        defaultValue: {
          summary: '{ canDismiss: false; delay: 4.5; variant: default }',
        },
        type: {
          summary:
            "{ canDismiss?: boolean; delay?: number; variant?: 'default' | 'error' | 'info' | 'success' | 'warning'; }",
        },
      },
    },
    variant: {
      control: {
        type: 'inline-radio',
      },
      description: 'alert variant',
      options: ['default', 'success', 'error', 'info', 'warning'],
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
    },
  },
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  render: function Render({ canDismiss, delay, message, onClose, variant }) {
    return <Alert message={message} onClose={onClose} options={{ canDismiss, delay, variant }} />;
  },
  title: 'Alert/Alert',
} satisfies Meta<AlertPropsAndCustomArgs>;

export default meta;

type Story = StoryObj<AlertPropsAndCustomArgs>;

const backgroundColor = {
  default: '#000000',
  error: '#ff2f2f',
  info: '#3b82f6',
  success: '#225cce',
  warning: '#eab308',
};

export const Example1Default: Story = {
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
        await expect(canvas.getByRole('button')).toHaveAttribute('aria-label', '알럿 닫기');
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

export const Example2ClickToAlert: Story = {
  args: {
    canDismiss: true,
    delay: 6000,
    message: '수정되었습니다.',
    variant: 'success',
  },
  render: function Render(args) {
    const { onAlert } = useAlert();

    const handleClick = () => {
      onAlert(args.message, { canDismiss: args.canDismiss, delay: args.delay, variant: args.variant });
    };

    return (
      <Button variant="outlined" onClick={handleClick}>
        수정
      </Button>
    );
  },
};
