/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import palette from 'styles/palette';

type BlockType = {
    children: React.ReactNode;
    name: string;
    selected: string;
    onClick: (e: string) => void;
};

const blockStyle = css({
    color: 'white',
    cursor: 'pointer',
    minWidth: 100,
    height: 40,
    borderRadius: 10,
    '&:hover': {
        background: `${palette.lightBlue.main}`
    }
});

export default function Block({ children, name, onClick, selected }: BlockType) {
    return (
        <button
            type="button"
            css={css([blockStyle, { background: selected === name ? palette.primary.main : palette.secondary.main }])}
            onClick={() => onClick(name)}
        >
            {children}
        </button>
    );
}
