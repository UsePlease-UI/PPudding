import { ReactNode, useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';

import { DialogContext, DialogContextType } from './DialogContext';

export interface DialogProviderType {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  canDismiss?: boolean;
  id?: string;
  role?: 'alertdialog' | 'dialog';
}

const DialogProvider = ({ canDismiss, children, id, isOpen, role, setIsOpen }: DialogProviderType) => {
  const [isFocused, setIsFocused] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const dialogId = useId();
  const dialogLabelId = useId();
  const dialogDescriptionId = useId();

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    setIsFocused(true);
  }, [setIsOpen]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    triggerRef.current?.focus();
  }, [setIsOpen]);

  useEffect(() => {
    if (!isOpen && isFocused) {
      triggerRef?.current?.focus();
      setIsFocused(false);
    }
  }, [isOpen, isFocused]);

  const context: DialogContextType = useMemo(
    () => ({
      canDismiss: canDismiss || false,
      descriptionId: dialogDescriptionId,
      id: id || dialogId,
      isOpen,
      labelId: dialogLabelId,
      onClose: handleClose,
      onOpen: handleOpen,
      role: role || 'dialog',
      setIsOpen,
      triggerRef,
    }),
    [id, dialogId, dialogLabelId, dialogDescriptionId, canDismiss, role, isOpen, handleClose, handleOpen, setIsOpen],
  );

  return <DialogContext.Provider value={context}>{children}</DialogContext.Provider>;
};

export default DialogProvider;
