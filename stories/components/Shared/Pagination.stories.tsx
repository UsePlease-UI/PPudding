import Pagination from '@components/Shared/Pagination';

import type { Meta, StoryObj } from '@storybook/react';

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
    className: {
      table: {
        disable: true,
      },
    },
    firstIcon: {
      control: false,
      description: 'custom icon (svg element)',
      table: {
        category: 'optional',
        type: {
          summary: 'ReactNode',
        },
      },
    },
    hasFirstIcon: {
      control: 'boolean',
      description: 'if true, arrow button to first page will be displayed',
      table: {
        category: 'optional',
        defaultValue: {
          summary: 'true',
        },
      },
    },
    hasLastIcon: {
      control: 'boolean',
      description: 'if true, arrow button to last page will be displayed',
      table: {
        category: 'optional',
        defaultValue: {
          summary: 'true',
        },
      },
    },
    itemsPerPage: {
      control: 'number',
      description: 'number of data per page',
      table: {
        category: 'optional',
        type: {
          summary: 'number',
        },
      },
    },
    lastIcon: {
      control: false,
      description: 'custom icon (svg element)',
      table: {
        category: 'optional',
        type: {
          summary: 'ReactNode',
        },
      },
    },
    nextIcon: {
      control: false,
      description: 'custom icon (svg element)',
      table: {
        category: 'optional',
        type: {
          summary: 'ReactNode',
        },
      },
    },
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
    pageRange: {
      control: 'number',
      description: 'number of page buttons (if set to 10, it will display buttons from 1 - 10)',
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
    prevIcon: {
      control: false,
      description: 'custom icon (svg element)',
      table: {
        category: 'optional',
        type: {
          summary: 'ReactNode',
        },
      },
    },
    selectedPage: {
      control: 'number',
      description: 'current page number',
      table: {
        category: 'optional',
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
        category: 'optional',
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
        category: 'optional',
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
        category: 'optional',
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
        category: 'optional',
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
    docs: {
      argTypes: {
        sort: 'requiredFirst',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Shared/Pagination',
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
