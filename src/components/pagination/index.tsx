/** @jsxImportSource @emotion/react */

import { useState } from 'react';

import { css } from '@emotion/react';
import PageItem from './PageItem';

import { PageFirstIcon, PagePreviousIcon, PageNextIcon, PageLastIcon } from 'assets/icons';

const IconWrapper = css({
    width: 32,
    height: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'none',
    '& svg': {
        width: '16px',
        height: '16px',
    },
    '&:disabled svg': {
        stroke: '#8D8D8D4D',
    },
});

type PaginationPropsType = {
    count: number;
};

export default function Pagination({ count }: PaginationPropsType) {
    const [page, setPage] = useState(1);

    // const totalCount = Math.ceil(count / pageSize);
    const totalCount = 32;

    const pageMaxCount = Math.ceil(totalCount / 10);
    const pageLimit = 10;
    const [pArr, setPArr] = useState<number[]>([]);

    const handleFirstClick = () => {
        setPage(1);
    };

    const handlePrevClick = () => {
        setPage((prev) => prev - 1);
    };

    const handleNextClick = () => {
        setPage((prev) => prev + 1);
    };

    const handleLastClick = () => {
        setPage(totalCount);
    };

    return (
        <div
            css={css({
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
            })}>
            <button
                type="button"
                aria-label="first button"
                onClick={() => handleFirstClick()}
                css={css([
                    IconWrapper,
                    {
                        '& svg': {
                            stroke: totalCount < 2 ? '#8D8D8D4D' : '#8D8D8D',
                        },
                    },
                ])}
                disabled={page === 1}>
                <PageFirstIcon />
            </button>
            <button
                type="button"
                aria-label="previous Button"
                onClick={() => handlePrevClick()}
                css={css([
                    IconWrapper,
                    {
                        '& svg': {
                            stroke: totalCount < 2 ? '#8D8D8D4D' : '#8D8D8D',
                        },
                    },
                ])}
                disabled={page === 1}>
                <PagePreviousIcon width="16px" height="16px" stroke={totalCount < 2 ? '#8D8D8D4D' : '#8D8D8D'} />
            </button>

            <div
                css={css({
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                })}>
                <ul style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                    {pArr.map((el, idx) => (
                        <PageItem key={idx} pageNum={el + 1} page={page} totalCount={totalCount} onClick={() => setPage(idx + 1)} />
                    ))}
                </ul>
            </div>
            <button
                type="button"
                aria-label="next button"
                onClick={() => handleNextClick()}
                css={css([
                    IconWrapper,
                    {
                        '& svg': {
                            stroke: totalCount < 2 ? '#8D8D8D4D' : '#8D8D8D',
                        },
                    },
                ])}
                disabled={page === totalCount}>
                <PageNextIcon width="16px" height="16px" stroke={totalCount < 2 ? '#8D8D8D4D' : '#8D8D8D'} />
            </button>
            <button
                type="button"
                aria-label="last button"
                onClick={() => handleLastClick()}
                css={css([
                    IconWrapper,
                    {
                        '& svg': {
                            stroke: totalCount < 2 ? '#8D8D8D4D' : '#8D8D8D',
                        },
                    },
                ])}
                disabled={page === totalCount}>
                <PageLastIcon width="16px" height="16px" stroke={totalCount < 2 ? '#8D8D8D4D' : '#8D8D8D'} />
            </button>
        </div>
    );
}
