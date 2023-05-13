/* eslint-disable jsx-a11y/label-has-associated-control */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

type InputLabelType = {
    id: string;
    label: string | React.ReactNode;
    customCSS?: CSSInterpolation;
};

const labelStyle = css({
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 1.5
});

export default function InputLabel({ id, label, customCSS = {} }: InputLabelType) {
    return (
        <label htmlFor={id} css={css([labelStyle, customCSS])}>
            {label}
        </label>
    );
}
