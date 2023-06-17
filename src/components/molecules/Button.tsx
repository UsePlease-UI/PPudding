/** @jsxImportSource @emotion/react */
import FlexBox from '@atoms/FlexBox';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';
import palette from '@styles/palette';

type SizeType = 'large' | 'medium' | 'small' | '';
type VariantType = 'outlined' | 'contained' | 'text' | '';

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    hasStartIcon?: boolean;
    hasEndIcon?: boolean;
    icon?: React.ReactNode;
    type?: 'button' | 'reset' | 'submit';
    size?: SizeType;
    variant?: VariantType;
    isDisabled?: boolean;
    customCSS?: CSSInterpolation;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const buttonStyle = css({ borderRadius: 4 });

const smallStyle = css({
    height: 32,
    minWidth: 48,
    padding: '0 12px',
    fontSize: 13,
    fontWeight: 400,
    '& svg': { width: 14, height: 14 }
});

const mediumStyle = css({
    height: 40,
    minWidth: 56,
    fontSize: 14,
    fontWeight: 500,
    padding: '0 16px',
    '& svg': { width: 16, height: 16 }
});

const largeStyle = css({
    height: 45,
    minWidth: 96,
    fontSize: 15,
    fontWeight: 500,
    padding: '0 16px',
    '& svg': { width: 20, height: 20 }
});

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

const startIconContainerStyle = css({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    marginLeft: -2
});

const endIconContainerStyle = css({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    marginRight: -2
});

/**
 *  [UI Component] Button Component
 *  @param children 컴포넌트
 *  @param hasStartIcon Start Icon 사용여부 [optional]
 *  @param hasEndIcon End Icon 사용여부 [optional]
 *  @param icon 아이콘 [optional]
 *  @param type 버튼 타입 (button | reset | submit) [optional]
 *  @param size 버튼 크기 ('' | large | medium | small) [optional]
 *  @param variant 버튼 스타일 ('' | outlined | contained | text) [optional]
 *  @param isDisabled 활성화여부 [optional]
 *  @param onClick Click Event Handler [optional]
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
export default function Button(props: ButtonType) {
    const {
        children,
        hasStartIcon = false,
        hasEndIcon = false,
        icon,
        type = 'button',
        size = '',
        variant = '',
        isDisabled = false,
        onClick,
        customCSS,
        ...rest
    } = props;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.blur();
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <button
            {...rest}
            // eslint-disable-next-line react/button-has-type
            type={type}
            disabled={isDisabled}
            onClick={handleClick}
            css={css([buttonStyle, getSizeStyle(size), getVariantStyle(variant), customCSS])}
        >
            {hasStartIcon || hasEndIcon ? (
                <FlexBox gap={4} justifyContent="flex-start" alignItems="center">
                    {hasStartIcon && <span css={startIconContainerStyle}>{icon}</span>}
                    <div css={css({ textAlign: 'center' })}>{children}</div>
                    {hasEndIcon && <span css={endIconContainerStyle}>{icon}</span>}
                </FlexBox>
            ) : (
                <div>{children}</div>
            )}
        </button>
    );
}
