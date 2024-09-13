import { useState } from 'react';

import { AddFilled, DeleteFilled } from '@fluentui/react-icons';

import Button from '@components/Button/Button';
import { ShapeType, SizeType, VariantType } from '@components/Button/styles';
import TextField from '@components/Form/TextField';

import { CheckboxControl, customStyles, RadioControls } from '../Common';
import { BUTTON_ICON, BUTTON_SHAPE, BUTTON_SIZE, BUTTON_VARIANT } from './constants';

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
          isFullWidth
          helperText="최대 20자까지 입력할 수 있습니다."
          labelText="Type Button Text"
          maxLength={20}
          name="buttonText"
          value={buttonText}
          onChange={(e) => setButtonText(e.currentTarget.value)}
        />
        <RadioControls name="button variant" options={BUTTON_VARIANT} value={variantType} onChange={setVariantType} />
        <RadioControls name="button size" options={BUTTON_SIZE} value={sizeType} onChange={setSizeType} />
        <RadioControls name="button shape" options={BUTTON_SHAPE} value={shapeType} onChange={setShapeType} />
        <RadioControls name="button icon" options={BUTTON_ICON} value={icon} onChange={setIcon} />
        <CheckboxControl checked={isTrue} label="Full Width" name="button width" onChange={setIsTrue} />
      </div>
      <div className={customStyles.playgroundDisplayContainer}>
        <Button
          endIcon={icon === 'endIcon' && <AddFilled />}
          isFullWidth={isTrue}
          shape={shapeType as ShapeType}
          size={sizeType as SizeType}
          startIcon={icon === 'startIcon' && <DeleteFilled />}
          variant={variantType as VariantType}
        >
          {buttonText || '값을 입력해 주세요'}
        </Button>
      </div>
    </div>
  );
}
