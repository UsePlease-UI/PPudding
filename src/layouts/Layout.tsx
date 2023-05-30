/** @jsxImportSource @emotion/react */
import { useState } from 'react';

import Block from 'components/atoms/Block';
import BlockWrapper from 'components/atoms/BlockWrapper';
import ButtonExample from 'examples/ButtonExample';
import IconButtonExample from 'examples/IconButtonExample';
import PaginationExample from 'examples/PaginationExample';
import PopOverExample from 'examples/PopOverExample';
import SelectExample from 'examples/SelectExample';
import TabExample from 'examples/TabExample';
import TableExample from 'examples/TableExample';
import TextFieldExample from 'examples/TextFieldExample';
import ToggleButtonExample from 'examples/ToggleButtonExample';

import { css } from '@emotion/react';

const COMPONENT_LIST = [
    'Button',
    'IconButton',
    'Pagination',
    'PopOver',
    'Select',
    'Tab',
    'Table',
    'TextField',
    'ToggleButton'
];

const layoutStyle = css({ maxWidth: 1200, margin: '0 auto', padding: '20px 0' });
const componentStyle = css({ marginTop: 20, display: 'flex' });

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
            <div css={componentStyle}>
                {selected === 'Button' && <ButtonExample />}
                {selected === 'IconButton' && <IconButtonExample />}
                {selected === 'Pagination' && <PaginationExample />}
                {selected === 'PopOver' && <PopOverExample />}
                {selected === 'Select' && <SelectExample />}
                {selected === 'TextField' && <TextFieldExample />}
                {selected === 'Tab' && <TabExample />}
                {selected === 'Table' && <TableExample />}
                {selected === 'ToggleButton' && <ToggleButtonExample />}
            </div>
        </div>
    );
}
