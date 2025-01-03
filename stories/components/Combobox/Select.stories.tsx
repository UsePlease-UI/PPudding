import { useArgs } from '@storybook/preview-api';

import Select from '@components/Combobox/Select';
import { OptionsType } from '@components/types';

import { OPTIONS } from '../constants';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  args: {
    helperText: '하나의 값을 선택해 주세요.',
    isDisabled: false,
    isReadOnly: false,
    label: '',
    labelText: 'test',
    options: OPTIONS,
    placeholder: '전체',
    value: '',
  },
  argTypes: {
    helperText: {
      control: 'text',
      description: 'extra description of the component',
      table: {
        category: 'optional',
      },
    },
    isDisabled: {
      control: 'boolean',
      description: 'if true, the component will be disabled',
      table: {
        category: 'optional',
      },
    },
    isReadOnly: {
      control: 'boolean',
      description: 'if true, user cannot change the value of the component',
      table: {
        category: 'optional',
      },
    },
    label: {
      control: false,
      description: 'content of the component',
      table: {
        category: 'required',
      },
      type: 'string',
    },
    labelText: {
      control: 'text',
      description: 'content of label component',
      table: {
        category: 'optional',
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
    options: {
      control: 'object',
      description: 'select options',
      table: {
        category: 'optional',
        type: {
          summary: '{ label : string; value: string; idx?: string }',
        },
      },
    },
    placeholder: {
      control: 'text',
      description: 'a hint that will be displayed until user enters a value',
      table: {
        category: 'optional',
      },
    },
    value: {
      control: false,
      description: 'selected value',
      table: {
        category: 'required',
        type: {
          summary: 'string',
        },
      },
      type: 'string',
    },
  },
  component: Select,
  parameters: {
    docs: {
      argTypes: {
        sort: 'requiredFirst',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Combobox/Select',
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    helperText: '하나의 값을 선택하세요.',
    isDisabled: false,
    isReadOnly: false,
    labelText: 'test',
    options: OPTIONS,
    placeholder: '전체',
  },
  render: function Render(args) {
    const [{ label, options, value }, updateArgs] = useArgs();

    const handleChange = (newValue: string) => {
      updateArgs({ label: options.filter((val: OptionsType) => val.value === newValue)?.[0]?.label, value: newValue });
    };

    return <Select {...args} label={label} value={value} onChange={(e) => handleChange(e.currentTarget.value)} />;
  },
};
