import { ComponentProps } from 'react';

import dayjs from 'dayjs';

import Picker from '@components/Picker';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  argTypes: {
    dateFormat: {
      control: 'text',
      description: 'format of date displayed',
      table: {
        category: 'optional',
        defaultValue: {
          summary: 'YYYY-MM-DD',
        },
        type: {
          summary: 'text',
        },
      },
    },
    helperText: {
      control: 'text',
      description: 'extra description of the component',
      table: {
        category: 'optional',
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
    labelText: {
      control: 'text',
      description: 'content of label component',
      table: {
        category: 'optional',
      },
    },
    maxDate: {
      control: 'date',
      description: 'max date',
      table: {
        category: 'optional',
        type: {
          summary: 'Date | null',
        },
      },
    },
    minDate: {
      control: 'date',
      description: 'min date',
      table: {
        category: 'optional',
        type: {
          summary: 'Date | null',
        },
      },
    },
    onCancel: {
      control: {
        disable: true,
      },
      description: 'callback fired when cancel button (취소) is clicked',
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
          summary: '(date: Date) => void',
        },
      },
    },
    onSelect: {
      control: false,
      description: 'callback fired when date is selected',
      table: {
        category: 'optional',
        type: {
          summary: '(date: Date | null) => void',
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
    showMonthPicker: {
      control: {
        disable: true,
      },
      description: 'if true, date picker will be rendered as month picker',
      table: {
        category: 'optional',
        defaultValue: {
          summary: 'false',
        },
      },
    },
    value: {
      control: 'date',
      description: 'selected date',
      table: {
        category: 'optional',
        type: {
          summary: 'Date | null',
        },
      },
    },
  },
  component: Picker,
  parameters: {
    docs: {
      argTypes: {
        sort: 'requiredFirst',
      },
    },
    layout: 'centered',
  },
  render: function Render(args) {
    return <Picker {...args} />;
  },
  tags: ['autodocs'],
  title: 'Picker/Picker',
} satisfies Meta<typeof Picker>;

export default meta;

type Story = StoryObj<ComponentProps<typeof Picker>>;

export const DatePicker: Story = {
  args: {
    dateFormat: 'YYYY-MM-DD',
    helperText: '시작일을 선택해 주세요.',
    labelText: '날짜',
    maxDate: new Date('2026-01-01'),
    minDate: new Date(),
    placeholder: '날짜를 선택해 주세요.',
    value: dayjs().add(7, 'day').toDate(),
  },
};

export const MonthPicker: Story = {
  args: {
    dateFormat: 'YYYY-MM',
    maxDate: new Date('2026-01-01'),
    minDate: new Date(),
    placeholder: 'YYYY-MM',
    showMonthPicker: true,
    value: dayjs().add(7, 'day').toDate(),
  },
};
