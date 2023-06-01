/** @jsxImportSource @emotion/react */
import { useState } from 'react';

import Block from 'components/atoms/Block';
import BlockWrapper from 'components/atoms/BlockWrapper';
import Skeleton from 'components/atoms/Skeleton';
import ButtonExample from 'examples/ButtonExample';
import CheckboxExample from 'examples/CheckboxExample';
import ChipExample from 'examples/ChipExample';
import IconButtonExample from 'examples/IconButtonExample';
import PaginationExample from 'examples/PaginationExample';
import PopOverExample from 'examples/PopOverExample';
import RadioExample from 'examples/RadioExample';
import SelectExample from 'examples/SelectExample';
import TabExample from 'examples/TabExample';
import TableExample from 'examples/TableExample';
import TextFieldExample from 'examples/TextFieldExample';
import ToggleButtonExample from 'examples/ToggleButtonExample';

import AutoCompleteExample from './AutoCompleteExample';

import { css } from '@emotion/react';

const COMPONENT_LIST = [
    'AutoComplete',
    'Button',
    'Checkbox',
    'Chip',
    'IconButton',
    'Pagination',
    'PopOver',
    'Radio',
    'Select',
    'Skeleton',
    'Tab',
    'Table',
    'TextField',
    'ToggleButton'
];

const layoutStyle = css({ maxWidth: 1200, margin: '0 auto', padding: '20px 0' });
const componentStyle = css({ marginTop: 20, display: 'flex' });

function getComponents(type: string) {
    switch (type) {
        case 'AutoComplete':
            return <AutoCompleteExample />;
        case 'Button':
            return <ButtonExample />;
        case 'Checkbox':
            return <CheckboxExample />;
        case 'Chip':
            return <ChipExample />;
        case 'IconButton':
            return <IconButtonExample />;
        case 'Pagination':
            return <PaginationExample />;
        case 'PopOver':
            return <PopOverExample />;
        case 'Radio':
            return <RadioExample />;
        case 'Select':
            return <SelectExample />;
        case 'Skeleton':
            return <Skeleton />;
        case 'Tab':
            return <TabExample />;
        case 'Table':
            return <TableExample />;
        case 'TextField':
            return <TextFieldExample />;
        case 'ToggleButton':
            return <ToggleButtonExample />;
        default:
            break;
    }

    return null;
}

export default function Layout() {
    const [selected, setSelected] = useState(COMPONENT_LIST[0]);

    const handleClick = (e: string) => setSelected(e);

    return (
        <div css={layoutStyle}>
            <BlockWrapper>
                {COMPONENT_LIST.map((el: string) => (
                    <Block key={el} onClick={handleClick} name={el} selected={selected}>
                        {el}
                    </Block>
                ))}
            </BlockWrapper>
            <div css={componentStyle}>{getComponents(selected)}</div>
        </div>
    );
}
