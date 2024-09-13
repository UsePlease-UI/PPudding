import { ReactNode, TdHTMLAttributes, ThHTMLAttributes } from 'react';

type BaseType = TdHTMLAttributes<HTMLTableCellElement> & ThHTMLAttributes<HTMLTableCellElement>;

type TableCellType = {
  children: ReactNode;
  component?: 'td' | 'th';
} & BaseType;

/**
 *  [UI Component] Table Cell Component
 *  @param children ReactNode
 *  @param component Table Cell Type (td | th) [optional]
 *  @returns JSX.Element
 */
export default function TableCell(props: TableCellType) {
  const { children, component = 'td', ...rest } = props;

  return component === 'td' ? (
    <td {...rest} className="h-full px-2.5 py-2 text-14 font-normal leading-normal">
      {children}
    </td>
  ) : (
    <th {...rest} className="h-full px-2.5 py-2 text-14 font-medium leading-normal">
      {children}
    </th>
  );
}
