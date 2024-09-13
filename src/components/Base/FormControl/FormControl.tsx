import { HTMLAttributes, ReactNode } from 'react';

type FormControlType = {
  children: ReactNode;
  helperText?: ReactNode;
  helperTextId?: string;
  labelText?: ReactNode;
} & Omit<HTMLAttributes<HTMLDivElement>, 'className'>;

/**
 *  [Base Component] Form Control Component
 *  @param children 컴포넌트
 *  @param id [웹 접근성] id [optional]
 *  @param label Label Text [optional]
 *  @param helperText Helper Text [optional]
 *  @param helperTextId [웹 접근성] helper text의 id [optional]
 *  @returns JSX.Element
 */
export default function FormControl(props: FormControlType) {
  const { children, helperText, helperTextId, id, labelText } = props;

  return (
    <div className="w-full">
      {labelText && (
        <label className="mb-1 block text-12 font-semibold" htmlFor={id}>
          {labelText}
        </label>
      )}
      {children}
      {helperText && (
        <small className="mt-px block text-10 font-medium" id={helperTextId}>
          {helperText}
        </small>
      )}
    </div>
  );
}
