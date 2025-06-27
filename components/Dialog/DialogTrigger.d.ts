import { ButtonHTMLAttributes, ReactNode } from '../../../node_modules/react';
export interface DialogTriggerType extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}
export default function DialogTrigger(props: DialogTriggerType): import("react/jsx-runtime").JSX.Element;
