/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { palette } from 'styles';

import { paginationStyle } from './style';

type pageNumButtonPropType = {
    pageNum: number;
    isSelected: boolean;
    onClick: () => void;
};

export default function PageNumButton({ pageNum, isSelected, onClick }: pageNumButtonPropType) {
    const props = isSelected ? { 'aria-current': 'page' as const } : { 'aria-label': `Go to page ${pageNum}` };

    return (
        <button
            {...props}
            type="button"
            onClick={onClick}
            css={css([
                paginationStyle.pageButton,
                {
                    color: isSelected ? 'white' : `${palette.gray[500]}`,
                    backgroundColor: isSelected ? `${palette.primary[600]}` : ''
                }
            ])}
        >
            {pageNum}
        </button>
    );
}
