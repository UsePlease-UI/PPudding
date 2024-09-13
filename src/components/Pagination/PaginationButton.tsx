import { commonStyle } from '@components/Button/styles';

import { joinClassNames } from '@utils/format';

type PaginationButtonPropType = {
  isSelected: boolean;
  pageNum: number;
  onClick: () => void;
};

export default function PaginationButton({ isSelected, onClick, pageNum }: PaginationButtonPropType) {
  const props = isSelected ? { 'aria-current': 'page' as const } : { 'aria-label': `Go to page ${pageNum}` };

  return (
    <button
      {...props}
      className={joinClassNames('h-8 w-8 rounded font-normal text-primary-950', isSelected && commonStyle.contained)}
      type="button"
      onClick={onClick}
    >
      {pageNum}
    </button>
  );
}
