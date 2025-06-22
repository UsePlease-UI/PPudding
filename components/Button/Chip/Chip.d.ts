import { HTMLAttributes } from '../../../../node_modules/react';
import { ChipVariantType } from './styles';
export interface ChipType extends HTMLAttributes<HTMLDivElement> {
    label: string;
    value: string;
    isDeletable?: boolean;
    variant?: ChipVariantType;
    onClick?: () => void;
    onDelete?: (value: string) => void;
}
export default function Chip(props: ChipType): import("react/jsx-runtime").JSX.Element;
