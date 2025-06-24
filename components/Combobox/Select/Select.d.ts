import { HTMLAttributes } from '../../../../node_modules/react';
import { ListboxOptionType } from '../../Base';
export interface SelectType extends Omit<HTMLAttributes<HTMLButtonElement>, 'disabled' | 'onChange'> {
    selected: string;
    onChange: (selected: string) => void;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    options?: ListboxOptionType[];
    placeholder?: string;
}
export default function Select(props: SelectType): import("react/jsx-runtime").JSX.Element;
