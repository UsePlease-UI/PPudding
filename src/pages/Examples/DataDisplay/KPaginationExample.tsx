import Pagination from '@components/Pagination';

export default function PaginationExample() {
  return (
    <div className="flex w-full overflow-y-auto rounded border border-primary-100 p-2.5 shadow-03 scrollbar-hide tablet:items-center tablet:justify-center tablet:p-5">
      <div className="min-w-145 tablet:min-w-0">
        <Pagination page={1} pageLimit={5} totalCount={32} />
      </div>
    </div>
  );
}
