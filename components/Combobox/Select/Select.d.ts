import { HTMLAttributes, ReactNode } from '../../../../node_modules/react';
import { ListboxOptionType } from '../../Base';
export interface SelectType extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    label: string;
    value: string;
    onChange: (selected: string) => void;
    helperText?: ReactNode;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    labelText?: ReactNode;
    options?: ListboxOptionType[];
    placeholder?: string;
}
export default function Select(props: SelectType): import("react/jsx-runtime").JSX.Element;
