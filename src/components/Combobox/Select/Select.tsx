/** @jsxImportSource @emotion/react */
import { InputHTMLAttributes, MouseEvent, useEffect, useRef, useState } from 'react';

import { css } from '@emotion/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import type { CustomCSSType } from 'styles/types';

import Backdrop from 'components/Base/Backdrop';
import ListBox from 'components/Listbox';

import { AVG_OPTION_HEIGHT, MAX_MENU_HEIGHT, MIN_OFFSET, selectStyle } from './styles';

import type { OptionType } from 'components/Listbox/types';

type BaseType = InputHTMLAttributes<HTMLButtonElement> & CustomCSSType;

type SelectType = BaseType & {
    name: string;
    label: string;
    value: string | number;
    onChange: (e: MouseEvent<HTMLButtonElement>) => void;
    options?: OptionType[];
    isDisabled?: boolean;
    isReadOnly?: boolean;
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
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
export default function Select(props: SelectType) {
    const {
        id = 'combo',
        name,
        label,
        value,
        options = [],
        isDisabled,
        isReadOnly,
        onChange,
        customCSS,
        ...rest
    } = props;

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

    const handlePosition = () => {
        const defaultTop = ref.current?.getBoundingClientRect().y || 0;
        if (isMenuPositionedTop()) {
            setTop(defaultTop - (document.getElementById('listbox')?.offsetHeight || 0));
        }
    };

    const handleClick = () => {
        if (!isVisible) {
            document.body.style.overflow = 'hidden';
            handlePosition();
        } else {
            document.body.style.overflow = 'auto';
        }
        setIsVisible((prev) => !prev);
    };

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (isVisible) {
            window.addEventListener('resize', handlePosition);
            window.addEventListener('scroll', handlePosition);
            return () => {
                window.removeEventListener('resize', handlePosition);
                window.removeEventListener('scroll', handlePosition);
            };
        }
    }, [isVisible]);

    return (
        <div css={selectStyle.container}>
            <button
                ref={ref}
                type="button"
                disabled={isDisabled || isReadOnly}
                aria-expanded={isVisible}
                aria-controls="listbox"
                aria-haspopup="listbox"
                aria-labelledby={rest['aria-labelledby'] || 'combo1-label'}
                id={id}
                role="combobox"
                tabIndex={0}
                onClick={() => handleClick()}
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
                    <ChevronDownIcon />
                </span>
            </button>
            <div id={`root-select-${id}`} />
            {isVisible && (
                <Backdrop id={`root-select-${id}`} onClose={() => handleClick()}>
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
                            id={(rest['aria-haspopup'] as string) || 'listbox'}
                            labelId={(rest['aria-labelledby'] as string) || 'combo1-label'}
                            name={name}
                            value={value}
                            options={options}
                            onClick={onChange}
                        />
                    </div>
                </Backdrop>
            )}
        </div>
    );
}
