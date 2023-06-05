import React from 'react';

import FlexBox from 'components/atoms/FlexBox';
import ComboBox from 'components/molecules/ComboBox';
import { COMBOBOX } from 'constants/autocomplete';

import { ChevronDownIcon } from 'assets/icons';

export default function ComboBoxExample() {
    return (
        <FlexBox direction="column" gap={10}>
            <h2>ComboBox</h2>
            <ComboBox icon={<ChevronDownIcon />} list={COMBOBOX} />
        </FlexBox>
    );
}
