import { ComponentPropsWithRef, ElementType, ReactNode } from 'react';

import { useDialog } from '@components/useDialog';

import { joinClassNames } from '@utils/format';

export type DialogTitleType<T extends ElementType> = {
  children: ReactNode;
  as?: T;
} & ComponentPropsWithRef<T>;

export default function DialogTitle<T extends ElementType>({ as, children, className, ...rest }: DialogTitleType<T>) {
  const { labelId } = useDialog();

  const Tag = as || 'h2';

  return (
    <Tag
      {...rest}
      className={joinClassNames('text-20 font-semibold leading-28', className && className)}
      id={rest.id || labelId}
    >
      {children}
    </Tag>
  );
}
