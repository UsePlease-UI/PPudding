export interface PaginationType {
    page: number;
    totalCount: number;
    pageLimit?: number;
    onChange?: (page: number) => void;
    showFirstButton?: boolean;
    showLastButton?: boolean;
}
export default function Pagination(props: PaginationType): import("react/jsx-runtime").JSX.Element;
