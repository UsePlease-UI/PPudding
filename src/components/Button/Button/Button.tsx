import { ButtonHTMLAttributes, forwardRef, MouseEvent, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

import { getIconShapeStyle, getShapeStyle, getSizeStyle } from './styles';
import { getVariantStyle, ShapeType, SizeType, VariantType } from '../styles';

type BaseType = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>;

type ButtonType = BaseType & {
    children: ReactNode;
    endIcon?: ReactNode;
    isDisabled?: boolean;
    isFullWidth?: boolean;
    shape?: ShapeType;
    size?: SizeType;
    startIcon?: ReactNode;
    variant?: VariantType;
};

/**
 *  [UI Component] Button Component
 *  @param children 컴포넌트
 *  @param isDisabled 비활성화 여부 [optional]
 *  @param startIcon 아이콘 (앞) [optional]
 *  @param endIcon 아이콘 (뒤) [optional]
 *  @param size [CSS] 버튼 크기 (large | medium | small)
 *  @param variant [CSS] 버튼 스타일 (outlined | contained | text)
 *  @param shape [CSS] 버튼 형태 (rounded | square | circular)
 *  @returns JSX.Element
 */
const Button = forwardRef<HTMLButtonElement, ButtonType>(function Button(props, ref) {
    const {
        children,
        endIcon,
        isDisabled,
        isFullWidth,
        onClick,
        shape = 'square',
        size = 'medium',
        startIcon,
        type = 'button',
        variant = 'outlined',
        ...rest
    } = props;

    if ((startIcon || endIcon) && shape === 'circular') {
        console.warn('Button with either "Start Icon" or "End Icon" does not have default circular style.');
    }

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.blur();
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <button
            ref={ref}
            {...rest}
            // eslint-disable-next-line react/button-has-type
            disabled={isDisabled}
            type={type}
            className={joinClassNames(
                'font-pretendard',
                getSizeStyle(size),
                getVariantStyle(variant),
                startIcon || endIcon ? getIconShapeStyle(shape) : getShapeStyle(size, shape),
                isFullWidth && 'w-full',
            )}
            onClick={handleClick}
        >
            {startIcon || endIcon ? (
                <div className="flex items-center justify-center gap-1">
                    {startIcon && (
                        <span className="-ml-2 inline-flex size-5 shrink-0 items-center justify-center">
                            {startIcon}
                        </span>
                    )}
                    <p className="mt-0.5 shrink-0 text-center">{children}</p>
                    {endIcon && (
                        <span className="-mr-2 inline-flex size-5 shrink-0 items-center justify-center">{endIcon}</span>
                    )}
                </div>
            ) : typeof children === 'string' ? (
                <p className="mt-0.5 w-full text-center">{children}</p>
            ) : (
                children
            )}
        </button>
    );
});

export default Button;
