import { ButtonHTMLAttributes, forwardRef, MouseEvent, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

import { getShapeStyle, getSizeStyle, getVariantStyle, IconButtonSizeType, ShapeType, VariantType } from '../styles';

type BaseType = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>;

type IconButtonType = BaseType & {
    children: ReactNode;
    isDisabled?: boolean;
    shape?: ShapeType;
    size?: IconButtonSizeType;
    variant?: VariantType;
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
    const { children, isDisabled, onClick, shape, size, type = 'button', variant, ...rest } = props;

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
            disabled={isDisabled}
            type={type}
            className={joinClassNames(
                'h-max w-max font-inherit child-svg:block',
                getSizeStyle(size),
                getVariantStyle(variant),
                getShapeStyle(shape),
            )}
            onClick={handleClick}
        >
            {children}
        </button>
    );
});

export default IconButton;
