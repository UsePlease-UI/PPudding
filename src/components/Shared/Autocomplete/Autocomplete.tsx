import { useRef, useState, useId, ChangeEvent, useEffect } from 'react';

import { Backdrop, Listbox, ListboxItem } from '@components/Base';
import { TextField } from '@components/Form';
import { CommonListDataType } from '@components/types';
import usePosition from '@components/usePosition';

import { joinClassNames } from '@utils/format';

type AutocompleteType = {
    name: string;
    options: CommonListDataType[];
    inputValue: string;
    onChange: (newValue: string | number) => void;
    onSelect: (newOption?: CommonListDataType) => void;
    labelText?: string;
    helperText?: string;
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
    const { labelText, helperText, options, name, inputValue, onChange, onSelect } = props;

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
        totalLength: options.length
    });

    useEffect(() => {
        const element = listContainerRef.current;
        if (isVisible && element) {
            const { top, left, marginTop, maxWidth } = position;
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
            <div className="flex w-full items-center justify-center gap-5 bg-white">
                <TextField
                    aria-label={!labelText ? `${name}` : undefined}
                    id={inputId}
                    labelText={labelText}
                    helperText={helperText}
                    type="text"
                    role="combobox"
                    aria-autocomplete="list"
                    aria-expanded={isVisible}
                    aria-controls={listBoxId}
                    isFullWidth
                    value={inputValue}
                    onChange={handleChange}
                    onClick={handleClick}
                />
            </div>
            {isVisible && (
                <Backdrop isOpen={isVisible} onClose={handleClick}>
                    <div ref={listContainerRef} className="fixed w-full">
                        <Listbox
                            id={listBoxId}
                            labelId={labelText ? labelId : undefined}
                            aria-label={labelText ? undefined : name}
                            value={selected?.value || ''}
                            options={options}
                            renderItem={(option) => (
                                <ListboxItem
                                    key={option.label}
                                    currentValue={selected?.value || ''}
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
                                                                    ? 'text-primary-600'
                                                                    : 'text-black',
                                                              new RegExp(`(${inputValue})`, 'gi').test(letter)
                                                                  ? 'font-semibold'
                                                                  : 'font-normal'
                                                          )}
                                                      >
                                                          {letter}
                                                      </span>
                                                  ))
                                            : option.label
                                    }
                                    value={option.value}
                                    onClick={() => handleSelect(option)}
                                />
                            )}
                        />
                    </div>
                </Backdrop>
            )}
        </div>
    );
}
