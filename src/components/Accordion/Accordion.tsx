/** @jsxImportSource @emotion/react */
import { MouseEvent, ReactNode } from 'react';

import type { CustomCSSType } from 'styles/types';

import FlexBox from 'components/Base/FlexBox';
import { AccordionProvider } from 'components/useAccordion';

export type AccordionType = CustomCSSType & {
    children: ReactNode;
    isExpanded?: boolean;
    isDisabled?: boolean;
    onChange?: (event: MouseEvent<HTMLButtonElement>, isExpanded: boolean) => void;
};

/**
 *  [UI Component] Accordion Component
 *  @param children 컴포넌트
 *  @param isExpanded Panel 선택 여부 [optional]
 *  @param isDisabled Panel 비활성화 여부 [optional]
 *  @param onChange Change Event Handler [optional]
 *  @param customCSS 커스텀 css [optional]
 *  @returns JSX.Element
 */
export default function Accordion(props: AccordionType) {
    const { children, customCSS = { width: '100%' }, ...rest } = props;

    return (
        <AccordionProvider {...rest}>
            <FlexBox flexDirection="column" customCSS={customCSS}>
                {children}
            </FlexBox>
        </AccordionProvider>
    );
}
