interface PaginationListType {
    handleFirstClick: () => void;
    handleLastClick: () => void;
    handleNextClick: () => void;
    handlePrevClick: () => void;
    page: number;
    pageLimit: number;
    blockNum: number;
    onChange: (page: number, newBlockNum: number) => void;
    totalCount: number;
    showFirstButton?: boolean;
    showLastButton?: boolean;
}
export default function PaginationList(props: PaginationListType): import("react/jsx-runtime").JSX.Element;
export {};
