import { InputHTMLAttributes } from '../../../../node_modules/react';
import { ListboxOptionType } from '../../Base';
export interface AutocompleteType extends Omit<InputHTMLAttributes<HTMLInputElement>, 'disabled' | 'onChange' | 'onSelect'> {
    value: string;
    onChange: (newValue: string) => void;
    onSelect: (newOption?: ListboxOptionType) => void;
    options: ListboxOptionType[];
    isDisabled?: boolean;
    isReadOnly?: boolean;
}
export default function Autocomplete(props: AutocompleteType): import("react/jsx-runtime").JSX.Element;
