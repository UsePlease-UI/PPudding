import { ChangeEvent, Children, ReactElement, ReactNode, cloneElement } from 'react';

import { joinClassNames } from '@utils/format';

type RadioGroupType = {
    children: ReactNode;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string | number;
    isRow?: boolean;
    gap?: number;
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
    const { children, value, onChange, isRow = true, gap = 10 } = props;

    return (
        <div
            role="radiogroup"
            className={joinClassNames(
                'flex flex-col',
                isRow && 'flex-row items-center justify-start',
                gap && `gap-${gap}`
            )}
        >
            {Children.toArray(children).map((child) =>
                cloneElement(child as ReactElement, { currentValue: value, onChange })
            )}
        </div>
    );
}
