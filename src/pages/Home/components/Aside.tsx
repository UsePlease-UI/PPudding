/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';

import FlexBox from 'components/Base/FlexBox';
import IconButton from 'components/Button/IconButton';

import Block from './Block';
import BlockWrapper from './BlockWrapper';
import { COMPONENT_LIST } from './constants';

import { css } from '@emotion/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import palette from 'styles/palette';

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

const Aside = ({ show, selected, onClick, onClose }: AsideType) => {
    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.removeProperty('overflow');
        }
    }, [show]);

    return (
        <aside
            css={css([
                asideStyle,
                {
                    width: show ? 240 : 0,
                    transition: 'width 0.5s ease-in-out',
                    '& > div': {
                        pointerEvents: show ? 'auto' : 'none',
                        opacity: show ? 1 : 0,
                        transition: 'opacity 0.45s ease-in-out'
                    },
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
                    '@media (min-width: 1025px)': {
                        display: 'none'
                    }
                }}
            >
                <IconButton
                    aria-label="close"
                    customCSS={{
                        width: 30,
                        height: 30,
                        '& > svg': {
                            color: '#ffffff',
                            width: 30,
                            height: 30
                        }
                    }}
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
};

export default Aside;
