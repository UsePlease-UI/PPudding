import { OptionsType } from '../../types';
export interface SharedAutocompleteType {
    name: string;
    value: string;
    onChange: (newValue: string) => void;
    onSelect: (newOption?: OptionsType) => void;
    options: OptionsType[];
    helperText?: string;
    labelText?: string;
}
export default function SharedAutocomplete(props: SharedAutocompleteType): import("react/jsx-runtime").JSX.Element;
