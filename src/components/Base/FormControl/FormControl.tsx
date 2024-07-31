import { HTMLAttributes, ReactNode } from 'react';

type FormControlType = Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
    children: ReactNode;
    labelText?: ReactNode;
    helperTextId?: string;
    helperText?: ReactNode;
};

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
    const { children, id, labelText, helperTextId, helperText } = props;

    return (
        <div className="w-full">
            {labelText && (
                <label htmlFor={id} className="mb-4 block text-12 font-semibold">
                    {labelText}
                </label>
            )}
            {children}
            {helperText && (
                <small id={helperTextId} className="mt-1 block text-10 font-medium">
                    {helperText}
                </small>
            )}
        </div>
    );
}
