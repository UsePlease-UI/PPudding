/** @jsxImportSource @emotion/react */

import Typography from 'components/Base/Typography';
import IconButton from 'components/Button/IconButton';

import { css, keyframes } from '@emotion/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import palette from 'styles/palette';

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
        <Typography component="h1" customCSS={{ display: 'flex', alignItems: 'center' }}>
            <svg css={css({ fill: '#ffffff' })} width="100%" height={80} viewBox="0 0 1200 80">
                <text x="0" y="60" css={svgTextStyle}>
                    React Components
                </text>
            </svg>
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

export default Header;
