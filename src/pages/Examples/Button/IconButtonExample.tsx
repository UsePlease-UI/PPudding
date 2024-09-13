import { useState } from 'react';

import { CheckmarkFilled } from '@fluentui/react-icons';

import IconButton from '@components/Button/IconButton';
import { ShapeType, SizeType, VariantType } from '@components/Button/styles';

import { BUTTON_SHAPE, BUTTON_SIZE, BUTTON_VARIANT } from './constants';
import { customStyles, RadioControls } from '../Common';

export default function IconButtonExample() {
    const [variantType, setVariantType] = useState(BUTTON_VARIANT[0]);
    const [sizeType, setSizeType] = useState(BUTTON_SIZE[0]);
    const [shapeType, setShapeType] = useState(BUTTON_SHAPE[0]);

    return (
        <div className={customStyles.playgroundContainer}>
            <div className={customStyles.playgroundControlContainer}>
                <RadioControls
                    name="icon button variant"
                    options={BUTTON_VARIANT}
                    value={variantType}
                    onChange={setVariantType}
                />
                <RadioControls name="icon button size" options={BUTTON_SIZE} value={sizeType} onChange={setSizeType} />
                <RadioControls
                    name="icon button shape"
                    options={BUTTON_SHAPE}
                    value={shapeType}
                    onChange={setShapeType}
                />
            </div>
            <div className={customStyles.playgroundDisplayContainer}>
                <IconButton
                    shape={shapeType as ShapeType}
                    size={sizeType as SizeType}
                    variant={variantType as VariantType}
                >
                    <CheckmarkFilled />
                </IconButton>
            </div>
        </div>
    );
}
