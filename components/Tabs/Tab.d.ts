import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
export interface TabType extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    children: ReactNode;
    value: number;
    onChange: (newValue: number) => void;
    className?: string;
}
export default function Tab(props: TabType): import("react/jsx-runtime").JSX.Element;
