import { HTMLAttributes, ReactNode } from '../../../../node_modules/react';
export interface ListboxOptionType {
    label: string;
    value: string;
    idx?: string;
}
export interface ListboxType extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
    options: ListboxOptionType[];
    id?: string;
    labelId?: string;
    renderItem?: (option: ListboxOptionType, index: number) => ReactNode;
    value?: string;
    onClick?: (selected: string) => void;
    onHover?: (index: string) => void;
}
declare const Listbox: import('../../../../node_modules/react').ForwardRefExoticComponent<ListboxType & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default Listbox;
