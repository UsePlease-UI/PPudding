import { expect, spyOn, userEvent, within } from '@storybook/test';

import Chip from '@components/Button/Chip';
import { getVariantStyle } from '@components/Button/Chip/styles';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Chip> = {
    title: 'Button/Chip',
    component: Chip,
    tags: ['autodocs'],
    parameters: {
        docs: {
            argTypes: {
                sort: 'requiredFirst'
            }
        },
        layout: 'centered'
    },
    argTypes: {
        label: {
            table: {
                category: 'required'
            },
            control: 'text',
            description: 'displayed content'
        },
        value: { table: { disable: true } },
        onDelete: { table: { disable: true } },
        variant: {
            table: {
                category: 'optional'
            },
            description: 'style of the chip',
            control: {
                type: 'inline-radio'
            },
            options: ['outlined', 'contained', 'text']
        },
        isDeletable: {
            table: {
                category: 'optional'
            },
            control: 'boolean',
            description: 'can be deleted'
        }
    },
    play: async ({ args, canvasElement, step }) => {
        const canvas = within(canvasElement);
        const consoleSpy = spyOn(console, 'log');

        await step('chip should display label text', async () => {
            await expect(await canvas.findByText(args.label)).toBeInTheDocument();
        });
        await step(`chip variant : ${args.variant}`, async () => {
            await expect((await canvas.findByText(args.label)).parentNode).toHaveClass(
                getVariantStyle(args.variant) as string
            );
        });
        if (args.isDeletable) {
            await step('if set to be deletable, chip should have a delete button', async () => {
                await expect(await canvas.findByRole('button')).toBeInTheDocument();
                await userEvent.click(canvas.getByRole('button'));
                await expect(consoleSpy).toHaveBeenCalledWith(args.value);
            });
        }
    }
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
    args: {
        label: '사탕',
        value: 'candy',
        variant: 'outlined',
        isDeletable: false
    }
};

export const Deletable: Story = {
    args: {
        label: '사탕',
        value: 'candy',
        variant: 'outlined',
        isDeletable: true,
        onDelete: (value) => console.log(value)
    }
};
