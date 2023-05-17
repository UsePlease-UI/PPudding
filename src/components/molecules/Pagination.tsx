/** @jsxImportSource @emotion/react */

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
    totalCount: number;
    page: number;
    blockNum: number;
    onChange: (page: number, blockNum: number) => void;
};

const PAGE_LIMIT = 10;
/**
 *  Accessibility
 *  nav element에 aria-label 속성 필수
 */
export default function Pagination({ totalCount, page, blockNum, onChange }: PaginationPropsType) {
    const pageMaxCount = Math.ceil(totalCount / 10);

    const handleFirstClick = () => onChange(1, 1);
    const handleLastClick = () => onChange(totalCount, pageMaxCount);

    const handlePrevClick = () => {
        let newNum = blockNum;
        if ((page - 1) % PAGE_LIMIT === 0 && page !== 1) {
            newNum = +blockNum - 1;
        }
        onChange(page - 1, newNum);
    };

    const handleNextClick = () => {
        let newNum = blockNum;
        if ((page + 1) % PAGE_LIMIT === 1) {
            newNum = blockNum + 1;
        }
        onChange(page + 1, newNum);
    };

    return (
        <nav aria-label="pagination" id="pagination" css={navStyle}>
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
                {Array(PAGE_LIMIT)
                    .fill(page)
                    .map((_, idx) => idx + (blockNum - 1) * PAGE_LIMIT)
                    .map((el, index) => (
                        <PageItem
                            key={el}
                            pageNum={el + 1}
                            page={page}
                            totalCount={totalCount}
                            onClick={() => onChange(index + 1, blockNum)}
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
