import { useArgs } from '@storybook/preview-api';
import { expect, fn, within } from '@storybook/test';

import { Radio } from '@components/Form/Radio';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Radio> = {
  args: {
    isDisabled: false,
    label: '빨강',
    name: 'color',
    onChange: fn(),
    position: 'start',
    size: 'small',
    value: 'red',
  },
  argTypes: {
    isDisabled: {
      control: 'boolean',
      description: 'if true, the component will be disabled',
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
      type: {
        name: 'string',
        required: true,
      },
    },
    name: {
      control: 'text',
      description: 'name attribute of the input element',
      table: {
        category: 'required',
        type: {
          summary: 'string',
        },
      },
      type: {
        name: 'string',
        required: true,
      },
    },
    onChange: {
      control: false,
      description: 'change event handler',
      table: {
        category: 'optional',
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
        category: 'optional',
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
        category: 'optional',
        type: {
          summary: 'large | medium | small',
        },
      },
    },
    value: {
      control: 'text',
      description: 'value of the component',
      table: {
        category: 'optional',
        type: {
          summary: 'string',
        },
      },
      type: 'string',
    },
  },
  component: Radio,
  parameters: {
    docs: {
      argTypes: {
        exclude: ['currentValue', 'onChange'],
        sort: 'requiredFirst',
      },
      controls: {
        exclude: ['currentValue', 'onChange'],
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Form/Radio',
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    isDisabled: false,
    label: '빨강',
    name: 'color',
    size: 'small',
    value: 'red',
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();

    const handleChange = (newValue: string) => {
      updateArgs({ value: newValue });
    };

    return <Radio {...args} currentValue={value} onChange={(e) => handleChange(e.currentTarget.value)} />;
  },
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const radio1 = canvas.getByRole('radio', { name: '빨강' });
  await expect(radio1).toBeChecked();
};
