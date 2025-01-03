import { LiHTMLAttributes, MouseEvent, ReactNode } from '../../../../node_modules/react';
export interface ListboxItemType extends Omit<LiHTMLAttributes<HTMLLIElement>, 'onClick'> {
    currentValue: number | string;
    label: ReactNode;
    value: number | string;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}
export default function ListboxItem({ className, currentValue, label, onClick, value, ...rest }: ListboxItemType): import("react/jsx-runtime").JSX.Element;
