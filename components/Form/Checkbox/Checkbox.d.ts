import { InputHTMLAttributes, ReactNode } from '../../../../node_modules/react';
import { CheckboxPositionType, CheckboxSizeType } from './styles';
export interface CheckboxType extends Omit<InputHTMLAttributes<HTMLInputElement>, 'disabled' | 'size'> {
    label: ReactNode;
    isDisabled?: boolean;
    size?: CheckboxSizeType;
    checkedIcon?: ReactNode;
    icon?: ReactNode;
    position?: CheckboxPositionType;
}
declare const Checkbox: import('../../../../node_modules/react').ForwardRefExoticComponent<CheckboxType & import('../../../../node_modules/react').RefAttributes<HTMLInputElement>>;
export default Checkbox;
