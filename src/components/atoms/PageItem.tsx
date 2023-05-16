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
    console.log(page, pageNum);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {pageNum > totalCount ? null : (
                <li
                    aria-label="Go to page {{page}}"
                    role="presentation"
                    css={css([
                        listStyle,
                        {
                            background: page === pageNum ? '#3378FF' : '',
                            color: page === pageNum ? 'white' : '#8D8D8D',
                            '&:hover': {
                                background: page === pageNum ? '#2668EB' : '#3378FF4D'
                            }
                        }
                    ])}
                    onClick={onClick}
                    onKeyUp={onClick}
                >
                    {pageNum}
                </li>
            )}
        </>
    );
}
