import { ReactNode, TextareaHTMLAttributes } from '../../../../node_modules/react';
export interface TextareaType extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    helperText?: ReactNode;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    labelText?: ReactNode;
    isAutoHeight?: boolean;
    isError?: boolean;
}
declare const Textarea: import('../../../../node_modules/react').ForwardRefExoticComponent<TextareaType & import('../../../../node_modules/react').RefAttributes<HTMLTextAreaElement>>;
export default Textarea;
