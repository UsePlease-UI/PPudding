/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { ReactNode, RefObject } from 'react';

type OverlayType = {
    isOpen: boolean;
    overlayRef?: RefObject<HTMLDivElement>;
    handleClose: () => void;
    children: ReactNode;
};
export default function Overlay({ isOpen, overlayRef, handleClose, children }: OverlayType) {
    return (
        <div>
            {isOpen && (
                <div
                    ref={overlayRef}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-end'
                    }}
                    onClick={handleClose}
                >
                    <div style={{ backgroundColor: 'white', borderRadius: '5px' }}>{children}</div>
                </div>
            )}
        </div>
    );
}
