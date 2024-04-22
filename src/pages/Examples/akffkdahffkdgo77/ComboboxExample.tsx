import { useCallback, useState } from 'react';

import _ from 'lodash';

import { FlexBox, Typography } from '@components/Base';
import { Select } from '@components/Combobox';
import Autocomplete from '@components/Shared/Autocomplete';
import { Tab, TabContainer, TabItem, TabPanel } from '@components/Tab';
import { CommonListDataType } from '@components/types';

import { AUTOCOMPLETE as LIST, OPTIONS } from './constants';
import Heading from '../Common/Heading';

export default function ComboboxExample() {
    const [tab, setTab] = useState(1);

    const [dataList, setDataList] = useState<CommonListDataType[]>(LIST);
    const [inputValue, setInputValue] = useState<string>('');
    const [selectedItem, setSelectedItem] = useState<CommonListDataType>();

    const [value, setValue] = useState('');

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

    const handleSelect = useCallback((e?: CommonListDataType) => setSelectedItem(e as CommonListDataType), []);

    return (
        <FlexBox flexDirection="flex-col" gap="gap-10">
            <Heading title="Combobox Playground" />
            <TabContainer>
                <Tab aria-label="combobox tab" value={tab} onChange={setTab}>
                    <TabItem label="AUTOCOMPLETE" index={1} value={tab} />
                    <TabItem label="SELECT" index={2} value={tab} />
                </Tab>
                <TabPanel index={1} value={tab}>
                    <Typography margin="mb-20" fontWeight="font-medium">
                        선택된 항목 :&nbsp;
                        <strong className="block w-full truncate">{selectedItem?.label}</strong>
                    </Typography>
                    <Autocomplete
                        labelText="Lorem Ipsum"
                        name="lorem ipsum"
                        options={dataList}
                        inputValue={inputValue}
                        onChange={handleChange}
                        onSelect={handleSelect}
                    />
                </TabPanel>
                <TabPanel index={2} value={tab}>
                    <Select
                        id="milk"
                        aria-labelledby="milk"
                        labelText="우유"
                        helperText="우유 종류를 선택해주세요"
                        name="milk"
                        value={value}
                        label={OPTIONS.filter((val) => val.value === value)?.[0]?.label}
                        options={OPTIONS}
                        onChange={(e) => setValue(e.currentTarget.value)}
                    />
                </TabPanel>
            </TabContainer>
        </FlexBox>
    );
}
