/** @jsxImportSource @emotion/react */
import React from 'react';

import TabContext from 'contexts/TabContext';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

type TabListType = {
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

const containerStyle = css({
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
});

export default function Tab({ children, value, onChange, customCSS = {}, ...props }: TabListType) {
    return (
        <TabContext value={value} onChange={onChange}>
            <div {...props} role="tablist" css={css([tabListStyle, customCSS])}>
                <div css={containerStyle}>
                    {/* https://fe-developers.kakaoent.com/2021/211022-react-children-tip/ */}
                    {React.Children.toArray(children).map((child) =>
                        React.cloneElement(child as React.ReactElement, { onChange })
                    )}
                </div>
            </div>
        </TabContext>
    );
}
