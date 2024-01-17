/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';

import type { CustomCSSType } from 'styles/types';

import FlexBox from 'components/Base/FlexBox';

type CheckboxGroupType = CustomCSSType & {
    children: ReactNode;
    isRow?: boolean;
    gap?: number;
};

/**
 *  [UI Component] Checkbox Group Component
 *  @param children 컴포넌트
 *  @param isRow [CSS] flex direction (row | column)
 *  @param gap [CSS] flex gap
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
export default function CheckboxGroup(props: CheckboxGroupType) {
    const { children, isRow = true, gap = 10, customCSS } = props;

    return (
        <FlexBox
            alignItems={isRow ? 'center' : 'unset'}
            justifyContent={isRow ? 'flex-start' : 'unset'}
            flexDirection={isRow ? 'row' : 'column'}
            gap={gap}
            customCSS={customCSS}
        >
            {children}
        </FlexBox>
    );
}
