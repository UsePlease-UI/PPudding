import { useCallback, useEffect, useMemo, useState } from 'react';

import PageList from './PaginationList';

type PaginationType = {
    totalCount: number;
    page: number;
    pageLimit?: number;
    onChange?: (page: number) => void;
    showFirstButton?: boolean;
    showLastButton?: boolean;
};

/**
 *  [UI Component] Pagination Component
 *  @param showFirstButton 첫 페이지로 이동 버튼 노출여부
 *  @param showLastButton 마지막 페이지로 이동 버튼 노출여부
 *  @param pageLimit 페이지 당 수
 *  @param totalCount 전체 게시물/아이템 수
 *  @param page 현재 선택된 페이지 번호
 *  @param onChange Change Event Listener
 *  @returns JSX.Element
 */
export default function Pagination(props: PaginationType) {
    const { showFirstButton = true, showLastButton = true, pageLimit = 10, totalCount, page, onChange } = props;

    const pageMaxCount = useMemo(() => Math.ceil(totalCount / pageLimit), [totalCount, pageLimit]);
    const [currentPage, setCurrentPage] = useState(page);
    const [currentBlockNum, setCurrentBlockNum] = useState(1);

    useEffect(() => {
        setCurrentPage(page);
        setCurrentBlockNum(Math.ceil(page / pageLimit));
    }, [page, pageLimit]);

    const handlePageChange = useCallback((newPage: number) => {
        setCurrentPage(newPage);
    }, []);

    const handleFirstClick = useCallback(() => {
        setCurrentPage(1);
        setCurrentBlockNum(1);
        if (onChange) {
            onChange(1);
        }
    }, []);

    const handlePrevClick = useCallback(() => {
        setCurrentPage((prev) => prev - 1);
        if ((currentPage - 1) % pageLimit === 0 && currentPage !== 1) {
            setCurrentBlockNum((prev) => prev - 1);
        }

        if (onChange) {
            onChange(currentPage - 1);
        }
    }, [currentBlockNum, currentPage, pageLimit, onChange]);

    const handleNextClick = useCallback(() => {
        setCurrentPage((prev) => prev + 1);
        if ((currentPage + 1) % pageLimit === 1) {
            setCurrentBlockNum((prev) => prev + 1);
        }
        if (onChange) {
            onChange(currentPage + 1);
        }
    }, [currentPage, pageLimit, onChange]);

    const handleLastClick = useCallback(() => {
        setCurrentPage(totalCount);
        setCurrentBlockNum(pageMaxCount);
        if (onChange) {
            onChange(totalCount);
        }
    }, [totalCount, onChange]);

    return (
        <nav aria-label="pagination" className="flex w-full items-center justify-start p-20">
            <PageList
                showFirstButton={showFirstButton}
                showLastButton={showLastButton}
                pageLimit={pageLimit}
                totalCount={totalCount}
                blockNum={currentBlockNum}
                page={currentPage}
                onChange={handlePageChange}
                handleFirstClick={handleFirstClick}
                handlePrevClick={handlePrevClick}
                handleNextClick={handleNextClick}
                handleLastClick={handleLastClick}
            />
        </nav>
    );
}
