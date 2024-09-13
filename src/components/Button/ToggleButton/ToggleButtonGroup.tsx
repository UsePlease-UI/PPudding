import { ChangeEvent, Children, cloneElement, HTMLAttributes, ReactElement, ReactNode } from 'react';

type ToggleButtonGroupType = Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'className'> & {
    children: ReactNode;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    value?: string | string[];
};

/**
 *  [UI Component] Toggle Button Group Component
 *  @param children 컴포넌트
 *  @param value 선택된 Toggle Button 값
 *  @param onChange Change Event Handler
 *  @returns JSX.Element
 */
export default function ToggleButtonGroup({ children, onChange, value }: ToggleButtonGroupType) {
    const isMultiple = typeof value !== 'string';

    return (
        <div {...(!isMultiple && { role: 'radiogroup' })} className="flex">
            {Children.toArray(children).map((child) =>
                cloneElement(child as ReactElement, {
                    isMultiple,
                    currentValue: value,
                    onChange,
                }),
            )}
        </div>
    );
}
