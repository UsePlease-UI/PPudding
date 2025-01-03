import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';

import PaginationButton from './PaginationButton';
import PaginationIconButton from './PaginationIconButton';

interface PaginationListType {
  handleFirstClick: () => void;
  handleLastClick: () => void;
  handleNextClick: () => void;
  handlePrevClick: () => void;
  page: number;
  pageLimit: number;
  blockNum: number;
  onChange: (page: number, newBlockNum: number) => void;
  totalCount: number;
  showFirstButton?: boolean;
  showLastButton?: boolean;
}

export default function PaginationList(props: PaginationListType) {
  const {
    blockNum,
    handleFirstClick,
    handleLastClick,
    handleNextClick,
    handlePrevClick,
    onChange,
    page,
    pageLimit,
    showFirstButton,
    showLastButton,
    totalCount,
  } = props;

  return (
    <ul className="flex flex-wrap items-center gap-1.25">
      {showFirstButton && (
        <li className="flex size-8 items-center justify-center">
          <PaginationIconButton
            aria-label="처음으로 이동"
            isDisabled={page === 1}
            icon={<ChevronDoubleLeftIcon />}
            onClick={handleFirstClick}
          />
        </li>
      )}
      <li className="flex size-8 items-center justify-center">
        <PaginationIconButton
          aria-label="이전으로 이동"
          isDisabled={page === 1}
          icon={<ChevronLeftIcon />}
          onClick={handlePrevClick}
        />
      </li>
      {Array(pageLimit)
        .fill(page)
        .map((_, idx) => idx + (blockNum - 1) * pageLimit)
        .map((el, index) =>
          el + 1 > totalCount ? null : (
            <li key={el} className="flex size-8 items-center justify-center" role="presentation">
              <PaginationButton
                isSelected={page === el + 1}
                pageNum={el + 1}
                onClick={() => onChange(index + 1, blockNum)}
              />
            </li>
          ),
        )}
      <li className="flex size-8 items-center justify-center">
        <PaginationIconButton
          aria-label="다음으로 이동"
          isDisabled={page === totalCount}
          icon={<ChevronRightIcon />}
          onClick={handleNextClick}
        />
      </li>
      {showLastButton && (
        <li className="flex size-8 items-center justify-center">
          <PaginationIconButton
            aria-label="마지막으로 이동"
            isDisabled={page === totalCount}
            icon={<ChevronDoubleRightIcon />}
            onClick={handleLastClick}
          />
        </li>
      )}
    </ul>
  );
}
