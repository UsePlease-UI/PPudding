import { HTMLAttributes, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

export interface DialogActionType extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function DialogAction(props: DialogActionType) {
  const { children, className } = props;

  return (
    <div className={joinClassNames('flex w-full items-center justify-end gap-x-2.5', className && className)}>
      {children}
    </div>
  );
}
