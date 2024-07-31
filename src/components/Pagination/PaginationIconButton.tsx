import { InputHTMLAttributes, ReactElement, ReactNode, cloneElement } from 'react';

import { joinClassNames } from '@utils/format';

import { commonStyle } from '../Button';

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
            className={joinClassNames('h-32 w-32 rounded', commonStyle.text)}
            disabled={isDisabled}
        >
            {cloneElement(icon as ReactElement, {
                className: joinClassNames('w-24 h-24 text-inherit')
            })}
        </button>
    );
}
