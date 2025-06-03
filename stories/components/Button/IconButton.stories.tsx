import { expect, fn, spyOn, userEvent, within } from 'storybook/test';

import { StarIcon } from '@heroicons/react/24/solid';

import IconButton from '@components/Button/IconButton';
import { getCommonButtonVariantStyle, getIconButtonSizeStyle } from '@components/Button/styles';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  args: {
    children: <StarIcon />,
    isDisabled: false,
    // https://github.com/storybookjs/storybook/issues/21551#issuecomment-1889574929
    onClick: fn(),
    shape: 'rounded',
    size: 'large',
    variant: 'outlined',
  },
  argTypes: {
    children: {
      control: false,
      description: 'content of the component (SVGElement)',
      table: {
        category: 'required',
        type: {
          summary: 'ReactNode',
        },
      },
      type: {
        name: 'function',
        required: true,
      },
    },
    isDisabled: {
      control: 'boolean',
      description: 'if true, the component will be disabled',
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
      description: 'icon button shape',
      options: ['circular', 'rounded', 'square'],
      table: {
        category: 'optional',
        type: {
          summary: 'circular | rounded | square',
        },
      },
    },
    size: {
      control: {
        type: 'inline-radio',
      },
      description: 'icon button size',
      options: ['large', 'medium', 'small', 'mini'],
      table: {
        category: 'optional',
        type: {
          summary: 'large | medium | small | mini',
        },
      },
    },
    variant: {
      control: {
        type: 'inline-radio',
      },
      description: 'icon button variant',
      options: ['outlined', 'contained', 'text'],
      table: {
        category: 'optional',
        type: {
          summary: 'outlined | contained | text',
        },
      },
    },
  },
  component: IconButton,
  parameters: {
    docs: {
      argTypes: {
        sort: 'requiredFirst',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Button/IconButton',
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    children: <StarIcon />,
    isDisabled: false,
    onClick: () => console.log('Clicked!'),
    size: 'large',
    variant: 'outlined',
  },
  render: function Render(args) {
    return (
      <IconButton aria-label="찜하기" {...args}>
        {args.children}
      </IconButton>
    );
  },
};

Default.play = async ({ args, canvasElement, step }) => {
  const canvas = within(canvasElement);
  const consoleSpy = spyOn(console, 'log');

  await step('icon button should render its children (svg icon)', async () => {
    await expect(await canvas.findByRole('button')).toBeInTheDocument();
    const element = document.getElementsByTagName('svg')[0];
    await expect(canvas.getByRole('button')).toContainElement(element);
  });

  await step(`icon button variant : ${args.variant}`, async () => {
    await expect(canvas.getByRole('button')).toHaveClass(getCommonButtonVariantStyle(args.variant) as string);
  });

  await step(`icon button size : ${args.size}`, async () => {
    await expect(canvas.getByRole('button')).toHaveClass(getIconButtonSizeStyle(args.size) as string);
  });

  if (!args.isDisabled) {
    await step('when clicked, it should fire onclick event', async () => {
      await userEvent.click(canvas.getByRole('button'));
      await expect(consoleSpy).toHaveBeenCalledWith('Clicked!');
    });
  }
};
