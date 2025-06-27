import { RefObject } from '../../../node_modules/react';
export interface DialogContextType {
    canDismiss: boolean;
    id: string;
    isOpen: boolean;
    labelId: string;
    setIsOpen: (isOpen: boolean) => void;
    triggerRef: RefObject<HTMLButtonElement | null>;
    descriptionId: string;
    onClose: () => void;
    onOpen: () => void;
    role: 'alertdialog' | 'dialog';
}
export declare const DialogContext: import('../../../node_modules/react').Context<DialogContextType | undefined>;
