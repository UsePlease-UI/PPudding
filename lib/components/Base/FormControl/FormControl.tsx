import { ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

export interface FormControlType {
  children: ReactNode;
  className?: string;
  helperText?: ReactNode;
  helperTextClassName?: string;
  helperTextId?: string;
  inputId?: string;
  labelText?: ReactNode;
  labelTextClassName?: string;
  labelTextId?: string;
}

export default function FormControl(props: FormControlType) {
  const {
    children,
    className,
    helperText,
    helperTextClassName,
    helperTextId,
    inputId,
    labelText,
    labelTextClassName,
    labelTextId,
  } = props;

  return (
    <div className={joinClassNames('w-max', className && className)}>
      {labelText && (
        <label
          className={joinClassNames('mb-1 block text-12 font-semibold', labelTextClassName && labelTextClassName)}
          id={labelTextId}
          htmlFor={inputId}
        >
          {labelText}
        </label>
      )}
      {children}
      {helperText && (
        <small
          className={joinClassNames('mt-px block text-10 font-medium', helperTextClassName && helperTextClassName)}
          id={helperTextId}
        >
          {helperText}
        </small>
      )}
    </div>
  );
}
