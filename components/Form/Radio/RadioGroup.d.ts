import { ChangeEvent, ReactNode } from '../../../../node_modules/react';
export interface RadioGroupType {
    children: ReactNode;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    gap?: number;
    isRow?: boolean;
}
export default function RadioGroup(props: RadioGroupType): import("react/jsx-runtime").JSX.Element;
