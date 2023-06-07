import { useState, useCallback } from 'react';

import _ from 'lodash';

import FlexBox from 'components/atoms/FlexBox';
import AutoComplete from 'components/molecules/AutoComplete';
import { AUTOCOMPLETE } from 'constants/autocomplete';

type ListType = {
    idx: number;
    label: string;
    value: string;
};

export default function AutoCompleteExample() {
    const list = AUTOCOMPLETE;
    const [listArr, setListArr] = useState<ListType[]>(list);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');

    const handleSearch = useCallback(
        _.debounce((value: string) => {
            let newArr = [];
            if (value.length !== 0 || value !== '') {
                setIsVisible(true);

                newArr = list.filter((el: ListType) => el.label.includes(value));
                setListArr(newArr);
            } else {
                setIsVisible(false);
            }

            if (value.length === 0) {
                setListArr(list);
            }
        }, 100),
        []
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setInputValue(value);
        handleSearch(value);
    };

    return (
        <FlexBox direction="column" gap={10}>
            <h2>AutoComplete</h2>
            <AutoComplete label="autoComplete" listArr={listArr} inputValue={inputValue} onChange={handleChange} />
        </FlexBox>
    );
}
