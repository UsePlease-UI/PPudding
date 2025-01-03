import { HTMLAttributes, MouseEvent, ReactNode, useCallback, useEffect, useId, useRef, useState } from 'react';

import { ChevronDownIcon } from '@heroicons/react/24/solid';

import Backdrop from '@components/Base/Backdrop';
import FormControl from '@components/Base/FormControl';
import { Listbox } from '@components/Base/Listbox';
import { getCommonButtonVariantStyle } from '@components/Button/styles';
import { OptionsType } from '@components/types';
import usePosition from '@components/usePosition';

import { joinClassNames } from '@utils/format';

export interface SelectType extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  label: string;
  value: number | string;
  helperText?: ReactNode;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  labelText?: ReactNode;
  onChange?: (e: MouseEvent<HTMLButtonElement>) => void;
  options?: OptionsType[];
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

  const buttonId = useId();
  const labelId = useId();
  const helperTextId = useId();
  const listBoxId = useId();

  const listContainerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLButtonElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const position = usePosition({
    inputId: id || buttonId,
    isVisible,
    listBoxId,
    totalLength: options.length,
  });

  useEffect(() => {
    const element = listContainerRef.current;
    if (isVisible && element) {
      const { left, marginTop, maxWidth, top } = position;
      element.style.top = `${top}px`;
      element.style.left = `${left}px`;
      element.style.marginTop = `${marginTop}px`;
      const list = element.getElementsByTagName('ul')[0];
      list.style.maxWidth = `${maxWidth}px`;
    }
  }, [isVisible, position]);

  const handleClick = useCallback(() => setIsVisible((prev) => !prev), []);

  return (
    <div className={joinClassNames('w-max', className && className)}>
      <FormControl
        helperText={helperText}
        helperTextId={rest['aria-describedby'] || helperTextId}
        labelText={labelText}
        labelTextId={rest['aria-labelledby'] || labelId}
      >
        <div className="group relative">
          <button
            ref={ref}
            aria-describedby={helperText ? rest['aria-describedby'] || helperTextId : undefined}
            aria-expanded={isVisible}
            disabled={isDisabled || isReadOnly}
            id={id || buttonId}
            tabIndex={0}
            type="button"
            aria-controls={listBoxId}
            aria-haspopup="listbox"
            onClick={handleClick}
            role="combobox"
            className={joinClassNames(
              getCommonButtonVariantStyle('outlined'),
              'flex h-10 min-w-30 items-center justify-between rounded pl-3 pr-2 text-primary-950',
              placeholder && !value && 'text-gray-400',
            )}
          >
            <span className="mr-2.5 flex-1 truncate text-left text-14 font-normal leading-normal text-inherit">
              {placeholder && !value ? placeholder : label}
            </span>
            <span className="size-5">
              <ChevronDownIcon
                className={joinClassNames('!block h-5 w-5 text-primary-800', isVisible && 'rotate-180')}
              />
            </span>
          </button>
          {isVisible && (
            <Backdrop isOpen={isVisible} onClose={handleClick}>
              <div ref={listContainerRef} className="fixed w-full">
                <Listbox
                  id={listBoxId}
                  labelId={rest['aria-labelledby'] || labelId}
                  value={value}
                  onClick={onChange}
                  options={options}
                />
              </div>
            </Backdrop>
          )}
        </div>
      </FormControl>
    </div>
  );
}
