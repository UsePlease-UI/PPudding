import { useArgs } from 'storybook/preview-api';

import FormControl from '@components/Base/FormControl';
import TextField from '@components/Form/TextField';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  args: {
    isDisabled: false,
    isError: false,
    isFullWidth: false,
    isReadOnly: false,
  },
  argTypes: {
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
    isFullWidth: {
      control: 'boolean',
      description: 'if true, the component will take up the full width of its container',
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
    type: {
      table: {
        disable: true,
      },
    },
  },
  component: TextField,
  parameters: {
    docs: {
      argTypes: {
        exclude: ['type'],
        sort: 'requiredFirst',
      },
      controls: {
        exclude: ['type'],
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Form/TextField',
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    isDisabled: false,
    isError: false,
    isFullWidth: false,
    isReadOnly: false,
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();

    const handleChange = (newValue: string) => {
      updateArgs({ value: newValue });
    };

    return (
      <FormControl helperText="이름을 입력하세요." helperTextId="name-helper-text" labelText="이름">
        <TextField
          {...args}
          aria-describedby="name-helper-text"
          maxLength={100}
          type="text"
          value={value}
          onChange={(e) => handleChange(e.currentTarget.value)}
          placeholder="홍길동"
        />
      </FormControl>
    );
  },
};

export const Number: Story = {
  args: {
    isDisabled: false,
    isError: false,
    isFullWidth: false,
    isReadOnly: false,
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();

    const handleChange = (newValue: string) => {
      updateArgs({ value: newValue });
    };

    return (
      <FormControl
        helperText="최소 10, 최대 100까지 입력할 수 있습니다."
        helperTextId="quantity-helper-text"
        labelText="수량"
      >
        <TextField
          {...args}
          aria-describedby="helper-quantity-text"
          max={100}
          min={10}
          type="number"
          value={value}
          onChange={(e) => handleChange(e.currentTarget.value)}
          placeholder="7"
        />
      </FormControl>
    );
  },
};
