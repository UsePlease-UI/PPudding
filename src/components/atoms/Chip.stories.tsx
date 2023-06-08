import Chip from 'components/atoms/Chip';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Chip> = {
    title: 'Form/Chip',
    component: Chip,
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        label: {
            type: { name: 'string', required: true },
            description: '텍스트 값',
            control: 'text',
            table: {
                type: { summary: 'string' },
                category: 'required'
            }
        },
        value: {
            type: { name: 'string', required: true },
            description: '값',
            control: 'text',
            table: {
                type: { summary: 'string | number' },
                category: 'required'
            }
        },
        isDeletable: {
            type: { name: 'string', required: false },
            description: '삭제 가능여부',
            control: 'boolean',
            table: {
                type: { summary: 'boolean' },
                category: 'optional'
            }
        },
        onDelete: {
            type: { name: 'function', required: false },
            description: 'Delete Handler',
            control: false,
            table: {
                type: { summary: '(value: string | number) => void' },
                category: 'optional',
                defaultValue: { summary: '() => {}' }
            }
        },
        customCSS: {
            control: { type: 'object' },
            description: 'Custom CSS',
            table: {
                category: 'style',
                defaultValue: { summary: '{}' },
                type: {
                    summary: 'CSSInterpolation'
                }
            }
        }
    }
};

export default meta;
type Story = StoryObj<typeof Chip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
    args: {
        label: '사탕',
        value: 'candy',
        isDeletable: false,
        customCSS: {}
    }
};

export const Deletable: Story = {
    args: {
        label: '사탕',
        value: 'candy',
        isDeletable: true,
        // eslint-disable-next-line no-console
        onDelete: (value) => console.log(value),
        customCSS: {}
    }
};
