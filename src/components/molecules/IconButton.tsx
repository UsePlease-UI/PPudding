/* eslint-disable @typescript-eslint/no-empty-function */
/** @jsxImportSource @emotion/react */
import FlexBox from 'components/atoms/FlexBox';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

type SizeType = 'large' | 'medium' | 'small';
type VariantType = 'outlined' | 'contained' | 'text';

type IconButtonType = {
    children: React.ReactNode;
    type?: 'button' | 'reset' | 'submit';
    size?: SizeType;
    variant?: VariantType;
    isDisabled?: boolean;
    customCSS?: CSSInterpolation;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const buttonStyle = css({
    borderRadius: 4
});

const smallStyle = css({
    height: 32,
    width: 32,
    '& svg': {
        width: 12,
        height: 12
    }
});

const mediumStyle = css({
    height: 40,
    width: 40,
    '& svg': {
        width: 16,
        height: 16
    }
});

const largeStyle = css({
    height: 45,
    width: 45,
    '& svg': {
        width: 20,
        height: 20
    }
});

const outlinedStyle = css({
    color: 'magenta',
    backgroundColor: '#ffffff',
    border: '1px solid magenta',
    '&:hover': {
        color: '#ffffff',
        border: '1px solid hotpink',
        backgroundColor: 'lightpink'
    },
    '&:focus': {
        border: '1px solid magenta',
        backgroundColor: 'hotpink'
    },
    '&:disabled': {
        border: '1px solid #eeeeee',
        backgroundColor: '#f4f4f4'
    }
});

const containedStyle = css({
    color: '#ffffff',
    backgroundColor: 'magenta',
    border: '1px solid magenta',
    '&:hover': {
        backgroundColor: 'hotpink'
    },
    '&:focus': {
        backgroundColor: 'magenta'
    },
    '&:disabled': {
        border: '1px solid magenta',
        backgroundColor: 'lightpink'
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
        case 'medium':
            return mediumStyle;
        case 'small':
            return smallStyle;
        default:
            return largeStyle;
    }
}

function getVariantStyle(variant: VariantType) {
    switch (variant) {
        case 'contained':
            return containedStyle;
        case 'text':
            return textStyle;
        default:
            return outlinedStyle;
    }
}

export default function Button({
    children,
    type = 'button',
    size = 'large',
    variant = 'outlined',
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
            <FlexBox gap={4} justifyContent="center" alignItems="center">
                {children}
            </FlexBox>
        </button>
    );
}
