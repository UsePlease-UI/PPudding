import { ChangeEvent, Children, ReactElement, ReactNode, cloneElement } from 'react';

import { FlexBox } from '@components/Base';

type RadioGroupType = {
    children: ReactNode;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string | number;
    isRow?: boolean;
    gap?: string;
};

/**
 *  [UI Component] Radio Group Component
 *  @param children 컴포넌트
 *  @param onChange Change Event Handler
 *  @param value 선택된 라디오 버튼 값
 *  @param isRow [CSS] flex direction (row | column)
 *  @param gap [CSS] flex gap
 *  @returns JSX.Element
 */
export default function RadioGroup(props: RadioGroupType) {
    const { children, value, onChange, isRow = true, gap = 'gap-10' } = props;

    return (
        <FlexBox
            role="radiogroup"
            alignItems={isRow ? 'items-center' : undefined}
            justifyContent={isRow ? 'justify-start' : undefined}
            flexDirection={isRow ? 'flex-row' : 'flex-col'}
            gap={gap}
        >
            {Children.toArray(children).map((child) =>
                cloneElement(child as ReactElement, { currentValue: value, onChange })
            )}
        </FlexBox>
    );
}
