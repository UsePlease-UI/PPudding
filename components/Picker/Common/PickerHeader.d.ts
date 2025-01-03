interface PickerHeaderType {
    year: number;
    onClick: (isPrev: boolean) => void;
    month?: string;
}
export default function PickerHeader({ month, onClick, year }: PickerHeaderType): import("react/jsx-runtime").JSX.Element;
export {};
