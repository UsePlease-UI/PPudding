import { cloneElement, forwardRef, InputHTMLAttributes, ReactElement, ReactNode, useId } from 'react';

import { CheckIcon } from '@heroicons/react/24/solid';

import { joinClassNames } from '@utils/format';

import { CheckboxPositionType, CheckboxSizeType, getSizeStyle } from './styles';

export interface CheckboxType extends Omit<InputHTMLAttributes<HTMLInputElement>, 'disabled' | 'size'> {
  label: ReactNode;
  isDisabled?: boolean;
  size?: CheckboxSizeType;
  checkedIcon?: ReactNode;
  icon?: ReactNode;
  position?: CheckboxPositionType;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxType>(function Checkbox(
  { checkedIcon, className, icon, isDisabled, label, position = 'end', size = 'medium', ...rest }: CheckboxType,
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
          size === 'small' && 'p-0.5',
          size === 'medium' && 'p-0.75',
          size === 'large' && 'p-1',
          'inline-flex items-center group-focus-within:rounded group-focus-within:bg-gray-200 group-hover:rounded group-hover:bg-gray-100',
        )}
      >
        <input {...rest} ref={ref} className="peer sr-only" disabled={isDisabled} id={rest.id || id} type="checkbox" />
        {checkedIcon ? (
          <span
            className={joinClassNames(
              'hidden items-center justify-center peer-checked:inline-flex',
              getSizeStyle(size).custom,
            )}
          >
            {cloneElement(checkedIcon as ReactElement<HTMLElement>, {
              className: joinClassNames(isDisabled ? 'text-gray-600' : 'text-black'),
            })}
          </span>
        ) : (
          <span
            className={joinClassNames(
              'hidden items-center justify-center rounded bg-black peer-checked:inline-flex',
              getSizeStyle(size).default,
              isDisabled && 'border-2 border-gray-400 bg-gray-400',
            )}
          >
            <CheckIcon className={joinClassNames('text-white', isDisabled && 'text-gray-600')} />
          </span>
        )}
        {icon ? (
          <span
            className={joinClassNames(
              'inline-flex items-center justify-center peer-checked:hidden',
              getSizeStyle(size).custom,
            )}
          >
            {cloneElement(icon as ReactElement<HTMLElement>, {
              className: joinClassNames(isDisabled ? 'text-gray-600' : 'text-black'),
            })}
          </span>
        ) : (
          <span
            className={joinClassNames(
              'inline-block rounded border-2 border-black bg-white peer-checked:hidden',
              getSizeStyle(size).default,
              isDisabled && 'border-gray-400',
            )}
          />
        )}
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

export default Checkbox;
