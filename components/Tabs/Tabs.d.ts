import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
export interface TabsType extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    children: ReactNode;
    value: number;
    onChange: (newValue: number) => void;
}
export default function Tabs({ children, className, onChange, value, ...rest }: TabsType): import("react/jsx-runtime").JSX.Element;
