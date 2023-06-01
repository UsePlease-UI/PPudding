/* eslint-disable @typescript-eslint/no-empty-function */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';
import { XMarkIcon } from 'assets/icons';

type SearchChipType = {
    label: string;
    value: string | number;
    onDelete?: (value: string | number) => void;
    isDeletable?: boolean;
    customCSS?: CSSInterpolation;
};

const chipStyle = css({
    width: 'max-content',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    borderRadius: 999,
    border: '1px solid pink',
    color: '#000000',
    backgroundColor: '#ffffff',
    '&:hover': {
        backgroundColor: 'lightpink'
    }
});

const labelStyle = css({
    fontSize: 14,
    lineHeight: 1.5,
    fontWeight: 500
});

const buttonStyle = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: '1px solid #eeeeee',
    borderRadius: 999,
    padding: 5,
    backgroundColor: 'transparent',
    '&:hover': {
        backgroundColor: '#e8a5af'
    },
    '& svg': {
        height: 12,
        width: 12
    }
});

export default function Chip({
    label,
    value,
    isDeletable = true,
    onDelete = () => {},
    customCSS = {}
}: SearchChipType) {
    return (
        <div css={css([chipStyle, { padding: isDeletable ? '4px 8px 4px 14px' : '4px 12px' }, customCSS])}>
            <span css={labelStyle}>{label}</span>
            {isDeletable && (
                <button
                    aria-label="delete"
                    type="button"
                    onClick={(e) => {
                        if (isDeletable && onDelete) {
                            e.currentTarget.blur();
                            onDelete(value);
                        } else {
                            e.preventDefault();
                        }
                    }}
                    css={css(buttonStyle)}
                >
                    <XMarkIcon />
                </button>
            )}
        </div>
    );
}
