import { ChangeEvent, forwardRef, ReactNode, TextareaHTMLAttributes, useCallback, useEffect, useId } from 'react';

import FormControl from '@components/Base/FormControl';

import useForwardRef from '@hooks/useForwardRef';
import { joinClassNames } from '@utils/format';

export interface TextareaType extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  helperText?: ReactNode;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  labelText?: ReactNode;
  isAutoHeight?: boolean;
  isError?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaType>(function Textarea({ onChange, value, ...props }, ref) {
  const { className, helperText, isAutoHeight, isDisabled, isError, isReadOnly, labelText, maxLength, ...rest } = props;

  const labelId = useId();
  const helperTextId = useId();

  const textareaRef = useForwardRef<HTMLTextAreaElement>(ref);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      // 한글 글자수 제한
      if (maxLength && e.currentTarget.value.length > maxLength) {
        e.currentTarget.value = e.currentTarget.value.slice(0, maxLength);
      }
      if (onChange) {
        onChange(e);
      }
    },
    [maxLength, onChange],
  );

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
      helperText={helperText}
      helperTextId={props['aria-describedby'] || helperTextId}
      labelText={labelText}
      labelTextId={props.id || labelId}
    >
      <div
        className={joinClassNames(
          'h-50 w-full rounded border border-gray-100 py-2.5 pl-3 pr-px focus-within:border-primary-700 focus-within:bg-primary-100 hover:border-primary-600 under-tablet:min-w-0',
          isAutoHeight && 'h-full min-h-30 px-3',
          isError && 'border border-red-500',
          isReadOnly && 'pointer-events-none border-gray-500 bg-gray-50',
          isDisabled && 'pointer-events-none border-gray-300 bg-gray-300 text-gray-950',
          className && className,
        )}
      >
        <textarea
          {...rest}
          ref={textareaRef}
          aria-describedby={helperText ? props['aria-describedby'] || helperTextId : undefined}
          aria-label={!labelText ? 'outlined-text-area' : undefined}
          disabled={isDisabled}
          id={props.id || labelId}
          maxLength={maxLength}
          readOnly={isReadOnly}
          value={value}
          onChange={handleChange}
          className={joinClassNames(
            'custom-scrollbar h-full min-h-0 w-full resize-none overflow-y-auto bg-transparent pr-2 align-top text-14 font-normal leading-normal tracking-normal outline-none ring-0 placeholder:text-gray-400 focus:ring-0 disabled:cursor-not-allowed',
            isAutoHeight && 'min-h-inherit',
          )}
        />
      </div>
    </FormControl>
  );
});

export default Textarea;
