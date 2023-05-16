/** @jsxImportSource @emotion/react */

import { useState } from 'react';

import { css } from '@emotion/react';

import PageButton from 'components/atoms/PageButton';
import PageItem from 'components/atoms/PageItem';

import { PageFirstIcon, PagePreviousIcon, PageNextIcon, PageLastIcon } from 'assets/icons';

const navStyle = css({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
});

const ulStyle = css({
    display: 'flex',
    flexDirection: 'row',
    gap: '5px',
    padding: 20
});

type PaginationPropsType = {
    count: number;
};

const PAGE_ARR = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 *  Accessibility
 *  nav element에 aria-label 속성 필수
 */
export default function Pagination({ count }: PaginationPropsType) {
    const [page, setPage] = useState(1);

    // const totalCount = Math.ceil(count / pageSize);
    const totalCount = 10;

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
        <nav aria-label="pagination" css={navStyle}>
            <ul css={ulStyle}>
                <li>
                    <PageButton
                        icon={<PageFirstIcon />}
                        totalCount={totalCount}
                        isDisabled={page === 1}
                        onClick={handleFirstClick}
                        aria-label="first button"
                    />
                </li>
                <li>
                    <PageButton
                        icon={<PagePreviousIcon />}
                        totalCount={totalCount}
                        isDisabled={page === 1}
                        onClick={handlePrevClick}
                        aria-label="previous button"
                    />
                </li>
                {PAGE_ARR.map((el, index) => (
                    <PageItem
                        key={el}
                        pageNum={el + 1}
                        page={page}
                        totalCount={totalCount}
                        onClick={() => setPage(index + 1)}
                    />
                ))}
                <li>
                    <PageButton
                        icon={<PageNextIcon />}
                        totalCount={totalCount}
                        isDisabled={page === totalCount}
                        onClick={handleNextClick}
                        aria-label="next button"
                    />
                </li>
                <li>
                    <PageButton
                        icon={<PageLastIcon />}
                        totalCount={totalCount}
                        isDisabled={page === totalCount}
                        onClick={handleLastClick}
                        aria-label="last button"
                    />
                </li>
            </ul>
        </nav>
    );
}
