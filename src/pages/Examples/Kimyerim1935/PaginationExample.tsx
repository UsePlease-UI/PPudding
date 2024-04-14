import { FlexBox, Typography } from '@components/Base';
import Pagination from '@components/Pagination';

import useMobile from '@hooks/useMobile';

export default function PaginationExample() {
    const { isTablet } = useMobile();

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
                Pagination Playground
            </Typography>
            <div className="shadow03 flex w-full overflow-y-auto rounded border border-primary-100 p-10 scrollbar-hide tablet:items-center tablet:justify-center tablet:p-20">
                <div className="min-w-580 tablet:min-w-0">
                    <Pagination totalCount={32} page={15} pageLimit={5} />
                </div>
            </div>
        </FlexBox>
    );
}
