/** @jsxImportSource @emotion/react */
import { forwardRef } from 'react';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';
import { CheckIcon } from '@heroicons/react/24/outline';

type CheckboxType = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    value: string | number;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    icon?: React.ReactNode;
    checkedIcon?: React.ReactNode;
    customCSS?: CSSInterpolation;
};

const labelStyle = css({
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
    '& > span:first-of-type': {
        padding: 4,
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer'
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
    '&:checked + span': { display: 'inline-flex' },
    '&:checked + span + span': { display: 'none' },
    '& + span': { display: 'none' }
});

const checkedStyle = css({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    borderRadius: 4,
    '& > svg': {
        width: 18,
        height: 18
    }
});

const checkboxStyle = css({
    display: 'inline-block',
    width: 20,
    height: 20,
    borderRadius: 4,
    border: '1px solid #eeeeee',
    backgroundColor: '#ffffff'
});

const iconCheckboxStyle = css({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    '& > svg': {
        width: 18,
        height: 18
    }
});

const labelTextStyle = css({ fontSize: 16, lineHeight: 1.5, marginLeft: 4 });

const Checkbox = forwardRef<HTMLInputElement, CheckboxType>(function createCheckBox(
    { icon, checkedIcon, checked, onChange, label, value, customCSS = {}, ...props }: CheckboxType,
    ref
) {
    return (
        <label htmlFor={label} css={css([labelStyle, customCSS])}>
            <span>
                <input
                    {...props}
                    id={label}
                    ref={ref}
                    type="checkbox"
                    name={String(value)}
                    checked={checked}
                    onChange={onChange}
                    css={css([visuallyHidden, inputStyle])}
                />
                <span
                    css={css([
                        checkedStyle,
                        {
                            border: checkedIcon ? 0 : '1px solid #eeeeee',
                            backgroundColor: checkedIcon ? 'transparent' : 'pink'
                        }
                    ])}
                >
                    {checkedIcon || <CheckIcon />}
                </span>
                {icon ? <span css={iconCheckboxStyle}>{icon}</span> : <span css={checkboxStyle} />}
            </span>
            <span css={labelTextStyle}>{label}</span>
        </label>
    );
});

export default Checkbox;
