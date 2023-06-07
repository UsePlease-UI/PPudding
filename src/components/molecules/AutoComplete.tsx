/** @jsxImportSource @emotion/react */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useRef, useEffect } from 'react';

import _ from 'lodash';

import FlexBox from 'components/atoms/FlexBox';

import { css } from '@emotion/react';

type ListType = {
    idx: number;
    label: string;
    value: string;
};

type autoCompleteType = {
    inputValue: string;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    listArr: ListType[];
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

export default function AutoComplete({ inputValue, onChange, label, listArr }: autoCompleteType) {
    const listRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        if (listArr.length) {
            document.body.style.overflow = 'hidden';
        } else document.body.style.overflow = 'auto';
    }, [listArr]);

    return (
        <div>
            <label htmlFor={label} css={css({ display: 'none' })} />
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
                    id={label}
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
                    onChange={onChange}
                />
            </FlexBox>
            {Boolean(listArr.length > 0) && (
                <ul ref={listRef} id="listbox" role="listbox" aria-label="States" css={ulStyle}>
                    {listArr.map((el) => {
                        return (
                            <li key={`list-${el.idx}`} css={listItemStyle}>
                                <button type="button">
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
