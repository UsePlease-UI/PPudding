import { css } from '@emotion/react';

export const visuallyHidden = css({
    position: 'absolute',
    clip: 'rect(0,0,0,0)',
    height: 1,
    width: 1,
    margin: -1,
    padding: 0,
    border: 0,
    overflow: 'hidden'
});
