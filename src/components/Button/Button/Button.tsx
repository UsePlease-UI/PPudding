import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';

import { FlexBox } from '@components/Base';

import { joinClassNames } from '@utils/format';

import { getSizeStyle, getShapeStyle, getIconShapeStyle } from './styles';
import { ShapeType, SizeType, VariantType, getVariantStyle } from '../styles';

type BaseType = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>;

type ButtonType = BaseType & {
    children: ReactNode;
    isDisabled?: boolean;
    hasStartIcon?: boolean;
    hasEndIcon?: boolean;
    icon?: ReactNode;
    size?: SizeType;
    variant?: VariantType;
    shape?: ShapeType;
    isFullWidth?: boolean;
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
 *  @param shape [CSS] 버튼 형태 (rounded | square | circular)
 *  @returns JSX.Element
 */
const Button = forwardRef<HTMLButtonElement, ButtonType>(function Button(props, ref) {
    const {
        type = 'button',
        children,
        isDisabled,
        hasStartIcon,
        hasEndIcon,
        icon,
        size = 'medium',
        variant = 'outlined',
        shape = 'square',
        isFullWidth,
        onClick,
        ...rest
    } = props;

    if ((hasStartIcon || hasEndIcon) && shape === 'circular') {
        console.warn('Button with either "Start Icon" or "End Icon" does not have default circular style.');
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
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
            type={type}
            disabled={isDisabled}
            onClick={handleClick}
            className={joinClassNames(
                'font-pretendard',
                getSizeStyle(size),
                getVariantStyle(variant),
                hasStartIcon || hasEndIcon ? getIconShapeStyle(shape) : getShapeStyle(size, shape),
                isFullWidth && 'w-full'
            )}
        >
            {hasStartIcon || hasEndIcon ? (
                <FlexBox gap="gap-4" justifyContent="justify-center" alignItems="items-center">
                    {hasStartIcon && (
                        <span className="-ml-8 inline-flex h-20 w-20 shrink-0 items-center justify-center">{icon}</span>
                    )}
                    <p className="mt-2 shrink-0 text-center">{children}</p>
                    {hasEndIcon && (
                        <span className="-mr-8 inline-flex h-20 w-20 shrink-0 items-center justify-center">{icon}</span>
                    )}
                </FlexBox>
            ) : typeof children === 'string' ? (
                <p className="mt-2 w-full text-center">{children}</p>
            ) : (
                children
            )}
        </button>
    );
});

export default Button;
