import { useState } from 'react';

import { AddFilled, DeleteFilled } from '@fluentui/react-icons';

import Button from '@components/Button/Button';
import { ShapeType, SizeType, VariantType } from '@components/Button/styles';
import TextField from '@components/Form/TextField';

import { BUTTON_ICON, BUTTON_SHAPE, BUTTON_SIZE, BUTTON_VARIANT } from './constants';
import { CheckboxControl, customStyles, RadioControls } from '../Common';

export default function ButtonExample() {
    const [buttonText, setButtonText] = useState('버튼');
    const [variantType, setVariantType] = useState(BUTTON_VARIANT[0]);
    const [sizeType, setSizeType] = useState(BUTTON_SIZE[0]);
    const [shapeType, setShapeType] = useState(BUTTON_SHAPE[0]);
    const [icon, setIcon] = useState('startIcon');
    const [isTrue, setIsTrue] = useState(false);

    return (
        <div className={customStyles.playgroundContainer}>
            <div className={customStyles.playgroundControlContainer}>
                <TextField
                    labelText="Type Button Text"
                    helperText="최대 20자까지 입력할 수 있습니다."
                    name="buttonText"
                    isFullWidth
                    value={buttonText}
                    maxLength={20}
                    onChange={(e) => setButtonText(e.currentTarget.value)}
                />
                <RadioControls
                    name="button variant"
                    value={variantType}
                    onChange={setVariantType}
                    options={BUTTON_VARIANT}
                />
                <RadioControls name="button size" value={sizeType} onChange={setSizeType} options={BUTTON_SIZE} />
                <RadioControls name="button shape" value={shapeType} onChange={setShapeType} options={BUTTON_SHAPE} />
                <RadioControls name="button icon" value={icon} onChange={setIcon} options={BUTTON_ICON} />
                <CheckboxControl label="Full Width" name="button width" checked={isTrue} onChange={setIsTrue} />
            </div>
            <div className={customStyles.playgroundDisplayContainer}>
                <Button
                    isFullWidth={isTrue}
                    size={sizeType as SizeType}
                    shape={shapeType as ShapeType}
                    variant={variantType as VariantType}
                    startIcon={icon === 'startIcon' && <DeleteFilled />}
                    endIcon={icon === 'endIcon' && <AddFilled />}
                >
                    {buttonText || '값을 입력해 주세요'}
                </Button>
            </div>
        </div>
    );
}
