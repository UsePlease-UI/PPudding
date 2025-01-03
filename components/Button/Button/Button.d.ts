import { ButtonHTMLAttributes, ReactNode } from '../../../../node_modules/react';
import { ButtonShapeType, ButtonSizeType, ButtonVariantType } from '../styles';
export interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    isDisabled?: boolean;
    isFullWidth?: boolean;
    shape?: ButtonShapeType;
    size?: ButtonSizeType;
    variant?: ButtonVariantType;
    endIcon?: ReactNode;
    startIcon?: ReactNode;
}
declare const Button: import('../../../../node_modules/react').ForwardRefExoticComponent<ButtonType & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export default Button;
