/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Link, Outlet, ScrollRestoration } from 'react-router-dom';

import { FlexBox, Typography } from 'components/Base';
import useMobile from 'hooks/useMobile';
import Aside from 'layout/components/Aside';
import Gnb from 'layout/components/Gnb';

import { baseLayoutStyle, headerStyle } from './styles';

export default function BaseLayout() {
    const isMobile = useMobile();
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div css={baseLayoutStyle.layout}>
            <header css={headerStyle.header}>
                <FlexBox alignItems="center" justifyContent="space-between" customCSS={headerStyle.headerContainer}>
                    <Link to="/">
                        <Typography component="h1" customCSS={headerStyle.headerText}>
                            <svg viewBox="0 0 1200 80" width="100%" height={80} css={headerStyle.svg}>
                                <text x="0" y={isMobile ? '100' : '60'} css={headerStyle.svgText}>
                                    {isMobile ? 'RC' : 'React Components'}
                                </text>
                            </svg>
                        </Typography>
                    </Link>
                    <Gnb onClick={() => setIsVisible((prev) => !prev)} />
                </FlexBox>
            </header>
            {isMobile && <Aside isVisible={isVisible} onClose={() => setIsVisible((prev) => !prev)} />}
            <main css={baseLayoutStyle.main}>
                <section css={baseLayoutStyle.section}>
                    <Outlet />
                </section>
            </main>
            <ScrollRestoration />
        </div>
    );
}
