/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

import PageList from 'components/Pagination/PageList';

const navStyle = css({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    padding: 20
});

type PaginationType = {
    totalCount: number;
    page: number;
    blockNum: number;
    onChange: (page: number, blockNum: number) => void;
    customCSS?: CSSInterpolation;
};

const PAGE_LIMIT = 10;

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
        <nav aria-label="pagination" id="pagination" css={css([navStyle, customCSS])}>
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
