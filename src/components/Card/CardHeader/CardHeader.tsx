import { HTMLAttributes, ReactNode } from 'react';

type CardHeaderType = Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
    children: ReactNode;
};

/**
 *  [UI Component] Card Header (Wrapper for Supporting Visual, Card Title ...)
 *  @param children ReadeNode
 *  @return JSX.Element
 */
export default function CardHeader({ children, ...rest }: CardHeaderType) {
    return (
        <div {...rest} className="flex h-72 w-full items-center justify-between gap-16 p-12">
            {children}
        </div>
    );
}
