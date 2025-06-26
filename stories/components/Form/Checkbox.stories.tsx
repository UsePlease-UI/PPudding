import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';

import Checkbox from '@components/Form/Checkbox';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  args: {
    checkedIcon: null,
    icon: null,
    isDisabled: false,
    label: '사탕',
    onChange: fn(),
    position: 'end',
    size: 'medium',
    value: 'candy',
  },
  argTypes: {
    checkedIcon: {
      control: false,
      description: 'custom checked icon (svg element)',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    icon: {
      control: false,
      description: 'custom default icon (svg element)',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    isDisabled: {
      control: 'boolean',
      description: 'if true, the component will be disabled',
    },
    label: {
      control: 'text',
      description: 'content of the component',
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
      description: 'checkbox position',
      options: ['start', 'end'],
      table: {
        defaultValue: {
          summary: 'end',
        },
        type: {
          summary: 'start | end',
        },
      },
    },
    size: {
      control: {
        type: 'inline-radio',
      },
      description: 'checkbox size',
      options: ['large', 'medium', 'small'],
      table: {
        defaultValue: {
          summary: 'medium',
        },
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
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Form/Checkbox/UI - 2. Checkbox',
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    isDisabled: false,
  },
  render: function Render(args) {
    const [{ checked }, updateArgs] = useArgs();

    const handleChange = () => {
      updateArgs({ checked: !checked });
    };

    return <Checkbox {...args} checked={checked} label="사탕" value="candy" onChange={handleChange} />;
  },
};
