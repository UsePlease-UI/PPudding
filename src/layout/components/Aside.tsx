/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { css } from '@emotion/react';
import { BookOpenIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { palette } from 'styles';

import { Backdrop, Typography } from 'components/Base';
import FlexBox from 'components/Base/FlexBox';
import IconButton from 'components/Button/IconButton';

import { COMPONENT_LIST, DEMO_LIST } from './constants';
import { asideStyle } from './styles';

type AsideType = {
    isVisible: boolean;
    onClose: () => void;
};

export default function Aside({ isVisible, onClose }: AsideType) {
    const [searchParams] = useSearchParams();
    const [selected, setSelected] = useState(COMPONENT_LIST[0]);

    useEffect(() => {
        if (searchParams) {
            setSelected(searchParams.get('component') || COMPONENT_LIST[0]);
        }
    }, [searchParams]);

    return (
        <Backdrop isOpen={isVisible} isDimmed backgroundColor="rgba(0,0,0,0.8)" onClose={onClose}>
            <aside
                css={css([
                    asideStyle.aside,
                    {
                        ...(isVisible && asideStyle.isVisible)
                    }
                ])}
            >
                <nav css={asideStyle.menuNav}>
                    <FlexBox justifyContent="flex-end" customCSS={asideStyle.closeIconContainer}>
                        <IconButton
                            aria-label="close"
                            size="medium"
                            variant="text"
                            customCSS={asideStyle.iconButton}
                            onClick={(e) => {
                                e.stopPropagation();
                                onClose();
                            }}
                        >
                            <XMarkIcon />
                        </IconButton>
                    </FlexBox>
                    <div css={asideStyle.menuListContainer}>
                        <Typography
                            component="h2"
                            fontSize={24}
                            fontWeight="900"
                            align="center"
                            backgroundColor={palette.neutral.white}
                            customCSS={asideStyle.componentHeading}
                        >
                            컴포넌트
                        </Typography>
                        <ul css={asideStyle.menuList}>
                            {COMPONENT_LIST.map((component) => (
                                <li key={component} css={asideStyle.menuListItem}>
                                    <Link
                                        to={`/?component=${component}`}
                                        css={css([
                                            asideStyle.linkText,
                                            {
                                                ...(component === selected && asideStyle.selected)
                                            }
                                        ])}
                                    >
                                        {component}
                                    </Link>
                                    <Link
                                        title="가이드 보러가기"
                                        to={`/guide/${component.toLowerCase()}`}
                                        css={asideStyle.icon}
                                    >
                                        <BookOpenIcon width={20} height={20} color={palette.neutral.black} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div css={asideStyle.menuListContainer}>
                        <Typography
                            component="h2"
                            fontSize={24}
                            fontWeight="900"
                            align="center"
                            backgroundColor={palette.neutral.white}
                            customCSS={asideStyle.demoHeading}
                        >
                            데모
                        </Typography>
                        <ul css={asideStyle.menuList}>
                            {DEMO_LIST.map((demo) => (
                                <li key={demo} css={asideStyle.menuListItem}>
                                    <Link to={`/demo/${demo}`} css={asideStyle.linkText}>
                                        {demo}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </aside>
        </Backdrop>
    );
}