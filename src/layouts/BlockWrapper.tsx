/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const blockWrapperStyle = css({
    width: '100%',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 4
});

type BlockWrapperType = {
    children: React.ReactNode;
};

export default function BlockWrapper({ children }: BlockWrapperType) {
    return <div css={blockWrapperStyle}>{children}</div>;
}
