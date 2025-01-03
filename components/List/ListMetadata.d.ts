import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
export type ListPositionType = 'end' | 'start';
export interface ListMetadataType extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    position?: ListPositionType;
}
export default function ListMetadata({ children, className, position, ...rest }: ListMetadataType): import("react/jsx-runtime").JSX.Element;
