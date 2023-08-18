/** @jsxImportSource @emotion/react */

import Typography from 'components/Base/Typography';

import { css, keyframes } from '@emotion/react';
import palette from 'styles/palette';

const linkStyle = css({
    display: 'flex',
    alignItems: 'center',
    padding: 20,
    borderRadius: 4,
    color: palette.primary.main,
    backgroundColor: '#ffffff',
    border: `1px dashed ${palette.primary.main}`,
    '& h2': { fontSize: 14 }
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
    display: 'inline-block',
    fontFamily: 'cursive',
    fontSize: 24,
    lineHeight: '40px',
    fontWeight: 900,
    textAlign: 'center',
    border: '1px solid #eeeeee',
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
    Button: {
        link: 'https://www.w3.org/WAI/ARIA/apg/patterns/button/',
        icon: 'B',
        name: 'Button',
        description: 'A component that triggers an action or event'
    },
    Checkbox: {
        link: 'https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/',
        icon: 'F',
        name: 'Checkbox',
        description: 'A component with multi-selection functionality'
    },
    Chip: {
        link: '/',
        icon: 'F',
        name: 'Chip',
        description: 'A component that can be used to represent an attribute or trigger an action'
    },
    Skeleton: {
        link: '/',
        icon: 'S',
        name: 'Skeleton',
        description: 'A component that indicates progress'
    }
};

type DescriptionType = {
    component: string;
};

type ComponentType = keyof typeof DESCRIPTION;

export default function Description({ component }: DescriptionType) {
    const componentName = component as ComponentType;

    return DESCRIPTION[componentName] ? (
        <a href={DESCRIPTION[componentName].link} target="_blank" rel="noreferrer noopener" css={linkStyle}>
            <Typography component="span" customCSS={linkIconStyle}>
                {DESCRIPTION[componentName].icon}
            </Typography>
            <div>
                <Typography component="h2">{DESCRIPTION[componentName].name}</Typography>
                <Typography component="p">{DESCRIPTION[componentName].description}</Typography>
            </div>
        </a>
    ) : null;
}
