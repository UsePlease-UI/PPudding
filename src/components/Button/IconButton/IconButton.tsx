/** @jsxImportSource @emotion/react */
import { ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react';

import { css } from '@emotion/react';
import type { CustomCSSType } from 'styles/types';

import { getSizeStyle, iconButtonStyle } from './styles';
import { SizeType, VariantType, getVariantStyle } from '../styles';

type BaseType = ButtonHTMLAttributes<HTMLButtonElement> & CustomCSSType;

type IconButtonType = BaseType & {
    children: ReactNode;
    size?: SizeType;
    variant?: VariantType;
    isDisabled?: boolean;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

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
export default function IconButton(props: IconButtonType) {
    const {
        children,
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
            css={css([iconButtonStyle.iconButton, getSizeStyle(size), getVariantStyle(variant), customCSS])}
        >
            {children}
        </button>
    );
}
