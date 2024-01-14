/** @jsxImportSource @emotion/react */
import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';

import { css } from '@emotion/react';
import { CheckIcon } from '@heroicons/react/24/outline';
import { CustomCSSType, visuallyHidden } from 'styles';

import Typography from 'components/Base/Typography';

import { SizeType, checkboxStyle, getSizeStyle } from './styles';

type BaseType = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & CustomCSSType;

type CheckboxType = BaseType & {
    label: string;
    isDisabled?: boolean;
    size?: SizeType;
    icon?: ReactNode;
    checkedIcon?: ReactNode;
};

/**
 *  [UI Component] Checkbox Component
 *  @param label 체크박스 텍스트 값
 *  @param isDisabled 비활성화 여부 [optional]
 *  @param size [CSS] 체크박스 크기 (small | medium | large)
 *  @param icon 아이콘 [optional]
 *  @param checkedIcon 선택 아이콘 [optional]
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
const Checkbox = forwardRef<HTMLInputElement, CheckboxType>(function createCheckbox(
    { label, size = 'medium', isDisabled, icon, checkedIcon, onChange, customCSS, ...props }: CheckboxType,
    ref
) {
    return (
        <label
            htmlFor={label}
            css={css([
                checkboxStyle.label,
                {
                    ...(isDisabled && checkboxStyle.pointer)
                },
                customCSS
            ])}
        >
            <span>
                <input
                    {...props}
                    id={label}
                    ref={ref}
                    type="checkbox"
                    disabled={isDisabled}
                    onChange={(e) => {
                        e.currentTarget.blur();
                        if (onChange) {
                            onChange(e);
                        }
                    }}
                    css={css([visuallyHidden, checkboxStyle.input])}
                />
                {checkedIcon ? (
                    <span
                        css={css([
                            getSizeStyle(size).custom,
                            checkboxStyle.checkedIconContainer,
                            checkboxStyle.customCheckedIcon,
                            {
                                ...(isDisabled && checkboxStyle.disabledIcon)
                            }
                        ])}
                    >
                        {checkedIcon}
                    </span>
                ) : (
                    <span
                        css={css([
                            getSizeStyle(size).default,
                            checkboxStyle.checkedIconContainer,
                            checkboxStyle.defaultCheckedIcon,
                            {
                                ...(isDisabled && checkboxStyle.disabledDefaultIcon)
                            }
                        ])}
                    >
                        <CheckIcon />
                    </span>
                )}
                {icon ? (
                    <span
                        css={css([
                            getSizeStyle(size).custom,
                            checkboxStyle.customCheckboxContainer,
                            {
                                ...(isDisabled && checkboxStyle.disabledIcon)
                            }
                        ])}
                    >
                        {icon}
                    </span>
                ) : (
                    <span
                        css={css([
                            getSizeStyle(size).default,
                            checkboxStyle.defaultCheckboxContainer,
                            {
                                ...(isDisabled && checkboxStyle.disabledCheckbox)
                            }
                        ])}
                    />
                )}
            </span>
            <Typography
                component="span"
                lineHeight="1.5"
                fontWeight="500"
                customCSS={{ ...checkboxStyle.labelText, ...getSizeStyle(size).text }}
            >
                {label}
            </Typography>
        </label>
    );
});

export default Checkbox;
