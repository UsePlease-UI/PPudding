import { useState } from 'react';

import FlexBox from 'components/atoms/FlexBox';
import TextField from 'components/atoms/TextField';
import FormControl from 'components/molecules/FormControl';
import Pagination from 'components/molecules/Pagination';
import Select from 'components/molecules/Select';

import { css } from '@emotion/react';

const OPTIONS = [
    { label: '선택', value: '' },
    { label: '딸기', value: '1' },
    { label: '바나나', value: '2' },
    { label: '초코', value: '3' },
    { label: '우유', value: '4' }
];

const customCSS = {
    maxWidth: 500,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    border: '1px solid pink'
};

export default function App() {
    const [name, setName] = useState('');
    const [milk, setMilk] = useState('');

    const [page, setPage] = useState<number>(1);
    const [blockNum, setBlockNum] = useState<number>(1);

    const handlePaginationChange = (newPage: number, newBlockNum: number) => {
        setPage(newPage);
        setBlockNum(newBlockNum);
    };

    return (
        <>
            <Pagination totalCount={32} page={page} blockNum={blockNum} onChange={handlePaginationChange} />
            <FlexBox direction="column" gap={10} customCSS={customCSS}>
                <FormControl
                    id="milk"
                    label="우유"
                    helperText="우유 종류를 선택해주세요"
                    helperTextId="milk-helper-text"
                >
                    <Select
                        id="milk"
                        aria-labelledby="milk"
                        name="milk"
                        value={milk}
                        label={OPTIONS.filter((val) => val.value === milk)?.[0]?.label}
                        options={OPTIONS}
                        onChange={(e) => setMilk(e.currentTarget.value)}
                    />
                </FormControl>
                <FormControl
                    id="name"
                    helperTextId="name-helper-text"
                    helperText="최소 10글자 이상 입력"
                    label="닉네임"
                >
                    <TextField
                        title="이름"
                        name="name"
                        value={name}
                        maxLength={10}
                        onChange={(e) => setName(e.currentTarget.value)}
                        customCSS={css({ borderColor: 'hotpink' })}
                    />
                </FormControl>
            </FlexBox>
        </>
    );
}
