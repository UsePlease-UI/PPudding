/** @jsxImportSource @emotion/react */
import { Children, ReactElement, ReactNode, cloneElement } from 'react';

import { css } from '@emotion/react';
import type { CustomCSSType } from 'styles/types';

import FlexBox from 'components/Base/FlexBox';
import { TabProvider } from 'components/useTab';

import { tabStyle } from './styles';

type TabType = CustomCSSType & {
    children: ReactNode;
    value: number;
    onChange: (newValue: number) => void;
};

/**
 *  [UI Component] Tab Component
 *  @param children 컴포넌트
 *  @param value 선택된 탭 인덱스
 *  @param onChange Change Event Handler
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
export default function Tab(props: TabType) {
    const { children, value, onChange, customCSS, ...rest } = props;

    return (
        <TabProvider value={value} onChange={onChange}>
            <div {...rest} role="tablist" css={css([tabStyle.tabList, customCSS])}>
                <FlexBox justifyContent="space-evenly" alignItems="center" customCSS={tabStyle.tabContainer}>
                    {/* https://fe-developers.kakaoent.com/2021/211022-react-children-tip/ */}
                    {Children.toArray(children).map((child) => cloneElement(child as ReactElement, { onChange }))}
                </FlexBox>
            </div>
        </TabProvider>
    );
}
