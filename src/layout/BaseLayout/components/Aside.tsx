/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { css } from '@emotion/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import FlexBox from 'components/Base/FlexBox';
import Button from 'components/Button/Button';
import IconButton from 'components/Button/IconButton';

import { COMPONENT_LIST } from './constants';
import { asideStyle } from './styles';

type AsideType = {
    isVisible: boolean;
    onClose: () => void;
};

const Aside = ({ isVisible, onClose }: AsideType) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [selected, setSelected] = useState(COMPONENT_LIST[0]);

    useEffect(() => {
        if (searchParams) {
            setSelected(searchParams.get('component') || COMPONENT_LIST[0]);
        }
    }, [searchParams]);

    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.removeProperty('overflow');
        }
    }, [isVisible]);

    return (
        <aside
            css={css([
                asideStyle.aside,
                {
                    ...(isVisible && asideStyle.isVisible)
                }
            ])}
        >
            <FlexBox justifyContent="flex-end" customCSS={asideStyle.closeIconContainer}>
                <IconButton aria-label="close" size="medium" customCSS={asideStyle.iconButton} onClick={onClose}>
                    <XMarkIcon />
                </IconButton>
            </FlexBox>
            <FlexBox flexDirection="column" gap={4} customCSS={asideStyle.listContainer}>
                {COMPONENT_LIST.map((component: string) => (
                    <Button
                        key={component}
                        type="button"
                        value={component}
                        customCSS={{
                            ...asideStyle.listButton,
                            ...(selected === component && asideStyle.isSelected)
                        }}
                        onClick={(e) => {
                            onClose();
                            setSelected(e.currentTarget.value);
                            setSearchParams({ component: e.currentTarget.value });
                        }}
                    >
                        {component}
                    </Button>
                ))}
            </FlexBox>
        </aside>
    );
};

export default Aside;
