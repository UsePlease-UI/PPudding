import { ReactNode } from '../../../../node_modules/react';
export interface DatePickerType {
    helperText?: string;
    labelText?: string;
    dateFormat?: string;
    icon?: ReactNode;
    placeholder?: string;
}
export default function DatePicker(props: DatePickerType): import("react/jsx-runtime").JSX.Element;
