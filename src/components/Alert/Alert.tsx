import { ReactElement, ReactNode, cloneElement, useEffect, useMemo } from 'react';

import { FlexBox, Typography } from '@components/Base';
import type { OptionsType } from '@components/useAlert';

import { DismissFilled } from '@fluentui/react-icons';
import { joinClassNames } from '@utils/format';

import { getVariantStyle } from './styles';

type AlertType = {
    children: ReactNode;
    onClose: () => void;
    icon?: ReactNode;
    options?: OptionsType;
};

/**
 *  Alert Component
 *  @param children ReactNode
 *  @param onClose Icon Button Click Handler
 *  @param icon ReactNode [optional]
 *  @param options [optional]
 *  @returns JSX.Element
 */
export default function Alert({ children, options, icon, onClose }: AlertType) {
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
                'flex min-h-48 w-max animate-fadeInOut items-center justify-between whitespace-pre-wrap break-all rounded-xl px-12 py-9',
                getVariantStyle(options?.variant)
            )}
            style={{ animationDelay: options?.delay ? `${animationTime}s` : '4.5s' }}
        >
            <Typography
                fontSize="text-16"
                fontWeight="font-medium"
                lineHeight="leading-20"
                color="text-inherit"
                padding="pr-2.5"
            >
                {children}
            </Typography>
            {(options?.canDismiss === undefined || options?.canDismiss === true) && (
                <FlexBox alignItems="items-center">
                    <div
                        className={joinClassNames(
                            'mx-10 h-12 w-1',
                            options?.variant === 'warning' ? 'bg-black' : 'bg-white'
                        )}
                    />
                    <button
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
                            cloneElement(icon as ReactElement, { className: 'stroke-2 text-inherit !block size-18' })
                        ) : (
                            <DismissFilled className="!block size-18 stroke-2 text-inherit" />
                        )}
                    </button>
                </FlexBox>
            )}
        </div>
    );
}
