import { ChangeEvent, Fragment, useCallback, useEffect, useId, useRef, useState } from 'react';

import { listStyle } from '@components/Base/Listbox';
import TextField from '@components/Form/TextField';
import { OptionsType } from '@components/types';

import { joinClassNames } from '@utils/format';

export interface AutocompleteType {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSelect: (selected: OptionsType) => void;
  options: OptionsType[];
  labelText?: string;
}

export default function Autocomplete({ labelText, onChange, onSelect, options, value }: AutocompleteType) {
  const listRef = useRef<HTMLUListElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const listboxId = useId();
  const inputId = useId();

  const handleItemClick = useCallback(
    (e: OptionsType) => {
      onSelect(e);
      setIsOpen(false);
    },
    [onSelect],
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e);
      if (e.currentTarget.value) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    },
    [onChange],
  );

  useEffect(() => {
    if (isOpen && options.length) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen, options]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (isOpen && !inputRef.current?.contains(event.target as Node)) {
        document.body.style.overflow = 'auto';
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      <div className="flex w-full items-center justify-center gap-1.25 bg-white">
        <TextField
          ref={inputRef}
          isFullWidth
          aria-expanded={Boolean(options.length > 0 && isOpen)}
          id={inputId}
          labelText={labelText}
          type="text"
          value={value}
          aria-autocomplete="list"
          aria-controls={listboxId}
          autoComplete="new-password"
          onChange={handleChange}
          role="combobox"
        />
      </div>
      {Boolean(options.length > 0 && isOpen) && (
        <ul ref={listRef} aria-label={labelText} className={listStyle.list} id={listboxId} role="listbox">
          {options.map((el) => (
            <li key={`list-${el.idx}`} className={joinClassNames('group px-3', listStyle.listItem)}>
              <button
                className={joinClassNames(listStyle.listItemButton)}
                type="button"
                onClick={() => handleItemClick(el)}
              >
                {[...el.label].map((letter, idx) =>
                  value.includes(letter) ? (
                    <span key={`letter-${idx}`} className="font-semibold text-primary-800">
                      {letter}
                    </span>
                  ) : (
                    <Fragment key={`letter-${idx}`}>{letter}</Fragment>
                  ),
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
