import { useArgs } from 'storybook/preview-api';
import { expect, fn, within } from 'storybook/test';

import Radio from '@components/Form/Radio';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  args: {
    isDisabled: false,
    label: '빨강',
    name: 'color',
    onChange: fn(),
    position: 'start',
    size: 'medium',
    value: 'red',
  },
  argTypes: {
    currentValue: { table: { disable: true } },
    isDisabled: {
      control: 'boolean',
      description: 'if true, the component will be disabled',
    },
    label: {
      control: 'text',
      description: 'content of the component',
    },
    name: {
      control: 'text',
      description: 'name attribute of the input element',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    onChange: {
      control: false,
      description: 'change event handler',
      table: {
        type: {
          summary: '(e: ChangeEvent<HTMLInputElement>) => void',
        },
      },
    },
    position: {
      control: {
        type: 'inline-radio',
      },
      description: 'radio position',
      options: ['start', 'end'],
      table: {
        type: {
          summary: 'start | end',
        },
      },
    },
    size: {
      control: {
        type: 'inline-radio',
      },
      description: 'radio size',
      options: ['large', 'medium', 'small'],
      table: {
        type: {
          summary: 'large | medium | small',
        },
      },
    },
    value: {
      control: 'text',
      description: 'value of the component',
      table: {
        type: {
          summary: 'string',
        },
      },
      type: 'string',
    },
  },
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Form/Radio/UI - 2. Radio',
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    isDisabled: false,
    label: '빨강',
    name: 'color',
    position: 'end',
    size: 'medium',
    value: 'red',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radio1 = canvas.getByRole('radio', { name: '빨강' });
    await expect(radio1).toBeChecked();
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();

    const handleChange = (newValue: string) => {
      updateArgs({ value: newValue });
    };

    return <Radio {...args} currentValue={value} onChange={(e) => handleChange(e.currentTarget.value)} />;
  },
};
