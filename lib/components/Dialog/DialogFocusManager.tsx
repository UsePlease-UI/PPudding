import { ReactNode } from 'react';

import { FocusManager } from '@components/Base';
import { useDialog } from '@components/useDialog';

import { joinClassNames } from '@utils/format';

export interface DialogFocusManagerType {
  children: ReactNode;
  className?: string;
  overlayClassName?: string;
}

export default function DialogFocusManager(props: DialogFocusManagerType) {
  const { children, className, overlayClassName, ...rest } = props;

  const { canDismiss, isOpen, onClose } = useDialog();

  return (
    <FocusManager
      {...rest}
      canDismiss={canDismiss}
      className={joinClassNames('grid h-full w-full place-items-center', className && className)}
      isOpen={isOpen}
      onClose={onClose}
      overlayClassName={overlayClassName}
    >
      {children}
    </FocusManager>
  );
}
