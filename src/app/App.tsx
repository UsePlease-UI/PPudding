import { useState } from 'react';

import { css } from '@emotion/react';

import FlexBox from 'components/atoms/FlexBox';
import TextField from 'components/atoms/TextField';
import FormControl from 'components/molecules/FormControl';
import Pagination from 'components/molecules/Pagination';

export default function App() {
    const [name, setName] = useState('');
    const [page, setPage] = useState<number>(1);
    const [blockNum, setBlockNum] = useState<number>(1);

    // eslint-disable-next-line no-shadow
    const handlePaginationChange = (page: number, newBlockNum: number) => {
        setPage(page);
        setBlockNum(newBlockNum);
    };

    return (
        <>
            <Pagination totalCount={32} page={page} blockNum={blockNum} onChange={handlePaginationChange} />
            <FlexBox direction="column" customCSS={{ padding: 20 }}>
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
                        customCSS={css({ backgroundColor: 'lightpink' })}
                    />
                </FormControl>
            </FlexBox>
        </>
    );
}
