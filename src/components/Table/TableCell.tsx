import { ReactNode, TdHTMLAttributes, ThHTMLAttributes } from 'react';

type BaseType = ThHTMLAttributes<HTMLTableCellElement> & TdHTMLAttributes<HTMLTableCellElement>;

type TableCellType = BaseType & {
    children: string | ReactNode;
    component?: 'th' | 'td';
};

/**
 *  [UI Component] Table Cell Component
 *  @param children ReactNode
 *  @param component Table Cell Type (td | th) [optional]
 *  @returns JSX.Element
 */
export default function TableCell(props: TableCellType) {
    const { children, component = 'td', ...rest } = props;

    return component === 'td' ? (
        <td {...rest} className="h-full px-10 py-8 text-14 font-normal leading-normal">
            {children}
        </td>
    ) : (
        <th {...rest} className="text-medium h-full px-10 py-8 text-14 leading-normal">
            {children}
        </th>
    );
}
