/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { useNavigate, useParams } from 'react-router-dom';

import accordion from 'components/Accordion/Accordion.md';
import { FlexBox } from 'components/Base';
import base from 'components/Base/Base.md';

import { guideStyle } from './styles';

function getMD(name?: string) {
    switch (name) {
        case 'accordion':
            return accordion;
        case 'base':
            return base;
        default:
            return null;
    }
}

const Guide = () => {
    const navigate = useNavigate();
    const { component } = useParams();
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        if (getMD(component)) {
            fetch(getMD(component))
                .then((response) => response.text())
                .then(setMarkdown);
        } else {
            navigate('/');
        }
    }, [component]);

    return (
        <FlexBox flexDirection="column" customCSS={guideStyle.container}>
            <div css={guideStyle.markdown}>
                <Markdown>{markdown}</Markdown>
            </div>
        </FlexBox>
    );
};

export default Guide;
