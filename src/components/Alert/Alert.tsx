/** @jsxImportSource @emotion/react */
import { ReactNode, useEffect, useMemo } from 'react';

import { css } from '@emotion/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { palette } from 'styles';

import { FlexBox, Typography } from 'components/Base';
import IconButton from 'components/Button/IconButton';

import { alertStyle, fadeIn, fadeOut, getVariantStyle } from './styles';

import type { OptionsType } from 'components/useAlert/useAlert';

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
            css={css([
                alertStyle.alert,
                getVariantStyle(options?.variant),
                {
                    animation: `${fadeIn} 0.5s, ${fadeOut} 0.5s ${animationTime}s`
                }
            ])}
        >
            <Typography fontSize={16} fontWeight="600" lineHeight="20px" color="inherit" customCSS={alertStyle.text}>
                {children}
            </Typography>
            {(!options?.canDismiss || options?.canDismiss === true) && (
                <FlexBox alignItems="center">
                    <div
                        css={css([
                            alertStyle.divider,
                            {
                                backgroundColor:
                                    options?.variant === 'warning' ? palette.neutral.black : 'rgb(250 250 250 / 50%)'
                            }
                        ])}
                    />
                    <IconButton size="small" customCSS={alertStyle.iconButton} onClick={onClose}>
                        {icon || <XMarkIcon />}
                    </IconButton>
                </FlexBox>
            )}
        </div>
    );
}
