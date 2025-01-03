import { HTMLAttributes, ReactNode } from 'react';

export interface TableBodyType extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
}

export default function TableBody(props: TableBodyType) {
  const { children, className } = props;

  return <tbody className={className}>{children}</tbody>;
}
