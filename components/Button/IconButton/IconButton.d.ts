import { ButtonHTMLAttributes, ReactNode } from '../../../../node_modules/react';
import { ButtonShapeType, ButtonVariantType, IconButtonSizeType } from '../styles';
export interface IconButtonType extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
    children: ReactNode;
    isDisabled?: boolean;
    shape?: ButtonShapeType;
    size?: IconButtonSizeType;
    variant?: ButtonVariantType;
}
declare const IconButton: import('../../../../node_modules/react').ForwardRefExoticComponent<IconButtonType & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export default IconButton;
