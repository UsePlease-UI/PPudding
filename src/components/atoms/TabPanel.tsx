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

export default function TabPanel({ children, value, index, customCSS = {} }: TabPanelType) {
    return (
        <div css={css([panelStyle, customCSS])} role="tabpanel" hidden={value !== index}>
            {children}
        </div>
    );
}
