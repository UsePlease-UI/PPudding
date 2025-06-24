import { ReactNode } from '../../../node_modules/react';
import { PickerDateType } from '../usePicker';
export interface PickerType {
    helperText?: string;
    labelText?: string;
    maxDate?: PickerDateType;
    minDate?: PickerDateType;
    value?: PickerDateType;
    dateFormat?: string;
    icon?: ReactNode;
    onCancel?: () => void;
    onChange?: (date: Date) => void;
    onSelect?: (date: PickerDateType) => void;
    placeholder?: string;
    showMonthPicker?: boolean;
}
export default function Picker(props: PickerType): import("react/jsx-runtime").JSX.Element;
