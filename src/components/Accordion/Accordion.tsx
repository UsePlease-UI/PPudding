import { MouseEvent, ReactNode } from 'react';

import { FlexBox } from '@components/Base';
import { AccordionProvider } from '@components/useAccordion';

import { BaseStyleType, FlexType } from '../Base/types';

type AccordionType = BaseStyleType &
    FlexType & {
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
 *  @returns JSX.Element
 */
export default function Accordion(props: AccordionType) {
    const {
        children,
        flexDirection = 'flex-col',
        alignItems,
        justifyContent,
        gap,
        flex,
        flexWrap,
        width = 'w-full',
        minWidth,
        maxWidth,
        height,
        minHeight,
        maxHeight,
        backgroundColor,
        padding,
        margin,
        border,
        borderColor,
        borderRadius,
        ...rest
    } = props;

    const styles = {
        justifyContent,
        alignItems,
        flexDirection,
        gap,
        flex,
        flexWrap,
        width,
        minWidth,
        maxWidth,
        height,
        minHeight,
        maxHeight,
        backgroundColor,
        padding,
        margin,
        border,
        borderColor,
        borderRadius
    };

    return (
        <AccordionProvider {...rest}>
            <FlexBox {...styles}>{children}</FlexBox>
        </AccordionProvider>
    );
}
