/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
/** @jsxImportSource @emotion/react */

import React, { useRef, useState, useCallback } from 'react';

import _ from 'lodash';

import FlexBox from 'components/atoms/FlexBox';

import { css } from '@emotion/react';

type listType = {
    idx: number;
    label: string;
    value: string;
};

type ComboBoxType = {
    icon?: React.ReactNode;
    list: listType[];
    isAutoComplete?: boolean;
};

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
        backgroundColor: 'lightpink'
    }
});

export default function ComboBox({ icon = false, list, isAutoComplete = false }: ComboBoxType) {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [listArr, setListArr] = useState(list);
    const [inputValue, setInputValue] = useState<string>('');
    const listRef = useRef<HTMLUListElement | null>(null);

    const handleClick = () => {
        setIsVisible((prev) => !prev);
        if (!isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    const handleSearch = useCallback(
        _.debounce((inputValue) => {
            let newArr = [];
            if (inputValue.length !== 0 || inputValue !== '') {
                setIsVisible(true);

                newArr = list.filter((el) => el.label.includes(inputValue));
                setListArr(newArr);
            } else {
                setIsVisible(false);
            }

            if (inputValue.length === 0) {
                setListArr(list);
            }
        }, 100),
        []
    );

    const handleChange = (e: string) => {
        setInputValue(e);
        handleSearch(e);
    };

    return (
        <>
            <FlexBox
                justifyContent="center"
                alignItems="center"
                direction="row"
                gap={5}
                customCSS={css({
                    maxWidth: 200,
                    height: 40,
                    borderRadius: 4,
                    border: '1px solid #eeeeee',
                    background: 'white',
                    boxSizing: 'border-box',
                    padding: 10
                })}
            >
                <input
                    type="text"
                    role="combobox"
                    aria-autocomplete="list"
                    aria-expanded="true"
                    aria-controls="listbox"
                    css={css({
                        height: '100%',
                        border: 0
                        // , '&[aria-expanded=true]': { backgroundColor: 'red' }
                    })}
                    value={inputValue}
                    onChange={(e) => handleChange(e.target.value)}
                />

                {icon && (
                    <button
                        css={css({
                            width: 20,
                            height: 20,
                            '& svg': { transform: isVisible && listArr.length > 0 ? 'rotate(180deg)' : 'unset' }
                        })}
                        type="button"
                        aria-label="status"
                        aria-expanded="false"
                        aria-controls="listbox"
                        onClick={handleClick}
                    >
                        {icon}
                    </button>
                )}
            </FlexBox>
            {Boolean(isVisible && listArr.length > 0) && (
                <ul
                    ref={listRef}
                    id="listbox"
                    role="listbox"
                    aria-label="States"
                    css={css({
                        maxWidth: 200,
                        display: 'block',
                        background: 'white',
                        borderRadius: 4,
                        border: '1px solid #e0e0e0',
                        boxSizing: 'border-box',
                        padding: '10px 0'
                    })}
                >
                    {listArr.map((el) => {
                        return (
                            <li key={`list-${el.idx}`} css={listItemStyle}>
                                <button type="button" onClick={handleClick}>
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
        </>
    );
}
