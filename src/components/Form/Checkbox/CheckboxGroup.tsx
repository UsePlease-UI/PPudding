import { ReactNode } from 'react';

import { FlexBox } from '@components/Base';

type CheckboxGroupType = {
    children: ReactNode;
    isRow?: boolean;
    gap?: string;
};

/**
 *  [UI Component] Checkbox Group Component
 *  @param children ReactNode
 *  @param isRow [CSS] Flex Direction (row | column)
 *  @param gap [CSS] Flex Gap
 *  @returns JSX.Element
 */
export default function CheckboxGroup(props: CheckboxGroupType) {
    const { children, isRow = true, gap = 'gap-10' } = props;

    return (
        <FlexBox
            alignItems={isRow ? 'items-center' : undefined}
            justifyContent={isRow ? 'justify-start' : undefined}
            flexDirection={isRow ? 'flex-row' : 'flex-col'}
            gap={gap}
        >
            {children}
        </FlexBox>
    );
}
