import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
export interface CardHeaderType extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
export default function CardHeader({ children, className, ...rest }: CardHeaderType): import("react/jsx-runtime").JSX.Element;
