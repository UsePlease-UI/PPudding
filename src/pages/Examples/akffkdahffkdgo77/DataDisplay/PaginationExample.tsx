import { useState } from 'react';

import { Box, FlexBox, Typography } from '@components/Base';
import { ShapeType, SizeType, VariantType } from '@components/Button';
import { Radio, RadioGroup } from '@components/Form';
import Pagination from '@components/Shared/Pagination';

import useMobile from '@hooks/useMobile';

import { customStyles } from '../../styles';

const SIZE = ['small', 'medium', 'large'];
const VARIANT = ['outlined', 'contained', 'text'];
const SHAPE = ['square', 'rounded', 'circular'];

const PaginationExample = () => {
    const { isTablet } = useMobile();

    const [sizeType, setSizeType] = useState(SIZE[0]);
    const [shapeType, setShapeType] = useState(SHAPE[0]);
    const [variantType, setVariantType] = useState(VARIANT[0]);

    return (
        <FlexBox
            width="w-full"
            flexDirection={isTablet ? 'flex-col-reverse' : 'flex-row'}
            gap="gap-20"
            padding="p-20"
            border="border"
            borderColor="border-primary-100"
            borderRadius="rounded"
        >
            <FlexBox
                flex="flex-1"
                flexDirection="flex-col"
                gap={isTablet ? 'gap-5' : 'gap-10'}
                justifyContent="justify-start"
                padding="p-20"
                border="border"
                borderColor="border-primary-600"
                borderRadius="rounded"
            >
                <Typography component="strong" fontSize={isTablet ? 'text-14' : 'text-16'}>
                    Choose Button{' '}
                    <Typography component="strong" color="text-primary-600">
                        Variant
                    </Typography>
                </Typography>
                <RadioGroup
                    value={variantType}
                    isRow={!isTablet}
                    gap={isTablet ? 'gap-0' : 'gap-10'}
                    onChange={(e) => setVariantType(e.currentTarget.value)}
                >
                    {VARIANT.map((val) => (
                        <Radio
                            key={val}
                            size={isTablet ? 'small' : 'medium'}
                            label={val}
                            name="buttonVariant"
                            value={val}
                        />
                    ))}
                </RadioGroup>
                <Typography component="strong" fontSize={isTablet ? 'text-14' : 'text-16'}>
                    Choose Button{' '}
                    <Typography component="strong" color="text-primary-600">
                        Size
                    </Typography>
                </Typography>
                <RadioGroup
                    value={sizeType}
                    isRow={!isTablet}
                    gap={isTablet ? 'gap-0' : 'gap-10'}
                    onChange={(e) => setSizeType(e.currentTarget.value)}
                >
                    {SIZE.map((val) => (
                        <Radio
                            key={val}
                            size={isTablet ? 'small' : 'medium'}
                            label={val}
                            name="buttonSize"
                            value={val}
                        />
                    ))}
                </RadioGroup>
                <Typography component="strong" fontSize={isTablet ? 'text-14' : 'text-16'}>
                    Choose Button{' '}
                    <Typography component="strong" color="text-primary-600">
                        Shape
                    </Typography>
                </Typography>
                <RadioGroup
                    value={shapeType}
                    isRow={!isTablet}
                    gap={isTablet ? 'gap-0' : 'gap-10'}
                    onChange={(e) => setShapeType(e.currentTarget.value)}
                >
                    {SHAPE.map((val) => (
                        <Radio
                            key={val}
                            size={isTablet ? 'small' : 'medium'}
                            label={val}
                            name="buttonShape"
                            value={val}
                        />
                    ))}
                </RadioGroup>
            </FlexBox>
            <div className={customStyles.tabComponentContainer}>
                <Box width="w-max">
                    <Pagination
                        variant={variantType as VariantType}
                        size={sizeType as SizeType}
                        shape={shapeType as ShapeType}
                        totalCount={280}
                        pageRange={isTablet ? 1 : 3}
                    />
                </Box>
            </div>
        </FlexBox>
    );
};

export default PaginationExample;
