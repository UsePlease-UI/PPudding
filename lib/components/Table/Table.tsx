import { ReactNode, TableHTMLAttributes } from 'react';

import { joinClassNames } from '@utils/format';

export interface TableType extends TableHTMLAttributes<HTMLTableElement> {
  children: ReactNode;
}

export default function Table(props: TableType) {
  const { children, className, ...rest } = props;

  return (
    <table {...rest} className={joinClassNames('size-full border border-gray-100 bg-white', className && className)}>
      {children}
    </table>
  );
}
