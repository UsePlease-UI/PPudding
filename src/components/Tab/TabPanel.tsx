/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';

import { css } from '@emotion/react';
import type { CustomCSSType } from 'styles/types';

import { tabStyle } from './styles';

type TabPanelType = CustomCSSType & {
    children: ReactNode;
    value: number;
    index: number;
};

/**
 *  [UI Component] Tab Panel Component
 *  @param children 컴포넌트
 *  @param value 선택된 탭 인덱스
 *  @param index 탭 인덱스
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
export default function TabPanel(props: TabPanelType) {
    const { children, value, index, customCSS } = props;

    return (
        <div css={css([tabStyle.panel, customCSS])} role="tabpanel" hidden={value !== index}>
            {children}
        </div>
    );
}
