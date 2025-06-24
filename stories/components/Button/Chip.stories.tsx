import { expect, spyOn, userEvent, within } from 'storybook/test';

import Chip from '@components/Button/Chip';
import { getChipVariantStyle } from '@components/Button/Chip/styles';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  args: {
    isDeletable: false,
    label: '사탕',
    onDelete: () => console.log('Delete!'),
    value: 'candy',
    variant: 'outlined',
  },
  argTypes: {
    isDeletable: {
      control: 'boolean',
      description: 'if true, component can be deleted (delete icon will be shown)',
      table: {
        category: 'optional',
      },
    },
    label: {
      control: 'text',
      description: 'content of the component',
      table: {
        category: 'required',
      },
    },
    onClick: {
      control: false,
      description: 'click event handler',
      table: {
        category: 'optional',
        type: {
          summary: '( ) => void',
        },
      },
    },
    onDelete: {
      control: false,
      description: 'callback fired when icon button is clicked (need to set isDeletable true)',
      table: {
        category: 'optional',
        type: {
          summary: '(value: string) => void',
        },
      },
    },
    value: {
      control: 'text',
      description: 'chip value',
      table: {
        category: 'required',
        type: {
          summary: 'string',
        },
      },
    },
    variant: {
      control: {
        type: 'inline-radio',
      },
      description: 'chip variant',
      options: ['outlined', 'contained'],
      table: {
        category: 'optional',
        type: {
          summary: 'outlined | contained',
        },
      },
    },
  },
  component: Chip,
  parameters: {
    docs: {
      argTypes: {
        sort: 'requiredFirst',
      },
    },
    layout: 'centered',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const consoleSpy = spyOn(console, 'log');

    await step('chip should display label text', async () => {
      await expect(await canvas.findByText(args.label)).toBeInTheDocument();
    });
    await step(`chip variant : ${args.variant}`, async () => {
      await expect((await canvas.findByText(args.label)).parentNode).toHaveClass(
        getChipVariantStyle(args.variant) as string,
      );
    });
    if (args.isDeletable) {
      await step('if set to be deletable, chip should have a delete button', async () => {
        await expect(await canvas.findByRole('button')).toBeInTheDocument();
        await userEvent.click(canvas.getByRole('button'));
        await expect(consoleSpy).toHaveBeenCalledWith(args.value);
      });
    }
  },
  tags: ['autodocs'],
  title: 'Button/Chip',
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof Chip>;

export const Chip1Default: Story = {
  args: {
    isDeletable: false,
    label: '사탕',
    value: 'candy',
    variant: 'outlined',
  },
};

export const Chip2Clickable: Story = {
  args: {
    isDeletable: false,
    label: '초콜렛',
    onClick: () => console.log('clicked'),
    value: 'chocolate',
    variant: 'outlined',
  },
};

export const Chip3Deletable: Story = {
  args: {
    isDeletable: true,
    label: '사탕',
    onDelete: (value) => console.log(value),
    value: 'candy',
    variant: 'outlined',
  },
};
