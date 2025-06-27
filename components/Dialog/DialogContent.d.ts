import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
export interface DialogContentType extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
export default function DialogContent({ children, ...rest }: DialogContentType): import("react/jsx-runtime").JSX.Element;
