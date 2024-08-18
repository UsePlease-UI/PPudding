import { InputHTMLAttributes, ReactNode, forwardRef, useId } from 'react';

import FormControl from '@components/Base/FormControl';

import { joinClassNames } from '@utils/format';

type BaseType = Omit<InputHTMLAttributes<HTMLInputElement>, 'className'>;

type TextFieldType = BaseType & {
    isError?: boolean;
    isReadOnly?: boolean;
    isDisabled?: boolean;
    isFullWidth?: boolean;
    labelText?: ReactNode;
    helperText?: ReactNode;
};

/**
 *  [UI Component] TextField Component
 *  @param isReadOnly 읽기 전용 [optional]
 *  @param isDisabled 활성화여부 [optional]
 *  @param isFullWidth [CSS] width (100% 또는 기본값) [optional]
 *  @returns JSX.Element
 */
const TextField = forwardRef<HTMLInputElement, TextFieldType>(function TextField(
    { type = 'text', isError, isReadOnly, isDisabled, isFullWidth, labelText, helperText, ...props },
    ref
) {
    const labelId = useId();
    const helperTextId = useId();

    return (
        <FormControl
            id={props.id || labelId}
            helperTextId={props['aria-describedby'] || helperTextId}
            helperText={helperText}
            labelText={labelText}
        >
            <input
                {...props}
                aria-label={!labelText ? 'outlined-text-input' : undefined}
                aria-describedby={helperText ? props['aria-describedby'] || helperTextId : undefined}
                id={props.id || labelId}
                autoComplete={props.autoComplete || 'new-password'}
                ref={ref}
                type={type}
                disabled={isDisabled}
                readOnly={isReadOnly}
                onChange={(e) => {
                    if (type === 'text') {
                        // 한글 글자수 제한
                        if (props.maxLength && e.currentTarget.value.length > props.maxLength) {
                            e.currentTarget.value = e.currentTarget.value.slice(0, props.maxLength);
                        }
                    }
                    if (type === 'number') {
                        // 최소 값
                        if (props.min && Number(props.min) > 0 && e.currentTarget.value === '0') {
                            e.currentTarget.value = '';
                        }
                        // 최대 값
                        if (
                            props.max &&
                            e.currentTarget.value.length >= props.max.toString().length &&
                            Number(e.currentTarget.value) > Number(props.max)
                        ) {
                            if (Number(e.currentTarget.value) > Number(props.max)) {
                                e.currentTarget.value = props.max.toString();
                            } else {
                                e.currentTarget.value = e.currentTarget.value.slice(0, props.max.toString().length);
                            }
                        }
                    }
                    if (props.onChange) {
                        props.onChange(e);
                    }
                }}
                onKeyDown={(e) => {
                    if (type === 'number' && ['e', 'E', '+', '-'].includes(e.key)) {
                        e.preventDefault();
                    }
                    if (props.onKeyDown) {
                        props.onKeyDown(e);
                    }
                }}
                className={joinClassNames(
                    'h-10 truncate rounded border border-gray-100 px-3 py-2.5 text-14 font-normal leading-normal tracking-normal text-gray-950 placeholder:text-gray-400 hover:border-primary-600 focus:border-primary-700 focus:bg-primary-100 disabled:pointer-events-none disabled:border-gray-300 disabled:bg-gray-300 disabled:text-gray-950 under-tablet:min-w-0',
                    isFullWidth ? 'w-full min-w-0' : 'min-w-80',
                    isReadOnly && 'pointer-events-none border-gray-500 bg-gray-50',
                    isError && 'border-red-500'
                )}
            />
        </FormControl>
    );
});

export default TextField;
