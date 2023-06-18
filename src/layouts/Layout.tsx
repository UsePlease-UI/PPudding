/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Skeleton from '@atoms/Skeleton';

import {
    AccordionExample,
    AutoCompleteExample,
    ButtonExample,
    CheckboxExample,
    ChipExample,
    IconButtonExample,
    PaginationExample,
    PopOverExample,
    RadioExample,
    SelectExample,
    TabExample,
    TableExample,
    TextFieldExample,
    ToggleButtonExample
} from '@examples';
import Block from '@layouts/Block';
import BlockWrapper from '@layouts/BlockWrapper';
import CodeSnippet from '@layouts/CodeSnippet';
import Description from '@layouts/Description';

import { css, keyframes } from '@emotion/react';
import { BuildingLibraryIcon } from '@heroicons/react/24/outline';
import palette from '@styles/palette';

const COMPONENT_LIST = [
    'Accordion',
    'AutoComplete',
    'Button',
    'Checkbox',
    'Chip',
    'Icon Button',
    'Pagination',
    'PopOver',
    'Radio',
    'Select',
    'Skeleton',
    'Tab',
    'Table',
    'TextField',
    'Toggle Button'
];

const layoutStyle = css({ minHeight: '100vh', margin: '0 auto', backgroundColor: palette.primary.main });

const headerStyle = css({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    height: 80,
    borderBottom: '1px dashed #ffffff',
    backgroundColor: palette.primary.main,
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between'
});

const stroke = keyframes`
    0% {
        stroke-dashoffset: 350px;
    }
    50% {
        stroke-dashoffset: 0px;
    }
    100% {
        stroke-dashoffset: 350px;
    }
`;

const svgTextStyle = css({
    fontFamily: 'monospace',
    fontSize: 70,
    letterSpacing: -5,
    stroke: palette.secondary.main,
    strokeWidth: 2,
    strokeDasharray: 350,
    animation: `${stroke} 3s infinite`
});

const iconStyle = css({ display: 'inline-block', width: 24, height: 24 });

const asideStyle = css({
    position: 'fixed',
    top: 80,
    left: 0,
    minHeight: 'calc(100vh - 80px)',
    borderRight: '1px dashed #ffffff',
    backgroundColor: palette.primary.main,
    display: 'flex',
    alignItems: 'flex-start'
});

const mainStyle = css({ marginTop: 80, padding: 60, transition: 'margin 0.5s ease-in-out' });

const sectionStyle = css({
    width: '100%',
    maxWidth: 1536,
    margin: '0 auto',
    padding: 40,
    borderRadius: 5,
    backgroundColor: '#ffffff'
});

type HeaderType = { show: boolean; onClick: () => void };
const Header = ({ show, onClick }: HeaderType) => (
    <header css={headerStyle}>
        <h1>
            <Link to="/" css={css({ display: 'flex', alignItems: 'center' })}>
                <svg css={css({ fill: '#ffffff' })} width="100%" height={80} viewBox="0 0 1200 80">
                    <text x="0" y="60" css={svgTextStyle}>
                        React Components
                    </text>
                </svg>
            </Link>
        </h1>
        <button type="button" onClick={onClick}>
            <span css={css([iconStyle, { color: show ? '#ffffff' : palette.secondary.main }])}>
                <BuildingLibraryIcon />
            </span>
        </button>
    </header>
);

type AsideType = {
    show: boolean;
    selected: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
const Aside = ({ show, selected, onClick }: AsideType) => (
    <aside
        css={css([
            asideStyle,
            {
                width: show ? 240 : 0,
                transition: 'width 0.5s ease-in-out',
                '& > div': { opacity: show ? 1 : 0, transition: 'opacity 0.45s ease-in-out' }
            }
        ])}
    >
        <BlockWrapper>
            {COMPONENT_LIST.map((el: string) => (
                <Block key={el} name={el} selected={selected} onClick={onClick}>
                    {el}
                </Block>
            ))}
        </BlockWrapper>
    </aside>
);

function getComponents(type: string) {
    switch (type) {
        case 'Accordion':
            return <AccordionExample />;
        case 'AutoComplete':
            return <AutoCompleteExample />;
        case 'Button':
            return <ButtonExample />;
        case 'Checkbox':
            return <CheckboxExample />;
        case 'Chip':
            return <ChipExample />;
        case 'Icon Button':
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
        case 'Toggle Button':
            return <ToggleButtonExample />;
        default:
            break;
    }

    return null;
}

export default function Layout() {
    const [show, setShow] = useState(true);
    const [selected, setSelected] = useState(COMPONENT_LIST[0]);

    return (
        <div css={layoutStyle}>
            <Header show={show} onClick={() => setShow((prev) => !prev)} />
            <Aside show={show} selected={selected} onClick={(e) => setSelected(e.currentTarget.value)} />
            <main css={css([mainStyle, { marginLeft: show ? 240 : 0 }])}>
                <section css={sectionStyle}>
                    <Description component={selected} />
                    {getComponents(selected)}
                    <CodeSnippet component={selected} />
                </section>
            </main>
        </div>
    );
}
