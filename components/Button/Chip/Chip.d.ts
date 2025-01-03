import { HTMLAttributes } from '../../../../node_modules/react';
import { ButtonVariantType } from '../styles';
export interface ChipType extends HTMLAttributes<HTMLDivElement> {
    label: string;
    value: string;
    isDeletable?: boolean;
    variant?: ButtonVariantType;
    onDelete?: (value: string) => void;
}
export default function Chip(props: ChipType): import("react/jsx-runtime").JSX.Element;
