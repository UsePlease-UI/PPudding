import { ReactNode, useMemo, useState } from 'react';

import { ArrowNextFilled, ArrowPreviousFilled, ChevronLeftFilled, ChevronRightFilled } from '@fluentui/react-icons';

import IconButton from '@components/Button/IconButton';
import { ShapeType, SizeType, VariantType } from '@components/Button/styles';

import { joinClassNames } from '@utils/format';

import { getActiveVariant } from './styles';

type PaginationType = {
    firstIcon?: ReactNode;
    hasFirstIcon?: boolean;
    hasLastIcon?: boolean;
    itemsPerPage?: number;
    lastIcon?: ReactNode;
    nextIcon?: ReactNode;
    onChange?: (newPage: number) => void;
    pageRange?: number;
    prevIcon?: ReactNode;
    selectedPage?: number;
    shape?: ShapeType;
    size?: SizeType;
    totalCount?: number;
    variant?: VariantType;
};

/**
 *  Pagination Component
 *  @param totalCount 전체 데이터 크기
 *  @param itemsPerPage 페이지 당 데이터 수
 *  @param pageRange 한 번에 노출되는 페이지 버튼 갯수
 *  @param selectedPage 현재 선택된 페이지
 *  @param onChange Page Change Event Handler
 *  @param hasFirstIcon 아이콘 사용 여부
 *  @param hasLastIcon 아이콘 사용 여부
 *  @param firstIcon ReactNode
 *  @param lastIcon ReactNode
 *  @param nextIcon ReactNode
 *  @param prevIcon ReactNode
 *  @param size [CSS] 버튼 크기 (large | medium | small)
 *  @param variant [CSS] 버튼 스타일 (outlined | contained | text)
 *  @param variant [CSS] 버튼 형태 (rounded | square | circular)
 *  @returns JSX.Element
 */
export default function Pagination(props: PaginationType) {
    const {
        firstIcon,
        hasFirstIcon = true,
        hasLastIcon = true,
        itemsPerPage = 10,
        lastIcon,
        nextIcon,
        onChange,
        pageRange = 10,
        prevIcon,
        selectedPage,
        shape = 'circular',
        size = 'medium',
        totalCount = 100,
        variant = 'outlined',
    } = props;

    const totalPage = useMemo(() => Math.ceil(totalCount / itemsPerPage), [totalCount, itemsPerPage]); // 총 페이지 버튼 갯수
    const [page, setPage] = useState(selectedPage || 1); // 현재 선택된 페이지
    const pageGroup = useMemo(() => Math.ceil(page / pageRange) - 1, [page, pageRange]); // 페이지 그룹

    const pageList = useMemo(
        () =>
            Array.from({ length: pageRange }, (_, idx) => idx + 1)
                .map((val) => pageGroup * pageRange + val)
                .filter((val) => val <= totalPage),
        [pageGroup, pageRange, totalPage],
    );
    const [firstPage, lastPage] = useMemo(() => [pageList[0], pageList[pageList.length - 1]], [pageList]);

    const handlePrevPageGroup = () => {
        let newPage = firstPage;
        if (page === pageList[0]) {
            newPage -= 1;
        }
        setPage(newPage);
        if (onChange) {
            onChange(newPage);
        }
    };

    const handlePreviousPage = () => {
        setPage((prev) => prev - 1);
        if (onChange) {
            onChange(page - 1);
        }
    };

    const handlePageChange = (currentPage: number) => {
        setPage(currentPage);
        if (onChange) {
            onChange(currentPage);
        }
    };

    const handleNextPage = () => {
        setPage((prev) => prev + 1);
        if (onChange) {
            onChange(page + 1);
        }
    };

    const handleLastPageGroup = () => {
        let newPage = lastPage;
        if (page === lastPage) {
            newPage += 1;
        }
        setPage(newPage);
        if (onChange) {
            onChange(newPage);
        }
    };

    return (
        <nav aria-label="pagination">
            <ul className="flex items-center gap-2.5">
                {hasFirstIcon && (
                    <li>
                        <IconButton
                            aria-label="처음 페이지로 이동하기"
                            isDisabled={page === 1}
                            shape={shape}
                            size={size}
                            variant={variant}
                            onClick={handlePrevPageGroup}
                        >
                            {firstIcon || <ArrowPreviousFilled />}
                        </IconButton>
                    </li>
                )}
                <li>
                    <IconButton
                        aria-label="이전 페이지로 이동하기"
                        isDisabled={page === 1}
                        shape={shape}
                        size={size}
                        variant={variant}
                        onClick={handlePreviousPage}
                    >
                        {prevIcon || <ChevronLeftFilled />}
                    </IconButton>
                </li>
                {pageList.map((currentPage) => (
                    <li key={currentPage}>
                        <IconButton
                            aria-current={page === currentPage ? 'page' : undefined}
                            aria-label={page === currentPage ? undefined : `page ${currentPage}`}
                            shape={shape}
                            size={size}
                            variant={getActiveVariant(page === currentPage, variant)}
                            onClick={() => handlePageChange(currentPage)}
                        >
                            <p
                                className={joinClassNames(
                                    'flex items-center justify-center',
                                    variant === 'text' && page === currentPage && 'font-semibold text-primary-800',
                                )}
                            >
                                {currentPage}
                            </p>
                        </IconButton>
                    </li>
                ))}
                <li>
                    <IconButton
                        aria-label="다음 페이지로 이동하기"
                        isDisabled={page === totalPage}
                        shape={shape}
                        size={size}
                        variant={variant}
                        onClick={handleNextPage}
                    >
                        {nextIcon || <ChevronRightFilled />}
                    </IconButton>
                </li>
                {hasLastIcon && (
                    <li>
                        <IconButton
                            aria-label="마지막 페이지로 이동하기"
                            isDisabled={page === totalPage}
                            shape={shape}
                            size={size}
                            variant={variant}
                            onClick={handleLastPageGroup}
                        >
                            {lastIcon || <ArrowNextFilled />}
                        </IconButton>
                    </li>
                )}
            </ul>
        </nav>
    );
}
