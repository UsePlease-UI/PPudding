import { cloneElement, ReactElement, ReactNode, useEffect, useMemo } from 'react';

import { XMarkIcon } from '@heroicons/react/24/solid';

import { AlertOptionsType } from '@components/useAlert';

import { joinClassNames } from '@utils/format';

import { getAlertVariantStyle } from './styles';

export interface AlertType {
  message: string;
  onClose: () => void;
  icon?: ReactNode;
  options?: AlertOptionsType;
}

export default function Alert({ icon, message, onClose, options }: AlertType) {
  const { canDismiss, delay, variant } = useMemo(
    () => ({ canDismiss: options?.canDismiss, delay: options?.delay || 4.5, variant: options?.variant || 'default' }),
    [options],
  );

  const animationTime = useMemo(() => {
    let total = 4.5;
    if (delay) {
      total = delay / 1000 - 0.5;
    }
    return total;
  }, [delay]);

  useEffect(() => {
    const timerId = setTimeout(onClose, delay || 5000);
    return () => clearTimeout(timerId);
  }, [onClose, delay]);

  return (
    <div
      style={{ animationDelay: delay ? `${animationTime}s` : '4.5s' }}
      role="alert"
      className={joinClassNames(
        'flex min-h-12 w-max animate-fadeInOut items-center justify-between whitespace-pre-wrap break-all rounded-xl px-3 py-2.25',
        getAlertVariantStyle(variant),
      )}
    >
      <p className="pr-2.5 text-16 font-medium leading-20 text-inherit">{message}</p>
      {(canDismiss === undefined || canDismiss === true) && (
        <div className="flex items-center">
          <div className={joinClassNames('mx-5 h-3 w-px', options?.variant === 'warning' ? 'bg-black' : 'bg-white')} />
          <button
            aria-label="dismiss button"
            type="button"
            onClick={(e) => {
              e.currentTarget.blur();
              onClose();
            }}
            className={joinClassNames(
              'rounded-full bg-transparent text-inherit',
              options?.variant === 'warning' && 'hover:border-black focus:border-black active:border-black',
            )}
          >
            {icon ? (
              cloneElement(icon as ReactElement, {
                className: joinClassNames('!block h-4.5 w-4.5 stroke-2 text-inherit'),
              })
            ) : (
              <XMarkIcon className="!block size-4.5 stroke-2 text-inherit" />
            )}
          </button>
        </div>
      )}
    </div>
  );
}
