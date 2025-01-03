import { ReactNode } from '../../../../node_modules/react';
export interface FormControlType {
    children: ReactNode;
    className?: string;
    helperText?: ReactNode;
    helperTextClassName?: string;
    helperTextId?: string;
    labelText?: ReactNode;
    labelTextClassName?: string;
    labelTextId?: string;
}
export default function FormControl(props: FormControlType): import("react/jsx-runtime").JSX.Element;
