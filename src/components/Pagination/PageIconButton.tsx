/** @jsxImportSource @emotion/react */
import React, { InputHTMLAttributes } from 'react';

import { css } from '@emotion/react';

type PageButtonType = InputHTMLAttributes<HTMLButtonElement> & {
    isDisabled: boolean;
    icon: React.ReactNode;
    onClick: () => void;
};

const iconWrapper = css({
    cursor: 'pointer',
    width: 32,
    height: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    '& svg': {
        width: '16px',
        height: '16px',
        stroke: '#8D8D8D'
    },
    '&:disabled svg': {
        stroke: '#8D8D8D4D'
    },
    '&:hover': {
        borderRadius: 4,
        backgroundColor: '#3378FF4D'
    }
});

export default function PageIconButton({ icon, isDisabled, onClick, ...props }: PageButtonType) {
    return (
        <button {...props} type="button" onClick={() => onClick()} css={iconWrapper} disabled={isDisabled}>
            {icon}
        </button>
    );
}
