import { ButtonHTMLAttributes, forwardRef, MouseEvent, ReactNode, useCallback } from 'react';

import { joinClassNames } from '@utils/format';

import { ButtonShapeType, ButtonSizeType, ButtonVariantType, getCommonButtonVariantStyle } from '../styles';
import { getButtonIconShapeStyle, getButtonShapeStyle, getButtonSizeStyle } from './styles';

export interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  shape?: ButtonShapeType;
  size?: ButtonSizeType;
  variant?: ButtonVariantType;
  endIcon?: ReactNode;
  startIcon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonType>(function Button(props, ref) {
  const {
    children,
    className,
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

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.currentTarget.blur();
      if (onClick) {
        onClick(e);
      }
    },
    [onClick],
  );

  return (
    <button
      ref={ref}
      {...rest}
      disabled={isDisabled}
      type={type}
      onClick={handleClick}
      className={joinClassNames(
        'font-pretendard',
        getButtonSizeStyle(size),
        getCommonButtonVariantStyle(variant),
        startIcon || endIcon ? getButtonIconShapeStyle(shape) : getButtonShapeStyle(size, shape),
        isFullWidth && 'w-full',
        className && className,
      )}
    >
      {startIcon || endIcon ? (
        <div className="flex items-center justify-center gap-1">
          {startIcon && (
            <span className="-ml-2 inline-flex size-5 shrink-0 items-center justify-center">{startIcon}</span>
          )}
          <p className="mt-0.5 shrink-0 text-center">{children}</p>
          {endIcon && <span className="-mr-2 inline-flex size-5 shrink-0 items-center justify-center">{endIcon}</span>}
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
