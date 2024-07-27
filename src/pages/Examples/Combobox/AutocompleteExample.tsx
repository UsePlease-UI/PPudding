import { useState, useCallback, ChangeEvent } from 'react';

import _ from 'lodash';
import { v4 as uuid } from 'uuid';

import { Autocomplete } from '@components/Combobox';
import { CommonListDataType } from '@components/types';

const LIST = [
    {
        idx: uuid(),
        label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        idx: uuid(),
        label: 'Sed in eros vitae erat sollicitudin sagittis sed tincidunt odio. ',
        value: 'Sed in eros vitae erat sollicitudin sagittis sed tincidunt odio. '
    },
    {
        idx: uuid(),
        label: 'Donec libero enim, placerat vitae tempus ac, luctus sed ex. Ut fringilla vestibulum molestie.',
        value: 'Donec libero enim, placerat vitae tempus ac, luctus sed ex. Ut fringilla vestibulum molestie.'
    },
    {
        idx: uuid(),
        label: 'Ut lacinia posuere imperdiet.',
        value: 'Ut lacinia posuere imperdiet.'
    },
    {
        idx: uuid(),
        label: 'Curabitur non elit quis ante vulputate iaculis.',
        value: 'Curabitur non elit quis ante vulputate iaculis.'
    }
];

export default function AutocompleteExample() {
    const [listArr, setListArr] = useState(LIST);
    const [inputValue, setInputValue] = useState('');
    const [selectedItem, setSelectedItem] = useState<CommonListDataType>();

    const handleSearch = useCallback(
        _.debounce((value: string) => {
            if (value.length !== 0 && value !== '') {
                const newArr = LIST.filter((el) => el.label.includes(value as string));
                setListArr(newArr);
            } else {
                setListArr(LIST);
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
        <div className="my-20 flex w-full flex-col items-start justify-center">
            <p className="mb-20 w-full text-16 font-medium">
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
