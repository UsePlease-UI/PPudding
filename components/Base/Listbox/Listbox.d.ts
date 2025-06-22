import { HTMLAttributes, ReactNode } from '../../../../node_modules/react';
export interface ListboxOptionType {
    label: string;
    value: string;
    idx?: string;
}
export interface ListboxType extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
    children: ReactNode;
}
declare const Listbox: import('../../../../node_modules/react').ForwardRefExoticComponent<ListboxType & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default Listbox;
