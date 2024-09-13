import { ChangeEvent, useEffect, useId, useRef, useState } from 'react';

import Backdrop from '@components/Base/Backdrop';
import { Listbox, ListboxItem } from '@components/Base/Listbox';
import TextField from '@components/Form/TextField';
import { CommonListDataType } from '@components/types';
import usePosition from '@components/usePosition';

import { joinClassNames } from '@utils/format';

type AutocompleteType = {
  inputValue: string;
  name: string;
  options: CommonListDataType[];
  onChange: (newValue: number | string) => void;
  onSelect: (newOption?: CommonListDataType) => void;
  helperText?: string;
  labelText?: string;
};

/**
 *  [UI Component] Autocomplete Component
 *  @param name Autocomplete Name
 *  @param options Option List
 *  @param inputValue TextField value
 *  @param onChange TextField Change Event Handler
 *  @param onSelect Select Change Event Handler
 *  @param labelText Label Text [optional]
 *  @param helperText Helper Text [optional]
 *  @returns JSX.Element
 */
export default function Autocomplete(props: AutocompleteType) {
  const { helperText, inputValue, labelText, name, onChange, onSelect, options } = props;

  const listContainerRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selected, setSelected] = useState<CommonListDataType>();

  const labelId = useId();
  const listBoxId = useId();
  const inputId = useId();

  const position = usePosition({
    inputId,
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

  const handleSelect = (newOption: CommonListDataType) => {
    setSelected(newOption);
    onSelect(newOption);
    onChange(newOption.label);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
    if (!e.currentTarget.value) {
      setSelected(undefined);
      onSelect();
    }
  };

  const handleClick = () => {
    // 옵션 선택 후 list 미노출
    if (selected && isVisible) {
      setIsVisible(false);
    } else {
      setIsVisible((prev) => !prev);
    }
  };

  return (
    <div>
      <div className="flex w-full items-center justify-center gap-1.25 bg-white">
        <TextField
          isFullWidth
          aria-autocomplete="list"
          aria-controls={listBoxId}
          aria-expanded={isVisible}
          aria-label={!labelText ? `${name}` : undefined}
          helperText={helperText}
          id={inputId}
          labelText={labelText}
          role="combobox"
          type="text"
          value={inputValue}
          onChange={handleChange}
          onClick={handleClick}
        />
      </div>
      {isVisible && (
        <Backdrop isOpen={isVisible} onClose={handleClick}>
          <div ref={listContainerRef} className="fixed w-full">
            <Listbox
              aria-label={labelText ? undefined : name}
              id={listBoxId}
              labelId={labelText ? labelId : undefined}
              options={options}
              value={selected?.value || ''}
              renderItem={(option) => (
                <ListboxItem
                  key={option.label}
                  currentValue={selected?.value || ''}
                  value={option.value}
                  onClick={() => handleSelect(option)}
                  label={
                    inputValue
                      ? (option.label as string)
                          .split(new RegExp(`(${inputValue})`, 'gi'))
                          .filter((val) => val)
                          .map((letter, idx) => (
                            <span
                              key={letter + idx}
                              className={joinClassNames(
                                selected?.value === option.value
                                  ? 'text-white'
                                  : new RegExp(`(${inputValue})`, 'gi').test(letter)
                                    ? 'text-primary-800'
                                    : 'text-primary-950',
                                new RegExp(`(${inputValue})`, 'gi').test(letter) ? 'font-semibold' : 'font-normal',
                              )}
                            >
                              {letter}
                            </span>
                          ))
                      : option.label
                  }
                />
              )}
            />
          </div>
        </Backdrop>
      )}
    </div>
  );
}
