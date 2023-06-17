/** @jsxImportSource @emotion/react */
import React from 'react';
import { createPortal } from 'react-dom';

import { css } from '@emotion/react';

type BackdropType = {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
};

const backdropStyle = css({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1300
});

export default function Backdrop({ id, children, onClose }: BackdropType) {
    return createPortal(
        <div
            css={backdropStyle}
            role="presentation"
            onClick={onClose}
            onKeyDown={(e) => {
                if (e.code === 'Escape') {
                    onClose();
                }
            }}
        >
            {children}
        </div>,
        document.getElementById(id) as HTMLElement
    );
}
