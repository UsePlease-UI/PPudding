/** @jsxImportSource @emotion/react */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useRef, useEffect, useState } from 'react';

import FlexBox from 'components/Base/FlexBox';

import { css } from '@emotion/react';
import palette from 'styles/palette';

type ListType = {
    idx: number;
    label: string;
    value: string;
};

type AutoCompleteType = {
    inputValue: string;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSelect: (el: ListType) => void;
    listArr: ListType[];
};

const flexBoxCustom = css({
    maxWidth: 200,
    height: 40,
    borderRadius: 4,
    border: '1px solid #eeeeee',
    background: 'white',
    boxSizing: 'border-box',
    padding: 10
});

const inputStyle = css({
    width: '100%',
    height: '100%',
    border: 0
});

const listItemStyle = css({
    width: '100%',
    minWidth: 120,
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.5,
    padding: '0 12px',
    '& button': {
        width: '100%',
        height: 40,
        textAlign: 'left',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
    },
    '&:hover, &:hover button': {
        fontWeight: 600,
        color: '#ffffff',
        backgroundColor: palette.lightBlue.main
    }
});

const ulStyle = css({
    maxWidth: 200,
    display: 'block',
    background: 'white',
    borderRadius: 4,
    border: '1px solid #e0e0e0',
    boxSizing: 'border-box',
    padding: '10px 0'
});

export default function AutoComplete(props: AutoCompleteType) {
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
            <FlexBox justifyContent="center" alignItems="center" direction="row" gap={5} customCSS={flexBoxCustom}>
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
                    css={inputStyle}
                />
            </FlexBox>
            {Boolean(listArr.length > 0 && isOpen) && (
                <ul ref={listRef} id="listbox" role="listbox" aria-label="States" css={ulStyle}>
                    {listArr.map((el) => {
                        return (
                            <li key={`list-${el.idx}`} css={listItemStyle}>
                                <button type="button" onMouseDown={() => handleItemClick(el)}>
                                    {[...el.label].map((letter, idx) =>
                                        inputValue.includes(letter) ? (
                                            <span css={css({ color: 'hotPink', fontWeight: 700 })}>{letter}</span>
                                        ) : (
                                            // eslint-disable-next-line react/no-array-index-key
                                            <React.Fragment key={`letter-${idx}`}>{letter}</React.Fragment>
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
