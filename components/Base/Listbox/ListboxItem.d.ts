import { LiHTMLAttributes, ReactNode } from '../../../../node_modules/react';
export interface ListboxItemType extends Omit<LiHTMLAttributes<HTMLDivElement>, 'onClick'> {
    label: ReactNode;
    value: string;
    isSelected?: boolean;
    onClick?: (selected: string) => void;
    onHover?: () => void;
}
export default function ListboxItem({ className, isSelected, label, onClick, onHover, value, ...rest }: ListboxItemType): import("react/jsx-runtime").JSX.Element;
