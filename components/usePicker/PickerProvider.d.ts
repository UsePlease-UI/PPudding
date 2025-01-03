import { ReactNode } from '../../../node_modules/react';
import { PickerDateType } from './PickerContext';
export type PickerProviderType = {
    children: ReactNode;
    maxDate?: PickerDateType;
    minDate?: PickerDateType;
    value?: PickerDateType;
    onCancel?: () => void;
    onChange?: (date: Date) => void;
    onSelect?: (date: PickerDateType) => void;
};
declare const PickerProvider: (props: PickerProviderType) => import("react/jsx-runtime").JSX.Element;
export default PickerProvider;
