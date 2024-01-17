import { css } from '@emotion/react';
import { palette } from 'styles';

export const popoverStyle = css({
    position: 'fixed',
    zIndex: 10000,
    padding: 10,
    borderRadius: 4,
    backgroundColor: palette.neutral.white,
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
});
