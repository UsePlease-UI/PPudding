import { css } from '@emotion/react';

export const bottomSheetStyle = {
    motionDiv: {
        position: 'fixed',
        zIndex: 10,
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: '8px 8px 0 0',
        background: '#fff',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.6)',
        margin: ' 0 auto',
        overflow: 'auto',
        padding: '20px'
    },
    overlayWrapper: css({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end'
    })
};
