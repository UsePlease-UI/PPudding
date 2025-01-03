interface PaginationButtonPropType {
    isSelected: boolean;
    pageNum: number;
    onClick: () => void;
}
export default function PaginationButton({ isSelected, onClick, pageNum }: PaginationButtonPropType): import("react/jsx-runtime").JSX.Element;
export {};
