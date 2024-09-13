import { cloneElement, InputHTMLAttributes, ReactElement, ReactNode } from 'react';

import { commonStyle } from '@components/Button/styles';

import { joinClassNames } from '@utils/format';

type PaginationIconButtonType = {
  icon: ReactNode;
  isDisabled: boolean;
  onClick: () => void;
} & InputHTMLAttributes<HTMLButtonElement>;

export default function PaginationIconButton({ icon, isDisabled, onClick, ...props }: PaginationIconButtonType) {
  return (
    <button
      {...props}
      className={joinClassNames('h-8 w-8 rounded', commonStyle.text)}
      disabled={isDisabled}
      type="button"
      onClick={() => onClick()}
    >
      {cloneElement(icon as ReactElement, {
        className: joinClassNames('h-6 w-6 text-inherit'),
      })}
    </button>
  );
}
