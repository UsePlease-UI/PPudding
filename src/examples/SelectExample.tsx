import { useState } from 'react';

import FlexBox from '@atoms/FlexBox';
import FormControl from '@molecules/FormControl';
import Select from '@molecules/Select';

import OPTIONS from '@constants/options';

export default function SelectExample() {
    const [milk, setMilk] = useState('');

    return (
        <FlexBox direction="column" gap={10}>
            <h2>Select</h2>
            <FormControl id="milk" label="우유" helperText="우유 종류를 선택해주세요" helperTextId="milk-helper-text">
                <Select
                    id="milk"
                    aria-labelledby="milk"
                    name="milk"
                    value={milk}
                    label={OPTIONS.filter((val) => val.value === milk)?.[0]?.label}
                    options={OPTIONS}
                    onChange={(e) => setMilk(e.currentTarget.value)}
                />
            </FormControl>
        </FlexBox>
    );
}
