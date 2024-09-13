import { InputHTMLAttributes, MouseEvent, ReactNode, useCallback, useEffect, useId, useRef, useState } from 'react';

import { ChevronDownFilled } from '@fluentui/react-icons';

import Backdrop from '@components/Base/Backdrop';
import FormControl from '@components/Base/FormControl';
import { Listbox } from '@components/Base/Listbox';
import { getVariantStyle } from '@components/Button/styles';
import { CommonListDataType } from '@components/types';
import usePosition from '@components/usePosition';

import { joinClassNames } from '@utils/format';

type BaseType = InputHTMLAttributes<HTMLButtonElement>;

type SelectType = {
  label: string;
  value: number | string;
  onChange: (e: MouseEvent<HTMLButtonElement>) => void;
  helperText?: ReactNode;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  labelText?: ReactNode;
  options?: CommonListDataType[];
  placeholder?: string;
} & BaseType;

/**
 *  [UI Component] Select Component
 *  @param label 선택된 값의 label
 *  @param value 선택된 값의 value
 *  @param onChange Change Event Handler
 *  @param options 옵션들 [optional]
 *  @param isReadOnly 읽기 전용 [optional]
 *  @param isDisabled 활성화여부 [optional]
 *  @param labelText Label Text [optional]
 *  @param helperText Helper Text [optional]
 *  @returns JSX.Element
 */
export default function Select(props: SelectType) {
  const {
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
    listBoxId,
    isVisible,
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
    <div className="w-max">
      <FormControl
        helperText={helperText}
        helperTextId={rest['aria-describedby'] || helperTextId}
        id={rest['aria-labelledby'] || labelId}
        labelText={labelText}
      >
        <div className="group relative">
          <button
            ref={ref}
            aria-controls={listBoxId}
            aria-describedby={helperText ? rest['aria-describedby'] || helperTextId : undefined}
            aria-expanded={isVisible}
            aria-haspopup="listbox"
            disabled={isDisabled || isReadOnly}
            id={id || buttonId}
            role="combobox"
            tabIndex={0}
            type="button"
            onClick={handleClick}
            className={joinClassNames(
              getVariantStyle('outlined'),
              'flex h-10 min-w-30 items-center justify-between rounded pl-3 pr-2 text-primary-950',
              placeholder && !value && 'text-gray-400',
            )}
          >
            <span className="mr-2.5 flex-1 truncate text-left text-14 font-normal leading-normal text-inherit">
              {placeholder && !value ? placeholder : label}
            </span>
            <span className="size-5">
              <ChevronDownFilled
                className={joinClassNames('!block h-5 w-5 text-primary-800', isVisible && 'rotate-180')}
                height={16}
                width={16}
              />
            </span>
          </button>
          {isVisible && (
            <Backdrop isOpen={isVisible} onClose={handleClick}>
              <div ref={listContainerRef} className="fixed w-full">
                <Listbox
                  id={listBoxId}
                  labelId={rest['aria-labelledby'] || labelId}
                  options={options}
                  value={value}
                  onClick={onChange}
                />
              </div>
            </Backdrop>
          )}
        </div>
      </FormControl>
    </div>
  );
}
