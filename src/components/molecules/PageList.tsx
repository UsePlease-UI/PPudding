/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import PageButton from 'components/atoms/PageIconButton';
import PageNumButton from 'components/atoms/PageNumButton';

import { PageFirstIcon, PagePreviousIcon, PageNextIcon, PageLastIcon } from 'assets/icons';

type pageListType = {
    showFirstButton?: boolean;
    showLastButton?: boolean;
    page: number;
    blockNum: number;
    pageLimit: number;
    totalCount: number;
    onChange: (page: number, newBlockNum: number) => void;
    handleFirstClick: () => void;
    handlePrevClick: () => void;
    handleNextClick: () => void;
    handleLastClick: () => void;
};

const ulStyle = css({
    display: 'flex',
    flexDirection: 'row',
    gap: '5px',
    padding: 20
});

const listStyle = css({
    width: 32,
    height: 32,
    display: 'flex',
    textDecoration: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    '& button': {
        width: 'inherit',
        height: 'inherit'
    }
});

export default function PageList(props: pageListType) {
    const {
        showFirstButton = false,
        showLastButton = false,
        page,
        blockNum,
        pageLimit,
        totalCount,
        onChange,
        handleFirstClick,
        handlePrevClick,
        handleNextClick,
        handleLastClick
    } = props;
    return (
        <ul css={ulStyle}>
            {showFirstButton && (
                <li css={listStyle}>
                    <PageButton
                        icon={<PageFirstIcon />}
                        isDisabled={page === 1}
                        onClick={handleFirstClick}
                        aria-label="first button"
                    />
                </li>
            )}
            <li css={listStyle}>
                <PageButton
                    icon={<PagePreviousIcon />}
                    isDisabled={page === 1}
                    onClick={handlePrevClick}
                    aria-label="previous button"
                />
            </li>
            {/* TODO: Array 구현 로직 수정 */}
            {Array(pageLimit)
                .fill(page)
                .map((_, idx) => idx + (blockNum - 1) * pageLimit)
                .map((el, index) =>
                    el + 1 > totalCount ? null : (
                        <li key={el} role="presentation" css={listStyle}>
                            <PageNumButton
                                pageNum={el + 1}
                                isSelected={page === el + 1}
                                onClick={() => onChange(index + 1, blockNum)}
                            />
                        </li>
                    )
                )}
            <li css={listStyle}>
                <PageButton
                    icon={<PageNextIcon />}
                    isDisabled={page === totalCount}
                    onClick={handleNextClick}
                    aria-label="next button"
                />
            </li>
            {showLastButton && (
                <li css={listStyle}>
                    <PageButton
                        icon={<PageLastIcon />}
                        isDisabled={page === totalCount}
                        onClick={handleLastClick}
                        aria-label="last button"
                    />
                </li>
            )}
        </ul>
    );
}
