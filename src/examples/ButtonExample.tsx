/** @jsxImportSource @emotion/react */
import FlexBox from '@atoms/FlexBox';
import Typography from '@atoms/Typography';
import Button from '@molecules/Button';

import { css } from '@emotion/react';
import { StarIcon } from '@heroicons/react/24/outline';

const SIZE = ['small', 'medium', 'large'] as const;
type SizeType = 'small' | 'medium' | 'large';

const VARIANT = ['outlined', 'contained', 'text'];
type VariantType = 'outlined' | 'contained' | 'text';

export default function ButtonExample() {
    return (
        <FlexBox direction="column" gap={10} customCSS={{ margin: 20 }}>
            {VARIANT.map((variant) => (
                <FlexBox key={variant} direction="column" alignItems="flex-start" justifyContent="center" gap={10}>
                    <Typography component="h3" css={css({ textTransform: 'capitalize' })}>
                        {variant}
                    </Typography>
                    <FlexBox gap={5} customCSS={{ flexWrap: 'wrap' }}>
                        {SIZE.map((size) => (
                            <Button key={size} size={size as SizeType} variant={variant as VariantType}>
                                버튼
                            </Button>
                        ))}
                    </FlexBox>
                    <FlexBox gap={5} customCSS={{ flexWrap: 'wrap' }}>
                        {SIZE.map((size) => (
                            <Button
                                key={size}
                                size={size as SizeType}
                                variant={variant as VariantType}
                                hasStartIcon
                                icon={<StarIcon />}
                            >
                                아이콘 버튼 1
                            </Button>
                        ))}
                    </FlexBox>
                    <FlexBox gap={5} customCSS={{ flexWrap: 'wrap' }}>
                        {SIZE.map((size) => (
                            <Button
                                key={size}
                                size={size as SizeType}
                                variant={variant as VariantType}
                                hasEndIcon
                                icon={<StarIcon />}
                            >
                                아이콘 버튼 1
                            </Button>
                        ))}
                    </FlexBox>
                </FlexBox>
            ))}
        </FlexBox>
    );
}
