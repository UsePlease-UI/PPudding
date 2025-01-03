import { AlertProvider } from 'index';

import MonthlyCalendar from '@components/Calendar/Month';
import { CalendarProvider } from '@components/useCalendar';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  argTypes: {},
  component: MonthlyCalendar,
  parameters: {
    docs: {
      argTypes: {
        sort: 'requiredFirst',
      },
    },
    layout: 'centered',
    status: {
      type: 'beta',
    },
  },
  tags: ['autodocs'],
  title: 'Calendar/Monthly Calendar',
} satisfies Meta<typeof MonthlyCalendar>;

export default meta;
type Story = StoryObj<typeof MonthlyCalendar>;

export const Default: Story = {
  args: {},
  render: function Render() {
    return (
      <div className="w-full min-w-192">
        <CalendarProvider>
          <AlertProvider>
            <MonthlyCalendar />
          </AlertProvider>
        </CalendarProvider>
      </div>
    );
  },
};
