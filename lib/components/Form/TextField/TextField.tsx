import { ChangeEvent, forwardRef, InputHTMLAttributes, KeyboardEvent, useCallback } from 'react';

import { joinClassNames } from '@utils/format';

export interface TextFieldType extends InputHTMLAttributes<HTMLInputElement> {
  isDisabled?: boolean;
  isFullWidth?: boolean;
  isReadOnly?: boolean;
  isError?: boolean;
}

const TextField = forwardRef<HTMLInputElement, TextFieldType>(function TextField(
  {
    className,
    isDisabled,
    isError,
    isFullWidth,
    isReadOnly,
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
    <input
      {...props}
      ref={ref}
      disabled={isDisabled}
      max={max}
      maxLength={maxLength}
      min={min}
      readOnly={isReadOnly}
      type={type}
      autoComplete={props.autoComplete || 'new-password'}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      className={joinClassNames(
        'h-11 truncate rounded border border-black px-3 py-2.5 text-16 font-normal leading-normal tracking-normal text-black placeholder:text-gray-600 hover:bg-gray-100 focus:bg-gray-200 disabled:pointer-events-none disabled:border-gray-400 disabled:bg-gray-100 disabled:text-gray-600 under-tablet:min-w-0',
        isError && 'border-red-600',
        isFullWidth ? 'w-full min-w-0' : 'min-w-80',
        isReadOnly && 'pointer-events-none border-gray-400 bg-gray-100',
        className && className,
      )}
    />
  );
});

export default TextField;
