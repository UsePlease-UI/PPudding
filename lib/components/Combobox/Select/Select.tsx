import { HTMLAttributes, ReactNode, useCallback, useEffect, useId, useRef, useState } from 'react';

import { ChevronDownIcon } from '@heroicons/react/24/solid';

import { ClickAwayListener, ListboxOptionType } from '@components/Base';
import FormControl from '@components/Base/FormControl';
import { Listbox } from '@components/Base/Listbox';
import { getCommonButtonVariantStyle } from '@components/Button/styles';
import usePosition from '@components/usePosition';

import { joinClassNames } from '@utils/format';

export interface SelectType extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  label: string;
  value: string;
  onChange: (selected: string) => void;
  helperText?: ReactNode;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  labelText?: ReactNode;
  options?: ListboxOptionType[];
  placeholder?: string;
}

export default function Select(props: SelectType) {
  const {
    className,
    helperText,
    id,
    isDisabled,
    isReadOnly,
    label,
    labelText,
    onChange,
    options = [],
    placeholder,
    value,
    ...rest
  } = props;

  const ref = useRef<HTMLButtonElement | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  const labelId = useId();
  const buttonId = useId();
  const helperTextId = useId();
  const listBoxId = useId();

  const position = usePosition({ inputId: id || buttonId, isVisible, listBoxId, totalLength: options.length });

  const handleClick = useCallback(() => setIsVisible((prev) => !prev), []);

  const handleChange = useCallback(
    (selected: string) => {
      onChange(selected);
      setIsVisible(false);
    },
    [onChange],
  );

  useEffect(() => {
    const element = listRef.current;
    if (isVisible && element) {
      const { left, marginTop, maxWidth, top } = position;
      element.style.top = `${top + marginTop}px`;
      element.style.left = `${left}px`;
      element.style.maxWidth = `${maxWidth}px`;
    }
  }, [isVisible, position]);

  return (
    <div className={joinClassNames('w-max', className && className)}>
      <FormControl
        helperText={helperText}
        helperTextId={rest['aria-describedby'] || helperTextId}
        labelText={labelText}
        labelTextId={id || rest['aria-labelledby'] || labelId}
      >
        <div className="group relative">
          <button
            ref={ref}
            aria-describedby={helperText ? rest['aria-describedby'] || helperTextId : undefined}
            aria-expanded={isVisible}
            disabled={isDisabled || isReadOnly}
            id={id || rest['aria-labelledby'] || buttonId}
            tabIndex={0}
            type="button"
            aria-controls={isVisible ? listBoxId : undefined}
            aria-haspopup="listbox"
            onClick={handleClick}
            role="combobox"
            className={joinClassNames(
              getCommonButtonVariantStyle('outlined'),
              'flex h-10 min-w-30 items-center justify-between rounded pl-3 pr-2 text-black',
              placeholder && !value && 'text-gray-400',
            )}
          >
            <span className="mr-2.5 flex-1 truncate text-left text-14 font-normal leading-normal text-inherit">
              {placeholder && !value ? placeholder : label}
            </span>
            <span className="size-5">
              <ChevronDownIcon
                className={joinClassNames('!block h-5 w-5 text-black transition-transform', isVisible && 'rotate-180')}
              />
            </span>
          </button>
          {isVisible && (
            <ClickAwayListener
              element={ref.current}
              isOpen={isVisible}
              anchorElement={listRef.current}
              onClose={handleClick}
            >
              <Listbox
                ref={listRef}
                className="fixed w-full"
                id={listBoxId}
                labelId={rest['aria-labelledby'] || labelId}
                value={value}
                onClick={handleChange}
                options={options}
              />
            </ClickAwayListener>
          )}
        </div>
      </FormControl>
    </div>
  );
}
