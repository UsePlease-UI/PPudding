import { HTMLAttributes, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

export interface TableHeadType extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
}

export default function TableHead(props: TableHeadType) {
  const { children, className } = props;

  return (
    <thead
      className={joinClassNames(
        'border-b border-primary-100 bg-primary-200 align-middle hover:*:bg-inherit [&_th]:p-3',
        className && className,
      )}
    >
      {children}
    </thead>
  );
}
