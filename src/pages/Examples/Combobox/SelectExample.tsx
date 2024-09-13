import { useState } from 'react';

import Select from '@components/Combobox/Select';

import { SELECT_OPTIONS } from './constants';

export default function SelectExample() {
  const [value, setValue] = useState('');

  return (
    <Select
      aria-labelledby="milk"
      helperText="우유 종류를 선택해주세요"
      id="milk"
      label={SELECT_OPTIONS.filter((val) => val.value === value)?.[0]?.label}
      labelText="우유"
      name="milk"
      options={SELECT_OPTIONS}
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
    />
  );
}
