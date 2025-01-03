import { InputHTMLAttributes, ReactNode } from '../../../../node_modules/react';
import { ButtonSizeType } from '../styles';
export interface ToggleButtonType extends Omit<InputHTMLAttributes<HTMLInputElement>, 'disabled' | 'size'> {
    children: ReactNode;
    name: string;
    value: string;
    currentValue?: string | string[];
    isDisabled?: boolean;
    isMultiple?: boolean;
    size?: ButtonSizeType;
}
declare const ToggleButton: import('../../../../node_modules/react').ForwardRefExoticComponent<ToggleButtonType & import('../../../../node_modules/react').RefAttributes<HTMLInputElement>>;
export default ToggleButton;
