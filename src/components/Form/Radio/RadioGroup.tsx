/** @jsxImportSource @emotion/react */
import { ChangeEvent, Children, ReactElement, ReactNode, cloneElement } from 'react';

import { CustomCSSType } from 'styles';

import FlexBox from 'components/Base/FlexBox';

type RadioGroupType = CustomCSSType & {
    children: ReactNode;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value?: string | number;
    isRow?: boolean;
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
    const { children, value, onChange, isRow = true, customCSS } = props;

    return (
        <FlexBox
            alignItems={isRow ? 'center' : 'unset'}
            justifyContent={isRow ? 'flex-start' : 'unset'}
            flexDirection={isRow ? 'row' : 'column'}
            customCSS={customCSS}
        >
            {Children.toArray(children).map((child) =>
                cloneElement(child as ReactElement, { currentValue: value, onChange })
            )}
        </FlexBox>
    );
}
