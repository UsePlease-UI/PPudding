import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';

import { Checkbox } from '@components/Form/Checkbox';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Checkbox> = {
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
        category: 'optional',
        type: {
          summary: 'ReactNode',
        },
      },
    },
    icon: {
      control: false,
      description: 'custom default icon (svg element)',
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
      description: 'checkbox position',
      options: ['start', 'end'],
      table: {
        category: 'optional',
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
        category: 'optional',
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
        category: 'optional',
        type: {
          summary: 'string',
        },
      },
      type: 'string',
    },
  },
  component: Checkbox,
  parameters: {
    docs: {
      argTypes: {
        sort: 'requiredFirst',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Form/Checkbox',
};

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
