/** @jsxImportSource @emotion/react */
import React from 'react';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

type TabPanelType = {
    children: React.ReactNode;
    value: number;
    index: number;
    customCSS?: CSSInterpolation;
};

const panelStyle = css({ width: '100%', height: '100%', minHeight: 250, padding: 20 });

/**
 *  [UI Component] Tab Panel Component
 *  @param children 컴포넌트
 *  @param value 선택된 탭 인덱스
 *  @param index 탭 인덱스
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
export default function TabPanel(props: TabPanelType) {
    const { children, value, index, customCSS = {} } = props;

    return (
        <div css={css([panelStyle, customCSS])} role="tabpanel" hidden={value !== index}>
            {children}
        </div>
    );
}
