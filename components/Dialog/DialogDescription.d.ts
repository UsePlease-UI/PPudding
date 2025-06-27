import { ComponentPropsWithRef, ElementType, ReactNode } from '../../../node_modules/react';
export type DialogDescriptionType<T extends ElementType> = {
    children: ReactNode;
    as?: T;
} & ComponentPropsWithRef<T>;
export default function DialogDescription<T extends ElementType>(props: DialogDescriptionType<T>): import("react/jsx-runtime").JSX.Element;
