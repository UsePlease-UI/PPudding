/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';

import { css } from '@emotion/react';
import type { CustomCSSType } from 'styles/types';

import { FlexBox } from 'components/Base';
import { useTabContext } from 'components/useTab';

import { tabStyle } from './styles';

type TabItemType = CustomCSSType & {
    label: string;
    value: number;
    index: number;
    icon?: ReactNode;
    onChange?: (newValue: number) => void;
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
            css={css([tabStyle.button, customCSS])}
        >
            <FlexBox alignItems="center" justifyContent="center">
                {!!icon && <span css={tabStyle.icon}>{icon}</span>}
                <p
                    css={css([
                        tabStyle.text,
                        {
                            fontWeight: value === index ? 700 : 500
                        }
                    ])}
                >
                    {label}
                </p>
            </FlexBox>
            <div
                id={`tab-indicator-${index}`}
                css={css([
                    tabStyle.indicator,
                    {
                        transition: 'all ease-in-out 0.1s',
                        visibility: value === index ? 'visible' : 'hidden'
                    }
                ])}
            />
        </button>
    );
}
