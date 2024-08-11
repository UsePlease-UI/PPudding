import { useState } from 'react';

import { ShapeType, SizeType, VariantType } from '@components/Button';
import { Radio, RadioGroup } from '@components/Form';
import Pagination from '@components/Shared/Pagination';

import useMobile from '@hooks/useMobile';

import { PAGINATION_SHAPE, PAGINATION_SIZE, PAGINATION_VARIANT } from './constants';
import { customStyles } from '../Common';

const PaginationExample = () => {
    const { isTablet } = useMobile();

    const [variantType, setVariantType] = useState(PAGINATION_VARIANT[0]);
    const [sizeType, setSizeType] = useState(PAGINATION_SIZE[0]);
    const [shapeType, setShapeType] = useState(PAGINATION_SHAPE[0]);

    return (
        <div className={customStyles.playgroundContainer}>
            <div className={customStyles.playgroundControlContainer}>
                <strong className="text-14 tablet:text-16">
                    Choose Button <span className="text-primary-800">Variant</span>
                </strong>
                <RadioGroup
                    value={variantType}
                    isRow={!isTablet}
                    gap={isTablet ? 0 : 2.5}
                    onChange={(e) => setVariantType(e.currentTarget.value)}
                >
                    {PAGINATION_VARIANT.map((val) => (
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
                    Choose Button <span className="text-primary-800">Size</span>
                </strong>
                <RadioGroup
                    value={sizeType}
                    isRow={!isTablet}
                    gap={isTablet ? 0 : 2.5}
                    onChange={(e) => setSizeType(e.currentTarget.value)}
                >
                    {PAGINATION_SIZE.map((val) => (
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
                    Choose Button <span className="text-primary-800">Shape</span>
                </strong>
                <RadioGroup
                    value={shapeType}
                    isRow={!isTablet}
                    gap={isTablet ? 0 : 2.5}
                    onChange={(e) => setShapeType(e.currentTarget.value)}
                >
                    {PAGINATION_SHAPE.map((val) => (
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
