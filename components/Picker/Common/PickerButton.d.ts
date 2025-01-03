import { ReactNode } from '../../../../node_modules/react';
import { PickerDateType } from '../../usePicker';
interface PickerButtonType {
    helperText?: string;
    labelText?: string;
    value?: PickerDateType;
    dateFormat?: string;
    icon?: ReactNode;
    onClick?: () => void;
    placeholder?: string;
}
export default function PickerButton(props: PickerButtonType): import("react/jsx-runtime").JSX.Element;
export {};
