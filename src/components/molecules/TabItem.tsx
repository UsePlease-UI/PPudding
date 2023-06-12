/** @jsxImportSource @emotion/react */
import React from 'react';

import { useTabContext } from 'contexts/TabContext';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

type TabItemType = {
    label: string;
    value: number;
    index: number;
    onChange?: (newValue: number) => void;
    icon?: React.ReactNode;
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

const containerStyle = css({ display: 'flex', alignItems: 'center', justifyContent: 'center' });
const iconStyle = css({ width: 20, height: 20, '& svg': { width: 20, height: 20, color: 'pink' } });
const textStyle = css({ margin: 20, color: '#000000', fontSize: 14, fontWeight: 500 });
const indicatorStyle = css({ width: '80%', height: 2, borderRadius: 999, backgroundColor: 'pink' });

export default function TabItem({ label, value, index, icon, customCSS, onChange }: TabItemType) {
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
                <p css={css([textStyle, { fontWeight: value === index ? 700 : 500 }])}>{label}</p>
            </div>
            <div
                id={`tab-indicator-${index}`}
                css={css([
                    indicatorStyle,
                    { transition: 'all ease-in-out 0.1s', visibility: value === index ? 'visible' : 'hidden' }
                ])}
            />
        </button>
    );
}
