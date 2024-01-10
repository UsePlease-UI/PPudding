/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { useLocation } from 'react-router-dom';

import accordion from 'components/Accordion/Accordion.md';
import { FlexBox } from 'components/Base';

import { guideStyle } from './styles';

function getMD(pathname: string) {
    const name = pathname.split('/guide/')[1];
    switch (name) {
        case 'accordion':
            return accordion;

        default:
            return null;
    }
}

const Guide = () => {
    const { pathname } = useLocation();
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        if (getMD(pathname)) {
            fetch(getMD(pathname))
                .then((response) => response.text())
                .then(setMarkdown);
        }
    }, [pathname]);

    return (
        <FlexBox flexDirection="column" customCSS={guideStyle.container}>
            <div css={guideStyle.markdown}>
                <Markdown>{markdown}</Markdown>
            </div>
        </FlexBox>
    );
};

export default Guide;
