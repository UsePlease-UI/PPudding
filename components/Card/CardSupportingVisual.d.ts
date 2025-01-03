import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
export interface CardSupportingVisualType extends HTMLAttributes<HTMLDivElement> {
    type: 'icon' | 'image';
    alt?: string;
    src?: string;
    icon?: ReactNode;
}
export default function CardSupportingVisual({ alt, className, icon, src, type, ...rest }: CardSupportingVisualType): import("react/jsx-runtime").JSX.Element;
