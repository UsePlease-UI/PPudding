import { ChangeEvent, useCallback, useMemo, useState } from 'react';

import debounce from 'lodash.debounce';

import Autocomplete from '@components/Combobox/Autocomplete';
import { CommonListDataType } from '@components/types';

import { AUTOCOMPLETE } from '../constants';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Combobox/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof Autocomplete>;

export const AutoCompleteTemplate: Story = {
  render: function Render(args) {
    const list = AUTOCOMPLETE;

    const [selectedItem, setSelectedItem] = useState<CommonListDataType>();
    const [inputValue, setInputValue] = useState<string>('');
    const [listArr, setListArr] = useState<CommonListDataType[]>(list);

    const debouncedSearch = useMemo(
      () =>
        debounce((value: string) => {
          let newArr = [];
          if (value.length !== 0 || value !== '') {
            newArr = list.filter((el: CommonListDataType) => el.label.includes(value));
            setListArr(newArr);
          }

          if (value.length === 0) {
            setListArr(list);
          }
        }, 100),
      [list],
    );

    const handleSearch = useCallback((value: string) => debouncedSearch(value), [debouncedSearch]);

    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setInputValue(value);
        handleSearch(value);
      },
      [handleSearch],
    );

    const handleSelect = useCallback((item: CommonListDataType) => setSelectedItem(item), []);

    return (
      <div className="flex flex-col gap-2.5">
        <p className="text-16 font-medium">
          선택된 항목 :<strong className="block w-full truncate">{selectedItem?.label}</strong>
        </p>
        <Autocomplete
          {...args}
          inputValue={inputValue}
          label="Autocomplete example"
          listArr={listArr}
          onChange={handleChange}
          onSelect={handleSelect}
        />
      </div>
    );
  },
};
