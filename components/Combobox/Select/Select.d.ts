import { HTMLAttributes, MouseEvent, ReactNode } from '../../../../node_modules/react';
import { OptionsType } from '../../types';
export interface SelectType extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    label: string;
    value: number | string;
    helperText?: ReactNode;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    labelText?: ReactNode;
    onChange?: (e: MouseEvent<HTMLButtonElement>) => void;
    options?: OptionsType[];
    placeholder?: string;
}
export default function Select(props: SelectType): import("react/jsx-runtime").JSX.Element;
