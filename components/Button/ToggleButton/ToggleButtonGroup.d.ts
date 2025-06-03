import { HTMLAttributes, ReactNode } from '../../../../node_modules/react';
export interface ToggleButtonGroupType extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
    children: ReactNode;
    value?: string | string[];
    onClick?: (selected: string) => void;
}
export default function ToggleButtonGroup({ children, className, onClick, value, ...rest }: ToggleButtonGroupType): import("react/jsx-runtime").JSX.Element;
