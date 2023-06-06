/** @jsxImportSource @emotion/react */

import FlexBox from 'components/atoms/FlexBox';
import AccordionProvider from 'contexts/AccordionContext';

import { CSSInterpolation } from '@emotion/serialize';

type AccordionType = {
    children: React.ReactNode;
    isExpanded?: boolean;
    onChange?: (event: React.MouseEvent<HTMLButtonElement>, isExpanded: boolean) => void;
    customCSS?: CSSInterpolation;
};

export default function Accordion({ isExpanded, onChange, children, customCSS = { width: '100%' } }: AccordionType) {
    return (
        <AccordionProvider isExpanded={isExpanded} onChange={onChange}>
            <FlexBox direction="column" customCSS={customCSS}>
                {children}
            </FlexBox>
        </AccordionProvider>
    );
}
