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

/**
 *  [UI Component] Radio Group Component
 *  @param children 컴포넌트
 *  @param onChange Change Event Handler
 *  @param value 선택된 라디오 버튼 값
 *  @param isRow [CSS] flex direction (row | column)
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
export default function RadioGroup(props: RadioGroupType) {
    const { children, value, onChange, isRow = true, customCSS = {} } = props;

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
