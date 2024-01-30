import { useState } from 'react';

import { Typography, FlexBox } from 'components/Base';
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
        <FlexBox flexDirection="column" gap={40} customCSS={{ margin: '20px 0' }}>
            <Pagination
                totalCount={32}
                page={page}
                blockNum={blockNum}
                onChange={handlePaginationChange}
                customCSS={{ padding: 0 }}
            />
            <FlexBox flexDirection="column" gap={10}>
                <Typography fontSize={16} fontWeight="700">
                    Variant
                </Typography>
                <SharedPagination totalCount={280} pageRange={10} />
                <SharedPagination variant="contained" totalCount={280} pageRange={10} />
                <SharedPagination variant="text" totalCount={280} pageRange={10} />
            </FlexBox>
            <FlexBox flexDirection="column" gap={10}>
                <Typography fontSize={16} fontWeight="700">
                    Shape
                </Typography>
                <SharedPagination shape="square" totalCount={280} pageRange={10} />
                <SharedPagination shape="rounded" totalCount={280} pageRange={10} />
                <SharedPagination shape="circular" totalCount={280} pageRange={10} />
            </FlexBox>
            <FlexBox flexDirection="column" gap={10}>
                <Typography fontSize={16} fontWeight="700">
                    Size
                </Typography>
                <SharedPagination size="large" totalCount={280} pageRange={10} />
                <SharedPagination size="medium" totalCount={280} pageRange={10} />
                <SharedPagination size="small" totalCount={280} pageRange={10} />
            </FlexBox>
        </FlexBox>
    );
}
