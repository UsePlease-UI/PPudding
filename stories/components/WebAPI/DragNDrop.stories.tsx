import { fn } from '@storybook/test';

import DragNDrop from '@components/WebAPI/DragNDrop';

import { DRAG_N_DROP_LIST } from '../constants';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DragNDrop> = {
  args: {
    onDragOver: fn(),
    onDragStart: fn(),
    onDrop: fn(),
    options: DRAG_N_DROP_LIST,
  },
  argTypes: {
    onDragOver: {
      control: false,
      description: 'drag event handler',
      table: {
        category: 'optional',
        type: {
          summary: '(e: DragEvent<HTMLLIElement>) => void',
        },
      },
    },
    onDragStart: {
      control: false,
      description: 'drag event handler',
      table: {
        category: 'optional',
        type: {
          summary: '(e: DragEvent<HTMLLIElement>, item: { label : string; value: string; idx?: string }) => void',
        },
      },
    },
    onDrop: {
      control: false,
      description: 'drag event handler',
      table: {
        category: 'optional',
        type: {
          summary: '(e: DragEvent<HTMLLIElement>, item: { label : string; value: string; idx?: string }) => void',
        },
      },
    },
    options: {
      control: 'object',
      description: 'drag n drop options',
      table: {
        category: 'optional',
        type: {
          summary: '{ label : string; value: string; idx?: string }',
        },
      },
    },
    renderItem: {
      control: false,
      description: 'custom drag n drop list item',
      table: {
        category: 'optional',
        type: {
          summary: '() => ReactNode',
        },
      },
    },
  },
  component: DragNDrop,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Web API/Drag N Drop API',
};

export default meta;
type Story = StoryObj<typeof DragNDrop>;

export const Default: Story = {
  args: {
    options: DRAG_N_DROP_LIST,
  },
};
