import { ReactNode, TableHTMLAttributes } from 'react';

type BaseType = TableHTMLAttributes<HTMLTableElement>;

type TableType = {
  children: ReactNode;
} & BaseType;

/**
 *  [UI Component] Table Component
 *  @param children 컴포넌트
 *  @returns JSX.Element
 */
export default function Table(props: TableType) {
  const { children, ...rest } = props;

  return (
    <table {...rest} className="size-full border border-primary-100 bg-white">
      {children}
    </table>
  );
}
