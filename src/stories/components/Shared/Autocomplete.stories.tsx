import { useState, useCallback } from 'react';

import _ from 'lodash';

import Autocomplete from '@components/Shared/Autocomplete';
import { CommonListDataType } from '@components/types';

import { AUTOCOMPLETE } from '../constants';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Shared/Autocomplete',
    component: Autocomplete,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {}
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof Autocomplete>;

const DefaultAutocomplete: Story = {
    render: () => {
        const [dataList, setDataList] = useState<CommonListDataType[]>(AUTOCOMPLETE);
        const [inputValue, setInputValue] = useState<string>('');
        const [selectedItem, setSelectedItem] = useState<CommonListDataType>();

        const handleSearch = useCallback(
            _.debounce((value: string) => {
                if (value.length !== 0 && value !== '') {
                    const newArr = AUTOCOMPLETE.filter((el) => el.label.includes(value as string));
                    setDataList(newArr);
                } else {
                    setDataList(AUTOCOMPLETE);
                }
            }, 100),
            []
        );

        const handleChange = useCallback(
            (newValue: string | number) => {
                setInputValue(String(newValue));
                handleSearch(String(newValue));
            },
            [handleSearch]
        );

        const handleSelect = useCallback((e?: CommonListDataType) => setSelectedItem(e as CommonListDataType), []);

        return (
            <>
                <div className="w-full">
                    선택된 항목 :<strong className="ml-1 w-full truncate">{selectedItem?.label}</strong>
                </div>
                <div className="max-w-80">
                    <Autocomplete
                        labelText="Lorem Ipsum"
                        name="lorem ipsum"
                        options={dataList}
                        inputValue={inputValue}
                        onChange={handleChange}
                        onSelect={handleSelect}
                    />
                </div>
            </>
        );
    }
};

export const Default: Story = {
    ...DefaultAutocomplete,
    args: {}
};
