/** @jsxImportSource @emotion/react */
import React from 'react';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';
import palette from 'styles/palette';

import { useTabContext } from 'components/useTab';

type TabItemType = {
    label: string;
    value: number;
    index: number;
    icon?: React.ReactNode;
    onChange?: (newValue: number) => void;
    customCSS?: CSSInterpolation;
};

function a11yProps(index: number, value: number) {
    return {
        id: `tab-${index}`,
        role: 'tab',
        'aria-selected': value === index,
        'aria-controls': `tabpanel-${index}`,
        ...(value !== index && { tabIndex: -1 })
    };
}

const buttonStyle = css({
    width: '100%',
    height: '100%',
    minHeight: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    cursor: 'pointer'
});

const containerStyle = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});
const iconStyle = css({
    width: 16,
    height: 16,
    '& svg': { width: 16, height: 16, color: palette.primary['600'] }
});
const textStyle = css({
    margin: '20px 4px',
    color: palette.neutral.black,
    fontSize: 14,
    fontWeight: 500
});
const indicatorStyle = css({
    width: '80%',
    height: 2,
    borderRadius: 999,
    backgroundColor: palette.primary['600']
});

/**
 *  [UI Component] Tab Item Component
 *  @param value 선택된 탭 인덱스
 *  @param label 탭 Text
 *  @param index 탭 인덱스
 *  @param icon 아이콘  [optional]
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
export default function TabItem(props: TabItemType) {
    const { label, value, index, icon, customCSS, onChange } = props;

    const { linkRefs } = useTabContext();

    const handleClick = (newValue: number) => {
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <button
            type="button"
            {...a11yProps(index, value)}
            ref={linkRefs[index - 1]}
            onClick={() => handleClick(index)}
            css={css([buttonStyle, customCSS])}
        >
            <div css={containerStyle}>
                {!!icon && <span css={iconStyle}>{icon}</span>}
                <p
                    css={css([
                        textStyle,
                        {
                            fontWeight: value === index ? 700 : 500
                        }
                    ])}
                >
                    {label}
                </p>
            </div>
            <div
                id={`tab-indicator-${index}`}
                css={css([
                    indicatorStyle,
                    {
                        transition: 'all ease-in-out 0.1s',
                        visibility: value === index ? 'visible' : 'hidden'
                    }
                ])}
            />
        </button>
    );
}
