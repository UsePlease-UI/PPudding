/** @jsxImportSource @emotion/react */
import { HTMLAttributes, ReactNode } from 'react';

import { css } from '@emotion/react';
import type { CustomCSSType } from 'styles/types';

type BaseType = HTMLAttributes<HTMLDivElement> & CustomCSSType;

type FlexBoxType = BaseType & {
    children: ReactNode;
    justifyContent?: string;
    alignItems?: string;
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    gap?: number;
    flex?: string;
};

const flexBoxStyle = css({
    display: 'flex'
});

/**
 *  [Base] Styled Component
 *  @param children 컴포넌트
 *  @param justifyContent [CSS] justify-content [optional]
 *  @param alignItems [CSS] align-items [optional]
 *  @param fledDirection [CSS] flex-direction [optional]
 *  @param gap [CSS] gap [optional]
 *  @param flex [CSS] flex [optional]
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
export default function FlexBox(props: FlexBoxType) {
    const {
        children,
        justifyContent = 'unset',
        alignItems = 'unset',
        flexDirection = 'row',
        gap = 0,
        flex = 'none',
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
                    flex
                },
                customCSS
            ])}
        >
            {children}
        </div>
    );
}
