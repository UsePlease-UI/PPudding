/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { backdropStyle } from './styles';

type BackdropType = {
    children: ReactNode;
    onClose: () => void;
    containerId?: string;
};

/**
 *  [Base Component] Backdrop Component
 *  @param containerId DOM id
 *  @param children 컴포넌트
 *  @param onClose Click Away Handler
 *  @returns ReactPortal
 */
export default function Backdrop(props: BackdropType) {
    const { containerId, children, onClose } = props;

    return createPortal(
        <div
            role="presentation"
            onClick={onClose}
            onKeyDown={(e) => {
                if (e.code === 'Escape') {
                    onClose();
                }
            }}
            css={backdropStyle}
        >
            {children}
        </div>,
        document.getElementById(containerId || 'root') as HTMLElement
    );
}
