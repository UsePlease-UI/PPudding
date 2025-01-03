import { ReactNode, TdHTMLAttributes, ThHTMLAttributes } from 'react';

import { joinClassNames } from '@utils/format';

export interface TableCellType extends TdHTMLAttributes<HTMLTableCellElement>, ThHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
  component?: 'td' | 'th';
}

export default function TableCell(props: TableCellType) {
  const { children, className, component = 'td', ...rest } = props;

  return component === 'td' ? (
    <td
      {...rest}
      className={joinClassNames('h-full px-2.5 py-2 text-14 font-normal leading-normal', className && className)}
    >
      {children}
    </td>
  ) : (
    <th
      {...rest}
      className={joinClassNames('h-full px-2.5 py-2 text-14 font-medium leading-normal', className && className)}
    >
      {children}
    </th>
  );
}
