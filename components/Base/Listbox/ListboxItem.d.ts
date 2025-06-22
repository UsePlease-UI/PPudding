import { LiHTMLAttributes, ReactNode } from '../../../../node_modules/react';
export interface ListboxItemType extends Omit<LiHTMLAttributes<HTMLDivElement>, 'onClick'> {
    label: ReactNode;
    value: string;
    isSelected?: boolean;
    onClick?: (selected: string) => void;
}
declare const ListboxItem: import('../../../../node_modules/react').ForwardRefExoticComponent<ListboxItemType & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default ListboxItem;
