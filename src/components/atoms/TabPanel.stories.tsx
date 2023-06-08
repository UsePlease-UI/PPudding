/** @jsxImportSource @emotion/react */
import TabPanel from 'components/atoms/TabPanel';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Tab/TabPanel',
    component: TabPanel,
    tags: ['autodocs'],
    argTypes: {
        children: {
            type: { name: 'string', required: true },
            description: '컴포넌트',
            control: false,
            table: {
                category: 'required',
                type: { summary: 'React.ReactNode' }
            }
        },
        value: {
            type: { name: 'string', required: true },
            control: false,
            description: '선택된 탭 인덱스',
            table: {
                category: 'required',
                type: { summary: 'number' }
            }
        },
        index: {
            type: { name: 'string', required: true },
            control: false,
            description: '탭 인덱스',
            table: {
                category: 'required',
                type: { summary: 'number' }
            }
        },
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
} satisfies Meta<typeof TabPanel>;

export default meta;
type Story = StoryObj<typeof TabPanel>;

export const Default: Story = {
    render: (args) => {
        return (
            <TabPanel {...args}>
                <p>Tab Panel #1</p>
            </TabPanel>
        );
    },
    args: {
        value: 1,
        index: 1,
        customCSS: {}
    }
};
