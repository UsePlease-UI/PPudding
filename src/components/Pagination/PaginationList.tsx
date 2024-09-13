import { ArrowNextFilled, ArrowPreviousFilled, ChevronLeftFilled, ChevronRightFilled } from '@fluentui/react-icons';

import PaginationButton from './PaginationButton';
import PaginationIconButton from './PaginationIconButton';

type PaginationListType = {
  blockNum: number;
  handleFirstClick: () => void;
  handleLastClick: () => void;
  handleNextClick: () => void;
  handlePrevClick: () => void;
  page: number;
  pageLimit: number;
  totalCount: number;
  onChange: (page: number, newBlockNum: number) => void;
  showFirstButton?: boolean;
  showLastButton?: boolean;
};

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
            icon={<ArrowPreviousFilled />}
            isDisabled={page === 1}
            onClick={handleFirstClick}
          />
        </li>
      )}
      <li className="flex size-8 items-center justify-center">
        <PaginationIconButton
          aria-label="이전으로 이동"
          icon={<ChevronLeftFilled />}
          isDisabled={page === 1}
          onClick={handlePrevClick}
        />
      </li>
      {/* TODO: Array 구현 로직 수정 */}
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
          icon={<ChevronRightFilled />}
          isDisabled={page === totalCount}
          onClick={handleNextClick}
        />
      </li>
      {showLastButton && (
        <li className="flex size-8 items-center justify-center">
          <PaginationIconButton
            aria-label="마지막으로 이동"
            icon={<ArrowNextFilled />}
            isDisabled={page === totalCount}
            onClick={handleLastClick}
          />
        </li>
      )}
    </ul>
  );
}
