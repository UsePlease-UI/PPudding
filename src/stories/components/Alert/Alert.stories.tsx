import { ComponentProps } from 'react';

import { expect, spyOn, userEvent, within } from '@storybook/test';

import Alert from '@components/Alert';

import { sleep } from '../../utils/common';

import type { Meta, StoryObj } from '@storybook/react';

type AlertPropsAndCustomArgs = ComponentProps<typeof Alert> & {
    canDismiss: boolean;
    delay: number;
    variant: string;
};

const meta = {
    title: 'Alert/Alert',
    component: Alert,
    tags: ['autodocs'],
    parameters: {
        docs: {
            argTypes: {
                sort: 'requiredFirst',
            },
        },
        layout: 'centered',
    },
    argTypes: {
        options: { table: { disable: true } },
        icon: { table: { disable: true } },
        onClose: { table: { disable: true } },
        message: {
            table: {
                category: 'required',
            },
            description: 'message to be displayed',
            control: 'text',
        },
        variant: {
            table: {
                category: 'optional',
            },
            description: 'style of toast',
            control: {
                type: 'inline-radio',
            },
            options: ['default', 'success', 'error', 'info', 'warning'],
        },
        delay: {
            table: {
                category: 'optional',
            },
            description: 'duration of display',
            control: 'number',
        },
        canDismiss: {
            table: {
                category: 'optional',
            },
            description: 'dismissible',
            control: 'boolean',
        },
    },
    args: {
        message: '로그인되었습니다.',
        variant: 'default',
        canDismiss: true,
        delay: 6000,
        onClose: () => console.log('Closed!'),
    },
    render: ({ canDismiss, delay, message, onClose, variant }) => (
        <Alert message={message} options={{ variant, delay, canDismiss }} onClose={onClose} />
    ),
} satisfies Meta;

export default meta;

type Story = StoryObj<AlertPropsAndCustomArgs>;

const backgroundColor = {
    default: '#000000',
    success: '#225cce',
    error: '#ff2f2f',
    info: '#3b82f6',
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
