/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

import PageList from 'components/Pagination/PageList';

import { paginationStyle } from './style';

type PaginationType = {
    totalCount: number;
    page: number;
    blockNum: number;
    onChange: (page: number, blockNum: number) => void;
    customCSS?: CSSInterpolation;
};

const PAGE_LIMIT = 10;

/**
 *  [UI Component] Pagination Component
 *  @param totalCount: pagination 전체 count value
 *  @param page: 선택된 현재 page value
 *  @param blockNum: (totalCount / page) limit 한 값
 *  @param onChange: page가 변경될 때 실행될 event listener
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */

export default function Pagination({ totalCount, page, blockNum, onChange, customCSS }: PaginationType) {
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
        <nav aria-label="pagination" id="pagination" css={css([paginationStyle.navStyle, customCSS])}>
            <PageList
                showFirstButton
                showLastButton
                page={page}
                blockNum={blockNum}
                pageLimit={10}
                totalCount={totalCount}
                onChange={onChange}
                handleFirstClick={handleFirstClick}
                handlePrevClick={handlePrevClick}
                handleNextClick={handleNextClick}
                handleLastClick={handleLastClick}
            />
        </nav>
    );
}
