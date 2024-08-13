import { ReactNode, TextareaHTMLAttributes, forwardRef, useEffect, useId } from 'react';

import { FormControl } from '@components/Base';

import useForwardRef from '@hooks/useForwardRef';
import { joinClassNames } from '@utils/format';

type StylesType = {
    isAutoHeight?: boolean;
    width?: number;
    height?: number;
    backgroundColor?: string;
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    lineHeight?: string;
    letterSpacing?: string;
};

type TextareaType = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> &
    StylesType & {
        isError?: boolean;
        isReadOnly?: boolean;
        isDisabled?: boolean;
        labelText?: ReactNode;
        helperText?: ReactNode;
    };

const Textarea = forwardRef<HTMLTextAreaElement, TextareaType>(function Textarea({ value, onChange, ...props }, ref) {
    const {
        labelText,
        helperText,
        width,
        height,
        isError,
        isDisabled,
        isReadOnly,
        isAutoHeight,
        backgroundColor,
        color,
        fontSize,
        fontWeight,
        lineHeight,
        letterSpacing,
        ...rest
    } = props;

    const labelId = useId();
    const helperTextId = useId();

    const textareaRef = useForwardRef<HTMLTextAreaElement>(ref);

    useEffect(() => {
        if (isAutoHeight) {
            const textarea = textareaRef.current;
            if (textarea) {
                textarea.style.height = '0px';
                textarea.style.height = `${textarea.scrollHeight}px`;
            }
        }
    }, [isAutoHeight, value, textareaRef]);

    return (
        <FormControl
            id={props.id || labelId}
            helperTextId={props['aria-describedby'] || helperTextId}
            helperText={helperText}
            labelText={labelText}
        >
            <div
                className={joinClassNames(
                    'h-50 w-full rounded border border-gray-100 py-2.5 pl-3 pr-px focus-within:border-primary-700 focus-within:bg-primary-100 hover:border-primary-600 under-tablet:min-w-0',
                    width && width,
                    height && height,
                    backgroundColor && backgroundColor,
                    isAutoHeight && 'h-full min-h-30 px-3',
                    isError && 'border border-red-500',
                    isReadOnly && 'pointer-events-none border-gray-500 bg-gray-50',
                    isDisabled && 'pointer-events-none border-gray-300 bg-gray-300 text-gray-950'
                )}
            >
                <textarea
                    {...rest}
                    aria-label={!labelText ? 'outlined-text-area' : undefined}
                    aria-describedby={helperText ? props['aria-describedby'] || helperTextId : undefined}
                    id={props.id || labelId}
                    ref={textareaRef}
                    value={value}
                    disabled={isDisabled}
                    readOnly={isReadOnly}
                    onChange={(e) => {
                        // 한글 글자수 제한
                        if (props.maxLength && e.currentTarget.value.length > props.maxLength) {
                            e.currentTarget.value = e.currentTarget.value.slice(0, props.maxLength);
                        }
                        if (onChange) {
                            onChange(e);
                        }
                    }}
                    className={joinClassNames(
                        'custom-scrollbar h-full min-h-0 w-full resize-none overflow-y-auto bg-transparent pr-2 align-top text-14 font-normal leading-normal tracking-normal outline-none ring-0 placeholder:text-gray-400 focus:ring-0 disabled:cursor-not-allowed',
                        color && color,
                        fontSize && fontSize,
                        fontWeight && fontWeight,
                        lineHeight && lineHeight,
                        letterSpacing && letterSpacing,
                        isAutoHeight && 'min-h-inherit'
                    )}
                />
            </div>
        </FormControl>
    );
});

export default Textarea;
