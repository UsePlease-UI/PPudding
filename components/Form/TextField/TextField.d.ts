import { InputHTMLAttributes } from '../../../../node_modules/react';
export interface TextFieldType extends Omit<InputHTMLAttributes<HTMLInputElement>, 'disabled'> {
    isDisabled?: boolean;
    isFullWidth?: boolean;
    isReadOnly?: boolean;
    isError?: boolean;
}
declare const TextField: import('../../../../node_modules/react').ForwardRefExoticComponent<TextFieldType & import('../../../../node_modules/react').RefAttributes<HTMLInputElement>>;
export default TextField;
