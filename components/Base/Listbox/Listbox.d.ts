import { HTMLAttributes, MouseEvent, ReactNode } from '../../../../node_modules/react';
import { OptionsType } from '../../types';
export interface ListboxType extends Omit<HTMLAttributes<HTMLUListElement>, 'onClick'> {
    id: string;
    value: number | string;
    options: OptionsType[];
    labelId?: string;
    renderItem?: (option: OptionsType) => ReactNode;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}
declare const Listbox: import('../../../../node_modules/react').ForwardRefExoticComponent<ListboxType & import('../../../../node_modules/react').RefAttributes<HTMLUListElement>>;
export default Listbox;
