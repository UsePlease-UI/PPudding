import { useArgs } from '@storybook/preview-api';

import TextField from '@components/Form/TextField';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  args: {
    helperText: '이름을 입력하세요.',
    isDisabled: false,
    isError: false,
    isFullWidth: false,
    isReadOnly: false,
    labelText: '이름',
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
    labelText: {
      control: 'text',
      description: 'content of label component',
      table: {
        category: 'optional',
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
    helperText: '이름을 입력하세요.',
    isDisabled: false,
    isError: false,
    isFullWidth: false,
    isReadOnly: false,
    labelText: '이름',
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();

    const handleChange = (newValue: string) => {
      updateArgs({ value: newValue });
    };

    return (
      <TextField
        {...args}
        maxLength={100}
        type="text"
        value={value}
        onChange={(e) => handleChange(e.currentTarget.value)}
        placeholder="홍길동"
      />
    );
  },
};

export const Number: Story = {
  args: {
    helperText: '최소 10, 최대 100까지 입력할 수 있습니다.',
    isDisabled: false,
    isError: false,
    isFullWidth: false,
    isReadOnly: false,
    labelText: '수량',
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();

    const handleChange = (newValue: string) => {
      updateArgs({ value: newValue });
    };

    return (
      <TextField
        {...args}
        max={100}
        min={10}
        type="number"
        value={value}
        onChange={(e) => handleChange(e.currentTarget.value)}
        placeholder="7"
      />
    );
  },
};
