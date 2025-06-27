import { createContext, RefObject } from 'react';

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

export const DialogContext = createContext<DialogContextType | undefined>(undefined);
