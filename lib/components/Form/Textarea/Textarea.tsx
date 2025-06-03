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
          'h-50 w-full overflow-hidden rounded border border-black bg-white focus-within:bg-gray-200 hover:bg-gray-100 under-tablet:min-w-0',
          isAutoHeight && 'h-full min-h-30',
          isError && 'border border-red-600',
          isReadOnly && 'pointer-events-none border-gray-400 bg-gray-100',
          isDisabled && 'pointer-events-none border-gray-400 bg-gray-100 text-gray-600',
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
            'custom-scrollbar h-full min-h-0 w-full resize-none overflow-y-auto bg-inherit px-3 py-2.5 align-top text-16 font-normal leading-normal tracking-normal placeholder:text-gray-400',
            isAutoHeight && 'min-h-inherit',
          )}
        />
      </div>
    </FormControl>
  );
});

export default Textarea;
