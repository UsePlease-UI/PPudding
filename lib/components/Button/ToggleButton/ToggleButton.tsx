import {
  ChangeEvent,
  cloneElement,
  forwardRef,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
  useCallback,
  useId,
  useMemo,
} from 'react';

import { joinClassNames } from '@utils/format';

import { ButtonSizeType } from '../styles';
import { getToggleButtonSizeStyle } from './styles';

export interface ToggleButtonType extends Omit<InputHTMLAttributes<HTMLInputElement>, 'disabled' | 'size'> {
  children: ReactNode;
  name: string;
  value: string;
  currentValue?: string | string[];
  isDisabled?: boolean;
  isMultiple?: boolean;
  size?: ButtonSizeType;
}

const ToggleButton = forwardRef<HTMLInputElement, ToggleButtonType>(function ToggleButton(props, ref) {
  const {
    children,
    className,
    currentValue = '',
    isDisabled,
    isMultiple,
    name,
    onChange,
    size,
    value,
    ...rest
  } = props;
  const id = useId();

  const isChecked = useMemo(
    () => (typeof currentValue === 'string' ? value === currentValue : currentValue.includes(value)),
    [currentValue, value],
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      e.currentTarget.blur();
      if (onChange) {
        onChange(e);
      }
    },
    [onChange],
  );

  return (
    <label
      htmlFor={id}
      className={joinClassNames(
        'group flex h-max w-max shrink-0 cursor-pointer items-center overflow-hidden border-y border-primary-600 bg-white first:rounded-l first:border-l last:rounded-r last:border-r focus-within:border-primary-700 focus-within:bg-primary-100',
        !isChecked && isDisabled && 'cursor-not-allowed border-yellow-gray-400',
        isChecked && isDisabled && 'cursor-not-allowed border-gray-400',
        className && className,
      )}
    >
      <input
        {...rest}
        ref={ref}
        checked={isChecked}
        className="peer sr-only"
        disabled={isDisabled}
        id={id}
        name={name}
        type={isMultiple ? 'checkbox' : 'radio'}
        value={value}
        onChange={handleChange}
      />
      {typeof children === 'string' ? (
        <span
          className={joinClassNames(
            'text-16 font-medium uppercase',
            'flex items-center justify-center text-primary-800 group-focus-within:text-primary-800 group-hover:bg-primary-50 group-hover:text-primary-900 peer-checked:bg-primary-600 peer-checked:text-primary-950 peer-checked:hover:bg-primary-700 peer-checked:hover:text-white peer-disabled:bg-yellow-gray-50 peer-disabled:text-yellow-gray-600 peer-disabled:peer-checked:bg-gray-400 peer-disabled:peer-checked:text-gray-200',
            getToggleButtonSizeStyle(size).text,
          )}
        >
          {children}
        </span>
      ) : (
        <span
          className={joinClassNames(
            'flex items-center justify-center text-primary-800 group-focus-within:text-primary-800 group-hover:bg-primary-50 group-hover:text-primary-900 peer-checked:bg-primary-600 peer-checked:text-primary-950 peer-checked:hover:bg-primary-700 peer-checked:hover:text-white peer-disabled:bg-yellow-gray-50 peer-disabled:text-yellow-gray-600 peer-disabled:peer-checked:bg-gray-400 peer-disabled:peer-checked:text-gray-200',
            getToggleButtonSizeStyle(size).icon,
          )}
        >
          {cloneElement(children as ReactElement, {
            className: joinClassNames('block text-inherit'),
          })}
        </span>
      )}
    </label>
  );
});

export default ToggleButton;
