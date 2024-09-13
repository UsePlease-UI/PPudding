import { ComponentProps } from 'react';

import dayjs from 'dayjs';

import Picker from '@components/Picker';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Picker/Date Picker',
    component: Picker,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        docs: {
            argTypes: {
                sort: 'requiredFirst',
            },
        },
    },
    argTypes: {
        showMonthPicker: { table: { disable: true } },
        icon: { table: { disable: true } },
        onChange: { table: { disable: true } },
        onSelect: { table: { disable: true } },
        onCancel: { table: { disable: true } },
        value: {
            table: { category: 'optional' },
            description: 'selected date',
            control: 'date',
        },
        minDate: {
            table: { category: 'optional' },
            description: 'max date',
            control: 'date',
        },
        maxDate: {
            table: { category: 'optional' },
            description: 'max date',
            control: 'date',
        },
        dateFormat: {
            table: { category: 'optional' },
            description: 'date format',
            control: 'text',
        },
        placeholder: {
            table: { category: 'optional' },
            description: 'placeholder',
            control: 'text',
        },
        labelText: {
            table: { category: 'optional' },
            description: 'label',
            control: 'text',
        },
        helperText: {
            table: { category: 'optional' },
            description: 'helper text',
            control: 'text',
        },
    },
    render: (args) => (
        <div className="flex size-full min-h-screen items-start justify-center p-20">
            <Picker {...args} />
        </div>
    ),
} satisfies Meta;

export default meta;

type Story = StoryObj<ComponentProps<typeof Picker>>;

export const DatePicker: Story = {
    args: {
        labelText: '날짜',
        helperText: '시작일을 선택해 주세요.',
        placeholder: '날짜를 선택해 주세요.',
        dateFormat: 'YYYY-MM-DD',
        maxDate: new Date('2025-01-01'),
        minDate: new Date(),
        value: dayjs().add(7, 'day').toDate(),
    },
};

export const MonthPicker: Story = {
    args: {
        showMonthPicker: true,
        placeholder: 'YYYY-MM',
        dateFormat: 'YYYY-MM',
        maxDate: new Date('2025-01-01'),
        minDate: new Date(),
        value: dayjs().add(7, 'day').toDate(),
    },
};
