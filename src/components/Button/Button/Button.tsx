/** @jsxImportSource @emotion/react */
import { ButtonHTMLAttributes, ReactNode } from 'react';

import { css } from '@emotion/react';
import type { CustomCSSType } from 'styles/types';

import FlexBox from 'components/Base/FlexBox';

import { buttonStyle, getSizeStyle, getShapeStyle, getIconShapeStyle } from './styles';
import { ShapeType, SizeType, VariantType, getVariantStyle } from '../styles';

type BaseType = ButtonHTMLAttributes<HTMLButtonElement> & CustomCSSType;

type ButtonType = BaseType & {
    children: ReactNode;
    isDisabled?: boolean;
    hasStartIcon?: boolean;
    hasEndIcon?: boolean;
    icon?: ReactNode;
    size?: SizeType;
    variant?: VariantType;
    shape?: ShapeType;
};

/**
 *  [UI Component] Button Component
 *  @param children 컴포넌트
 *  @param isDisabled 비활성화 여부 [optional]
 *  @param hasStartIcon Start Icon 사용 여부 [optional]
 *  @param hasEndIcon End Icon 사용 여부 [optional]
 *  @param icon 아이콘 [optional]
 *  @param size [CSS] 버튼 크기 (large | medium | small)
 *  @param variant [CSS] 버튼 스타일 (outlined | contained | text)
 *  @param variant [CSS] 버튼 형태 (rounded | square | circular)
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
export default function Button(props: ButtonType) {
    const {
        type = 'button',
        children,
        isDisabled = false,
        hasStartIcon = false,
        hasEndIcon = false,
        icon,
        size,
        variant,
        shape,
        onClick,
        customCSS,
        ...rest
    } = props;

    if ((hasStartIcon || hasEndIcon) && shape === 'circular') {
        // eslint-disable-next-line no-console
        console.warn(
            'Button with either "Start Icon" or "End Icon" does not have default circular style. Please use customCSS to customize its style.'
        );
    }

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
            css={css([
                buttonStyle.button,
                getSizeStyle(size),
                getVariantStyle(variant),
                hasStartIcon || hasEndIcon ? getIconShapeStyle(shape) : getShapeStyle(size, shape),
                customCSS
            ])}
        >
            {hasStartIcon || hasEndIcon ? (
                <FlexBox gap={4} justifyContent="flex-start" alignItems="center">
                    {hasStartIcon && <span css={buttonStyle.startIcon}>{icon}</span>}
                    <div css={buttonStyle.container}>{children}</div>
                    {hasEndIcon && <span css={buttonStyle.endIcon}>{icon}</span>}
                </FlexBox>
            ) : (
                children
            )}
        </button>
    );
}
