import { InputHTMLAttributes, ReactElement, ReactNode, cloneElement } from 'react';

import { commonStyle } from '@components/Button';

import { joinClassNames } from '@utils/format';

type PaginationIconButtonType = InputHTMLAttributes<HTMLButtonElement> & {
    isDisabled: boolean;
    icon: ReactNode;
    onClick: () => void;
};

export default function PaginationIconButton({ icon, isDisabled, onClick, ...props }: PaginationIconButtonType) {
    return (
        <button
            {...props}
            type="button"
            onClick={() => onClick()}
            className={joinClassNames('h-8 w-8 rounded', commonStyle.text)}
            disabled={isDisabled}
        >
            {cloneElement(icon as ReactElement, {
                className: joinClassNames('w-6 h-6 text-inherit')
            })}
        </button>
    );
}
