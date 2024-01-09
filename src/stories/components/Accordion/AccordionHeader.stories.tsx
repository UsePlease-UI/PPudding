import { Accordion, AccordionHeader } from 'components/Accordion';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Accordion/AccordionHeader',
    component: AccordionHeader,
    tags: ['autodocs'],
    argTypes: {
        children: {
            type: { name: 'string', required: true },
            control: 'text',
            description: '헤더 텍스트 | 컴포넌트',
            table: {
                category: 'required',
                type: { summary: 'React.ReactNode' }
            }
        },
        index: {
            type: { name: 'string', required: true },
            control: 'number',
            description: 'Accordion 번호 (아이디 및 aria에 사용)',
            table: {
                category: 'required',
                type: { summary: 'number' }
            }
        },
        hasIcon: {
            control: { type: 'boolean' },
            description: '아이콘 사용여부',
            table: {
                category: 'optional',
                type: { summary: 'boolean' }
            }
        },
        icon: {
            control: false,
            description: '아이콘',
            table: {
                category: 'optional',
                type: { summary: 'React.ReactNode' }
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
} satisfies Meta<typeof AccordionHeader>;

export default meta;
type Story = StoryObj<typeof AccordionHeader>;

export const Default: Story = {
    render: (args) => {
        return (
            <Accordion>
                <AccordionHeader {...args}>{args.children}</AccordionHeader>
            </Accordion>
        );
    },
    args: {
        children: 'Question 1',
        index: 1,
        hasIcon: true,
        customCSS: {}
    }
};
