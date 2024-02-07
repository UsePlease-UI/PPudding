/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { useNavigate, useParams } from 'react-router-dom';

import accordion from 'components/Accordion/Accordion.md';
import { Box, FlexBox } from 'components/Base';
import base from 'components/Base/Base.md';
import button from 'components/Button/Button/Button.md';
import chip from 'components/Button/Chip/Chip.md';
import iconButton from 'components/Button/IconButton/IconButton.md';
import toggleButton from 'components/Button/ToggleButton/ToggleButton.md';
import select from 'components/Combobox/Select/Select.md';
import checkbox from 'components/Form/Checkbox/Checkbox.md';
import radio from 'components/Form/Radio/Radio.md';
import textfield from 'components/Form/TextField/TextField.md';
import skeleton from 'components/Loader/Skeleton.md';
import tab from 'components/Tab/Tab.md';
import table from 'components/Table/Table.md';

import { guideStyle } from './styles';

function getMD(name?: string) {
    switch (name) {
        case 'accordion':
            return accordion;
        case 'base':
            return base;
        case 'button':
            return button;
        case 'chip':
            return chip;
        case 'icon button':
            return iconButton;
        case 'toggle button':
            return toggleButton;
        case 'select':
            return select;
        case 'checkbox':
            return checkbox;
        case 'radio':
            return radio;
        case 'textfield':
            return textfield;
        case 'skeleton':
            return skeleton;
        case 'tab':
            return tab;
        case 'table':
            return table;
        default:
            return null;
    }
}

export default function Guide() {
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
            <Box customCSS={guideStyle.markdown}>
                <Markdown>{markdown}</Markdown>
            </Box>
        </FlexBox>
    );
}
