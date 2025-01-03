import { ChangeEvent, forwardRef, InputHTMLAttributes, MouseEvent, ReactNode, useCallback, useId } from 'react';

import { joinClassNames } from '@utils/format';

import { getSizeStyle, RadioPositionType, RadioSizeType } from './styles';

export interface RadioType extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: ReactNode;
  name: string;
  currentValue?: string;
  isDisabled?: boolean;
  size?: RadioSizeType;
  position?: RadioPositionType;
}

const Radio = forwardRef<HTMLInputElement, RadioType>(function Radio(
  { className, currentValue, isDisabled, label, name, onChange, position = 'end', size = 'medium', value, ...props },
  ref,
) {
  const id = useId();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      e.currentTarget.blur();
      if (onChange) {
        onChange(e);
      }
    },
    [onChange],
  );

  const handleClick = useCallback((e: MouseEvent<HTMLInputElement>) => e.currentTarget.blur(), []);

  return (
    <label
      htmlFor={id}
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
              getSizeStyle(size).text,
              isDisabled && 'text-gray-400',
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
          'inline-flex items-center group-focus-within:rounded-full group-focus-within:bg-yellow-gray-100 group-hover:rounded-full group-hover:bg-yellow-gray-50',
        )}
      >
        <input
          {...props}
          ref={ref}
          checked={value !== undefined ? value === currentValue : undefined}
          className="peer sr-only"
          disabled={isDisabled}
          id={id}
          name={name}
          type="radio"
          value={value}
          onChange={handleChange}
          onClick={handleClick}
        />
        <span
          className={joinClassNames(
            'hidden items-center justify-center rounded-full border-2 border-primary-600 bg-white peer-checked:inline-flex',
            getSizeStyle(size).default,
            isDisabled && 'border-gray-400',
          )}
        >
          <span className={joinClassNames('block rounded-full bg-primary-600', isDisabled && 'bg-gray-400')} />
        </span>
        <span
          className={joinClassNames(
            'block rounded-full border-2 border-primary-600 bg-white peer-checked:hidden',
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
              getSizeStyle(size).text,
              isDisabled && 'text-gray-400',
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
