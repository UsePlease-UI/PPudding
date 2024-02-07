/** @jsxImportSource @emotion/react */
import { useState } from 'react';

import { css } from '@emotion/react';
import { StarIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

import { FlexBox, Typography, Divider } from 'components/Base';
import Button from 'components/Button/Button';
import Chip from 'components/Button/Chip';
import IconButton from 'components/Button/IconButton';
import { IconButtonSizeType, ShapeType, SizeType, VariantType } from 'components/Button/styles';
import { ToggleButton, ToggleButtonGroup } from 'components/Button/ToggleButton';
import useMobile from 'hooks/useMobile';

const SIZE = ['small', 'medium', 'large'];
const VARIANT = ['outlined', 'contained', 'text'];
const SHAPE = ['square', 'rounded', 'circular'];
const SHAPE_ICON = ['square', 'rounded'];

export default function ButtonExample() {
    const isMobile = useMobile();

    const handleDelete = (value: string | number) => {
        // eslint-disable-next-line no-console
        console.log(value);
    };

    const [fruits, setFruits] = useState('banana');

    return (
        <FlexBox flexDirection="column" gap={10}>
            <Typography component="h2" fontSize={24}>
                Button
            </Typography>
            {VARIANT.map((variant) => (
                <FlexBox key={variant} flexDirection="column" alignItems="flex-start" justifyContent="center" gap={10}>
                    <Typography component="h3" css={css({ textTransform: 'capitalize' })}>
                        {variant}
                    </Typography>
                    <FlexBox gap={20} alignItems="center" customCSS={{ width: '100%', flexWrap: 'wrap' }}>
                        {SIZE.map((size) => (
                            <FlexBox key={size} gap={5}>
                                {SHAPE.map((shape) => (
                                    <Button
                                        key={shape}
                                        size={size as SizeType}
                                        shape={shape as ShapeType}
                                        variant={variant as VariantType}
                                    >
                                        버튼
                                    </Button>
                                ))}
                            </FlexBox>
                        ))}
                    </FlexBox>
                    <FlexBox
                        gap={20}
                        alignItems={isMobile ? 'flex-start' : 'center'}
                        flexDirection={isMobile ? 'column' : 'row'}
                        customCSS={{ width: '100%', flexWrap: 'wrap' }}
                    >
                        {SIZE.map((size) => (
                            <FlexBox key={size} gap={5}>
                                {SHAPE_ICON.map((shape) => (
                                    <Button
                                        key={shape}
                                        shape={shape as ShapeType}
                                        size={size as SizeType}
                                        variant={variant as VariantType}
                                        hasStartIcon
                                        icon={<StarIcon />}
                                    >
                                        Stars
                                    </Button>
                                ))}
                            </FlexBox>
                        ))}
                    </FlexBox>
                    <FlexBox
                        gap={20}
                        alignItems={isMobile ? 'flex-start' : 'center'}
                        flexDirection={isMobile ? 'column' : 'row'}
                        customCSS={{ width: '100%', flexWrap: 'wrap' }}
                    >
                        {SIZE.map((size) => (
                            <FlexBox key={size} gap={5}>
                                {SHAPE_ICON.map((shape) => (
                                    <Button
                                        key={shape}
                                        shape={shape as ShapeType}
                                        size={size as SizeType}
                                        variant={variant as VariantType}
                                        hasEndIcon
                                        icon={<ChevronDownIcon />}
                                    >
                                        더보기
                                    </Button>
                                ))}
                            </FlexBox>
                        ))}
                    </FlexBox>
                </FlexBox>
            ))}
            <Divider borderStyle="dashed" />
            <Typography component="h2" fontSize={24}>
                Chip
            </Typography>
            <FlexBox gap={10}>
                <Chip label="아이스크림" value="ice cream" isDeletable={false} />
                <Chip label="삭제 가능" value="deletable" isDeletable onDelete={handleDelete} />
            </FlexBox>
            <Divider borderStyle="dashed" />
            <Typography component="h2" fontSize={24}>
                Icon Button
            </Typography>
            {VARIANT.map((variant) => (
                <FlexBox key={variant} gap={20} flexDirection="column">
                    <Typography component="h3" css={css({ textTransform: 'capitalize' })}>
                        {variant}
                    </Typography>
                    <FlexBox gap={20} flexWrap="wrap">
                        {['mini', ...SIZE].map((size) => (
                            <FlexBox key={size} gap={5}>
                                {SHAPE.map((shape) => (
                                    <IconButton
                                        key={shape}
                                        shape={shape as ShapeType}
                                        size={size as IconButtonSizeType}
                                        variant={variant as VariantType}
                                    >
                                        <ChevronDownIcon />
                                    </IconButton>
                                ))}
                            </FlexBox>
                        ))}
                    </FlexBox>
                </FlexBox>
            ))}
            <Divider borderStyle="dashed" />
            <Typography component="h2" fontSize={24}>
                Toggle Button
            </Typography>
            <FlexBox gap={20} flexWrap="wrap">
                {['mini', 'small', 'medium', 'large'].map((size) => (
                    <ToggleButtonGroup key={size} value={fruits} onChange={(e) => setFruits(e.currentTarget.value)}>
                        <ToggleButton
                            size={size as SizeType}
                            name="fruits"
                            value="apple"
                            onChange={(e) => setFruits(e.currentTarget.value)}
                        >
                            Apple
                        </ToggleButton>
                        <ToggleButton
                            size={size as SizeType}
                            name="fruits"
                            value="banana"
                            onChange={(e) => setFruits(e.currentTarget.value)}
                        >
                            Banana
                        </ToggleButton>
                        <ToggleButton
                            size={size as SizeType}
                            name="fruits"
                            value="orange"
                            onChange={(e) => setFruits(e.currentTarget.value)}
                        >
                            Orange
                        </ToggleButton>
                    </ToggleButtonGroup>
                ))}
            </FlexBox>
        </FlexBox>
    );
}
