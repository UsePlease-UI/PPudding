import { css } from '@emotion/react';
import { palette } from 'styles';

export const editorStyle = {
    container: css({
        height: '100%',
        maxWidth: 1024
    }),
    toolbarContainer: {
        padding: 10,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        backgroundColor: palette['blue-gray'][100]
    },
    colorContainer: {
        maxWidth: 120
    },
    textarea: css({
        borderTop: 0,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        borderColor: palette['blue-gray'][100],
        padding: 20,
        width: '100%',
        height: '100%',
        maxHeight: 'calc(100% - 80px)',
        resize: 'none',
        outline: 'none'
    })
};
