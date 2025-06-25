import { InputHTMLAttributes, ReactNode } from '../../../../node_modules/react';
export interface SwitchType extends Omit<InputHTMLAttributes<HTMLInputElement>, 'disabled'> {
    isDisabled?: boolean;
    label?: ReactNode;
    stateText?: string;
    thumb?: ReactNode;
    position?: 'end' | 'start';
}
declare const Switch: import('../../../../node_modules/react').ForwardRefExoticComponent<SwitchType & import('../../../../node_modules/react').RefAttributes<HTMLInputElement>>;
export default Switch;
