/** @jsxImportSource @emotion/react */
import React, { ReactNode } from 'react';

import { css } from '@emotion/react';
import { CustomCSSType } from 'styles';

import { tabStyle } from './styles';

type TabContainerType = CustomCSSType & {
    children: ReactNode;
};

/**
 *  [UI Component] Tab Container Component
 *  @param children ReactNode
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
export default function TabContainer({ children, customCSS }: TabContainerType) {
    return <div css={css([tabStyle.tabsContainer, customCSS])}>{children}</div>;
}
