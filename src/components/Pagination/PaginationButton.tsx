import { commonStyle } from '@components/Button';

import { joinClassNames } from '@utils/format';

type PaginationButtonPropType = {
    pageNum: number;
    isSelected: boolean;
    onClick: () => void;
};

export default function PaginationButton({ pageNum, isSelected, onClick }: PaginationButtonPropType) {
    const props = isSelected ? { 'aria-current': 'page' as const } : { 'aria-label': `Go to page ${pageNum}` };

    return (
        <button
            {...props}
            type="button"
            onClick={onClick}
            className={joinClassNames(
                'h-8 w-8 rounded font-normal text-primary-950',
                isSelected && commonStyle.contained
            )}
        >
            {pageNum}
        </button>
    );
}
