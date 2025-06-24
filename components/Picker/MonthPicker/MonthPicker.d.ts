import { ReactNode } from '../../../../node_modules/react';
export interface MonthPickerType {
    helperText?: string;
    isDisabled?: boolean;
    labelText?: string;
    dateFormat?: string;
    icon?: ReactNode;
    placeholder?: string;
}
export default function MonthPicker(props: MonthPickerType): import("react/jsx-runtime").JSX.Element;
