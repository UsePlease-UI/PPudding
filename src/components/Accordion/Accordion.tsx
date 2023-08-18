/** @jsxImportSource @emotion/react */
import FlexBox from 'components/Base/FlexBox';
import { AccordionProvider } from 'components/useAccordion';

import { CSSInterpolation } from '@emotion/serialize';

type AccordionType = {
    children: React.ReactNode;
    isExpanded?: boolean;
    onChange?: (event: React.MouseEvent<HTMLButtonElement>, isExpanded: boolean) => void;
    customCSS?: CSSInterpolation;
};

/**
 *  [UI Component] Accordion Component
 *  @param children 컴포넌트
 *  @param isExpanded Panel 선택여부 [optional]
 *  @param onChange Change Event Handler [optional]
 *  @param customCSS 커스텀 css [optional]
 *  @returns JSX.Element
 */
export default function Accordion(props: AccordionType) {
    const { children, isExpanded, onChange, customCSS = { width: '100%' } } = props;

    return (
        <AccordionProvider isExpanded={isExpanded} onChange={onChange}>
            <FlexBox direction="column" customCSS={customCSS}>
                {children}
            </FlexBox>
        </AccordionProvider>
    );
}
