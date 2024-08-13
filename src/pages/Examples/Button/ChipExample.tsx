import { useState } from 'react';

import { Chip, VariantType } from '@components/Button';
import { TextField } from '@components/Form';

import { BUTTON_VARIANT } from './constants';
import { CheckboxControl, customStyles, RadioControls } from '../Common';

export default function ChipExample() {
    const [buttonText, setButtonText] = useState('버튼');
    const [variantType, setVariantType] = useState(BUTTON_VARIANT[0]);
    const [isTrue, setIsTrue] = useState(false);

    return (
        <div className={customStyles.playgroundContainer}>
            <div className={customStyles.playgroundControlContainer}>
                <TextField
                    labelText="Button Text"
                    helperText="최대 20자까지 입력할 수 있습니다."
                    name="buttonText"
                    isFullWidth
                    value={buttonText}
                    maxLength={20}
                    onChange={(e) => setButtonText(e.currentTarget.value)}
                />
                <RadioControls
                    options={BUTTON_VARIANT}
                    name="chip variant"
                    value={variantType}
                    onChange={setVariantType}
                />
                <CheckboxControl label="Deletable" name="Deletable" checked={isTrue} onChange={setIsTrue} />
            </div>
            <div className={customStyles.playgroundDisplayContainer}>
                <Chip
                    variant={variantType as VariantType}
                    label={buttonText || '값을 입력해주세요'}
                    value={buttonText}
                    isDeletable={isTrue}
                />
            </div>
        </div>
    );
}
