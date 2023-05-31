/** @jsxImportSource @emotion/react */
import { forwardRef } from 'react';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

type RadioType = React.InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    label: string;
    value: string | number;
    currentValue?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    customCSS?: CSSInterpolation;
};

const labelStyle = css({
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
    '& > span:first-of-type': {
        width: 24,
        height: 24,
        padding: 4
    },
    '&:hover > span:first-of-type': {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        borderRadius: 999
    }
});

const visuallyHidden = css({
    overflow: 'hidden',
    position: 'absolute',
    clip: 'rect(0 0 0 0)',
    height: 1,
    width: 1,
    margin: -1,
    padding: 0,
    border: 0
});

const inputStyle = css({
    '&:checked + span': { display: 'block' },
    '&:checked + span + span': { display: 'none' },
    '& + span': { display: 'none' }
});

const checkedRadioStyle = css({
    display: 'inline-block',
    width: 16,
    height: 16,
    borderRadius: 999,
    border: `1px solid #eeeeee`,
    backgroundColor: 'pink'
});

const radioStyle = css({
    display: 'inline-block',
    width: 16,
    height: 16,
    borderRadius: 999,
    border: `1px solid #eeeeee`,
    backgroundColor: '#ffffff'
});

const labelTextStyle = css({ fontSize: 14, lineHeight: 1.5, fontWeight: 500, marginLeft: 4 });

const Radio = forwardRef<HTMLInputElement, RadioType>(function createRadio(
    { name, label, value, currentValue, onChange, customCSS, ...props },
    ref
) {
    return (
        <label htmlFor={`${name}-${value}`} css={css([labelStyle, customCSS])}>
            <span>
                <input
                    {...props}
                    ref={ref}
                    id={`${name}-${value}`}
                    name={name}
                    type="radio"
                    value={value}
                    onChange={onChange}
                    checked={value !== undefined ? value === currentValue : undefined}
                    css={css([visuallyHidden, inputStyle])}
                />
                <span css={checkedRadioStyle} />
                <span css={radioStyle} />
            </span>
            <span css={labelTextStyle}>{label}</span>
        </label>
    );
});

export default Radio;
