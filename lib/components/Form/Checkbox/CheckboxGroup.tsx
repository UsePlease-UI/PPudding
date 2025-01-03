import { ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

export interface CheckboxGroupType {
  children: ReactNode;
  className?: string;
  gap?: number;
  isRow?: boolean;
}

export default function CheckboxGroup(props: CheckboxGroupType) {
  const { children, className, gap = 10, isRow = true } = props;

  return (
    <div
      className={joinClassNames(
        'flex flex-col',
        isRow && 'flex-row items-center justify-start',
        gap && `gap-${gap / 4}`,
        className && className,
      )}
    >
      {children}
    </div>
  );
}
