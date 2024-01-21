/** @jsxImportSource @emotion/react */
import { InputHTMLAttributes, ReactNode } from 'react';

import { paginationStyle } from './style';

type PageButtonType = InputHTMLAttributes<HTMLButtonElement> & {
    isDisabled: boolean;
    icon: ReactNode;
    onClick: () => void;
};

export default function PageIconButton({ icon, isDisabled, onClick, ...props }: PageButtonType) {
    return (
        <button
            {...props}
            type="button"
            onClick={() => onClick()}
            css={paginationStyle.iconWrapper}
            disabled={isDisabled}
        >
            {icon}
        </button>
    );
}
