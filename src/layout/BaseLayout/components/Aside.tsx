/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';

import { css } from '@emotion/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import palette from 'styles/palette';

import FlexBox from 'components/Base/FlexBox';
import Button from 'components/Button/Button';
import IconButton from 'components/Button/IconButton';
import useMobile from 'hooks/useMobile';

const COMPONENT_LIST = [
    'Accordion',
    'AutoComplete',
    'Button',
    'Checkbox',
    'Chip',
    'DragNDrop',
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

const asideStyle = css({
    position: 'fixed',
    top: 80,
    left: 0,
    borderRight: `1px dashed ${palette.neutral.white}`,
    backgroundColor: palette.primary[600],
    display: 'flex',
    alignItems: 'flex-start',
    '@media (max-width: 768px)': {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        zIndex: 11,
        backgroundColor: 'rgba(0,0,0,0.8)',
        flexDirection: 'column',
        overflowY: 'auto'
    }
});

type AsideType = {
    show: boolean;
    selected: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onClose: () => void;
};

const Aside = ({ show, selected, onClick, onClose }: AsideType) => {
    const isMobile = useMobile();

    useEffect(() => {
        if (isMobile && show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.removeProperty('overflow');
        }
    }, [isMobile, show]);

    return (
        <aside
            css={css([
                asideStyle,
                {
                    width: show ? 240 : 0,
                    transition: 'width 0.5s ease-in-out',
                    '& > div': {
                        padding: 20,
                        pointerEvents: show ? 'auto' : 'none',
                        opacity: show ? 1 : 0,
                        transition: 'opacity 0.45s ease-in-out',
                        ...(!isMobile && {
                            maxHeight: 'calc(100vh - 80px)',
                            overflowY: 'auto'
                        })
                    },
                    '@media (max-width: 768px)': {
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
                    '@media (min-width: 769px)': {
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
                            color: palette.neutral.white,
                            width: 30,
                            height: 30
                        }
                    }}
                    onClick={onClose}
                >
                    <XMarkIcon />
                </IconButton>
            </FlexBox>
            <FlexBox flexDirection="column" gap={4} customCSS={{ width: '100%', padding: 10 }}>
                {COMPONENT_LIST.map((el: string) => (
                    <Button
                        key={el}
                        type="button"
                        value={el}
                        customCSS={{
                            flex: 'none',
                            height: 40,
                            textTransform: 'uppercase',
                            fontWeight: 600,
                            borderRadius: 4,
                            border: `1px dashed ${palette.neutral.white}`,
                            color: selected === el ? palette.secondary[600] : palette.neutral.white,
                            background: selected === el ? palette.tertiary[400] : palette.secondary[600],
                            '&:hover': {
                                opacity: 0.6
                            }
                        }}
                        onClick={onClick}
                    >
                        {el}
                    </Button>
                ))}
            </FlexBox>
        </aside>
    );
};

export default Aside;
