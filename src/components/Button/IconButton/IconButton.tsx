import { ButtonHTMLAttributes, MouseEvent, ReactNode, forwardRef } from 'react';

import { joinClassNames } from '@utils/format';

import { IconButtonSizeType, VariantType, getVariantStyle, getSizeStyle, ShapeType, getShapeStyle } from '../styles';

type BaseType = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>;

type IconButtonType = BaseType & {
    children: ReactNode;
    isDisabled?: boolean;
    size?: IconButtonSizeType;
    variant?: VariantType;
    shape?: ShapeType;
};

/**
 *  [UI Component] Icon Button
 *  @param children 컴포넌트
 *  @param isDisabled 비활성화 여부 [optional]
 *  @param size [CSS] 버튼 크기 (large | medium | small)
 *  @param variant [CSS] 버튼 스타일 (outlined | contained | text)
 *  @param shape [CSS] 버튼 형태 (rounded | square | circular)
 *  @returns JSX.Element
 */
const IconButton = forwardRef<HTMLButtonElement, IconButtonType>(function IconButton(props, ref) {
    const { type = 'button', children, isDisabled, size, variant, shape, onClick, ...rest } = props;

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
            className={joinClassNames(
                'h-max w-max font-inherit child-svg:block',
                getSizeStyle(size),
                getVariantStyle(variant),
                getShapeStyle(shape)
            )}
        >
            {children}
        </button>
    );
});

export default IconButton;
