/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const blockWrapperStyle = css({
    display: 'flex',
    gap: 5,
    width: '100%',
    minHeight: 30,
    flexWrap: 'wrap'
});

export default function BlockWrapper({ children }: any) {
    return <div css={blockWrapperStyle}>{children}</div>;
}
