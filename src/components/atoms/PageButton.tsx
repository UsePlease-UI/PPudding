/** @jsxImportSource @emotion/react */
import React, { InputHTMLAttributes } from 'react';

import { css } from '@emotion/react';

type PageButtonType = InputHTMLAttributes<HTMLButtonElement> & {
    isDisabled: boolean;
    onClick: () => void;
    totalCount: number;
    icon: React.ReactNode;
};

const iconWrapper = css({
    width: 32,
    height: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    '& svg': {
        width: '16px',
        height: '16px'
    },
    '&:disabled svg': {
        stroke: '#8D8D8D4D'
    }
});

export default function PageButton({ icon, isDisabled, totalCount, onClick, ...props }: PageButtonType) {
    return (
        <button
            {...props}
            type="button"
            onClick={() => onClick()}
            css={css([iconWrapper, { '& svg': { stroke: totalCount < 2 ? '#8D8D8D4D' : '#8D8D8D' } }])}
            disabled={isDisabled}
        >
            {icon}
        </button>
    );
}
