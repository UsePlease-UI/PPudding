import { ChangeEvent, useCallback, useEffect, useId, useRef, useState } from 'react';

import Backdrop from '@components/Base/Backdrop';
import { Listbox, ListboxItem } from '@components/Base/Listbox';
import TextField from '@components/Form/TextField';
import { OptionsType } from '@components/types';
import usePosition from '@components/usePosition';

import { joinClassNames } from '@utils/format';

export interface SharedAutocompleteType {
  name: string;
  value: string;
  onChange: (newValue: string) => void;
  onSelect: (newOption?: OptionsType) => void;
  options: OptionsType[];
  helperText?: string;
  labelText?: string;
}

export default function SharedAutocomplete(props: SharedAutocompleteType) {
  const { helperText, labelText, name, onChange, onSelect, options, value } = props;

  const listContainerRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selected, setSelected] = useState<OptionsType>();

  const labelId = useId();
  const listBoxId = useId();
  const inputId = useId();

  const position = usePosition({
    inputId,
    isVisible,
    listBoxId,
    totalLength: options.length,
  });

  const handleSelect = useCallback(
    (newOption: OptionsType) => {
      setSelected(newOption);
      onSelect(newOption);
      onChange(newOption.label);
    },
    [onSelect, onChange],
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.currentTarget.value);
      if (!e.currentTarget.value) {
        setSelected(undefined);
        onSelect();
      }
    },
    [onChange, onSelect],
  );

  const handleClick = useCallback(() => {
    // 옵션 선택 후 list 미노출
    if (selected && isVisible) {
      setIsVisible(false);
    } else {
      setIsVisible((prev) => !prev);
    }
  }, [selected, isVisible]);

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

  return (
    <div>
      <div className="flex w-full items-center justify-center gap-1.25 bg-white">
        <TextField
          isFullWidth
          aria-expanded={isVisible}
          aria-label={!labelText ? `${name}` : undefined}
          helperText={helperText}
          id={inputId}
          labelText={labelText}
          type="text"
          value={value}
          aria-autocomplete="list"
          aria-controls={listBoxId}
          onChange={handleChange}
          onClick={handleClick}
          role="combobox"
        />
      </div>
      {isVisible && (
        <Backdrop isOpen={isVisible} onClose={handleClick}>
          <div ref={listContainerRef} className="fixed w-full">
            <Listbox
              aria-label={labelText ? undefined : name}
              id={listBoxId}
              labelId={labelText ? labelId : undefined}
              value={selected?.value || ''}
              options={options}
              renderItem={(option) => (
                <ListboxItem
                  key={option.label}
                  currentValue={selected?.value || ''}
                  value={option.value}
                  onClick={() => handleSelect(option)}
                  label={
                    value
                      ? option.label
                          .split(new RegExp(`(${value})`, 'gi'))
                          .filter((val) => val)
                          .map((letter, idx) => (
                            <span
                              key={letter + idx}
                              className={joinClassNames(
                                selected?.value === option.value
                                  ? 'text-white'
                                  : new RegExp(`(${value})`, 'gi').test(letter)
                                    ? 'text-primary-800'
                                    : 'text-primary-950',
                                new RegExp(`(${value})`, 'gi').test(letter) ? 'font-semibold' : 'font-normal',
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
