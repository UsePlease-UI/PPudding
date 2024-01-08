/** @jsxImportSource @emotion/react */
import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';

import { css } from '@emotion/react';
import { CheckIcon } from '@heroicons/react/24/outline';
import { CustomCSSType, visuallyHidden, palette } from 'styles';

import Typography from 'components/Base/Typography';

import { checkboxStyle } from './styles';

type BaseType = InputHTMLAttributes<HTMLInputElement> & CustomCSSType;

type CheckboxType = BaseType & {
    label: string;
    value: string | number;
    icon?: ReactNode;
    checkedIcon?: ReactNode;
};

/**
 *  [UI Component] Checkbox Component
 *  @param label 체크박스 텍스트 값
 *  @param value 체크박스 값
 *  @param checked 값 선택여부
 *  @param onChange Change Event Handler
 *  @param icon 아이콘 [optional]
 *  @param checkedIcon 선택 아이콘 [optional]
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
const Checkbox = forwardRef<HTMLInputElement, CheckboxType>(function createCheckbox(
    { icon, checkedIcon, checked, onChange, label, value, customCSS, ...props }: CheckboxType,
    ref
) {
    return (
        <label htmlFor={label} css={css([checkboxStyle.label, customCSS])}>
            <span>
                <input
                    {...props}
                    id={label}
                    ref={ref}
                    type="checkbox"
                    name={String(value)}
                    checked={checked}
                    onChange={onChange}
                    css={css([visuallyHidden, checkboxStyle.input])}
                />
                <span
                    css={css([
                        checkboxStyle.checked,
                        {
                            border: checkedIcon ? 0 : `1px solid ${palette.gray['100']}`,
                            backgroundColor: checkedIcon ? 'transparent' : palette.tertiary['400']
                        }
                    ])}
                >
                    {checkedIcon || <CheckIcon />}
                </span>
                {icon ? <span css={checkboxStyle.iconCheckbox}>{icon}</span> : <span css={checkboxStyle.checkbox} />}
            </span>
            <Typography component="span" fontSize={16} lineHeight="1.5" customCSS={checkboxStyle.labelText}>
                {label}
            </Typography>
        </label>
    );
});

export default Checkbox;
