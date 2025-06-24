import { ReactNode, useCallback, useMemo, useState } from 'react';

import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';

import { ButtonShapeType, ButtonSizeType, ButtonVariantType, IconButton } from '@components/Button';

import { joinClassNames } from '@utils/format';

import { getActiveVariant } from './styles';

export interface PaginationType {
  className?: string;
  itemsPerPage?: number;
  pageRange?: number;
  selectedPage?: number;
  shape?: ButtonShapeType;
  size?: ButtonSizeType;
  variant?: ButtonVariantType;
  firstIcon?: ReactNode;
  hasFirstIcon?: boolean;
  hasLastIcon?: boolean;
  lastIcon?: ReactNode;
  nextIcon?: ReactNode;
  onChange?: (newPage: number) => void;
  prevIcon?: ReactNode;
  totalCount?: number;
}

export default function Pagination(props: PaginationType) {
  const {
    className,
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

  const [page, setPage] = useState(selectedPage || 1); // 현재 선택된 페이지

  const totalPage = useMemo(() => Math.ceil(totalCount / itemsPerPage), [totalCount, itemsPerPage]); // 총 페이지 버튼 갯수

  const pageGroup = useMemo(() => Math.ceil(page / pageRange) - 1, [page, pageRange]); // 페이지 그룹

  const pageList = useMemo(
    () =>
      Array.from({ length: pageRange }, (_, idx) => idx + 1)
        .map((val) => pageGroup * pageRange + val)
        .filter((val) => val <= totalPage),
    [pageGroup, pageRange, totalPage],
  );

  const [firstPage, lastPage] = useMemo(() => [pageList[0], pageList[pageList.length - 1]], [pageList]);

  const handlePrevPageGroup = useCallback(() => {
    let newPage = firstPage;
    if (page === pageList[0]) {
      newPage -= 1;
    }
    setPage(newPage);
    if (onChange) {
      onChange(newPage);
    }
  }, [firstPage, page, pageList, onChange]);

  const handlePreviousPage = useCallback(() => {
    setPage((prev) => prev - 1);
    if (onChange) {
      onChange(page - 1);
    }
  }, [onChange, page]);

  const handlePageChange = useCallback(
    (currentPage: number) => {
      setPage(currentPage);
      if (onChange) {
        onChange(currentPage);
      }
    },
    [onChange],
  );

  const handleNextPage = useCallback(() => {
    setPage((prev) => prev + 1);
    if (onChange) {
      onChange(page + 1);
    }
  }, [onChange, page]);

  const handleLastPageGroup = useCallback(() => {
    let newPage = lastPage;
    if (page === lastPage) {
      newPage += 1;
    }
    setPage(newPage);
    if (onChange) {
      onChange(newPage);
    }
  }, [lastPage, page, onChange]);

  return (
    <nav aria-label="페이지네이션" className={className}>
      <ul className="flex items-center gap-2.5">
        {hasFirstIcon && (
          <li>
            <IconButton
              aria-label="첫 페이지로 이동하기"
              isDisabled={page === 1}
              shape={shape}
              size={size}
              variant={variant}
              onClick={handlePrevPageGroup}
            >
              {firstIcon || <ChevronDoubleLeftIcon />}
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
            {prevIcon || <ChevronLeftIcon />}
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
              <span
                className={joinClassNames(
                  'flex items-center justify-center',
                  variant === 'text' && page === currentPage && 'font-semibold text-black',
                )}
              >
                {currentPage}
              </span>
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
            {nextIcon || <ChevronRightIcon />}
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
              {lastIcon || <ChevronDoubleRightIcon />}
            </IconButton>
          </li>
        )}
      </ul>
    </nav>
  );
}
