import { cloneElement, InputHTMLAttributes, ReactElement, ReactNode } from 'react';

import { commonButtonStyle } from '@components/Button/styles';

import { joinClassNames } from '@utils/format';

interface PaginationIconButtonType extends InputHTMLAttributes<HTMLButtonElement> {
  isDisabled: boolean;
  icon: ReactNode;
  onClick: () => void;
}

export default function PaginationIconButton({ icon, isDisabled, onClick, ...props }: PaginationIconButtonType) {
  return (
    <button
      {...props}
      className={joinClassNames('h-8 w-8 rounded', commonButtonStyle.text)}
      disabled={isDisabled}
      type="button"
      onClick={onClick}
    >
      {cloneElement(icon as ReactElement, {
        className: joinClassNames('h-6 w-6 text-inherit'),
      })}
    </button>
  );
}
