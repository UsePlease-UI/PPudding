import { HTMLAttributes, ReactNode } from 'react';

import { Typography } from '@components/Base';

type FormControlType = Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
    children: ReactNode;
    labelText?: string | ReactNode;
    helperTextId?: string;
    helperText?: string | ReactNode;
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
                <Typography
                    component="label"
                    htmlFor={id}
                    fontFamily="text-12"
                    fontWeight="font-semibold"
                    margin="mb-4"
                    display="block"
                >
                    {labelText}
                </Typography>
            )}
            {children}
            {helperText && (
                <Typography
                    component="small"
                    id={helperTextId}
                    fontSize="text-10"
                    fontWeight="font-medium"
                    margin="mt-1"
                    display="block"
                >
                    {helperText}
                </Typography>
            )}
        </div>
    );
}
