import { useState } from 'react';

import Chip from '@components/Button/Chip';
import { VariantType } from '@components/Button/styles';
import TextField from '@components/Form/TextField';

import { CheckboxControl, customStyles, RadioControls } from '../Common';
import { BUTTON_VARIANT } from './constants';

export default function ChipExample() {
  const [buttonText, setButtonText] = useState('버튼');
  const [variantType, setVariantType] = useState(BUTTON_VARIANT[0]);
  const [isTrue, setIsTrue] = useState(false);

  return (
    <div className={customStyles.playgroundContainer}>
      <div className={customStyles.playgroundControlContainer}>
        <TextField
          isFullWidth
          helperText="최대 20자까지 입력할 수 있습니다."
          labelText="Button Text"
          maxLength={20}
          name="buttonText"
          value={buttonText}
          onChange={(e) => setButtonText(e.currentTarget.value)}
        />
        <RadioControls name="chip variant" options={BUTTON_VARIANT} value={variantType} onChange={setVariantType} />
        <CheckboxControl checked={isTrue} label="Deletable" name="Deletable" onChange={setIsTrue} />
      </div>
      <div className={customStyles.playgroundDisplayContainer}>
        <Chip
          isDeletable={isTrue}
          label={buttonText || '값을 입력해주세요'}
          value={buttonText}
          variant={variantType as VariantType}
        />
      </div>
    </div>
  );
}
