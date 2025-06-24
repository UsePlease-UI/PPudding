import { TextareaHTMLAttributes } from '../../../../node_modules/react';
export interface TextareaType extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'disabled'> {
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isAutoHeight?: boolean;
    isError?: boolean;
}
declare const Textarea: import('../../../../node_modules/react').ForwardRefExoticComponent<TextareaType & import('../../../../node_modules/react').RefAttributes<HTMLTextAreaElement>>;
export default Textarea;
