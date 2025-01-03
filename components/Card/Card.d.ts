import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
export interface CardType extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
export default function Card({ children, className, ...rest }: CardType): import("react/jsx-runtime").JSX.Element;
