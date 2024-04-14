import { useState, useCallback, ChangeEvent } from 'react';

import _ from 'lodash';

import { Box, FlexBox, Typography } from '@components/Base';
import { Autocomplete } from '@components/Combobox';
import { CommonListDataType } from '@components/types';

import useMobile from '@hooks/useMobile';

import { AUTOCOMPLETE as LIST } from './constants';

export default function AutocompleteExample() {
    const { isTablet } = useMobile();

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
        <FlexBox flexDirection="flex-col" gap="gap-10">
            <Typography
                component="h2"
                fontSize="text-24"
                fontWeight="font-black"
                color="text-primary-600"
                textTransform="uppercase"
                margin={isTablet ? 'mb-10' : 'mb-20'}
            >
                Combobox Playground
            </Typography>
            <div className="shadow03 flex w-full flex-col items-start justify-center rounded border border-primary-100 p-20">
                <Typography margin="mb-20" fontWeight="font-medium" width="w-full">
                    선택된 항목 :&nbsp;
                    <strong className="block w-full truncate">{selectedItem?.label}</strong>
                </Typography>
                <Box width="w-full" maxWidth={isTablet ? 'max-w-full' : 'max-w-768'}>
                    <Autocomplete
                        label="Autocomplete Example"
                        listArr={listArr}
                        inputValue={inputValue}
                        onChange={handleChange}
                        onSelect={(e) => setSelectedItem(e as CommonListDataType)}
                    />
                </Box>
            </div>
        </FlexBox>
    );
}
