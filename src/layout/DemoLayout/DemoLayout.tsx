/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { palette } from 'styles';

import { Box, FlexBox, Typography } from 'components/Base';
import useMobile from 'hooks/useMobile';
import Aside from 'layout/components/Aside';
import Gnb from 'layout/components/Gnb';

import { layoutStyle } from './styles';

const NAME = {
    editor: 'Button Demo',
    faq: 'Accordion Demo',
    search: 'Form Demo',
    register: 'Form Demo'
};

export default function DemoLayout() {
    const { pathname } = useLocation();
    const isMobile = useMobile();
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => setIsVisible((prev) => !prev);

    return (
        <FlexBox justifyContent="center" customCSS={layoutStyle.container}>
            <header css={layoutStyle.header}>
                <Typography
                    component="h1"
                    fontSize={24}
                    fontWeight="900"
                    align="center"
                    color={palette.primary[600]}
                    css={layoutStyle.heading}
                >
                    {NAME[pathname.split('/demo/')[1] as keyof typeof NAME]}
                </Typography>
                <Box customCSS={layoutStyle.gnbContainer}>
                    <Gnb onClick={handleClick} />
                </Box>
            </header>
            {isMobile && <Aside isVisible={isVisible} onClose={handleClick} />}
            <main css={layoutStyle.main}>
                <FlexBox flexDirection="column" customCSS={layoutStyle.contents}>
                    <Outlet />
                </FlexBox>
            </main>
        </FlexBox>
    );
}
