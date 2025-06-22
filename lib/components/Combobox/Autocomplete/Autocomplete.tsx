import { ChangeEvent, InputHTMLAttributes, useCallback, useEffect, useId, useRef, useState } from 'react';

import { autoUpdate, flip, offset, size, useFloating } from '@floating-ui/react-dom';

import { ClickAwayListener, Listbox, ListboxOptionType } from '@components/Base';
import { TextField } from '@components/Form';

import { joinClassNames } from '@utils/format';

export interface AutocompleteType
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'disabled' | 'onChange' | 'onSelect'> {
  value: string;
  onChange: (newValue: string) => void;
  onSelect: (newOption?: ListboxOptionType) => void;
  options: ListboxOptionType[];
  isDisabled?: boolean;
  isReadOnly?: boolean;
}

export default function Autocomplete(props: AutocompleteType) {
  const { onChange, onSelect, options, value, ...rest } = props;

  const { floatingStyles, refs } = useFloating({
    middleware: [
      offset(1),
      flip({ padding: 20 }),
      size({
        apply({ availableHeight, elements, rects }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${availableHeight}px`,
            minWidth: `${rects.reference.width}px`,
          });
        },
        padding: 20,
      }),
    ],
    placement: 'bottom',
    whileElementsMounted: autoUpdate,
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<HTMLDivElement[]>([]);

  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const [selected, setSelected] = useState<ListboxOptionType>();

  const listboxId = useId();
  const listItemId = useId();

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setIsFocused(false);
    setActiveIndex(-1);
  }, []);

  const handleSelect = useCallback(
    (newOption: ListboxOptionType) => {
      setSelected(newOption);
      onSelect(newOption);
      onChange(newOption.label);
      handleClose();
    },
    [onSelect, onChange, handleClose],
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.currentTarget.value);
      // 입력된 값이 없다면 -> 선택되었던 값 해제
      if (!e.currentTarget.value) {
        setSelected(undefined);
        onSelect();
      } else if (!isOpen) {
        // 입력하기 시작했다면
        setIsOpen(true);
      }
      setActiveIndex(0);
    },
    [isOpen, onChange, onSelect],
  );

  const handleClick = useCallback(() => {
    // 옵션 선택 후 list 미노출
    if (selected && isOpen) {
      setIsOpen(false);
      setActiveIndex(-1);
    } else {
      setIsOpen((prev) => !prev);
    }

    // 선택된 값이 있는 상태에서 open
    if (!isOpen && selected) {
      const index = options.findIndex((val) => val.value === selected?.value);
      setActiveIndex(index === -1 ? 0 : index);
    }
  }, [selected, isOpen, options]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen && e.key !== 'ArrowDown') {
        return;
      }

      // input에서 ⬇️ 누르면 list가 펼쳐져야 함
      if (!isOpen && e.key === 'ArrowDown') {
        setIsFocused(true);
        setIsOpen(true);
        setActiveIndex(0);
        return;
      }

      // list item keyboard navigation
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setActiveIndex((prev) => (prev + 1 === options.length ? 0 : prev + 1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setActiveIndex((prev) => (prev === 0 ? options.length - 1 : prev - 1));
          break;
        case 'Enter':
          e.preventDefault();
          onSelect(options[activeIndex]);
          handleClose();
          break;
        case 'Tab':
          e.preventDefault();
          handleClose();
          break;
        case 'Escape':
          e.preventDefault();
          handleClose();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, activeIndex, onSelect, options, handleClose]);

  useEffect(() => {
    // list 네비게이션 할 때 아이템으로 자동 스크롤 되도록
    if (isOpen && activeIndex !== -1) {
      optionRefs.current[activeIndex].scrollIntoView({
        block: 'nearest',
      });
    }
  }, [isOpen, activeIndex]);

  return (
    <>
      <div ref={refs.setReference} className="w-max">
        <TextField
          {...rest}
          ref={inputRef}
          isFullWidth
          aria-activedescendant={isOpen && activeIndex !== -1 ? `${listItemId}-${activeIndex}` : undefined}
          aria-expanded={isOpen}
          spellCheck="false"
          tabIndex={0}
          type="text"
          value={value}
          aria-autocomplete="list"
          aria-controls={isOpen ? listboxId : undefined}
          autoCapitalize="false"
          onChange={handleChange}
          onClick={handleClick}
          role="combobox"
        />
      </div>
      {isOpen && (
        <ClickAwayListener
          element={listRef.current}
          isOpen={isOpen}
          anchorElement={inputRef.current}
          onClose={handleClick}
        >
          <Listbox
            ref={(node) => {
              refs.setFloating(node);
              listRef.current = node;
            }}
            aria-labelledby={rest['aria-labelledby']}
            className="w-max"
            id={listboxId}
            style={floatingStyles}
          >
            {options.map((option, index) => (
              <Listbox.Item
                key={option.label}
                ref={(node) => {
                  if (node) {
                    optionRefs.current[index] = node;
                  }
                }}
                id={`${listItemId}-${index}`}
                isSelected={selected?.value ? selected.value === option.value : false}
                value={option.value}
                onClick={() => handleSelect(option)}
                onMouseEnter={() => setActiveIndex(index)}
                className={
                  isFocused && activeIndex === index ? 'outline outline-2 outline-offset-[-2px] outline-black' : ''
                }
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
            ))}
          </Listbox>
        </ClickAwayListener>
      )}
    </>
  );
}
