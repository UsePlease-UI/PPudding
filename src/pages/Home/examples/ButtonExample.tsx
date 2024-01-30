/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { StarIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

import FlexBox from 'components/Base/FlexBox';
import Typography from 'components/Base/Typography';
import Button from 'components/Button/Button';
import { ShapeType, SizeType, VariantType } from 'components/Button/styles';
import useMobile from 'hooks/useMobile';

const SIZE = ['small', 'medium', 'large'];
const VARIANT = ['outlined', 'contained', 'text'];
const SHAPE = ['square', 'rounded', 'circular'];
const SHAPE_ICON = ['square', 'rounded'];

export default function ButtonExample() {
    const isMobile = useMobile();

    return (
        <FlexBox flexDirection="column" gap={10} customCSS={{ margin: '20px 0' }}>
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
        </FlexBox>
    );
}
