import { InputHTMLAttributes, ReactNode } from '../../../../node_modules/react';
import { RadioPositionType, RadioSizeType } from './styles';
export interface RadioType extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label: ReactNode;
    name: string;
    currentValue?: string;
    isDisabled?: boolean;
    size?: RadioSizeType;
    position?: RadioPositionType;
}
declare const Radio: import('../../../../node_modules/react').ForwardRefExoticComponent<RadioType & import('../../../../node_modules/react').RefAttributes<HTMLInputElement>>;
export default Radio;
