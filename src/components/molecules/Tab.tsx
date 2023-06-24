/** @jsxImportSource @emotion/react */
import React from 'react';

import FlexBox from '@atoms/FlexBox';
import TabContext from '@contexts/TabContext';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

type TabType = {
    children: React.ReactNode;
    value: number;
    onChange: (newValue: number) => void;
    customCSS?: CSSInterpolation;
};

const tabListStyle = css({
    width: '100%',
    minHeight: 80,
    backgroundColor: '#fbfbfb',
    borderBottom: '1px solid #eeeeee'
});

/**
 *  [UI Component] Tab Component
 *  @param children 컴포넌트
 *  @param value 선택된 탭 인덱스
 *  @param onChange Change Event Handler
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
export default function Tab(props: TabType) {
    const { children, value, onChange, customCSS = {}, ...rest } = props;

    return (
        <TabContext value={value} onChange={onChange}>
            <div {...rest} role="tablist" css={css([tabListStyle, customCSS])}>
                <FlexBox
                    justifyContent="space-evenly"
                    alignItems="center"
                    customCSS={{ width: '100%', height: '100%' }}
                >
                    {/* https://fe-developers.kakaoent.com/2021/211022-react-children-tip/ */}
                    {React.Children.toArray(children).map((child) =>
                        React.cloneElement(child as React.ReactElement, { onChange })
                    )}
                </FlexBox>
            </div>
        </TabContext>
    );
}
