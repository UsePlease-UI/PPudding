import { forwardRef, InputHTMLAttributes, ReactNode, useId } from 'react';

import FormControl from '@components/Base/FormControl';

import { joinClassNames } from '@utils/format';

type BaseType = Omit<InputHTMLAttributes<HTMLInputElement>, 'className'>;

type TextFieldType = BaseType & {
    helperText?: ReactNode;
    isDisabled?: boolean;
    isError?: boolean;
    isFullWidth?: boolean;
    isReadOnly?: boolean;
    labelText?: ReactNode;
};

/**
 *  [UI Component] TextField Component
 *  @param isReadOnly 읽기 전용 [optional]
 *  @param isDisabled 활성화여부 [optional]
 *  @param isFullWidth [CSS] width (100% 또는 기본값) [optional]
 *  @returns JSX.Element
 */
const TextField = forwardRef<HTMLInputElement, TextFieldType>(function TextField(
    { helperText, isDisabled, isError, isFullWidth, isReadOnly, labelText, type = 'text', ...props },
    ref,
) {
    const labelId = useId();
    const helperTextId = useId();

    return (
        <FormControl
            helperText={helperText}
            helperTextId={props['aria-describedby'] || helperTextId}
            id={props.id || labelId}
            labelText={labelText}
        >
            <input
                {...props}
                ref={ref}
                aria-describedby={helperText ? props['aria-describedby'] || helperTextId : undefined}
                aria-label={!labelText ? 'outlined-text-input' : undefined}
                autoComplete={props.autoComplete || 'new-password'}
                disabled={isDisabled}
                id={props.id || labelId}
                readOnly={isReadOnly}
                type={type}
                className={joinClassNames(
                    'h-10 truncate rounded border border-gray-100 px-3 py-2.5 text-14 font-normal leading-normal tracking-normal text-gray-950 placeholder:text-gray-400 hover:border-primary-600 focus:border-primary-700 focus:bg-primary-100 disabled:pointer-events-none disabled:border-gray-300 disabled:bg-gray-300 disabled:text-gray-950 under-tablet:min-w-0',
                    isFullWidth ? 'w-full min-w-0' : 'min-w-80',
                    isReadOnly && 'pointer-events-none border-gray-500 bg-gray-50',
                    isError && 'border-red-500',
                )}
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
            />
        </FormControl>
    );
});

export default TextField;
