import { ChangeEvent, HTMLAttributes, ReactNode } from '../../../../node_modules/react';
export interface ToggleButtonGroupType extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    children: ReactNode;
    value?: string | string[];
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export default function ToggleButtonGroup({ children, className, onChange, value, ...rest }: ToggleButtonGroupType): import("react/jsx-runtime").JSX.Element;
