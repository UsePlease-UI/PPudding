import {
  ButtonHTMLAttributes,
  cloneElement,
  forwardRef,
  MouseEvent,
  ReactElement,
  ReactNode,
  useCallback,
  useMemo,
} from 'react';

import { joinClassNames } from '@utils/format';

import { ButtonSizeType } from '../styles';
import { getToggleButtonSizeStyle } from './styles';

export interface ToggleButtonType
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'onClick' | 'size'> {
  children: ReactNode;
  value: string;
  currentValue?: string | string[];
  isDisabled?: boolean;
  isMultiple?: boolean;
  size?: ButtonSizeType;
  onClick?: (selected: string) => void;
}

const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonType>(function ToggleButton(props, ref) {
  const { children, className, currentValue = '', isDisabled, onClick, size, value, ...rest } = props;

  const isChecked = useMemo(
    () => (typeof currentValue === 'string' ? value === currentValue : currentValue.includes(value)),
    [currentValue, value],
  );

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.currentTarget.blur();
      if (onClick) {
        onClick(e.currentTarget.value);
      }
    },
    [onClick],
  );

  return (
    <button
      {...rest}
      ref={ref}
      aria-pressed={isChecked}
      disabled={isDisabled}
      tabIndex={0}
      value={value}
      onClick={handleClick}
      className={joinClassNames(
        'group flex h-max w-max shrink-0 cursor-pointer items-center overflow-hidden border-y border-black bg-white first:rounded-l first:border-l last:rounded-r last:border-r disabled:pointer-events-none',
        isChecked ? 'bg-black hover:opacity-80 active:opacity-70' : 'bg-white hover:bg-gray-100 active:bg-gray-200',
        !isChecked && isDisabled && 'pointer-events-none border-gray-400 bg-gray-100',
        isChecked && isDisabled && 'pointer-events-none border-gray-400 bg-gray-400',
        className && className,
      )}
    >
      {typeof children === 'string' ? (
        <span
          className={joinClassNames(
            'text-16 font-medium uppercase',
            'flex items-center justify-center text-black group-disabled:text-gray-600',
            isChecked && 'text-white group-hover:text-white group-disabled:text-gray-600',
            getToggleButtonSizeStyle(size).text,
          )}
        >
          {children}
        </span>
      ) : (
        <span
          className={joinClassNames(
            'flex items-center justify-center text-black disabled:text-gray-600',
            isChecked && 'text-white hover:text-white group-disabled:text-gray-600',
            getToggleButtonSizeStyle(size).icon,
          )}
        >
          {cloneElement(children as ReactElement<HTMLElement>, { className: joinClassNames('block text-inherit') })}
        </span>
      )}
    </button>
  );
});

export default ToggleButton;
