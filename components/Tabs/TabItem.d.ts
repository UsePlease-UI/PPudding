import { ReactNode } from '../../../node_modules/react';
export interface TabItemType {
    index: number;
    className?: string;
    label?: ReactNode;
    icon?: ReactNode;
}
export default function TabItem(props: TabItemType): import("react/jsx-runtime").JSX.Element;
