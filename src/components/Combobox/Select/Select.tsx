/** @jsxImportSource @emotion/react */
import { InputHTMLAttributes, MouseEvent, ReactNode, useCallback, useEffect, useId, useRef, useState } from 'react';

import { css } from '@emotion/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import type { CustomCSSType } from 'styles/types';

import { Backdrop, FormControl } from 'components/Base';
import ListBox, { OptionType } from 'components/Listbox';

import { AVG_OPTION_HEIGHT, MAX_MENU_HEIGHT, MIN_OFFSET, selectStyle } from './styles';

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

    const backdropId = useId();
    const buttonId = id || useId();
    const labelId = rest['aria-labelledby'] || useId();
    const helperTextId = rest['aria-describedby'] || useId();
    const listboxId = useId();

    const ref = useRef<HTMLButtonElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [top, setTop] = useState(0);

    // select가 페이지 범위를 넘어가는지 확인하는 함수
    // MIN_OFFSET : 메뉴가 페이지 하단에 너무 가깝지 않도록
    function isMenuPositionedTop() {
        if (ref.current) {
            return (
                ref.current.getBoundingClientRect().bottom +
                    Math.min(MAX_MENU_HEIGHT, options.length * AVG_OPTION_HEIGHT) +
                    MIN_OFFSET >=
                window.innerHeight
            );
        }

        return false;
    }

    const handlePosition = useCallback(() => {
        if (isVisible && ref.current) {
            const defaultTop = ref.current?.getBoundingClientRect().top || 0;
            if (isMenuPositionedTop()) {
                setTop(defaultTop - (document.getElementById(listboxId)?.offsetHeight || 0) + 1);
            } else {
                setTop(1);
            }
        }
    }, [isVisible]);

    const handleClick = () => {
        if (!isVisible) {
            document.body.style.overflow = 'hidden';
            handlePosition();
        } else {
            document.body.style.removeProperty('overflow');
        }
        setIsVisible((prev) => !prev);
    };

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        handlePosition();
        window.addEventListener('resize', handlePosition);
        window.addEventListener('scroll', handlePosition);
        return () => {
            window.removeEventListener('resize', handlePosition);
            window.removeEventListener('scroll', handlePosition);
        };
    }, [handlePosition]);

    return (
        <FormControl id={labelId} labelText={labelText} helperText={helperText} helperTextId={helperTextId}>
            <div css={selectStyle.container}>
                <button
                    id={buttonId}
                    ref={ref}
                    type="button"
                    disabled={isDisabled || isReadOnly}
                    aria-expanded={isVisible}
                    aria-controls="listbox"
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
                <div id={backdropId} />
                {isVisible && (
                    <Backdrop isOpen={isVisible} onClose={() => handleClick()}>
                        <div
                            css={css({
                                position: 'fixed',
                                top,
                                left: ref.current?.getBoundingClientRect().x || 0,
                                width: '100%',
                                marginTop: isMenuPositionedTop()
                                    ? 1
                                    : (ref.current?.getBoundingClientRect().top || 0) +
                                      (ref.current?.getBoundingClientRect().height || 0) -
                                      1,
                                '& > ul': {
                                    maxWidth: ref.current?.getBoundingClientRect()?.width || 300
                                }
                            })}
                        >
                            <ListBox
                                id={listboxId}
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
