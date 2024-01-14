/** @jsxImportSource @emotion/react */
import { ButtonHTMLAttributes, MouseEvent, ReactNode, forwardRef } from 'react';

import { css } from '@emotion/react';
import type { CustomCSSType } from 'styles/types';

import { getSizeStyle, iconButtonStyle } from './styles';
import { IconButtonSizeType, VariantType, getVariantStyle } from '../styles';

type BaseType = ButtonHTMLAttributes<HTMLButtonElement> & CustomCSSType;

type IconButtonType = BaseType & {
    children: ReactNode;
    isDisabled?: boolean;
    size?: IconButtonSizeType;
    variant?: VariantType;
};

/**
 *  [UI Component] Icon Button
 *  @param children 컴포넌트
 *  @param isDisabled 비활성화 여부 [optional]
 *  @param size [CSS] 버튼 크기 ('' | large | medium | small)
 *  @param variant [CSS] 버튼 스타일 ('' | outlined | contained | text)
 *  @returns JSX.Element
 */

const IconButton = forwardRef<HTMLButtonElement, IconButtonType>(function createIconButton(props, ref) {
    const { type = 'button', children, isDisabled, size, variant, onClick, customCSS, ...rest } = props;

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.blur();
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <button
            {...rest}
            ref={ref}
            // eslint-disable-next-line react/button-has-type
            type={type}
            disabled={isDisabled}
            onClick={handleClick}
            css={css([iconButtonStyle.iconButton, getSizeStyle(size), getVariantStyle(variant), customCSS])}
        >
            {children}
        </button>
    );
});

export default IconButton;
