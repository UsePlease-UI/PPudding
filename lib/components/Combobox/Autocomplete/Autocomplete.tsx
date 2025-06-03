import { ChangeEvent, useCallback, useEffect, useId, useRef, useState } from 'react';

import { ClickAwayListener, Listbox, ListboxItem, ListboxOptionType } from '@components/Base';
import TextField from '@components/Form/TextField';
import usePosition from '@components/usePosition';

import { joinClassNames } from '@utils/format';

export interface AutocompleteType {
  name: string;
  value: string;
  onChange: (newValue: string) => void;
  onSelect: (newOption?: ListboxOptionType) => void;
  options: ListboxOptionType[];
  helperText?: string;
  labelText?: string;
}

export default function Autocomplete(props: AutocompleteType) {
  const { helperText, labelText, name, onChange, onSelect, options, value } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState<ListboxOptionType>();
  const [activeIndex, setActiveIndex] = useState<string | undefined>(undefined);

  const labelId = useId();
  const inputId = useId();
  const listBoxId = useId();
  const listItemId = useId();

  const position = usePosition({ inputId, isVisible, listBoxId, totalLength: options.length });

  const handleSelect = useCallback(
    (newOption: ListboxOptionType) => {
      setSelected(newOption);
      onSelect(newOption);
      onChange(newOption.label);
      setIsVisible(false);
    },
    [onSelect, onChange],
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.currentTarget.value);
      if (!e.currentTarget.value) {
        setSelected(undefined);
        onSelect();
      } else {
        setIsVisible(true);
      }
    },
    [onChange, onSelect],
  );

  const handleClick = useCallback(() => {
    // 옵션 선택 후 list 미노출
    if (selected && isVisible) {
      setIsVisible(false);
      setActiveIndex(undefined);
    } else {
      setIsVisible((prev) => !prev);
    }

    // 선택된 값이 있는 상태에서 open
    if (!isVisible && selected) {
      const index = options.findIndex((val) => val.value === selected?.value);
      setActiveIndex(index !== -1 ? String(index) : undefined);
    }
  }, [selected, isVisible, options]);

  useEffect(() => {
    const element = listRef.current;
    if (isVisible && element) {
      const { left, marginTop, maxWidth, top } = position;
      element.style.top = `${top + marginTop}px`;
      element.style.left = `${left}px`;
      const list = document.getElementById(listBoxId);
      if (list) {
        list.style.maxWidth = `${maxWidth}px`;
      }
    }
  }, [isVisible, position, listBoxId]);

  return (
    <>
      <div className="flex w-full items-center justify-center gap-1.25 bg-white">
        <TextField
          ref={inputRef}
          isFullWidth
          aria-activedescendant={activeIndex ? `${listItemId}-${activeIndex}` : undefined}
          aria-expanded={isVisible}
          aria-invalid="false"
          aria-label={!labelText ? `${name}` : undefined}
          helperText={helperText}
          id={inputId}
          labelText={labelText}
          spellCheck="false"
          type="text"
          value={value}
          aria-autocomplete="list"
          aria-controls={isVisible ? listBoxId : undefined}
          autoCapitalize="false"
          onChange={handleChange}
          onClick={handleClick}
          role="combobox"
        />
      </div>
      {isVisible && (
        <ClickAwayListener
          element={listRef.current}
          isOpen={isVisible}
          anchorElement={inputRef.current}
          onClose={handleClick}
        >
          <Listbox
            ref={listRef}
            aria-label={labelText ? undefined : name}
            className="fixed w-full"
            id={listBoxId}
            labelId={labelText ? labelId : undefined}
            value={selected?.value || ''}
            options={options}
            renderItem={(option, index) => (
              <ListboxItem
                key={option.label}
                id={`${listItemId}-${index}`}
                isSelected={selected?.value ? selected.value === option.value : false}
                value={option.value}
                onClick={() => handleSelect(option)}
                onHover={() => setActiveIndex(String(index))}
                label={
                  value
                    ? option.label.split(new RegExp(`(${value})`, 'gi')).map((letter, idx) => (
                        <span
                          key={letter + idx}
                          className={joinClassNames(
                            selected?.value === option.value
                              ? 'text-white'
                              : new RegExp(`(${value})`, 'gi').test(letter)
                                ? 'text-blue-600'
                                : 'text-black',
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
        </ClickAwayListener>
      )}
    </>
  );
}
