import { forwardRef, InputHTMLAttributes, ReactNode, useId } from 'react';

import { joinClassNames } from '@utils/format';

import { getSizeStyle, RadioPositionType, RadioSizeType } from './styles';

export interface RadioType extends Omit<InputHTMLAttributes<HTMLInputElement>, 'disabled' | 'size'> {
  label: ReactNode;
  name: string;
  currentValue?: string;
  isDisabled?: boolean;
  size?: RadioSizeType;
  position?: RadioPositionType;
}

const Radio = forwardRef<HTMLInputElement, RadioType>(function Radio(
  { className, currentValue, isDisabled, label, name, position = 'end', size = 'medium', value, ...rest },
  ref,
) {
  const id = useId();

  return (
    <label
      htmlFor={rest.id || id}
      className={joinClassNames(
        'group inline-flex w-max cursor-pointer items-center',
        isDisabled && 'pointer-events-none',
        typeof label !== 'string' && 'w-full',
        className && className,
      )}
    >
      {position === 'start' &&
        (typeof label === 'string' ? (
          <span
            className={joinClassNames(
              'font-medium leading-normal',
              getSizeStyle(size).rightText,
              isDisabled && 'text-gray-600',
            )}
          >
            {label}
          </span>
        ) : (
          <div className="mr-5 w-full">{label}</div>
        ))}
      <span
        className={joinClassNames(
          getSizeStyle(size).container,
          'inline-flex items-center group-focus-within:rounded-full group-focus-within:bg-gray-200 group-hover:rounded-full group-hover:bg-gray-100',
        )}
      >
        <input
          {...rest}
          ref={ref}
          checked={value !== undefined ? value === currentValue : undefined}
          className="peer sr-only"
          disabled={isDisabled}
          id={rest.id || id}
          name={name}
          type="radio"
          value={value}
        />
        <span
          className={joinClassNames(
            'hidden items-center justify-center rounded-full border-2 border-black bg-white peer-checked:inline-flex',
            getSizeStyle(size).default,
            isDisabled && 'border-gray-400',
          )}
        >
          <span className={joinClassNames('block rounded-full bg-black', isDisabled && 'bg-gray-400')} />
        </span>
        <span
          className={joinClassNames(
            'block rounded-full border-2 border-black bg-white peer-checked:hidden',
            getSizeStyle(size).default,
            isDisabled && 'border-gray-400',
          )}
        />
      </span>
      {position === 'end' &&
        (typeof label === 'string' ? (
          <span
            className={joinClassNames(
              'font-medium leading-normal',
              getSizeStyle(size).leftText,
              isDisabled && 'text-gray-600',
            )}
          >
            {label}
          </span>
        ) : (
          <div className="ml-5 w-full">{label}</div>
        ))}
    </label>
  );
});

export default Radio;
