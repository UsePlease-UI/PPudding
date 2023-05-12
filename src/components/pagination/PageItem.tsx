/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const ListStyle = css({
    width: 32,
    height: 32,
    display: 'flex',
    textDecoration: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    fontSize: 15,
    fontWeight: 600,
    cursor: 'pointer'
});
type pageItemPropType = {
    key: number;
    pageNum: number;
    page: number;
    totalCount: number;
    onClick: () => void;
};

export default function PageItem({ key, pageNum, page, totalCount, onClick }: pageItemPropType) {
    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {pageNum > totalCount ? null : (
                <li
                    role="presentation"
                    key={key}
                    css={css([
                        ListStyle,
                        {
                            background: page === pageNum ? '#3378FF' : '',
                            color: page === pageNum ? 'white' : '#8D8D8D'
                        }
                    ])}
                    onClick={onClick}
                    onKeyUp={onClick}
                >
                    {pageNum}
                </li>
            )}
        </>
    );
}
