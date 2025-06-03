import { HTMLAttributes, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

export interface TableRowType extends HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode;
}

export default function TableRow(props: TableRowType) {
  const { children, className } = props;

  return (
    <tr
      className={joinClassNames('border-b border-b-gray-100 last:border-b-0 hover:bg-gray-100', className && className)}
    >
      {children}
    </tr>
  );
}
