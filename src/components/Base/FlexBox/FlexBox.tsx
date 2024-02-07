/** @jsxImportSource @emotion/react */
import { HTMLAttributes, ReactNode } from 'react';

import { css } from '@emotion/react';
import type { CustomCSSType } from 'styles/types';

import { flexBoxStyle } from './styles';

type BaseType = HTMLAttributes<HTMLDivElement> & CustomCSSType;

type FlexBoxType = BaseType & {
    children: ReactNode;
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    alignItems?: string;
    justifyContent?: string;
    gap?: number;
    flex?: string;
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | 'unset';
};

/**
 *  [Base] Flex Component
 *  @param children 컴포넌트
 *  @param flexDirection [CSS] flex-direction
 *  @param alignItems [CSS] align-items
 *  @param justifyContent [CSS] justify-content
 *  @param gap [CSS] gap
 *  @param flex [CSS] flex
 *  @param flexWrap [CSS] flex wrap
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
export default function FlexBox(props: FlexBoxType) {
    const {
        children,
        flexDirection = 'row',
        alignItems = 'unset',
        justifyContent = 'unset',
        gap = 0,
        flex = 'none',
        flexWrap = 'unset',
        customCSS,
        ...rest
    } = props;

    return (
        <div
            {...rest}
            css={css([
                flexBoxStyle,
                {
                    justifyContent,
                    alignItems,
                    flexDirection,
                    gap,
                    flex,
                    flexWrap
                },
                customCSS
            ])}
        >
            {children}
        </div>
    );
}
