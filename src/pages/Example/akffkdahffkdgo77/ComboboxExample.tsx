import { useCallback, useState } from 'react';

import _ from 'lodash';

import { FlexBox, Typography, Divider } from 'components/Base';
import { OptionType } from 'components/Base/Listbox';
import Select from 'components/Combobox/Select';
import Autocomplete from 'components/Shared/Autocomplete';

import { AUTOCOMPLETE as LIST, AutocompleteType, OPTIONS } from './constants';

export default function ComboboxExample() {
    const [dataList, setDataList] = useState<AutocompleteType[]>(LIST);
    const [inputValue, setInputValue] = useState<string>('');
    const [selectedItem, setSelectedItem] = useState<AutocompleteType>();
    const [milk, setMilk] = useState('');

    const handleSearch = useCallback(
        _.debounce((value: string) => {
            if (value.length !== 0 && value !== '') {
                const newArr = LIST.filter((el) => value.includes(el.label as string));
                setDataList(newArr);
            } else {
                setDataList(LIST);
            }
        }, 100),
        []
    );

    const handleChange = useCallback((newValue: string | number) => {
        setInputValue(String(newValue));
        handleSearch(String(newValue));
    }, []);

    const handleSelect = useCallback((e?: OptionType) => setSelectedItem(e as AutocompleteType), []);

    return (
        <FlexBox flexDirection="column" gap={10}>
            <Typography component="h2" fontSize={24}>
                Autocomplete
            </Typography>
            <FlexBox flexDirection="column" gap={10}>
                <Typography>
                    선택된 항목 :&nbsp;
                    <Typography
                        component="strong"
                        width="100%"
                        customCSS={{
                            display: 'block',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden'
                        }}
                    >
                        {selectedItem?.label}
                    </Typography>
                </Typography>
                <Autocomplete
                    labelText="Lorem Ipsum"
                    name="lorem ipsum"
                    options={dataList}
                    inputValue={inputValue}
                    onChange={handleChange}
                    onSelect={handleSelect}
                    customCSS={{ maxWidth: 320 }}
                />
            </FlexBox>
            <Divider borderStyle="dashed" />
            <Typography component="h2" fontSize={24}>
                Select
            </Typography>
            <Select
                id="milk"
                aria-labelledby="milk"
                labelText="우유"
                helperText="우유 종류를 선택해주세요"
                name="milk"
                value={milk}
                label={OPTIONS.filter((val) => val.value === milk)?.[0]?.label}
                options={OPTIONS}
                onChange={(e) => setMilk(e.currentTarget.value)}
            />
        </FlexBox>
    );
}
