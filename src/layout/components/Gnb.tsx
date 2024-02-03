/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Bars3Icon } from '@heroicons/react/24/outline';
import { A_LIST, K_LIST, DEMO_LIST } from 'constants/constants';
import { palette } from 'styles';

import { Backdrop, Box, Typography } from 'components/Base';
import Button from 'components/Button/Button';
import IconButton from 'components/Button/IconButton';
import useMobile from 'hooks/useMobile';

import { gnbStyle } from './styles';

type GnbType = {
    onClick: () => void;
};

export default function Gnb({ onClick }: GnbType) {
    const isMobile = useMobile();
    const [isOpen, setIsOpen] = useState(false);

    return isMobile ? (
        <IconButton size="medium" onClick={onClick} customCSS={gnbStyle.hamburgerButton}>
            <Bars3Icon />
        </IconButton>
    ) : (
        <Box customCSS={gnbStyle.menuContainer}>
            <Button
                size="small"
                variant="contained"
                onClick={() => setIsOpen((prev) => !prev)}
                customCSS={gnbStyle.menuButton}
            >
                MENU
            </Button>
            <Backdrop isOpen={isOpen} isDimmed onClose={() => setIsOpen(false)}>
                <nav css={gnbStyle.menuNav}>
                    <div css={gnbStyle.menuListContainer}>
                        <Typography
                            component="h2"
                            fontSize={16}
                            fontWeight="900"
                            align="center"
                            backgroundColor={palette.neutral.white}
                            customCSS={gnbStyle.shortHeading}
                        >
                            Kimyerim1935
                        </Typography>
                        <ul css={gnbStyle.menuList}>
                            {K_LIST.map((component) => (
                                <li key={component} css={gnbStyle.menuListItem}>
                                    <Link to={`/example/${component.toLowerCase()}`} css={gnbStyle.linkText}>
                                        {component}
                                    </Link>
                                    {/* <Link
                                        title="가이드 보러가기"
                                        to={`/guide/${component.toLowerCase()}`}
                                        css={gnbStyle.icon}
                                    >
                                        <BookOpenIcon width={16} height={16} color={palette.neutral.black} />
                                    </Link> */}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div css={gnbStyle.menuListContainer}>
                        <Typography
                            component="h2"
                            fontSize={16}
                            fontWeight="900"
                            align="center"
                            backgroundColor={palette.neutral.white}
                            customCSS={gnbStyle.longHeading}
                        >
                            akffkdahffkdgo77
                        </Typography>
                        <ul css={gnbStyle.menuList}>
                            {A_LIST.map((component) => (
                                <li key={component} css={gnbStyle.menuListItem}>
                                    <Link to={`/example/${component.toLowerCase()}`} css={gnbStyle.linkText}>
                                        {component}
                                    </Link>
                                    {/* <Link
                                        title="가이드 보러가기"
                                        to={`/guide/${component.toLowerCase()}`}
                                        css={gnbStyle.icon}
                                    >
                                        <BookOpenIcon width={16} height={16} color={palette.neutral.black} />
                                    </Link> */}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div css={gnbStyle.menuListContainer}>
                        <Typography
                            component="h2"
                            fontSize={16}
                            fontWeight="900"
                            align="center"
                            backgroundColor={palette.neutral.white}
                            customCSS={gnbStyle.demoHeading}
                        >
                            데모
                        </Typography>
                        <ul css={gnbStyle.menuList}>
                            {DEMO_LIST.map((demo) => (
                                <li key={demo} css={gnbStyle.menuListItem}>
                                    <Link to={`/demo/${demo}`} css={gnbStyle.linkText}>
                                        {demo}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </Backdrop>
        </Box>
    );
}
