import { useState } from 'react';

import { FlexBox, Typography } from 'components/Base';
import Pagination from 'components/Pagination/Pagination';

export default function PaginationExample() {
    const [page, setPage] = useState<number>(1);
    const [blockNum, setBlockNum] = useState<number>(1);

    const handlePaginationChange = (newPage: number, newBlockNum: number) => {
        setPage(newPage);
        setBlockNum(newBlockNum);
    };

    return (
        <FlexBox flexDirection="column" gap={20}>
            <Typography component="h2" fontSize={24}>
                Pagination
            </Typography>
            <Pagination
                totalCount={32}
                page={page}
                blockNum={blockNum}
                onChange={handlePaginationChange}
                customCSS={{ padding: 0 }}
            />
        </FlexBox>
    );
}
