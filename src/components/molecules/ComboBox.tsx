/* eslint-disable no-shadow */
/** @jsxImportSource @emotion/react */

import React, { useRef, useState, useCallback } from 'react';

import _ from 'lodash';

import FlexBox from 'components/atoms/FlexBox';
import { COMBOBOX } from 'constants/autocomplete';

import { css } from '@emotion/react';

type ListType = {
    idx: number;
    label: string;
    value: string;
};

type ComboBoxType = {
    id: string;
    icon?: React.ReactNode;
    list: ListType[];
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

const ulStyle = css({
    maxWidth: 200,
    display: 'block',
    background: 'white',
    borderRadius: 4,
    border: '1px solid #e0e0e0',
    boxSizing: 'border-box',
    padding: '10px 0'
});
export default function ComboBox({ id, icon, list, isAutoComplete = false }: ComboBoxType) {
    const dataList = isAutoComplete ? list : COMBOBOX;
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [listArr, setListArr] = useState(dataList);
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

                newArr = dataList.filter((el) => el.label.includes(inputValue));
                setListArr(newArr);
            } else {
                setIsVisible(false);
            }

            if (inputValue.length === 0) {
                setListArr(dataList);
            }
        }, 100),
        []
    );

    const handleChange = (e: any) => {
        const { value } = e.target;

        setInputValue(value);
        handleSearch(value);
    };

    return (
        <>
            <FlexBox
                justifyContent="center"
                alignItems="center"
                direction="row"
                gap={5}
                customCSS={{
                    maxWidth: 200,
                    height: 40,
                    borderRadius: 4,
                    border: '1px solid #eeeeee',
                    background: 'white',
                    boxSizing: 'border-box',
                    padding: 10
                }}
            >
                <input
                    id={id}
                    type="text"
                    role="combobox"
                    aria-autocomplete="list"
                    aria-expanded="true"
                    aria-controls="listbox"
                    css={css({
                        height: '100%',
                        border: 0
                    })}
                    value={inputValue}
                    onChange={(e) => handleChange(e)}
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
                        aria-expanded={isVisible}
                        aria-controls="listbox"
                        onClick={handleClick}
                    >
                        {icon}
                    </button>
                )}
            </FlexBox>
            {Boolean(isVisible && listArr.length > 0) && (
                <ul ref={listRef} id="listbox" role="listbox" aria-label="States" css={ulStyle}>
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
