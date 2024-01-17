import { useState } from 'react';

import FlexBox from 'components/Base/FlexBox';
import Select from 'components/Combobox/Select';

import { OPTIONS } from './constants';

export default function SelectExample() {
    const [milk, setMilk] = useState('');

    return (
        <FlexBox customCSS={{ margin: '20px 0' }}>
            <Select
                id="milk"
                aria-labelledby="milk"
                labelText="우유"
                helperText="우유 종류를 선택해주세요"
                name="milk"
                value={milk}
                label={OPTIONS.filter((val) => val.value === milk)?.[0]?.label}
                options={OPTIONS}
                onChange={(e) => setMilk(e.currentTarget.value)}
            />
        </FlexBox>
    );
}
