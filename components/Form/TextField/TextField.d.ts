import { InputHTMLAttributes, ReactNode } from '../../../../node_modules/react';
export interface TextFieldType extends InputHTMLAttributes<HTMLInputElement> {
    helperText?: ReactNode;
    isDisabled?: boolean;
    isFullWidth?: boolean;
    isReadOnly?: boolean;
    labelText?: ReactNode;
    isError?: boolean;
}
declare const TextField: import('../../../../node_modules/react').ForwardRefExoticComponent<TextFieldType & import('../../../../node_modules/react').RefAttributes<HTMLInputElement>>;
export default TextField;
