import { useArgs } from '@storybook/preview-api';
import { fn } from '@storybook/test';

import Pagination from '@components/Pagination';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  args: {
    onChange: fn(),
    page: 1,
    pageLimit: 10,
    showFirstButton: true,
    showLastButton: true,
    totalCount: 100,
  },
  argTypes: {
    onChange: {
      control: false,
      description: 'change event handler',
      table: {
        category: 'optional',
        type: {
          summary: '(newPage: number) => void',
        },
      },
    },
    page: {
      control: 'number',
      description: 'current page number',
      table: {
        category: 'required',
        type: {
          summary: 'number',
        },
      },
    },
    pageLimit: {
      control: 'number',
      description: 'number of data per page',
      table: {
        category: 'optional',
        defaultValue: {
          summary: '10',
        },
        type: {
          summary: 'number',
        },
      },
    },
    showFirstButton: {
      control: 'boolean',
      description: 'if true, arrow button to first page will be displayed',
      table: {
        category: 'optional',
        defaultValue: {
          summary: 'true',
        },
      },
    },
    showLastButton: {
      control: 'boolean',
      description: 'if true, arrow button to last page will be displayed',
      table: {
        category: 'optional',
        defaultValue: {
          summary: 'true',
        },
      },
    },
    totalCount: {
      control: 'number',
      description: 'total number of data',
      table: {
        category: 'required',
        type: {
          summary: 'number',
        },
      },
    },
  },
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Pagination/Pagination',
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    page: 1,
    pageLimit: 10,
    showFirstButton: true,
    showLastButton: true,
    totalCount: 100,
  },
  render: function Render(args) {
    const [{ page }, updateArgs] = useArgs();

    const handleChange = (newValue: number) => {
      updateArgs({ page: newValue });
    };

    return <Pagination {...args} page={page} onChange={handleChange} />;
  },
};
