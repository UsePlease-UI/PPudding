/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const blockWrapperStyle = css({
    display: 'flex',
    gap: 5,
    width: '100%',
    minHeight: 30,
    flexWrap: 'wrap'
});

type BlockWrapperType = {
    children: React.ReactNode;
};

export default function BlockWrapper({ children }: BlockWrapperType) {
    return <div css={blockWrapperStyle}>{children}</div>;
}
