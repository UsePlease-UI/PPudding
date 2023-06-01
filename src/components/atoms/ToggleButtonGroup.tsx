/** @jsxImportSource @emotion/react */
import React from 'react';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

type ToggleButtonGroupType = {
    children: React.ReactNode;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    customCSS?: CSSInterpolation;
};

export default function ToggleButtonGroup({ children, value, onChange, customCSS = {} }: ToggleButtonGroupType) {
    return (
        <div role="radiogroup" css={css([customCSS])}>
            {React.Children.toArray(children).map((child) =>
                React.cloneElement(child as React.ReactElement, { currentValue: value, onChange })
            )}
        </div>
    );
}
