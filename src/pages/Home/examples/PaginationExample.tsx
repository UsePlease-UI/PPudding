import { useState } from 'react';

import FlexBox from 'components/Base/FlexBox';
import Pagination from 'components/Pagination/Pagination';
import SharedPagination from 'components/Shared/Pagination';

export default function PaginationExample() {
    const [page, setPage] = useState<number>(1);
    const [blockNum, setBlockNum] = useState<number>(1);

    const handlePaginationChange = (newPage: number, newBlockNum: number) => {
        setPage(newPage);
        setBlockNum(newBlockNum);
    };

    return (
        <FlexBox flexDirection="column" gap={10} customCSS={{ margin: '20px 0' }}>
            <Pagination
                totalCount={32}
                page={page}
                blockNum={blockNum}
                onChange={handlePaginationChange}
                customCSS={{ padding: 0 }}
            />
            <SharedPagination totalCount={280} pageRange={10} />
        </FlexBox>
    );
}
