import { DragNDrop } from '@components/WebAPI';

import { DRAG_N_DROP_LIST } from '../constants';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DragNDrop> = {
    title: 'Web API/Drag N Drop API',
    component: DragNDrop,
    tags: ['autodocs'],
    argTypes: {}
};

export default meta;
type Story = StoryObj<typeof DragNDrop>;

export const Default: Story = {
    args: {
        title: 'My Drag N Drop List',
        items: DRAG_N_DROP_LIST
    }
};
