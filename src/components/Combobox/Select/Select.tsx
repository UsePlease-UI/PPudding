/** @jsxImportSource @emotion/react */
import { InputHTMLAttributes, MouseEvent, ReactNode, useId, useRef, useState } from 'react';

import { css } from '@emotion/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import type { CustomCSSType } from 'styles/types';

import { Backdrop, FormControl } from 'components/Base';
import { Listbox, OptionType } from 'components/Listbox';

import { selectStyle } from './styles';
import usePosition from '../usePosition';

type BaseType = InputHTMLAttributes<HTMLButtonElement> & CustomCSSType;

type SelectType = BaseType & {
    name: string;
    label: string;
    value: string | number;
    onChange: (e: MouseEvent<HTMLButtonElement>) => void;
    options?: OptionType[];
    isDisabled?: boolean;
    isReadOnly?: boolean;
    labelText?: string | ReactNode;
    helperText?: string | ReactNode;
};

/**
 *  [UI Component] Select Component
 *  @param name Select 이름
 *  @param label 선택된 값의 label
 *  @param value 선택된 값의 value
 *  @param onChange Change Event Handler
 *  @param options 옵션들 [optional]
 *  @param isReadOnly 읽기 전용 [optional]
 *  @param isDisabled 활성화여부 [optional]
 *  @param labelText Label Text [optional]
 *  @param helperText Helper Text [optional]
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
export default function Select(props: SelectType) {
    const {
        id,
        name,
        label,
        value,
        options = [],
        isDisabled,
        isReadOnly,
        labelText,
        helperText,
        onChange,
        customCSS,
        ...rest
    } = props;

    const buttonId = id || useId();
    const labelId = rest['aria-labelledby'] || useId();
    const helperTextId = rest['aria-describedby'] || useId();
    const listBoxId = useId();

    const ref = useRef<HTMLButtonElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    const { top, left, marginTop, maxWidth } = usePosition({
        inputId: buttonId,
        listBoxId,
        isVisible,
        totalLength: options.length
    });

    const handleClick = () => setIsVisible((prev) => !prev);

    return (
        <FormControl id={labelId} labelText={labelText} helperText={helperText} helperTextId={helperTextId}>
            <div css={selectStyle.container}>
                <button
                    id={buttonId}
                    ref={ref}
                    type="button"
                    disabled={isDisabled || isReadOnly}
                    aria-expanded={isVisible}
                    aria-controls={listBoxId}
                    aria-haspopup="listbox"
                    aria-describedby={helperText ? helperTextId : undefined}
                    role="combobox"
                    tabIndex={0}
                    onClick={handleClick}
                    css={css([
                        selectStyle.button,
                        {
                            ...(isReadOnly && selectStyle.buttonReadOnly)
                        },
                        css(customCSS)
                    ])}
                >
                    <span css={selectStyle.buttonText}>{label}</span>
                    <span
                        css={css([
                            selectStyle.icon,
                            {
                                '& svg': {
                                    transform: isVisible ? 'rotate(180deg)' : 'unset'
                                }
                            }
                        ])}
                    >
                        <ChevronDownIcon width={16} height={16} />
                    </span>
                </button>
                {isVisible && (
                    <Backdrop isOpen={isVisible} onClose={() => handleClick()}>
                        <div
                            css={css([
                                selectStyle.listContainer,
                                {
                                    top,
                                    left,
                                    marginTop,
                                    '& > ul': {
                                        maxWidth
                                    }
                                }
                            ])}
                        >
                            <Listbox
                                id={listBoxId}
                                labelId={labelId}
                                name={name}
                                value={value}
                                options={options}
                                onClick={onChange}
                            />
                        </div>
                    </Backdrop>
                )}
            </div>
        </FormControl>
    );
}
