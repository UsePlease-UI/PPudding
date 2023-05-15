/** @jsxImportSource @emotion/react */

import { useState } from 'react';

import { css } from '@emotion/react';

import PageItem from 'components/pagination/PageItem';

import { PageFirstIcon, PagePreviousIcon, PageNextIcon, PageLastIcon } from 'assets/icons';

const iconWrapper = css({
    width: 32,
    height: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    '& svg': {
        width: '16px',
        height: '16px'
    },
    '&:disabled svg': {
        stroke: '#8D8D8D4D'
    }
});

type PaginationPropsType = {
    count: number;
};

const PAGE_ARR = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Pagination({ count }: PaginationPropsType) {
    const [page, setPage] = useState(1);

    // const totalCount = Math.ceil(count / pageSize);
    const totalCount = 32;

    // const pageMaxCount = Math.ceil(totalCount / 10);

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
        setPage(10);
    };

    return (
        <div
            css={css({
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%'
            })}
        >
            <button
                type="button"
                aria-label="first button"
                onClick={() => handleFirstClick()}
                css={css([
                    iconWrapper,
                    {
                        '& svg': {
                            stroke: totalCount < 2 ? '#8D8D8D4D' : '#8D8D8D'
                        }
                    }
                ])}
                disabled={page === 1}
            >
                <PageFirstIcon />
            </button>
            <button
                type="button"
                aria-label="previous Button"
                onClick={() => handlePrevClick()}
                css={css([
                    iconWrapper,
                    {
                        '& svg': {
                            stroke: totalCount < 2 ? '#8D8D8D4D' : '#8D8D8D'
                        }
                    }
                ])}
                disabled={page === 1}
            >
                <PagePreviousIcon width="16px" height="16px" stroke={totalCount < 2 ? '#8D8D8D4D' : '#8D8D8D'} />
            </button>

            <div
                css={css({
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                })}
            >
                <ul style={{ display: 'flex', flexDirection: 'row', gap: '10px', padding: 20 }}>
                    {PAGE_ARR.map((el, index) => (
                        <PageItem
                            key={el}
                            pageNum={el + 1}
                            page={page}
                            totalCount={totalCount}
                            onClick={() => setPage(index + 1)}
                        />
                    ))}
                </ul>
            </div>
            <button
                type="button"
                aria-label="next button"
                onClick={() => handleNextClick()}
                css={css([
                    iconWrapper,
                    {
                        '& svg': {
                            stroke: totalCount < 2 ? '#8D8D8D4D' : '#8D8D8D'
                        }
                    }
                ])}
                disabled={page === totalCount}
            >
                <PageNextIcon width="16px" height="16px" stroke={totalCount < 2 ? '#8D8D8D4D' : '#8D8D8D'} />
            </button>
            <button
                type="button"
                aria-label="last button"
                onClick={() => handleLastClick()}
                css={css([
                    iconWrapper,
                    {
                        '& svg': {
                            stroke: totalCount < 2 ? '#8D8D8D4D' : '#8D8D8D'
                        }
                    }
                ])}
                disabled={page === totalCount}
            >
                <PageLastIcon width="16px" height="16px" stroke={totalCount < 2 ? '#8D8D8D4D' : '#8D8D8D'} />
            </button>
        </div>
    );
}
