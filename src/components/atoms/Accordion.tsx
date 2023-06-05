/** @jsxImportSource @emotion/react */

import { useState } from 'react';

import FlexBox from 'components/atoms/FlexBox';
import AccordionProvider from 'contexts/AccordionContext';

import { CSSInterpolation } from '@emotion/serialize';

type AccordionType = {
    children: React.ReactNode;
    customCSS?: CSSInterpolation;
};

export default function Accordion({ children, customCSS = {} }: AccordionType) {
    const [selected, setSelected] = useState<string | number>('');

    return (
        <AccordionProvider
            value={selected}
            onChange={(newValue) => {
                if (selected === newValue) {
                    setSelected('');
                } else {
                    setSelected(newValue);
                }
            }}
        >
            <FlexBox direction="column" customCSS={customCSS}>
                {children}
            </FlexBox>
        </AccordionProvider>
    );
}
