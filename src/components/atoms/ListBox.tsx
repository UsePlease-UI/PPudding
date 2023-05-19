/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

type OptionType = { label: string; value: string | number };

type ListBoxType = {
    id: string;
    labelId: string;
    name: string;
    value: string | number;
    options: OptionType[];
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const listStyle = css({
    width: '100%',
    maxHeight: 300,
    padding: '10px 0',
    border: '1px solid #eeeeee',
    borderRadius: 4,
    backgroundColor: '#ffffff',
    overflowX: 'hidden',
    overflowY: 'auto'
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
        backgroundColor: 'lightpink'
    }
});

export default function ListBox({ id, labelId, name, value, options, onClick }: ListBoxType) {
    return (
        <ul css={listStyle} id={id} role="listbox" aria-labelledby={labelId} tabIndex={-1}>
            {options.map((option) => (
                <li
                    key={option.value}
                    role="option"
                    aria-selected={value === option.value}
                    css={css([
                        listItemStyle,
                        {
                            ...(value === option.value && {
                                '&, & button': {
                                    textAlign: 'left',
                                    width: '100%',
                                    height: 40,
                                    fontWeight: 600,
                                    color: '#ffffff',
                                    backgroundColor: 'hotpink'
                                }
                            })
                        }
                    ])}
                >
                    <button type="button" name={name} value={option.value} onClick={onClick}>
                        {option.label}
                    </button>
                </li>
            ))}
        </ul>
    );
}
