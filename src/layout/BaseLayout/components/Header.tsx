/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { BookOpenIcon } from '@heroicons/react/24/outline';
import { Bars3Icon } from '@heroicons/react/24/solid';
import palette from 'styles/palette';

import { Backdrop, Typography } from 'components/Base';
import Button from 'components/Button/Button';
import IconButton from 'components/Button/IconButton';
import useMobile from 'hooks/useMobile';

import { COMPONENT_LIST, DEMO_LIST } from './constants';
import { headerStyle } from './styles';

type HeaderType = {
    onClick: () => void;
};

const Header = ({ onClick }: HeaderType) => {
    const isMobile = useMobile();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header css={headerStyle.header}>
            <Typography component="h1" customCSS={headerStyle.headerText}>
                <svg viewBox="0 0 1200 80" width="100%" height={80} css={headerStyle.svg}>
                    <text x="0" y={isMobile ? '100' : '70'} css={headerStyle.svgText}>
                        {isMobile ? 'RC' : 'React Components'}
                    </text>
                </svg>
            </Typography>
            {isMobile ? (
                <IconButton size="medium" onClick={onClick} customCSS={headerStyle.hamburgerButton}>
                    <Bars3Icon />
                </IconButton>
            ) : (
                <div css={headerStyle.menuContainer}>
                    <Button
                        size="small"
                        variant="contained"
                        onClick={() => setIsOpen((prev) => !prev)}
                        customCSS={headerStyle.menuButton}
                    >
                        둘러보기
                    </Button>
                    <Backdrop isOpen={isOpen} isDimmed onClose={() => setIsOpen(false)}>
                        <nav css={headerStyle.menuNav}>
                            <div css={headerStyle.menuListContainer}>
                                <Typography
                                    component="h2"
                                    fontSize={16}
                                    fontWeight="900"
                                    align="center"
                                    backgroundColor={palette.neutral.white}
                                    customCSS={headerStyle.componentHeading}
                                >
                                    컴포넌트
                                </Typography>
                                <ul css={headerStyle.menuList}>
                                    {COMPONENT_LIST.map((component) => (
                                        <li key={component} css={headerStyle.menuListItem}>
                                            <Link to={`/?component=${component}`} css={headerStyle.linkText}>
                                                {component}
                                            </Link>
                                            <Link
                                                title="가이드 보러가기"
                                                to={`/guide/${component.toLowerCase()}`}
                                                css={headerStyle.icon}
                                            >
                                                <BookOpenIcon width={16} height={16} color={palette.neutral.black} />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div css={headerStyle.menuListContainer}>
                                <Typography
                                    component="h2"
                                    fontSize={16}
                                    fontWeight="900"
                                    align="center"
                                    backgroundColor={palette.neutral.white}
                                    customCSS={headerStyle.demoHeading}
                                >
                                    데모
                                </Typography>
                                <ul css={headerStyle.menuList}>
                                    {DEMO_LIST.map((demo) => (
                                        <li key={demo} css={headerStyle.menuListItem}>
                                            <Link to={`/demo/${demo}`} css={headerStyle.linkText}>
                                                {demo}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </nav>
                    </Backdrop>
                </div>
            )}
        </header>
    );
};

export default Header;
