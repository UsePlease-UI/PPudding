/** @jsxImportSource @emotion/react */
import { useRef, useState, useId, ChangeEvent } from 'react';

import { CustomCSSType } from 'styles';
import palette from 'styles/palette';

import { Backdrop, Typography, Listbox, OptionType, ListboxItem } from 'components/Base';
import Box from 'components/Base/Box';
import FlexBox from 'components/Base/FlexBox';
import usePosition from 'components/Combobox/usePosition';
import TextField from 'components/Form/TextField';

import { autoCompleteStyle } from './styles';

type AutocompleteType = CustomCSSType & {
    name: string;
    options: OptionType[];
    inputValue: string;
    onChange: (newValue: string | number) => void;
    onSelect: (newOption?: OptionType) => void;
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
    const { labelText, helperText, options, name, inputValue, onChange, onSelect, customCSS } = props;

    const inputRef = useRef<HTMLInputElement | null>(null);

    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [selected, setSelected] = useState<OptionType>();

    const labelId = useId();
    const listBoxId = useId();
    const inputId = useId();

    const { top, left, marginTop, maxWidth } = usePosition({
        inputId,
        listBoxId,
        isVisible,
        totalLength: options.length
    });

    const handleSelect = (newOption: OptionType) => {
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
        <Box customCSS={customCSS}>
            <FlexBox alignItems="center" justifyContent="center" gap={5} customCSS={autoCompleteStyle.inputContainer}>
                <TextField
                    ref={inputRef}
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
                    customCSS={autoCompleteStyle.input}
                />
            </FlexBox>
            {isVisible && (
                <Backdrop isOpen={isVisible} onClose={handleClick}>
                    <Box
                        customCSS={{
                            ...autoCompleteStyle.listContainer,
                            ...{
                                top,
                                left,
                                marginTop,
                                '& > ul': {
                                    maxWidth
                                }
                            }
                        }}
                    >
                        <Listbox
                            id={listBoxId}
                            labelId={labelText ? labelId : undefined}
                            aria-label={labelText ? undefined : `${name}`}
                            name={name}
                            value={selected?.value || ''}
                            options={options}
                            renderItem={(option) => (
                                <ListboxItem
                                    key={option.label}
                                    currentValue={selected?.value || ''}
                                    name={name}
                                    label={
                                        inputValue
                                            ? (option.label as string)
                                                  .split(new RegExp(`(${inputValue})`, 'gi'))
                                                  .filter((val) => val)
                                                  .map((letter, idx) => (
                                                      <Typography
                                                          key={letter + idx}
                                                          component="span"
                                                          color={
                                                              new RegExp(`(${inputValue})`, 'gi').test(letter)
                                                                  ? palette.primary[600]
                                                                  : palette.neutral.black
                                                          }
                                                          fontWeight={
                                                              new RegExp(`(${inputValue})`, 'gi').test(letter)
                                                                  ? '700'
                                                                  : '400'
                                                          }
                                                      >
                                                          {letter}
                                                      </Typography>
                                                  ))
                                            : option.label
                                    }
                                    value={option.value}
                                    onClick={() => handleSelect(option)}
                                />
                            )}
                        />
                    </Box>
                </Backdrop>
            )}
        </Box>
    );
}
