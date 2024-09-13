import { HTMLAttributes, ReactNode } from 'react';

type CardHeaderType = {
  children: ReactNode;
} & Omit<HTMLAttributes<HTMLDivElement>, 'className'>;

/**
 *  [UI Component] Card Header (Wrapper for Supporting Visual, Card Title ...)
 *  @param children ReadeNode
 *  @return JSX.Element
 */
export default function CardHeader({ children, ...rest }: CardHeaderType) {
  return (
    <div {...rest} className="flex h-18 w-full items-center justify-between gap-4 p-3">
      {children}
    </div>
  );
}
