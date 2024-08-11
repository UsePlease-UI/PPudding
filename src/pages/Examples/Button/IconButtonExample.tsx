import { useState } from 'react';

import { CheckmarkFilled } from '@fluentui/react-icons';

import { IconButton, ShapeType, SizeType, VariantType } from '@components/Button';

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
                    options={BUTTON_VARIANT}
                    name="icon button variant"
                    value={variantType}
                    onChange={setVariantType}
                />
                <RadioControls name="icon button size" value={sizeType} onChange={setSizeType} options={BUTTON_SIZE} />
                <RadioControls
                    name="icon button shape"
                    value={shapeType}
                    onChange={setShapeType}
                    options={BUTTON_SHAPE}
                />
            </div>
            <div className={customStyles.playgroundDisplayContainer}>
                <IconButton
                    size={sizeType as SizeType}
                    shape={shapeType as ShapeType}
                    variant={variantType as VariantType}
                >
                    <CheckmarkFilled />
                </IconButton>
            </div>
        </div>
    );
}
