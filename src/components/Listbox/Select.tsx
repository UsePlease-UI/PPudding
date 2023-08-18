/** @jsxImportSource @emotion/react */
import { InputHTMLAttributes, useEffect, useRef, useState } from 'react';

import Backdrop from 'components/Base/Backdrop';
import Button from 'components/Button/Button';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

type OptionType = { label: string; value: string | number };

type SelectType = InputHTMLAttributes<HTMLButtonElement> & {
    name: string;
    label: string;
    value: string | number;
    options?: OptionType[];
    isDisabled?: boolean;
    isReadOnly?: boolean;
    onChange: (e: React.MouseEvent<HTMLButtonElement>) => void;
    customCSS?: CSSInterpolation;
};

const buttonStyle = css({
    height: 40,
    minWidth: 120,
    padding: '0 8px 0 12px',
    border: '1px solid #eeeeee',
    borderRadius: 4,
    backgroundColor: '#ffffff',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '&:disabled': {
        color: '#000000',
        backgroundColor: '#eeeeee'
    }
});

const buttonTextStyle = css({
    flex: 1,
    textAlign: 'left',
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.5,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
});

const iconStyle = css({ display: 'inline-block', width: 20, height: 20 });

type ListBoxType = {
    id: string;
    labelId: string;
    name: string;
    value: string | number;
    options: OptionType[];
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const listStyle = css({
    width: '100%',
    maxHeight: 300,
    padding: '10px 0',
    border: '1px solid #eeeeee',
    borderRadius: 4,
    backgroundColor: '#ffffff',
    overflowX: 'hidden',
    overflowY: 'auto'
});

const listItemStyle = css({
    width: '100%',
    minWidth: 120,
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.5,
    padding: '0 12px',
    '& button': {
        width: '100%',
        height: 40,
        textAlign: 'left',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
    },
    '&:hover, &:hover button': {
        fontWeight: 600,
        color: '#ffffff',
        backgroundColor: 'lightpink'
    }
});

const ListBox = ({ id, labelId, name, value, options, onClick }: ListBoxType) => (
    <ul css={listStyle} id={id} role="listbox" aria-labelledby={labelId} tabIndex={-1}>
        {options.map((option) => (
            <li
                key={option.value}
                role="option"
                aria-selected={value === option.value}
                css={css([
                    listItemStyle,
                    {
                        ...(value === option.value && {
                            '&, & button': {
                                textAlign: 'left',
                                width: '100%',
                                height: 40,
                                fontWeight: 600,
                                color: '#ffffff',
                                backgroundColor: 'hotpink'
                            }
                        })
                    }
                ])}
            >
                <Button type="button" name={name} value={option.value} onClick={onClick}>
                    {option.label}
                </Button>
            </li>
        ))}
    </ul>
);

const MAX_MENU_HEIGHT = 300;
const AVG_OPTION_HEIGHT = 24;
const MIN_OFFSET = 20;

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
        isDisabled = false,
        isReadOnly = false,
        onChange,
        customCSS = {},
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
        <div css={css({ position: 'relative' })}>
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
                    buttonStyle,
                    {
                        ...(isReadOnly && {
                            '&&': { border: '1px solid #e0e0e0', backgroundColor: '#f4f4f4' }
                        })
                    },
                    css(customCSS)
                ])}
            >
                <span css={buttonTextStyle}>{label}</span>
                <span css={css([iconStyle, { '& svg': { transform: isVisible ? 'rotate(180deg)' : 'unset' } }])}>
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
