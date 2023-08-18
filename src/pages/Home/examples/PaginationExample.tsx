import { useState } from 'react';

import FlexBox from 'components/Base/FlexBox';
import Pagination from 'components/Pagination/Pagination';

export default function PaginationExample() {
    const [page, setPage] = useState<number>(1);
    const [blockNum, setBlockNum] = useState<number>(1);

    const handlePaginationChange = (newPage: number, newBlockNum: number) => {
        setPage(newPage);
        setBlockNum(newBlockNum);
    };

    return (
        <FlexBox direction="column" gap={10}>
            <h2>Pagination</h2>
            <Pagination totalCount={32} page={page} blockNum={blockNum} onChange={handlePaginationChange} />
        </FlexBox>
    );
}
