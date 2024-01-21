/** @jsxImportSource @emotion/react */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useRef, useEffect, useState, ChangeEvent, Fragment } from 'react';

import { css } from '@emotion/react';

import FlexBox from 'components/Base/FlexBox';

import { autoCompleteStyle } from './styles';

type ListType = {
    idx: number;
    label: string;
    value: string;
};

type AutocompleteType = {
    inputValue: string;
    label: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSelect: (el: ListType) => void;
    listArr: ListType[];
};

/**
 *  [UI Component] Autocomplete Component
 *  @param inputValue: input component에서 사용되는 value
 *  @param label: autocomplete에서 사용할 label
 *  @param onChange: input component event listener
 *  @param onSelect: autocomplete 하위 list event listener
 *  @param listArr: autocomplete 하위 list item 타입
 *  @returns JSX.Element
 */

export default function Autocomplete(props: AutocompleteType) {
    const { inputValue, onChange, label, listArr, onSelect } = props;
    const listRef = useRef<HTMLUListElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleFocus = () => {
        setIsOpen(true);
    };

    const handleBlur = () => {
        setIsOpen(false);
    };

    const handleItemClick = (e: ListType) => {
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
        <div>
            <label htmlFor={label} css={css({ display: 'none' })} />
            <FlexBox
                justifyContent="center"
                alignItems="center"
                flexDirection="row"
                gap={5}
                customCSS={autoCompleteStyle.flexBoxCustom}
            >
                <input
                    id={label}
                    ref={inputRef}
                    type="text"
                    role="combobox"
                    aria-autocomplete="list"
                    aria-expanded="true"
                    aria-controls="listbox"
                    autoComplete="off"
                    value={inputValue}
                    onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    css={autoCompleteStyle.inputStyle}
                />
            </FlexBox>
            {Boolean(listArr.length > 0 && isOpen) && (
                <ul ref={listRef} id="listbox" role="listbox" aria-label="States" css={autoCompleteStyle.ulStyle}>
                    {listArr.map((el) => {
                        return (
                            <li key={`list-${el.idx}`} css={autoCompleteStyle.listItemStyle}>
                                <button type="button" onMouseDown={() => handleItemClick(el)}>
                                    {[...el.label].map((letter, idx) =>
                                        inputValue.includes(letter) ? (
                                            <span css={css({ color: 'hotPink', fontWeight: 700 })}>{letter}</span>
                                        ) : (
                                            // eslint-disable-next-line react/no-array-index-key
                                            <Fragment key={`letter-${idx}`}>{letter}</Fragment>
                                        )
                                    )}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}
