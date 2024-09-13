import { HTMLAttributes, ReactNode } from 'react';

type BaseType = HTMLAttributes<HTMLTableSectionElement>;

type TableHeadType = {
  children: ReactNode;
} & BaseType;

/**
 *  [UI Component] Table Head Component
 *  @param children ReactNode
 *  @returns JSX.Element
 */
export default function TableHead(props: TableHeadType) {
  const { children } = props;

  return (
    <thead className="border-b border-primary-100 bg-primary-200 align-middle hover:*:bg-inherit [&_th]:p-3">
      {children}
    </thead>
  );
}
