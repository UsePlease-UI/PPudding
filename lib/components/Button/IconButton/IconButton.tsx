import { ButtonHTMLAttributes, forwardRef, MouseEvent, ReactNode, useCallback } from 'react';

import { joinClassNames } from '@utils/format';

import {
  ButtonShapeType,
  ButtonVariantType,
  getCommonButtonShapeStyle,
  getCommonButtonVariantStyle,
  getIconButtonSizeStyle,
  IconButtonSizeType,
} from '../styles';

export interface IconButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isDisabled?: boolean;
  shape?: ButtonShapeType;
  size?: IconButtonSizeType;
  variant?: ButtonVariantType;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonType>(function IconButton(props, ref) {
  const { children, className, isDisabled, onClick, shape, size, type = 'button', variant, ...rest } = props;

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
      {...rest}
      ref={ref}
      disabled={isDisabled}
      type={type}
      onClick={handleClick}
      className={joinClassNames(
        'h-max w-max font-inherit child-svg:block',
        getIconButtonSizeStyle(size),
        getCommonButtonVariantStyle(variant),
        getCommonButtonShapeStyle(shape),
        className && className,
      )}
    >
      {children}
    </button>
  );
});

export default IconButton;
