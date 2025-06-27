import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
export interface DialogActionType extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
export default function DialogAction(props: DialogActionType): import("react/jsx-runtime").JSX.Element;
