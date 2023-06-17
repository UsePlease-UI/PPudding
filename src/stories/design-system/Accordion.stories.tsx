import { useState } from 'react';

import Accordion from '@molecules/Accordion';
import AccordionHeader, { AccordionHeaderType } from '@molecules/AccordionHeader';
import AccordionPanel, { AccordionPanelType } from '@molecules/AccordionPanel';
import { Default as AccordionHeaderDefault } from '@stories/design-system/AccordionHeader.stories';
import { Default as AccordionPanelDefault } from '@stories/design-system/AccordionPanel.stories';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Design System/Atoms/Accordion/Accordion',
    component: Accordion,
    tags: ['autodocs'],
    argTypes: {
        children: {
            type: { name: 'string', required: true },
            control: false,
            description: '컴포넌트',
            table: {
                category: 'required',
                type: { summary: 'React.ReactNode' }
            }
        },
        isExpanded: {
            control: false,
            description: 'Panel 선택여부',
            table: {
                category: 'optional',
                type: { summary: 'boolean' }
            }
        },
        onChange: {
            control: false,
            description: 'Change Event Handler',
            table: {
                category: 'optional',
                type: {
                    summary:
                        '(selectedPanel: string) => (event: React.MouseEvent<HTMLButtonElement>, isExpanded: boolean) => void'
                }
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
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
    render: ({ customCSS }) => {
        return (
            <Accordion customCSS={customCSS}>
                <AccordionHeader {...(AccordionHeaderDefault.args as AccordionHeaderType)} />
                <AccordionPanel {...(AccordionPanelDefault.args as AccordionPanelType)} />
            </Accordion>
        );
    },
    args: {
        // eslint-disable-next-line react/jsx-no-useless-fragment
        children: <></>,
        customCSS: {}
    }
};

export const Controlled: Story = {
    render: (args) => {
        const [panel, setPanel] = useState('panel1');

        const handleChange =
            (selectedPanel: string) => (_event: React.MouseEvent<HTMLButtonElement>, isExpanded: boolean) => {
                // eslint-disable-next-line no-console
                console.log('i am controlled!', selectedPanel);
                // eslint-disable-next-line no-console
                console.log('i am currently expanded', isExpanded);
                setPanel(selectedPanel);
            };

        return (
            <Accordion {...args} isExpanded={panel === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionHeader {...(AccordionHeaderDefault.args as AccordionHeaderType)} />
                <AccordionPanel {...(AccordionPanelDefault.args as AccordionPanelType)} />
            </Accordion>
        );
    },
    args: {
        // eslint-disable-next-line react/jsx-no-useless-fragment
        children: <></>,
        isExpanded: false,
        customCSS: {}
    }
};
