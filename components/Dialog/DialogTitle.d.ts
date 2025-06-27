import { ComponentPropsWithRef, ElementType, ReactNode } from '../../../node_modules/react';
export type DialogTitleType<T extends ElementType> = {
    children: ReactNode;
    as?: T;
} & ComponentPropsWithRef<T>;
export default function DialogTitle<T extends ElementType>({ as, children, className, ...rest }: DialogTitleType<T>): import("react/jsx-runtime").JSX.Element;
