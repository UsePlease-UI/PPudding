/** @jsxImportSource @emotion/react */

import { css, keyframes } from '@emotion/react';
import palette from 'styles/palette';

import Typography from 'components/Base/Typography';
import useMobile from 'hooks/useMobile';

const linkStyle = css({
    display: 'flex',
    alignItems: 'center',
    padding: 20,
    borderRadius: 4,
    color: palette.primary['600'],
    backgroundColor: palette.neutral.white,
    border: `1px dashed ${palette.primary['600']}`,
    '& h2': { fontSize: 14 },
    '@media (max-width: 425px)': {
        padding: 10
    }
});

const blink = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.7;
    }
    100% {
        opacity: 1;
    }
`;

const linkIconStyle = css({
    width: 40,
    height: 40,
    marginRight: 15,
    marginBottom: 'auto',
    flex: 'none',
    display: 'inline-block',
    fontFamily: 'cursive',
    fontSize: 24,
    lineHeight: '40px',
    fontWeight: 900,
    textAlign: 'center',
    border: `1px solid ${palette.gray['100']}`,
    borderRadius: 4,
    animation: `${blink} 2s ease-in-out infinite`
});

const DESCRIPTION = {
    Accordion: {
        link: 'https://www.w3.org/WAI/ARIA/apg/patterns/accordion/',
        icon: 'A',
        name: 'Accordion',
        description: 'A component with show / hide functionality'
    },
    AutoComplete: {
        link: 'https://www.w3.org/WAI/ARIA/apg/patterns/combobox/',
        icon: 'A',
        name: 'AutoComplete',
        description: 'A component that enables the user to choose a value for input from a collection'
    },
    Button: {
        link: 'https://www.w3.org/WAI/ARIA/apg/patterns/button/',
        icon: 'B',
        name: 'Button',
        description: 'A component that triggers an action or event'
    },
    Checkbox: {
        link: 'https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/',
        icon: 'C',
        name: 'Checkbox',
        description: 'A component with multi-selection functionality'
    },
    Chip: {
        link: '/',
        icon: 'C',
        name: 'Chip',
        description: 'A component that can be used to represent an attribute or trigger an action'
    },
    DragNDrop: {
        link: 'https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API',
        icon: 'D',
        name: 'Drag and Drop',
        description: 'A component that utilizes drag-and-drop api'
    },
    'Icon Button': {
        link: 'https://www.w3.org/WAI/ARIA/apg/patterns/button/',
        icon: 'B',
        name: 'Button',
        description: 'A component that triggers an action or event'
    },
    Pagination: {
        link: '/',
        icon: 'P',
        name: 'Pagination',
        description: 'A component that enables the user to select a page from a range of pages'
    },
    PopOver: {
        link: 'https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/',
        icon: 'P',
        name: 'PopOver',
        description: 'A button that opens a menu'
    },
    Radio: {
        link: 'https://www.w3.org/WAI/ARIA/apg/patterns/radio/',
        icon: 'R',
        name: 'Radio Group',
        description: 'A set of checkable buttons, where only one button can be checked at a time'
    },
    Select: {
        link: 'https://www.w3.org/WAI/ARIA/apg/patterns/combobox/',
        icon: 'S',
        name: 'Select',
        description: 'A component that enables the user to choose a value from a collection'
    },
    Skeleton: {
        link: '/',
        icon: 'S',
        name: 'Skeleton',
        description: 'A component that indicates progress'
    },
    Tab: {
        link: 'https://www.w3.org/WAI/ARIA/apg/patterns/tabs/',
        icon: 'T',
        name: 'Tab',
        description: 'A set of layered sections of content that displays one panel of content at a time'
    },
    Table: {
        link: 'https://www.w3.org/WAI/ARIA/apg/patterns/table/',
        icon: 'T',
        name: 'Table',
        description: 'A component that displays sets of data'
    },
    TextField: {
        link: '/',
        icon: 'T',
        name: 'TextField',
        description: 'A component that accepts user input'
    },
    'Toggle Button': {
        link: 'https://www.w3.org/WAI/ARIA/apg/patterns/table/',
        icon: 'B',
        name: 'Button',
        description: 'A component that triggers an action or event'
    }
};

type DescriptionType = {
    component: string;
};

type ComponentType = keyof typeof DESCRIPTION;

export default function Description({ component }: DescriptionType) {
    const componentName = component as ComponentType;
    const isMobile = useMobile();

    return DESCRIPTION[componentName] ? (
        <a href={DESCRIPTION[componentName].link} target="_blank" rel="noreferrer noopener" css={linkStyle}>
            <Typography component="span" customCSS={linkIconStyle}>
                {DESCRIPTION[componentName].icon}
            </Typography>
            <div>
                <Typography component="h2">{DESCRIPTION[componentName].name}</Typography>
                {!isMobile && <Typography component="p">{DESCRIPTION[componentName].description}</Typography>}{' '}
            </div>
        </a>
    ) : null;
}
