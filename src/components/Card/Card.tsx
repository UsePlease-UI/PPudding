import { HTMLAttributes, ReactNode } from 'react';

type CardType = Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
    children: ReactNode;
};

/**
 *  [UI Component] Card (Container Component)
 *  @param children ReactNode
 *  @return JSX.Element
 */
export default function Card({ children, ...rest }: CardType) {
    return (
        <div {...rest} className="size-max overflow-hidden rounded bg-white shadow-lg">
            {children}
        </div>
    );
}
