import {
  HTMLAttributes,
  KeyboardEvent as ReactKeyboardEvent,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';

import { autoUpdate, flip, offset, size, useFloating } from '@floating-ui/react-dom';

import { ChevronDownIcon } from '@heroicons/react/24/solid';

import { ClickAwayListener, Listbox, ListboxOptionType } from '@components/Base';
import { getCommonButtonVariantStyle } from '@components/Button';

import { joinClassNames } from '@utils/format';

export interface SelectType extends Omit<HTMLAttributes<HTMLButtonElement>, 'onChange'> {
  selected: string;
  onChange: (selected: string) => void;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  options?: ListboxOptionType[];
  placeholder?: string;
}

export default function Select(props: SelectType) {
  const { className, id, isDisabled, isReadOnly, onChange, options = [], placeholder, selected, ...rest } = props;

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

  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<HTMLDivElement[]>([]);

  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const buttonId = useId();
  const listboxId = useId();

  const handleClick = useCallback(() => {
    if (isOpen) {
      setIsFocused(false);
      setActiveIndex(-1);
    } else {
      setActiveIndex(selected ? options.findIndex((option) => option.value === selected) : 0);
    }
    setIsOpen((prev) => !prev);
  }, [isOpen, selected, options]);

  const handleKeyDown = useCallback((e: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setIsFocused(true);
    }
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setIsFocused(false);
    setActiveIndex(-1);
  }, []);

  const handleChange = useCallback(
    (selected: string) => {
      onChange(selected);
      handleClose();
    },
    [onChange, handleClose],
  );

  const selectedLabel = useMemo(() => options.find((option) => option.value === selected)?.label, [selected, options]);

  useEffect(() => {
    // list가 노출될 때 선택된 또는 첫번째 list item이 focus되도록
    if (isOpen && activeIndex !== -1) {
      optionRefs.current[activeIndex]?.focus();
      optionRefs.current[activeIndex]?.scrollIntoView({
        block: 'nearest',
      });
    }
  }, [isOpen, activeIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) {
        return;
      }

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
          onChange(options[activeIndex].value);
          handleClose();
          buttonRef.current?.focus();
          break;
        case ' ':
          e.preventDefault();
          onChange(options[activeIndex].value);
          handleClose();
          buttonRef.current?.focus();
          break;
        case 'Tab':
          e.preventDefault();
          handleClose();
          buttonRef.current?.focus();
          break;
        case 'Escape':
          e.preventDefault();
          handleClose();
          buttonRef.current?.focus();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, activeIndex, onChange, options, handleClose]);

  return (
    <div className={joinClassNames('w-max', className && className)}>
      <div className="group relative">
        <button
          {...rest}
          ref={(node) => {
            refs.setReference(node);
            buttonRef.current = node;
          }}
          aria-expanded={isOpen}
          aria-labelledby={rest['aria-labelledby'] ? `${rest['aria-labelledby']} ${id || buttonId}` : undefined}
          disabled={isDisabled || isReadOnly}
          id={id || buttonId}
          tabIndex={0}
          type="button"
          aria-controls={isOpen ? listboxId : undefined}
          aria-haspopup="listbox"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          className={joinClassNames(
            getCommonButtonVariantStyle('outlined'),
            'flex h-10 min-w-30 items-center justify-between rounded pl-3 pr-2 text-black',
            placeholder && !selected && 'text-gray-600',
          )}
        >
          <span className="mr-2.5 flex-1 truncate text-left text-14 font-normal leading-normal text-inherit">
            {placeholder && !selected ? placeholder : selectedLabel}
          </span>
          <span className="size-5">
            <ChevronDownIcon
              className={joinClassNames('!block h-5 w-5 text-black transition-transform', isOpen && 'rotate-180')}
            />
          </span>
        </button>
        {isOpen && (
          <ClickAwayListener
            element={buttonRef.current}
            isOpen={isOpen}
            anchorElement={listRef.current}
            onClose={handleClose}
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
              {options.map(({ label, value }, index) => (
                <Listbox.Item
                  key={`${label}-${value}`}
                  ref={(node) => {
                    if (node) {
                      optionRefs.current[index] = node;
                    }
                  }}
                  isSelected={value === selected}
                  label={label}
                  tabIndex={activeIndex === index ? 0 : -1}
                  value={value}
                  onClick={handleChange}
                  className={
                    isFocused && activeIndex === index ? 'outline outline-2 outline-offset-[-2px] outline-black' : ''
                  }
                />
              ))}
            </Listbox>
          </ClickAwayListener>
        )}
      </div>
    </div>
  );
}
