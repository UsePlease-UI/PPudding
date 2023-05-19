/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import palette from 'styles/palette';

type blockType = {
    children: React.ReactNode;
    name: string;
    onClick: (e: string) => void;
};

const blockStyle = css({
    background: `${palette.primary.main}`,
    color: 'white',
    cursor: 'pointer',
    minWidth: 100,
    height: 40,
    borderRadius: 10,
    '&:hover': {
        background: `${palette.lightBlue.main}`
    }
});

export default function Block({ children, name, onClick }: blockType) {
    return (
        <button type="button" css={blockStyle} onClick={() => onClick(name)}>
            {children}
        </button>
    );
}
