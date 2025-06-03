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
        'border-b border-gray-100 bg-gray-200 align-middle hover:*:bg-inherit [&_th]:p-3',
        className && className,
      )}
    >
      {children}
    </thead>
  );
}
