/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

type pageNumButtonPropType = {
    pageNum: number;
    isSelected: boolean;
    onClick: () => void;
};

export default function PageNumButton({ pageNum, isSelected, onClick }: pageNumButtonPropType) {
    const props = isSelected ? { 'aria-current': 'page' as const } : { 'aria-label': `Go to page ${pageNum}` };

    return (
        <button
            {...props}
            type="button"
            onClick={onClick}
            css={css({
                width: 32,
                height: 32,
                padding: 0,
                borderRadius: 4,
                fontSize: 15,
                fontWeight: 600,
                cursor: 'pointer',
                color: isSelected ? 'white' : '#8D8D8D',
                backgroundColor: isSelected ? '#3378FF' : '',
                '&:hover': {
                    backgroundColor: '#3378FF4D'
                }
            })}
        >
            {pageNum}
        </button>
    );
}
