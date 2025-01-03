import { ReactNode } from '../../../node_modules/react';
export interface CardTextType {
    isExpandable?: boolean;
    primaryText?: ReactNode;
    expandedContents?: ReactNode;
    onClick?: () => void;
    secondaryText?: ReactNode;
}
export default function CardText({ expandedContents, isExpandable, onClick, primaryText, secondaryText, ...rest }: CardTextType): import("react/jsx-runtime").JSX.Element;
