/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react';

import { css } from '@emotion/react';
import palette from 'styles/palette';

import FlexBox from 'components/Base/FlexBox';
import PopOver from 'components/Menu/PopOver';


const popoverStyle = css({
    height: 30,
    fontWeight: 700,
    color: palette.tertiary['400'],
    border: `1px solid ${palette.tertiary['400']}`,
    borderRadius: 4
});

const ulStyle = css({
    padding: '4px 0',
    '& li': {
        height: 40,
        margin: '0 5px',
        padding: '0 10px',
        borderBottom: `1px solid ${palette.tertiary['400']}`,
        '&:hover': {
            '& a': {
                cursor: 'pointer',
                color: palette.tertiary['400']
            }
        },
        '&:last-of-type': {
            borderBottom: 0
        }
    },
    '& a': {
        display: 'inline-block',
        lineHeight: '40px',
        color: palette.primary['600']
    }
});

// FIXME: handleClickOutside 수정
export default function PopOverExample() {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const isOpen = Boolean(anchorEl);

    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
        if (anchorEl) {
            setAnchorEl(null);
            document.body.style.overflow = 'auto';
        } else {
            setAnchorEl(e.currentTarget);
            document.body.style.overflow = 'hidden';
        }
    };

    const handleClose = () => setAnchorEl(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (isOpen && !buttonRef.current?.contains(event.target as Node)) {
                handleClose();
                document.body.style.overflow = 'auto';
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <FlexBox flexDirection="column" gap={10} customCSS={{ margin: '20px 0' }}>
            <button type="button" ref={buttonRef} onClick={handleOpen} css={popoverStyle}>
                메뉴 보기
            </button>
            <PopOver isOpen={isOpen} customCSS={{ padding: 0 }}>
                <ul css={ulStyle}>
                    <li>
                        <a href="/">Hello</a>
                    </li>
                    <li>
                        <a href="/">Hi</a>
                    </li>
                </ul>
            </PopOver>
        </FlexBox>
    );
}
