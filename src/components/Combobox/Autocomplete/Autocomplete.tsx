import { ChangeEvent, Fragment, useEffect, useId, useRef, useState } from 'react';

import { listStyle } from '@components/Base/Listbox';
import TextField from '@components/Form/TextField';
import { CommonListDataType } from '@components/types';

import { joinClassNames } from '@utils/format';

type AutocompleteType = {
  inputValue: string;
  label: string;
  listArr: CommonListDataType[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSelect: (el: CommonListDataType) => void;
};

/**
 *  [UI Component] Autocomplete Component
 *  @param inputValue Input component에서 사용되는 value
 *  @param label Autocomplete에서 사용할 label
 *  @param onChange Input component event listener
 *  @param onSelect Autocomplete 하위 list event listener
 *  @param listArr Autocomplete 하위 list item 타입
 *  @returns JSX.Element
 */
export default function Autocomplete({ inputValue, label, listArr, onChange, onSelect }: AutocompleteType) {
  const listRef = useRef<HTMLUListElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const listboxId = useId();

  const handleItemClick = (e: CommonListDataType) => {
    onSelect(e);
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen && listArr.length) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen, listArr]);

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
    <label className="block w-full" htmlFor={label}>
      <div className="flex w-full items-center justify-center gap-1.25">
        <TextField
          ref={inputRef}
          isFullWidth
          aria-autocomplete="list"
          aria-controls={listboxId}
          aria-expanded={Boolean(listArr.length > 0 && isOpen)}
          autoComplete="new-password"
          id={label}
          role="combobox"
          type="text"
          value={inputValue}
          onChange={(e) => {
            onChange(e);
            if (e.currentTarget.value) {
              setIsOpen(true);
            } else {
              setIsOpen(false);
            }
          }}
        />
      </div>
      {Boolean(listArr.length > 0 && isOpen) && (
        <ul ref={listRef} aria-label={label} className={listStyle.list} id={listboxId} role="listbox">
          {listArr.map((el) => (
            <li key={`list-${el.idx}`} className={joinClassNames('group px-3', listStyle.listItem)}>
              <button
                className={joinClassNames(listStyle.listItemButton)}
                type="button"
                onClick={() => handleItemClick(el)}
              >
                {[...el.label].map((letter, idx) =>
                  inputValue.includes(letter) ? (
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
    </label>
  );
}
