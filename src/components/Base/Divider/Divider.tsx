/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { palette } from 'styles';

type DividerType = {
    borderStyle?: string;
    borderWidth?: string;
    borderColor?: string;
    margin?: string;
};

export default function Divider({
    margin = '20px 0',
    borderStyle = 'solid',
    borderWidth = '1px',
    borderColor = palette.primary[600]
}: DividerType) {
    return <hr css={css({ margin, borderStyle, borderWidth, borderColor })} />;
}
