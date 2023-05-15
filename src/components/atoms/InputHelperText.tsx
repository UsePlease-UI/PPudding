/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

type InputHelperTextType = {
    text: string | React.ReactNode;
    id?: string;
    customCSS?: CSSInterpolation;
};

const helperTextStyle = css({
    fontSize: 10,
    fontWeight: 500,
    lineHeight: 1.5
});

export default function InputHelperText({ text, id = 'helper-text', customCSS = {} }: InputHelperTextType) {
    return (
        <small id={id} css={css([helperTextStyle, customCSS])}>
            {text}
        </small>
    );
}
