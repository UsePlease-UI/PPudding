/** @jsxImportSource @emotion/react */
import React from 'react';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

type RadioGroupType = {
    children: React.ReactNode;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string | number;
    isRow?: boolean;
    customCSS?: CSSInterpolation;
};

export default function RadioGroup({ children, value, onChange, isRow = true, customCSS = {} }: RadioGroupType) {
    return (
        <div
            role="radiogroup"
            css={css([
                {
                    display: 'flex',
                    alignItems: isRow ? 'center' : 'unset',
                    justifyContent: isRow ? 'flex-start' : 'unset',
                    flexDirection: isRow ? 'row' : 'column',
                    gap: 8
                },
                customCSS
            ])}
        >
            {React.Children.toArray(children).map((child) =>
                React.cloneElement(child as React.ReactElement, { currentValue: value, onChange })
            )}
        </div>
    );
}
