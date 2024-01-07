import { ChangeEvent, Children, ReactElement, ReactNode, cloneElement } from 'react';

import FlexBox from 'components/Base/FlexBox';

import type { CustomCSSType } from 'styles/types';

type ToggleButtonGroupType = CustomCSSType & {
    children: ReactNode;
    value: string | number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

/**
 *  [UI Component] Toggle Button Group Component
 *  @param children 컴포넌트
 *  @param value 선택된 Toggle Button 값
 *  @param onChange Change Event Handler
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
export default function ToggleButtonGroup({ children, value, onChange, customCSS = {} }: ToggleButtonGroupType) {
    return (
        <FlexBox role="radiogroup" customCSS={customCSS}>
            {Children.toArray(children).map((child) =>
                cloneElement(child as ReactElement, { currentValue: value, onChange })
            )}
        </FlexBox>
    );
}
