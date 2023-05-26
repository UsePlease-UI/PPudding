/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

type FlexBoxType = {
    children: React.ReactNode;
    justifyContent?: string;
    alignItems?: string;
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    gap?: number;
    flex?: string;
    customCSS?: CSSInterpolation;
};

const flexBoxStyle = css({
    display: 'flex'
});

export default function FlexBox({
    children,
    justifyContent = 'unset',
    alignItems = 'unset',
    direction = 'row',
    gap = 0,
    flex = 'none',
    customCSS = {}
}: FlexBoxType) {
    return (
        <div css={css([flexBoxStyle, { justifyContent, alignItems, flexDirection: direction, gap, flex }, customCSS])}>
            {children}
        </div>
    );
}
