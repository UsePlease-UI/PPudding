import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
export interface TabType extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
export default function Tab(props: TabType): import("react/jsx-runtime").JSX.Element;
