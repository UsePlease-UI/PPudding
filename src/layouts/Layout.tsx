/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Block from 'components/atoms/Block';
import BlockWrapper from 'components/atoms/BlockWrapper';
import Skeleton from 'components/atoms/Skeleton';
import AccordionExample from 'examples/AccordionExample';
import AutoCompleteExample from 'examples/AutoCompleteExample';
import ButtonExample from 'examples/ButtonExample';
import CheckboxExample from 'examples/CheckboxExample';
import ChipExample from 'examples/ChipExample';
import DragNDropExample from 'examples/DragNDropExample';
import IconButtonExample from 'examples/IconButtonExample';
import PaginationExample from 'examples/PaginationExample';
import PopOverExample from 'examples/PopOverExample';
import RadioExample from 'examples/RadioExample';
import SelectExample from 'examples/SelectExample';
import TabExample from 'examples/TabExample';
import TableExample from 'examples/TableExample';
import TextFieldExample from 'examples/TextFieldExample';
import ToggleButtonExample from 'examples/ToggleButtonExample';

import { css } from '@emotion/react';

import FlexBox from '@atoms/FlexBox';
import Typography from '@atoms/Typography';
import IconButton from '@molecules/IconButton';

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
    SkeletonExample,
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
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import palette from '@styles/palette';


const COMPONENT_LIST = [
    'Accordion',
    'AutoComplete',
    'Button',
    'Checkbox',
    'Chip',
    'Drag n Drop',
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

const layoutStyle = css({ margin: '0 auto', backgroundColor: palette.primary.main });

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
    justifyContent: 'space-between',
    alignItems: 'center'
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

type HeaderType = { show: boolean; onClick: () => void };
const Header = ({ show, onClick }: HeaderType) => (
    <header css={headerStyle}>
        <Typography component="h1">
            <Link to="/" css={css({ display: 'flex', alignItems: 'center' })}>
                <svg css={css({ fill: '#ffffff' })} width="100%" height={80} viewBox="0 0 1200 80">
                    <text x="0" y="60" css={svgTextStyle}>
                        React Components
                    </text>
                </svg>
            </Link>
        </Typography>
        <IconButton
            type="button"
            onClick={onClick}
            customCSS={{
                color: !show ? '#ffffff' : palette.primary.main,
                backgroundColor: !show ? palette.secondary.main : '#ffffff',
                border: `1px dashed ${!show ? '#ffffff' : palette.secondary.main}`,
                padding: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '& svg': {
                    width: 30,
                    height: 30
                }
            }}
        >
            <Bars3Icon />
        </IconButton>
    </header>
);

const asideStyle = css({
    position: 'fixed',
    top: 80,
    left: 0,
    minHeight: 'calc(100vh - 80px)',
    borderRight: '1px dashed #ffffff',
    backgroundColor: palette.primary.main,
    display: 'flex',
    alignItems: 'flex-start',
    '@media (max-width: 1024px)': {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        padding: 20,
        zIndex: 11,
        backgroundColor: 'rgba(0,0,0,0.8)',
        flexDirection: 'column'
    }
});

type AsideType = {
    show: boolean;
    selected: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onClose: () => void;
};
const Aside = ({ show, selected, onClick, onClose }: AsideType) => (
    <aside
        css={css([
            asideStyle,
            {
                width: show ? 240 : 0,
                transition: 'width 0.5s ease-in-out',
                '& > div': { opacity: show ? 1 : 0, transition: 'opacity 0.45s ease-in-out' },
                '@media (max-width: 1024px)': {
                    borderRight: 0,
                    width: show ? '100%' : 0,
                    backgroundColor: show ? 'rgba(0,0,0,0.8)' : 'unset'
                }
            }
        ])}
    >
        <FlexBox
            justifyContent="flex-end"
            customCSS={{
                width: '100%',
                marginBottom: 40,
                '@media (min-width: 1025px)': {
                    display: 'none'
                }
            }}
        >
            <IconButton
                aria-label="close"
                customCSS={{ width: 30, height: 30, '& > svg': { color: '#ffffff', width: 30, height: 30 } }}
                onClick={onClose}
            >
                <XMarkIcon />
            </IconButton>
        </FlexBox>
        <BlockWrapper>
            {COMPONENT_LIST.map((el: string) => (
                <Block key={el} name={el} selected={selected} onClick={onClick}>
                    {el}
                </Block>
            ))}
        </BlockWrapper>
    </aside>
);

const mainStyle = css({
    marginTop: 80,
    padding: 60,
    transition: 'margin 0.5s ease-in-out',
    '@media (max-width: 1024px)': {
        padding: 20
    }
});

const sectionStyle = css({
    width: '100%',
    maxWidth: 1536,
    margin: '0 auto',
    padding: 40,
    borderRadius: 5,
    backgroundColor: '#ffffff'
});

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
        case 'Drag n Drop':
            return <DragNDropExample />;
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
            return <SkeletonExample />;
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
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState(COMPONENT_LIST[0]);

    return (
        <div css={layoutStyle}>
            <Header show={show} onClick={() => setShow((prev) => !prev)} />
            <Aside
                show={show}
                selected={selected}
                onClose={() => setShow((prev) => !prev)}
                onClick={(e) => {
                    setSelected(e.currentTarget.value);
                    setShow(false);
                }}
            />
            <main
                css={css([
                    mainStyle,
                    {
                        marginLeft: show ? 240 : 0,
                        '@media (max-width: 1024px)': {
                            marginLeft: 0
                        }
                    }
                ])}
            >
                <section css={sectionStyle}>
                    <Description component={selected} />
                    {getComponents(selected)}
                    <CodeSnippet component={selected} />
                </section>
            </main>
        </div>
    );
}
