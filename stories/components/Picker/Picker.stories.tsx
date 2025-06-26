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
    labelText: {
      control: 'text',
      description: 'content of label component',
    },
    maxDate: {
      control: 'date',
      description: 'max date',
      table: {
        type: {
          summary: 'Date | null',
        },
      },
    },
    minDate: {
      control: 'date',
      description: 'min date',
      table: {
        type: {
          summary: 'Date | null',
        },
      },
    },
    onCancel: {
      control: false,
      description: 'callback fired when cancel button (취소) is clicked',
    },
    onChange: {
      control: false,
      description: 'change event handler',
      table: {
        type: {
          summary: '(date: Date) => void',
        },
      },
    },
    onSelect: {
      control: false,
      description: 'callback fired when date is selected',
      table: {
        type: {
          summary: '(date: Date | null) => void',
        },
      },
    },
    placeholder: {
      control: 'text',
      description: 'a hint that will be displayed until user enters a value',
    },
    showMonthPicker: {
      control: false,
      description: 'if true, date picker will be rendered as month picker',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    value: {
      control: 'date',
      description: 'selected date',
      table: {
        type: {
          summary: 'Date | null',
        },
      },
    },
  },
  component: Picker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Picker/Picker',
} satisfies Meta<typeof Picker>;

export default meta;

type Story = StoryObj<ComponentProps<typeof Picker>>;

export const Example1DatePicker: Story = {
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

export const Example2MonthPicker: Story = {
  args: {
    dateFormat: 'YYYY-MM',
    maxDate: new Date('2026-01-01'),
    minDate: new Date(),
    placeholder: 'YYYY-MM',
    showMonthPicker: true,
    value: dayjs().add(7, 'day').toDate(),
  },
};
