/** @jsxImportSource @emotion/react */
import { useState } from 'react';

import { StarIcon } from '@heroicons/react/24/outline';

import Tab from 'components/Tab/Tab';
import TabItem from 'components/Tab/TabItem';


import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Tab/TabItem',
    component: TabItem,
    tags: ['autodocs'],
    parameters: {
        docs: {
            argTypes: { exclude: 'onChange' },
            controls: { exclude: 'onChange' }
        }
    },
    argTypes: {
        label: {
            type: { name: 'string', required: true },
            control: false,
            description: '탭 Text',
            table: {
                category: 'required',
                type: { summary: 'string' }
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
        icon: {
            description: '아이콘',
            control: false,
            table: {
                category: 'optional',
                type: { summary: 'React.ReactNode' }
            }
        },
        onChange: {
            type: { name: 'string', required: false },
            control: false,
            description: '사용자가 전달하지 않는 props',
            table: {
                category: 'optional',
                type: { summary: '(newValue: number) => void' }
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
} satisfies Meta<typeof TabItem>;

export default meta;
type Story = StoryObj<typeof TabItem>;

export const Default: Story = {
    render: (args) => {
        const [value, setValue] = useState(1);

        const handleChange = (newValue: number) => {
            setValue(newValue);
        };

        return (
            <Tab aria-label="navigation" value={value} onChange={handleChange}>
                <TabItem {...args} icon={args.icon} value={value} label="1" index={1} />
                <TabItem {...args} icon={null} value={value} label="2" index={2} />
                <TabItem {...args} icon={null} value={value} label="3" index={3} />
            </Tab>
        );
    },
    args: {
        value: 1,
        label: '1',
        index: 1,
        icon: <StarIcon />,
        customCSS: {}
    }
};
