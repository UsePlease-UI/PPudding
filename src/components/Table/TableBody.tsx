import { HTMLAttributes, ReactNode } from 'react';

type BaseType = HTMLAttributes<HTMLTableSectionElement>;

type TableBodyType = {
  children: ReactNode;
} & BaseType;

/**
 *  [UI Component] Table Body Component
 *  @param children 컴포넌트
 *  @returns JSX.Element
 */
export default function TableBody(props: TableBodyType) {
  const { children } = props;

  return <tbody>{children}</tbody>;
}
