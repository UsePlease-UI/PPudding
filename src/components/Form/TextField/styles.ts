import { css } from '@emotion/react';
import { palette } from 'styles';

export const DEFAULT_WIDTH = 320;

export const textfieldStyle = {
    inputText: css({
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: 0
    }),
    textfield: css([
        {
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: 0,
            height: 40,
            border: `1px solid ${palette.gray['100']}`,
            padding: '10px 12px',
            borderRadius: 4,
            '&:active, &:focus, &:hover': {
                border: `1px solid ${palette.primary['600']}`
            },
            '&:disabled': {
                color: 'rgba(0,0,0,0.5)',
                border: '1px solid grey',
                backgroundColor: palette.gray['100']
            }
        }
    ])
};
