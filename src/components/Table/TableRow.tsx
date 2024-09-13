import { HTMLAttributes, ReactNode } from 'react';

type BaseType = HTMLAttributes<HTMLTableRowElement>;

type TableRowType = {
  children: ReactNode;
} & BaseType;

/**
 *  [UI Component] Table Row Component
 *  @param children 컴포넌트
 *  @returns JSX.Element
 */
export default function TableRow(props: TableRowType) {
  const { children } = props;

  return <tr className="border-b border-b-primary-100 last:border-b-0 hover:bg-primary-50">{children}</tr>;
}
