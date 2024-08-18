import { useState } from 'react';

import Select from '@components/Combobox/Select';

import { SELECT_OPTIONS } from './constants';

export default function SelectExample() {
    const [value, setValue] = useState('');

    return (
        <Select
            id="milk"
            aria-labelledby="milk"
            labelText="우유"
            helperText="우유 종류를 선택해주세요"
            name="milk"
            value={value}
            label={SELECT_OPTIONS.filter((val) => val.value === value)?.[0]?.label}
            options={SELECT_OPTIONS}
            onChange={(e) => setValue(e.currentTarget.value)}
        />
    );
}
