/** @jsxImportSource @emotion/react */
import { InputHTMLAttributes, ReactNode } from 'react';

import { css } from '@emotion/react';

type PageButtonType = InputHTMLAttributes<HTMLButtonElement> & {
    isDisabled: boolean;
    icon: ReactNode;
    onClick: () => void;
};

// TODO: styles.ts로 파일 분리
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
        stroke: '#8D8D8D' // TODO: palette 색상으로 변경
    },
    '&:disabled svg': {
        stroke: '#8D8D8D4D' // TODO: palette 색상으로 변경
    },
    '&:hover': {
        borderRadius: 4,
        backgroundColor: '#3378FF4D' // TODO: palette 색상으로 변경
    }
});

export default function PageIconButton({ icon, isDisabled, onClick, ...props }: PageButtonType) {
    return (
        <button {...props} type="button" onClick={() => onClick()} css={iconWrapper} disabled={isDisabled}>
            {icon}
        </button>
    );
}
