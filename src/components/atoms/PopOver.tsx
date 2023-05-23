/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

type PopoverType = {
    isOpen: boolean;
    children: JSX.Element;
    customCSS?: CSSInterpolation | any;
};

const popoverStyle = css({
    position: 'absolute',
    boxSizing: 'border-box',
    padding: 10,
    whiteSpace: 'nowrap',
    borderRadius: 4,
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
});

export default function PopOver({ children, isOpen, customCSS = {} }: PopoverType) {
    return isOpen ? <div css={css([popoverStyle, customCSS, { position: 'relative' }])}>{children}</div> : null;
}
