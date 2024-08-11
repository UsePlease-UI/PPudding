import { useState, useCallback, ChangeEvent } from 'react';

import _ from 'lodash';

import { Autocomplete } from '@components/Combobox';
import { CommonListDataType } from '@components/types';

import { K_AUTOCOMPLETE_LIST } from './constants';

export default function KAutocompleteExample() {
    const [listArr, setListArr] = useState(K_AUTOCOMPLETE_LIST);
    const [inputValue, setInputValue] = useState('');
    const [selectedItem, setSelectedItem] = useState<CommonListDataType>();

    const handleSearch = useCallback(
        _.debounce((value: string) => {
            if (value.length !== 0 && value !== '') {
                const newArr = K_AUTOCOMPLETE_LIST.filter((el) => el.label.includes(value as string));
                setListArr(newArr);
            } else {
                setListArr(K_AUTOCOMPLETE_LIST);
            }
        }, 100),
        []
    );

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        setInputValue(value);
        handleSearch(value);
    };

    return (
        <div className="my-5 flex w-full flex-col items-start justify-center">
            <p className="mb-5 w-full text-16 font-medium">
                선택된 항목 :&nbsp;
                <strong className="block w-full truncate">{selectedItem?.label}</strong>
            </p>
            <Autocomplete
                label="Autocomplete Example"
                listArr={listArr}
                inputValue={inputValue}
                onChange={handleChange}
                onSelect={(e) => setSelectedItem(e as CommonListDataType)}
            />
        </div>
    );
}
