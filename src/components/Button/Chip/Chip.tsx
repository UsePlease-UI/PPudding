/** @jsxImportSource @emotion/react */
import { MouseEvent } from 'react';

import { css } from '@emotion/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import type { CustomCSSType } from 'styles/types';

import Typography from 'components/Base/Typography';
import IconButton from 'components/Button/IconButton';

import { chipStyle } from './styles';

type ChipType = CustomCSSType & {
    label: string;
    value: string;
    isDeletable?: boolean;
    onDelete?: (value: string) => void;
};

/**
 *  [UI Component] Chip Component
 *  @param label 텍스트 값
 *  @param value 값
 *  @param isDeletable 삭제 가능여부 [optional]
 *  @param onDelete Delete Handler [optional]
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
export default function Chip(props: ChipType) {
    const { label, value, isDeletable = true, onDelete, customCSS } = props;

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (isDeletable && onDelete) {
            e.currentTarget.blur();
            onDelete(value);
        } else {
            e.preventDefault();
        }
    };

    return (
        <div
            css={css([
                chipStyle.chip,
                {
                    padding: isDeletable ? '4px 8px 4px 14px' : '4px 12px'
                },
                customCSS
            ])}
        >
            <Typography component="span" fontSize={14} fontWeight="600" lineHeight="1.5">
                {label}
            </Typography>
            {isDeletable && (
                <IconButton type="button" aria-label="delete" onClick={handleClick} customCSS={chipStyle.button}>
                    <XMarkIcon />
                </IconButton>
            )}
        </div>
    );
}
