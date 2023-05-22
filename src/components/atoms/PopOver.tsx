/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

type PopoverType = {
    children: JSX.Element;
    customCSS: React.CSSProperties | any;
};

const popoverStyle = css({
    position: 'absolute',
    boxSizing: 'border-box',
    padding: 10,
    whiteSpace: 'nowrap',
    borderRadius: 4,
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
});

export default function PopOver({ children, customCSS = {} }: PopoverType) {
    return <div css={css([popoverStyle, customCSS])}>{children}</div>;
}
