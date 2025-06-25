import { forwardRef, InputHTMLAttributes, ReactNode, useId } from 'react';

import { joinClassNames } from '@utils/format';

export interface SwitchType extends Omit<InputHTMLAttributes<HTMLInputElement>, 'disabled'> {
  isDisabled?: boolean;
  label?: ReactNode;
  stateText?: string;
  thumb?: ReactNode;
  position?: 'end' | 'start';
}

const Switch = forwardRef<HTMLInputElement, SwitchType>(function Switch(
  { className, isDisabled, label, position = 'start', stateText, thumb, ...rest },
  ref,
) {
  const id = useId();

  return (
    <label className="flex items-center justify-between gap-2.5" htmlFor={rest.id || id}>
      {position === 'start' &&
        (typeof label === 'string' ? <span className="cursor-pointer text-16 font-medium">{label}</span> : label)}
      <div
        className={joinClassNames(
          'relative flex h-8 w-14 cursor-pointer items-center rounded-25 bg-gray-100 p-1 focus-within:outline focus-within:outline-offset-2 focus-within:outline-black',
          isDisabled ? 'pointer-events-none bg-gray-400 has-[:checked]:bg-gray-600' : 'has-[:checked]:bg-black',
          className && className,
        )}
      >
        <input {...rest} ref={ref} className="peer sr-only" disabled={isDisabled} id={rest.id || id} type="checkbox" />
        {stateText && (
          <span
            aria-hidden="true"
            className="peer-checked:right-unset absolute right-1.5 text-10 font-normal text-black peer-checked:left-1.5 peer-checked:text-white"
          >
            {stateText}
          </span>
        )}
        {thumb ? (
          thumb
        ) : (
          <span className="size-6 rounded-full bg-white transition-transform peer-checked:translate-x-6 peer-disabled:bg-gray-100 peer-checked:peer-disabled:bg-gray-400" />
        )}
      </div>
      {position === 'end' &&
        (typeof label === 'string' ? <span className="cursor-pointer text-16 font-medium">{label}</span> : label)}
    </label>
  );
});

export default Switch;
