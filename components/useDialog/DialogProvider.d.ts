import { ReactNode } from '../../../node_modules/react';
export interface DialogProviderType {
    children: ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    canDismiss?: boolean;
    id?: string;
    role?: 'alertdialog' | 'dialog';
}
declare const DialogProvider: ({ canDismiss, children, id, isOpen, role, setIsOpen }: DialogProviderType) => import("react/jsx-runtime").JSX.Element;
export default DialogProvider;
