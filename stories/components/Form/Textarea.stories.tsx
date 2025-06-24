import { useId } from 'react';

import { useArgs } from 'storybook/preview-api';

import FormControl from '@components/Base/FormControl';
import Textarea from '@components/Form/Textarea';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  args: {
    isAutoHeight: true,
    isDisabled: false,
    isError: false,
    isReadOnly: false,
  },
  argTypes: {
    isAutoHeight: {
      control: 'boolean',
      description: 'if true, height will automatically increase, without being fixed',
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
    isError: {
      control: 'boolean',
      description: 'if true, the component will indicate error',
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
  },
  component: Textarea,
  parameters: {
    docs: {
      argTypes: {
        exclude: ['value'],
        sort: 'requiredFirst',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Form/Textarea',
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    isAutoHeight: false,
    value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();

    const handleChange = (newValue: string) => {
      updateArgs({ value: newValue });
    };

    return (
      <Textarea
        {...args}
        maxLength={100}
        value={value}
        isAutoHeight
        onChange={(e) => handleChange(e.currentTarget.value)}
        placeholder="Lorem Ipsum..."
      />
    );
  },
};

export const AutoHeight: Story = {
  args: {
    isAutoHeight: true,
    value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();

    const inputId = useId();
    const helperTextId = useId();

    const handleChange = (newValue: string) => {
      updateArgs({ value: newValue });
    };
    return (
      <FormControl helperText="Type Lorem Ipsum" helperTextId={helperTextId} inputId={inputId} labelText="Lorem Ipsum">
        <Textarea
          {...args}
          aria-describedby={helperTextId}
          id={inputId}
          maxLength={2000}
          value={value}
          onChange={(e) => handleChange(e.currentTarget.value)}
          placeholder="Lorem Ipsum..."
        />
      </FormControl>
    );
  },
};
