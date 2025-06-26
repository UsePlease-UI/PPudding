import { useId } from 'react';

import { useArgs } from 'storybook/preview-api';

import FormControl from '@components/Base/FormControl';
import Select from '@components/Combobox/Select';

import { OPTIONS } from '../../constants';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  args: {
    isDisabled: false,
    isReadOnly: false,
    options: OPTIONS,
    placeholder: '선택',
    selected: '',
  },
  argTypes: {
    isDisabled: {
      control: 'boolean',
      description: 'if true, the component will be disabled',
    },
    isReadOnly: {
      control: 'boolean',
      description: 'if true, user cannot change the value of the component',
    },
    onChange: {
      control: false,
      description: 'change event handler',
      table: {
        type: {
          summary: '(selected: string) => void',
        },
      },
    },
    options: {
      control: 'object',
      description: 'select options',
      table: {
        type: {
          summary: '{ label : string; value: string; idx?: string }',
        },
      },
    },
    placeholder: {
      control: 'text',
      description: 'a hint that will be displayed until user enters a value',
    },
    selected: {
      control: false,
      description: 'selected value',
      table: {
        type: {
          summary: 'string',
        },
      },
      type: 'string',
    },
  },
  component: Select,
  parameters: {
    layout: 'centered',
  },
  title: 'Combobox/Select',
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    isDisabled: false,
    isReadOnly: false,
    options: OPTIONS,
    placeholder: '선택',
  },
  render: function Render(args) {
    const [{ selected }, updateArgs] = useArgs();

    const buttonId = useId();
    const labelTextId = useId();
    const helperTextId = useId();

    const handleChange = (newSelected: string) => {
      updateArgs({ selected: newSelected });
    };

    return (
      <FormControl
        helperText="하나의 값을 선택하세요."
        helperTextId={helperTextId}
        inputId={buttonId}
        labelText="한식 메뉴 추천"
        labelTextId={labelTextId}
      >
        <Select
          {...args}
          aria-describedby={helperTextId}
          aria-labelledby={labelTextId}
          id={buttonId}
          selected={selected}
          onChange={handleChange}
        />
      </FormControl>
    );
  },
};
