/** @jsxImportSource @emotion/react */
import Skeleton from '@atoms/Skeleton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Design System/Atoms/Loader/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
    argTypes: {
        customCSS: {
            control: { type: 'object' },
            description: 'Custom CSS',
            table: {
                category: 'style',
                defaultValue: { summary: '{}' },
                type: { summary: 'CSSInterpolation' }
            }
        }
    }
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
    args: {
        customCSS: { width: 500, height: 40, backgroundColor: 'gray' }
    }
};
