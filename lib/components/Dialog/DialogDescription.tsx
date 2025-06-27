import { ComponentPropsWithRef, ElementType, ReactNode } from 'react';

import { useDialog } from '@components/useDialog';

import { joinClassNames } from '@utils/format';

export type DialogDescriptionType<T extends ElementType> = {
  children: ReactNode;
  as?: T;
} & ComponentPropsWithRef<T>;

export default function DialogDescription<T extends ElementType>(props: DialogDescriptionType<T>) {
  const { as, children, className, ...rest } = props;

  const { descriptionId } = useDialog();

  const Tag = as || 'p';

  return (
    <Tag
      {...rest}
      className={joinClassNames('text-16 font-normal leading-24', className && className)}
      id={rest.id || descriptionId}
    >
      {children}
    </Tag>
  );
}
