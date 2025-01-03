import { ChangeEvent, forwardRef, InputHTMLAttributes, KeyboardEvent, ReactNode, useCallback, useId } from 'react';

import FormControl from '@components/Base/FormControl';

import { joinClassNames } from '@utils/format';

export interface TextFieldType extends InputHTMLAttributes<HTMLInputElement> {
  helperText?: ReactNode;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  isReadOnly?: boolean;
  labelText?: ReactNode;
  isError?: boolean;
}

const TextField = forwardRef<HTMLInputElement, TextFieldType>(function TextField(
  {
    className,
    helperText,
    isDisabled,
    isError,
    isFullWidth,
    isReadOnly,
    labelText,
    max,
    maxLength,
    min,
    onChange,
    onKeyDown,
    type = 'text',
    ...props
  },
  ref,
) {
  const labelId = useId();
  const helperTextId = useId();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (type === 'text') {
        // 한글 글자수 제한
        if (maxLength && e.currentTarget.value.length > maxLength) {
          e.currentTarget.value = e.currentTarget.value.slice(0, maxLength);
        }
      } else if (type === 'number') {
        // 최소 값
        if (min && Number(min) > 0 && e.currentTarget.value === '0') {
          e.currentTarget.value = '';
        }
        // 최대 값
        else if (
          max &&
          e.currentTarget.value.length >= max.toString().length &&
          Number(e.currentTarget.value) > Number(max)
        ) {
          if (Number(e.currentTarget.value) > Number(max)) {
            e.currentTarget.value = max.toString();
          } else {
            e.currentTarget.value = e.currentTarget.value.slice(0, max.toString().length);
          }
        }
      }
      if (onChange) {
        onChange(e);
      }
    },
    [type, maxLength, min, max, onChange],
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (type === 'number' && ['-', '+', 'e', 'E'].includes(e.key)) {
        e.preventDefault();
      }
      if (onKeyDown) {
        onKeyDown(e);
      }
    },
    [type, onKeyDown],
  );

  return (
    <FormControl
      helperText={helperText}
      helperTextId={props['aria-describedby'] || helperTextId}
      labelText={labelText}
      labelTextId={props.id || labelId}
    >
      <input
        {...props}
        ref={ref}
        aria-describedby={helperText ? props['aria-describedby'] || helperTextId : undefined}
        aria-label={!labelText ? 'outlined-text-input' : undefined}
        disabled={isDisabled}
        id={props.id || labelId}
        max={max}
        maxLength={maxLength}
        min={min}
        readOnly={isReadOnly}
        type={type}
        autoComplete={props.autoComplete || 'new-password'}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={joinClassNames(
          'h-10 truncate rounded border border-gray-100 px-3 py-2.5 text-14 font-normal leading-normal tracking-normal text-gray-950 placeholder:text-gray-400 hover:border-primary-600 focus:border-primary-700 focus:bg-primary-100 disabled:pointer-events-none disabled:border-gray-300 disabled:bg-gray-300 disabled:text-gray-950 under-tablet:min-w-0',
          isFullWidth ? 'w-full min-w-0' : 'min-w-80',
          isReadOnly && 'pointer-events-none border-gray-500 bg-gray-50',
          isError && 'border-red-500',
          className && className,
        )}
      />
    </FormControl>
  );
});

export default TextField;
