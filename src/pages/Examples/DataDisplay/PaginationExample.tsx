import { useState } from 'react';

import { ShapeType, SizeType, VariantType } from '@components/Button/styles';
import { Radio, RadioGroup } from '@components/Form/Radio';
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
                    gap={isTablet ? 0 : 2.5}
                    isRow={!isTablet}
                    value={variantType}
                    onChange={(e) => setVariantType(e.currentTarget.value)}
                >
                    {PAGINATION_VARIANT.map((val) => (
                        <Radio
                            key={val}
                            label={val}
                            name="buttonVariant"
                            size={isTablet ? 'small' : 'medium'}
                            value={val}
                        />
                    ))}
                </RadioGroup>
                <strong className="text-14 tablet:text-16">
                    Choose Button <span className="text-primary-800">Size</span>
                </strong>
                <RadioGroup
                    gap={isTablet ? 0 : 2.5}
                    isRow={!isTablet}
                    value={sizeType}
                    onChange={(e) => setSizeType(e.currentTarget.value)}
                >
                    {PAGINATION_SIZE.map((val) => (
                        <Radio
                            key={val}
                            label={val}
                            name="buttonSize"
                            size={isTablet ? 'small' : 'medium'}
                            value={val}
                        />
                    ))}
                </RadioGroup>
                <strong className="text-14 tablet:text-16">
                    Choose Button <span className="text-primary-800">Shape</span>
                </strong>
                <RadioGroup
                    gap={isTablet ? 0 : 2.5}
                    isRow={!isTablet}
                    value={shapeType}
                    onChange={(e) => setShapeType(e.currentTarget.value)}
                >
                    {PAGINATION_SHAPE.map((val) => (
                        <Radio
                            key={val}
                            label={val}
                            name="buttonShape"
                            size={isTablet ? 'small' : 'medium'}
                            value={val}
                        />
                    ))}
                </RadioGroup>
            </div>
            <div className={customStyles.tabComponentContainer}>
                <div className="w-max">
                    <Pagination
                        pageRange={isTablet ? 1 : 3}
                        shape={shapeType as ShapeType}
                        size={sizeType as SizeType}
                        totalCount={280}
                        variant={variantType as VariantType}
                    />
                </div>
            </div>
        </div>
    );
};

export default PaginationExample;
