/** @jsxImportSource @emotion/react */
import Typography from 'components/Base/Typography';
import IconButton from 'components/Button/IconButton';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';
import { XMarkIcon } from '@heroicons/react/24/outline';
import palette from 'styles/palette';

type ChipType = {
    label: string;
    value: string | number;
    isDeletable?: boolean;
    onDelete?: (value: string | number) => void;
    customCSS?: CSSInterpolation;
};

const chipStyle = css({
    width: 'max-content',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    borderRadius: 999,
    border: `1px solid ${palette.primary.main}`,
    color: '#000000',
    backgroundColor: '#ffffff',
    '&:hover': {
        backgroundColor: palette.lightBlue.main
    }
});

const labelStyle = css({ fontSize: 14, lineHeight: 1.5, fontWeight: 500 });

const buttonStyle = {
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
};

/**
 *  [UI Component] Chip Component
 *  @param label 텍스트 값
 *  @param value 값
 *  @param isDeletable 삭제 가능여부 [optional]
 *  @param onDelete Delete Handler  [optional]
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
export default function Chip(props: ChipType) {
    const { label, value, isDeletable = true, onDelete, customCSS = {} } = props;
    return (
        <div css={css([chipStyle, { padding: isDeletable ? '4px 8px 4px 14px' : '4px 12px' }, customCSS])}>
            <Typography component="span" customCSS={labelStyle}>
                {label}
            </Typography>
            {isDeletable && (
                <IconButton
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
                    customCSS={buttonStyle}
                >
                    <XMarkIcon />
                </IconButton>
            )}
        </div>
    );
}
