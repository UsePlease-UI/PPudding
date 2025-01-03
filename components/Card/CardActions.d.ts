import { ReactNode } from '../../../node_modules/react';
export interface CardActionsType {
    className?: string;
    primaryText?: ReactNode;
    actions?: ReactNode;
    secondaryText?: ReactNode;
}
export default function CardActions({ actions, className, primaryText, secondaryText }: CardActionsType): import("react/jsx-runtime").JSX.Element;
