/** @jsxImportSource @emotion/react */
import { MouseEvent } from 'react';

import { css } from '@emotion/react';
import { palette } from 'styles';

import Button from 'components/Button/Button';

import { listBoxStyle } from './styles';
import { OptionType } from './types';

type ListboxType = {
    id: string;
    labelId: string;
    name: string;
    value: string | number;
    options: OptionType[];
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Listbox = ({ id, labelId, name, value, options, onClick }: ListboxType) => (
    <ul id={id} role="listbox" aria-labelledby={labelId} tabIndex={-1} css={listBoxStyle.list}>
        {options.map((option) => (
            <li
                key={option.value}
                role="option"
                aria-selected={value === option.value}
                css={css([
                    listBoxStyle.listItem,
                    {
                        ...(value === option.value && {
                            '&, & button': {
                                textAlign: 'left',
                                width: '100%',
                                fontWeight: 600,
                                color: palette.neutral.white,
                                backgroundColor: palette.primary[400]
                            }
                        })
                    }
                ])}
            >
                <Button type="button" name={name} value={option.value} onClick={onClick}>
                    {option.label}
                </Button>
            </li>
        ))}
    </ul>
);

export default Listbox;
