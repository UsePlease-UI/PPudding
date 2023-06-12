import { useState, useCallback } from 'react';

import FlexBox from '@atoms/FlexBox';
import AutoComplete from '@molecules/AutoComplete';
import _ from 'lodash';

import { AUTOCOMPLETE } from '@constants/autocomplete';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Design System/Molecules/Form/AutoComplete',
    component: AutoComplete,
    tags: ['autodocs'],
    argTypes: {
        inputValue: {
            control: { type: 'string' },
            description: '입력받는 input 변수',
            table: { category: 'REQUIRED', defaultValue: { summary: 'input' }, type: { summary: 'string' } }
        },
        label: {
            control: { type: 'string' },
            description: 'label',
            table: { category: 'REQUIRED', defaultValue: { summary: 'text' }, type: { summary: 'string' } }
        },
        listArr: {
            type: { name: 'string', required: true },
            control: { type: 'object' },
            description: 'inputValue에 맞게 필터링 된 list',
            table: {
                category: 'REQUIRED',
                defaultValue: { summary: '[]' },
                type: { summary: '{ idx: number; label: string; value: string}[]' }
            }
        },
        onChange: {
            control: false,
            description: '검색어 입력',
            table: { category: 'REQUIRED', type: { summary: 'function' } }
        },
        onSelect: {
            control: false,
            description: '리스트에서의 항목 선택',
            table: { category: 'REQUIRED', type: { summary: 'function' } }
        }
    }
} satisfies Meta<typeof AutoComplete>;

export default meta;
type Story = StoryObj<typeof AutoComplete>;

type ListType = {
    idx: number;
    label: string;
    value: string;
};

const AutoCompleteTemplate: Story = {
    render: (args) => {
        const list = AUTOCOMPLETE;

        const [selectedItem, setSelectedItem] = useState<ListType>();
        const [inputValue, setInputValue] = useState<string>('');
        const [listArr, setListArr] = useState<ListType[]>(list);

        const handleSearch = useCallback(
            _.debounce((value: string) => {
                let newArr = [];
                if (value.length !== 0 || value !== '') {
                    newArr = list.filter((el: ListType) => el.label.includes(value));
                    setListArr(newArr);
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
                <span>선택된 항목의 label: {selectedItem?.label}</span>
                <AutoComplete
                    {...args}
                    label="autoComplete"
                    listArr={listArr}
                    inputValue={inputValue}
                    onChange={handleChange}
                    onSelect={(e) => setSelectedItem(e)}
                />
            </FlexBox>
        );
    }
};

export const Default: Story = {
    ...AutoCompleteTemplate,
    args: {
        listArr: AUTOCOMPLETE
    }
};
