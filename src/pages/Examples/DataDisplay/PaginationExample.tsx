import { useState } from 'react';

import { ShapeType, SizeType, VariantType } from '@components/Button';
import { Radio, RadioGroup } from '@components/Form';
import Pagination from '@components/Shared/Pagination';

import useMobile from '@hooks/useMobile';

import { customStyles } from '../components/styles';

const SIZE = ['small', 'medium', 'large'];
const VARIANT = ['outlined', 'contained', 'text'];
const SHAPE = ['square', 'rounded', 'circular'];

const PaginationExample = () => {
    const { isTablet } = useMobile();

    const [sizeType, setSizeType] = useState(SIZE[0]);
    const [shapeType, setShapeType] = useState(SHAPE[0]);
    const [variantType, setVariantType] = useState(VARIANT[0]);

    return (
        <div className={customStyles.playgroundContainer}>
            <div className={customStyles.playgroundControlContainer}>
                <strong className="text-14 tablet:text-16">
                    Choose Button <span className="text-primary-600">Variant</span>
                </strong>
                <RadioGroup
                    value={variantType}
                    isRow={!isTablet}
                    gap={isTablet ? 0 : 10}
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
                <strong className="text-14 tablet:text-16">
                    Choose Button <span className="text-primary-600">Size</span>
                </strong>
                <RadioGroup
                    value={sizeType}
                    isRow={!isTablet}
                    gap={isTablet ? 0 : 10}
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
                <strong className="text-14 tablet:text-16">
                    Choose Button <span className="text-primary-600">Shape</span>
                </strong>
                <RadioGroup
                    value={shapeType}
                    isRow={!isTablet}
                    gap={isTablet ? 0 : 10}
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
            </div>
            <div className={customStyles.tabComponentContainer}>
                <div className="w-max">
                    <Pagination
                        variant={variantType as VariantType}
                        size={sizeType as SizeType}
                        shape={shapeType as ShapeType}
                        totalCount={280}
                        pageRange={isTablet ? 1 : 3}
                    />
                </div>
            </div>
        </div>
    );
};

export default PaginationExample;
