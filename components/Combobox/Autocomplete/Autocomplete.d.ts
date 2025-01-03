import { ChangeEvent } from '../../../../node_modules/react';
import { OptionsType } from '../../types';
export interface AutocompleteType {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSelect: (selected: OptionsType) => void;
    options: OptionsType[];
    labelText?: string;
}
export default function Autocomplete({ labelText, onChange, onSelect, options, value }: AutocompleteType): import("react/jsx-runtime").JSX.Element;
