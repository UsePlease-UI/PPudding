import { ReactElement, ReactNode, cloneElement, useEffect, useMemo } from 'react';

import { DismissFilled } from '@fluentui/react-icons';

import { OptionsType } from '@components/useAlert';

import { joinClassNames } from '@utils/format';

import { getVariantStyle } from './styles';

type AlertType = {
    message: string;
    onClose: () => void;
    icon?: ReactNode;
    options?: OptionsType;
};

/**
 *  Alert Component
 *  @param message Message to be displayed
 *  @param onClose Icon Button Click Handler
 *  @param icon ReactNode [optional]
 *  @param options [optional]
 *  @returns JSX.Element
 */
export default function Alert({ message, options, icon, onClose }: AlertType) {
    const animationTime = useMemo(() => {
        let total = 4.5;
        if (options?.delay) {
            total = options.delay / 1000 - 0.5;
        }
        return total;
    }, []);

    useEffect(() => {
        const timerId = setTimeout(onClose, options?.delay || 5000);
        return () => clearTimeout(timerId);
    }, []);

    return (
        <div
            role="alert"
            className={joinClassNames(
                'flex min-h-12 w-max animate-fadeInOut items-center justify-between whitespace-pre-wrap break-all rounded-xl px-3 py-2.25',
                getVariantStyle(options?.variant)
            )}
            style={{ animationDelay: options?.delay ? `${animationTime}s` : '4.5s' }}
        >
            <p className="pr-2.5 text-16 font-medium leading-20 text-inherit">{message}</p>
            {(options?.canDismiss === undefined || options?.canDismiss === true) && (
                <div className="flex items-center">
                    <div
                        className={joinClassNames(
                            'mx-5 h-3 w-px',
                            options?.variant === 'warning' ? 'bg-black' : 'bg-white'
                        )}
                    />
                    <button
                        aria-label="dismiss button"
                        type="button"
                        className={joinClassNames(
                            'rounded-full bg-transparent text-inherit',
                            options?.variant === 'warning' &&
                                'hover:border-black focus:border-black active:border-black'
                        )}
                        onClick={(e) => {
                            e.currentTarget.blur();
                            onClose();
                        }}
                    >
                        {icon ? (
                            cloneElement(icon as ReactElement, {
                                className: 'stroke-2 text-inherit !block w-4.5 h-4.5'
                            })
                        ) : (
                            <DismissFilled className="!block h-4.5 w-4.5 stroke-2 text-inherit" />
                        )}
                    </button>
                </div>
            )}
        </div>
    );
}
