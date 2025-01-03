import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
export interface TabsType extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
export default function Tabs({ children, className, ...rest }: TabsType): import("react/jsx-runtime").JSX.Element;
