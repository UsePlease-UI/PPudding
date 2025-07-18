import Pagination from '@components/Pagination';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  args: {
    hasFirstIcon: true,
    hasLastIcon: true,
    itemsPerPage: 10,
    pageRange: 10,
    selectedPage: 1,
    shape: 'circular',
    size: 'medium',
    totalCount: 100,
    variant: 'outlined',
  },
  argTypes: {
    className: { table: { disable: true } },
    firstIcon: {
      control: false,
      description: 'custom icon (svg element)',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    hasFirstIcon: {
      control: 'boolean',
      description: 'if true, arrow button to first page will be displayed',
      table: {
        defaultValue: {
          summary: 'true',
        },
      },
    },
    hasLastIcon: {
      control: 'boolean',
      description: 'if true, arrow button to last page will be displayed',
      table: {
        defaultValue: {
          summary: 'true',
        },
      },
    },
    itemsPerPage: {
      control: 'number',
      description: 'number of data per page',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    lastIcon: {
      control: false,
      description: 'custom icon (svg element)',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    nextIcon: {
      control: false,
      description: 'custom icon (svg element)',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    onChange: {
      control: false,
      description: 'change event handler',
      table: {
        type: {
          summary: '(newPage: number) => void',
        },
      },
    },
    pageRange: {
      control: 'number',
      description: 'number of page buttons (if set to 10, it will display buttons from 1 - 10)',
      table: {
        defaultValue: {
          summary: '10',
        },
        type: {
          summary: 'number',
        },
      },
    },
    prevIcon: {
      control: false,
      description: 'custom icon (svg element)',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    selectedPage: {
      control: 'number',
      description: 'current page number',
      table: {
        defaultValue: {
          summary: '1',
        },
        type: {
          summary: 'number',
        },
      },
    },
    shape: {
      control: {
        type: 'inline-radio',
      },
      description: 'button shape',
      options: ['rounded', 'square', 'circular'],
      table: {
        defaultValue: {
          summary: 'circular',
        },
        type: {
          summary: 'rounded | square | circular',
        },
      },
    },
    size: {
      control: {
        type: 'inline-radio',
      },
      description: 'button size',
      options: ['large', 'medium', 'small'],
      table: {
        defaultValue: {
          summary: 'medium',
        },
        type: {
          summary: 'large | medium | small',
        },
      },
    },
    totalCount: {
      control: 'number',
      description: 'total number of data',
      table: {
        defaultValue: {
          summary: '100',
        },
        type: {
          summary: 'number',
        },
      },
    },
    variant: {
      control: {
        type: 'inline-radio',
      },
      description: 'button variant',
      options: ['outlined', 'contained', 'text'],
      table: {
        defaultValue: {
          summary: 'outlined',
        },
        type: {
          summary: 'outlined | contained | text',
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
    hasFirstIcon: true,
    hasLastIcon: true,
    itemsPerPage: 10,
    pageRange: 10,
    shape: 'circular',
    size: 'medium',
    totalCount: 100,
    variant: 'outlined',
  },
  render: function Render(args) {
    return <Pagination {...args} />;
  },
};
