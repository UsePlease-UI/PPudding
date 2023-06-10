/** @jsxImportSource @emotion/react */
import { useState, useRef } from 'react';

import PopOver from 'components/atoms/PopOver';

import { css } from '@emotion/react';
import palette from 'styles/palette';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Design System/Atoms/Menu/PopOver',
    component: PopOver,
    tags: ['autodocs'],
    argTypes: {
        children: {
            type: { name: 'string', required: true },
            description: '컴포넌트',
            control: false,
            table: {
                type: { summary: 'React.ReactNode' },
                category: 'required'
            }
        },
        isOpen: {
            description: '컴포넌트 상태',
            control: false,
            table: {
                type: { summary: 'boolean' },
                category: 'required'
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
} satisfies Meta<typeof PopOver>;

export default meta;
type Story = StoryObj<typeof PopOver>;

const popoverStyle = css({
    height: 30,
    fontWeight: 700,
    color: `${palette.lightBlue.main}`,
    border: `1px solid ${palette.lightBlue.main}`,
    borderRadius: 4,
    padding: '5px 12px'
});

const Template: Story = {
    render: (args) => {
        const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
        const buttonRef = useRef<HTMLButtonElement | null>(null);
        const isOpen = Boolean(anchorEl);

        const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
            if (anchorEl) {
                setAnchorEl(null);
                document.body.style.overflow = 'auto';
            } else {
                setAnchorEl(e.currentTarget);
                document.body.style.overflow = 'hidden';
            }
        };

        return (
            <>
                <button type="button" onClick={handleOpen} css={popoverStyle} ref={buttonRef}>
                    click me
                </button>
                <PopOver {...args} isOpen={isOpen}>
                    {args.children}
                </PopOver>
            </>
        );
    }
};

export const Default: Story = {
    ...Template,
    args: {
        children: <span>This is contents</span>,
        customCSS: {
            padding: 20
        }
    }
};
