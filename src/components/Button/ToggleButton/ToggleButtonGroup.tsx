import { ChangeEvent, Children, HTMLAttributes, ReactElement, ReactNode, cloneElement } from 'react';

import { FlexBox } from '@components/Base';

type ToggleButtonGroupType = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> & {
    children: ReactNode;
    value?: string | string[];
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

/**
 *  [UI Component] Toggle Button Group Component
 *  @param children 컴포넌트
 *  @param value 선택된 Toggle Button 값
 *  @param onChange Change Event Handler
 *  @returns JSX.Element
 */
export default function ToggleButtonGroup({ children, value, onChange }: ToggleButtonGroupType) {
    const isMultiple = typeof value !== 'string';

    return (
        <FlexBox {...(!isMultiple && { role: 'radiogroup' })}>
            {Children.toArray(children).map((child) =>
                cloneElement(child as ReactElement, {
                    isMultiple,
                    currentValue: value,
                    onChange
                })
            )}
        </FlexBox>
    );
}
