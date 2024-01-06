/** @jsxImportSource @emotion/react */
import FlexBox from 'components/Base/FlexBox';
import Typography from 'components/Base/Typography';
import Button from 'components/Button/Button';
import useMobile from 'hooks/useMobile';

import { css } from '@emotion/react';
import { StarIcon } from '@heroicons/react/24/outline';

const SIZE = ['small', 'medium', 'large'] as const;
type SizeType = 'small' | 'medium' | 'large';

const VARIANT = ['outlined', 'contained', 'text'];
type VariantType = 'outlined' | 'contained' | 'text';

export default function ButtonExample() {
    const isMobile = useMobile();
    return (
        <FlexBox direction="column" gap={10} customCSS={{ margin: '20px 0' }}>
            {VARIANT.map((variant) => (
                <FlexBox key={variant} direction="column" alignItems="flex-start" justifyContent="center" gap={10}>
                    <Typography component="h3" css={css({ textTransform: 'capitalize' })}>
                        {variant}
                    </Typography>
                    <FlexBox gap={5} alignItems="center" customCSS={{ width: '100%', flexWrap: 'wrap' }}>
                        {SIZE.map((size) => (
                            <Button key={size} size={size as SizeType} variant={variant as VariantType}>
                                버튼
                            </Button>
                        ))}
                    </FlexBox>
                    <FlexBox
                        gap={5}
                        alignItems={isMobile ? 'flex-start' : 'center'}
                        direction={isMobile ? 'column' : 'row'}
                        customCSS={{ width: '100%', flexWrap: 'wrap' }}
                    >
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
                    <FlexBox
                        gap={5}
                        alignItems={isMobile ? 'flex-start' : 'center'}
                        direction={isMobile ? 'column' : 'row'}
                        customCSS={{ width: '100%', flexWrap: 'wrap' }}
                    >
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
