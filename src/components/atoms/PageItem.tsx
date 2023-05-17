/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const listStyle = css({
    width: 32,
    height: 32,
    display: 'flex',
    textDecoration: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    fontSize: 15,
    fontWeight: 600,
    cursor: 'pointer'
});

type pageItemPropType = {
    pageNum: number;
    page: number;
    totalCount: number;
    onClick: () => void;
};

export default function PageItem({ pageNum, page, totalCount, onClick }: pageItemPropType) {
    const props = page === pageNum ? { 'aria-current': 'page' as const } : { 'aria-label': `Go to page ${page}` };

    return pageNum > totalCount ? null : (
        <li
            role="presentation"
            css={css([
                listStyle,
                {
                    background: page === pageNum ? '#3378FF' : '',
                    '&:hover': { background: page === pageNum ? '#2668EB' : '#3378FF4D' }
                }
            ])}
        >
            <button
                {...props}
                type="button"
                onClick={onClick}
                css={css({
                    cursor: 'pointer',
                    width: '100%',
                    height: '100%',
                    padding: 0,
                    color: page === pageNum ? 'white' : '#8D8D8D'
                })}
            >
                {pageNum}
            </button>
        </li>
    );
}
