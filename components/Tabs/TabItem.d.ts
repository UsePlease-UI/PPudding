import { ReactNode } from '../../../node_modules/react';
export interface TabItemType {
    index: number;
    value: number;
    className?: string;
    label?: ReactNode;
    icon?: ReactNode;
    onChange?: (newValue: number) => void;
}
export default function TabItem(props: TabItemType): import("react/jsx-runtime").JSX.Element;
