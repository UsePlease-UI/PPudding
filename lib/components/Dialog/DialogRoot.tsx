import { ReactNode } from 'react';

import { DialogProvider } from '@components/useDialog';

export interface DialogRootType {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  canDismiss?: boolean;
  id?: string;
  role?: 'alertdialog' | 'dialog';
}

export default function DialogRoot(props: DialogRootType) {
  const { canDismiss, children, id, isOpen, role, setIsOpen } = props;

  return (
    <DialogProvider canDismiss={canDismiss} id={id} isOpen={isOpen} setIsOpen={setIsOpen} role={role}>
      {children}
    </DialogProvider>
  );
}
