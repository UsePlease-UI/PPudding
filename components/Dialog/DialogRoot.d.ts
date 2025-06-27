import { ReactNode } from '../../../node_modules/react';
export interface DialogRootType {
    children: ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    canDismiss?: boolean;
    id?: string;
    role?: 'alertdialog' | 'dialog';
}
export default function DialogRoot(props: DialogRootType): import("react/jsx-runtime").JSX.Element;
