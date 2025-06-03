import { ListboxOptionType } from '../../Base';
export interface AutocompleteType {
    name: string;
    value: string;
    onChange: (newValue: string) => void;
    onSelect: (newOption?: ListboxOptionType) => void;
    options: ListboxOptionType[];
    helperText?: string;
    labelText?: string;
}
export default function Autocomplete(props: AutocompleteType): import("react/jsx-runtime").JSX.Element;
