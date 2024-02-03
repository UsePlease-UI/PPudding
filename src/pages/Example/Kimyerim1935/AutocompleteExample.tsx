import { useState, useCallback, ChangeEvent } from 'react';

import _ from 'lodash';

import { FlexBox, Typography } from 'components/Base';
import Autocomplete from 'components/Combobox/Autocomplete';

import { AUTOCOMPLETE as LIST, AutocompleteType } from './constants';

const autoCompleteStyle = {
    text: {
        width: '100%',
        display: 'block',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap' as const,
        overflow: 'hidden'
    }
};

export default function AutocompleteExample() {
    const [listArr, setListArr] = useState<AutocompleteType[]>(LIST);
    const [inputValue, setInputValue] = useState<string>('');
    const [selectedItem, setSelectedItem] = useState<AutocompleteType>();

    const handleSearch = useCallback(
        _.debounce((value: string) => {
            if (value.length !== 0 && value !== '') {
                const newArr = LIST.filter((el) => value.includes(el.label as string));
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
        <FlexBox flexDirection="column" gap={10}>
            <Typography component="h2" fontSize={24}>
                Autocomplete
            </Typography>
            <FlexBox flexDirection="column" gap={20}>
                <Typography>
                    선택된 항목 :{' '}
                    <Typography component="strong" customCSS={autoCompleteStyle.text}>
                        {selectedItem?.label}
                    </Typography>
                </Typography>
                <Autocomplete
                    label="states"
                    listArr={listArr}
                    inputValue={inputValue}
                    onChange={handleChange}
                    onSelect={(e) => setSelectedItem(e as AutocompleteType)}
                />
            </FlexBox>
        </FlexBox>
    );
}
