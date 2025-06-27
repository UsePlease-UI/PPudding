import { HTMLAttributes, ReactNode } from 'react';

import { useDialog } from '@components/useDialog';

export interface DialogContentType extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function DialogContent({ children, ...rest }: DialogContentType) {
  const { descriptionId, id, labelId, role } = useDialog();

  return (
    <div
      {...rest}
      aria-describedby={rest['aria-describedby'] === '' ? undefined : rest['aria-describedby'] || descriptionId}
      aria-labelledby={rest['aria-label'] ? undefined : rest['aria-labelledby'] || labelId}
      className="max-w-90 rounded-2 bg-white px-6 py-8"
      id={id}
      aria-modal="true"
      role={role}
    >
      {children}
    </div>
  );
}
