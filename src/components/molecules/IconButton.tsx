/* eslint-disable @typescript-eslint/no-empty-function */
/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';
import palette from '@styles/palette';

type SizeType = 'large' | 'medium' | 'small' | '';
type VariantType = 'outlined' | 'contained' | 'text' | '';

type IconButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    type?: 'button' | 'reset' | 'submit';
    size?: SizeType;
    variant?: VariantType;
    isDisabled?: boolean;
    customCSS?: CSSInterpolation;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const buttonStyle = css({ borderRadius: 4 });
const smallStyle = css({ height: 32, width: 32, '& svg': { width: 12, height: 12 } });
const mediumStyle = css({ height: 40, width: 40, '& svg': { width: 16, height: 16 } });
const largeStyle = css({ height: 45, width: 45, '& svg': { width: 20, height: 20 } });

const outlinedStyle = css({
    color: palette.primary.main,
    backgroundColor: '#ffffff',
    border: `1px solid ${palette.primary.main}`,
    '&:hover': {
        color: '#ffffff',
        border: `1px solid ${palette.primary.main}`,
        backgroundColor: palette.lightBlue.main
    },
    '&:focus': {
        border: `1px solid ${palette.secondary.main}`,
        backgroundColor: palette.primary.main
    },
    '&:disabled': {
        border: '1px solid #eeeeee',
        backgroundColor: '#f4f4f4'
    }
});

const containedStyle = css({
    color: palette.secondary.main,
    backgroundColor: palette.lightBlue.main,
    border: `1px solid ${palette.lightBlue.main}`,
    '&:hover': {
        color: '#ffffff',
        backgroundColor: palette.primary.main
    },
    '&:focus': {
        border: `1px solid ${palette.secondary.main}`,
        backgroundColor: palette.secondary.main
    },
    '&:disabled': {
        border: '1px solid #eeeeee',
        backgroundColor: '#145cb1b3'
    }
});

const textStyle = css({
    color: '#000000',
    border: '1px solid #e6e6e6',
    backgroundColor: '#ffffff',
    '&:hover': {
        border: '1px solid #cccccc'
    },
    '&:focus': {
        border: '1px solid #000000'
    },
    '&:disabled': {
        color: '#cccccc',
        border: '1px solid #e6e6e6'
    }
});

function getSizeStyle(size: SizeType) {
    switch (size) {
        case 'large':
            return largeStyle;
        case 'medium':
            return mediumStyle;
        case 'small':
            return smallStyle;
        default:
            return {};
    }
}

function getVariantStyle(variant: VariantType) {
    switch (variant) {
        case 'outlined':
            return outlinedStyle;
        case 'contained':
            return containedStyle;
        case 'text':
            return textStyle;
        default:
            return {};
    }
}

/**
 *  [UI Component] Icon Button
 *  @param children 컴포넌트
 *  @param type 버튼 type (button | reset | submit) [optional]
 *  @param isDisabled 활성화여부 [optional]
 *  @param size 버튼 크기 ('' | large | medium | small) [optional]
 *  @param variant 버튼 스타일 ('' | outlined | contained | text) [optional]
 *  @param onClick Click Event Handler [optional]
 *  @returns JSX.Element
 */
export default function IconButton({
    children,
    type = 'button',
    size = '',
    variant = '',
    isDisabled = false,
    onClick = () => {},
    customCSS,
    ...props
}: IconButtonType) {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.blur();
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <button
            {...props}
            // eslint-disable-next-line react/button-has-type
            type={type}
            disabled={isDisabled}
            onClick={handleClick}
            css={css([buttonStyle, getSizeStyle(size), getVariantStyle(variant), customCSS])}
        >
            {children}
        </button>
    );
}
