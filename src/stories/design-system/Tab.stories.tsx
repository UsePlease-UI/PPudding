/** @jsxImportSource @emotion/react */
import { useState } from 'react';

import TabItem from 'components/atoms/TabItem';
import Tab from 'components/molecules/Tab';

import { css } from '@emotion/react';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Design System/Molecules/Tab/Tab',
    component: Tab,
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
        onChange: {
            type: { name: 'string', required: true },
            control: false,
            description: 'Change Event Handler',
            table: {
                category: 'required',
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
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof Tab>;

const tabStyle = css({
    width: '100%',
    minWidth: 1024,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 10,
    border: '1px solid #eeeeee',
    overflow: 'hidden',
    boxShadow: '0 0 8px 0px #eeeeee'
});

export const Default: Story = {
    render: (args) => {
        const [value, setValue] = useState(1);

        const handleChange = (newValue: number) => {
            setValue(newValue);
        };

        return (
            <div css={tabStyle}>
                <Tab {...args} aria-label="navigation" value={value} onChange={handleChange}>
                    <TabItem label="1" value={value} index={1} />
                    <TabItem label="2" value={value} index={2} />
                    <TabItem label="3" value={value} index={3} />
                </Tab>
            </div>
        );
    },
    args: {
        value: 1,
        customCSS: {}
    }
};
