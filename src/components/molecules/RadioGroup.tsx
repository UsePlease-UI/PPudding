/** @jsxImportSource @emotion/react */
import React from 'react';

import FlexBox from '@atoms/FlexBox';

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
        <FlexBox
            alignItems={isRow ? 'center' : 'unset'}
            justifyContent={isRow ? 'flex-start' : 'unset'}
            direction={isRow ? 'row' : 'column'}
            customCSS={customCSS}
        >
            {React.Children.toArray(children).map((child) =>
                React.cloneElement(child as React.ReactElement, { currentValue: value, onChange })
            )}
        </FlexBox>
    );
}
