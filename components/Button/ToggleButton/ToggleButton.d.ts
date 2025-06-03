import { ButtonHTMLAttributes, ReactNode } from '../../../../node_modules/react';
import { ButtonSizeType } from '../styles';
export interface ToggleButtonType extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'onClick' | 'size'> {
    children: ReactNode;
    value: string;
    currentValue?: string | string[];
    isDisabled?: boolean;
    isMultiple?: boolean;
    size?: ButtonSizeType;
    onClick?: (selected: string) => void;
}
declare const ToggleButton: import('../../../../node_modules/react').ForwardRefExoticComponent<ToggleButtonType & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export default ToggleButton;
