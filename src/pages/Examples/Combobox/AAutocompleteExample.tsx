import { useCallback, useState } from 'react';

import debounce from 'lodash.debounce';

import Autocomplete from '@components/Shared/Autocomplete';
import { CommonListDataType } from '@components/types';

import { A_AUTOCOMPLETE_LIST } from './constants';

export default function AAutocompleteExample() {
    const [dataList, setDataList] = useState<CommonListDataType[]>(A_AUTOCOMPLETE_LIST);
    const [inputValue, setInputValue] = useState<string>('');
    const [selectedItem, setSelectedItem] = useState<CommonListDataType>();

    const handleSearch = useCallback(
        debounce((value: string) => {
            if (value.length !== 0 && value !== '') {
                const newArr = A_AUTOCOMPLETE_LIST.filter((el) => el.label.includes(value as string));
                setDataList(newArr);
            } else {
                setDataList(A_AUTOCOMPLETE_LIST);
            }
        }, 100),
        []
    );

    const handleChange = useCallback((newValue: string | number) => {
        setInputValue(String(newValue));
        handleSearch(String(newValue));
    }, []);

    const handleSelect = useCallback((e?: CommonListDataType) => setSelectedItem(e as CommonListDataType), []);

    return (
        <>
            <p className="my-5 text-16 font-medium">
                선택된 항목 :&nbsp;
                <strong className="block w-full truncate">{selectedItem?.label}</strong>
            </p>
            <Autocomplete
                labelText="Lorem Ipsum"
                name="lorem ipsum"
                options={dataList}
                inputValue={inputValue}
                onChange={handleChange}
                onSelect={handleSelect}
            />
        </>
    );
}
