import Pagination from '@components/Pagination';

export default function PaginationExample() {
    return (
        <div className="shadow03 flex w-full overflow-y-auto rounded border border-primary-100 p-10 scrollbar-hide tablet:items-center tablet:justify-center tablet:p-20">
            <div className="min-w-580 tablet:min-w-0">
                <Pagination totalCount={32} page={1} pageLimit={5} />
            </div>
        </div>
    );
}
