import { commonStyle } from '@components/Button/styles';

import { joinClassNames } from '@utils/format';

type PaginationButtonPropType = {
    isSelected: boolean;
    onClick: () => void;
    pageNum: number;
};

export default function PaginationButton({ isSelected, onClick, pageNum }: PaginationButtonPropType) {
    const props = isSelected ? { 'aria-current': 'page' as const } : { 'aria-label': `Go to page ${pageNum}` };

    return (
        <button
            {...props}
            type="button"
            className={joinClassNames(
                'h-8 w-8 rounded font-normal text-primary-950',
                isSelected && commonStyle.contained,
            )}
            onClick={onClick}
        >
            {pageNum}
        </button>
    );
}
