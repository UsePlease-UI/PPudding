/** @jsxImportSource @emotion/react */
import { InputHTMLAttributes, useEffect, useRef, useState } from 'react';

import Backdrop from 'components/atoms/Backdrop';
import ListBox from 'components/atoms/ListBox';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';
import { ChevronDownIcon } from 'assets/icons';

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

const MAX_MENU_HEIGHT = 300;
const AVG_OPTION_HEIGHT = 24;
const MIN_OFFSET = 20;

export default function Select({
    id = 'combo',
    name,
    label,
    value,
    options = [],
    isDisabled = false,
    isReadOnly = false,
    onChange,
    customCSS = {},
    ...props
}: SelectType) {
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
                aria-labelledby={props['aria-labelledby'] || 'combo1-label'}
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
            <div id="root-select" />
            {isVisible && (
                <Backdrop onClose={() => handleClick()}>
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
                            id={(props['aria-haspopup'] as string) || 'listbox'}
                            labelId={(props['aria-labelledby'] as string) || 'combo1-label'}
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
