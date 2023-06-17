/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import palette from '@styles/palette';

type BlockType = {
    children: React.ReactNode;
    name: string;
    selected: string;
    onClick: (e: string) => void;
};

const blockStyle = css({
    height: 40,
    textTransform: 'uppercase',
    fontWeight: 600,
    borderRadius: 4
});

export default function Block({ children, name, onClick, selected }: BlockType) {
    return (
        <button
            type="button"
            css={css([
                blockStyle,
                {
                    border: '1px dashed #ffffff',
                    color: selected === name ? palette.secondary.main : '#ffffff',
                    background: selected === name ? palette.lightBlue.main : palette.secondary.main,
                    '&:hover': {
                        opacity: 0.6
                    }
                }
            ])}
            onClick={() => onClick(name)}
        >
            {children}
        </button>
    );
}
