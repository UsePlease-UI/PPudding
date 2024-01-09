/** @jsxImportSource @emotion/react */
import { ButtonHTMLAttributes, ReactNode } from 'react';

import { css } from '@emotion/react';
import type { CustomCSSType } from 'styles/types';

import FlexBox from 'components/Base/FlexBox';

import { SizeType, VariantType, buttonStyle, getSizeStyle, getVariantStyle } from './styles';

type BaseType = ButtonHTMLAttributes<HTMLButtonElement> & CustomCSSType;

type ButtonType = BaseType & {
    children: ReactNode;
    hasStartIcon?: boolean;
    hasEndIcon?: boolean;
    icon?: ReactNode;
    size?: SizeType;
    variant?: VariantType;
    isDisabled?: boolean;
};

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
            css={css([buttonStyle.button, getSizeStyle(size), getVariantStyle(variant), customCSS])}
        >
            {hasStartIcon || hasEndIcon ? (
                <FlexBox gap={4} justifyContent="flex-start" alignItems="center">
                    {hasStartIcon && <span css={buttonStyle.startIcon}>{icon}</span>}
                    <div css={css({ textAlign: 'center' })}>{children}</div>
                    {hasEndIcon && <span css={buttonStyle.endIcon}>{icon}</span>}
                </FlexBox>
            ) : (
                <div>{children}</div>
            )}
        </button>
    );
}
