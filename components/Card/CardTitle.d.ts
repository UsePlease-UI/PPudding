import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
export interface CardTitleType extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    title: ReactNode;
    subtitle?: ReactNode;
}
export default function CardTitle({ className, subtitle, title, ...rest }: CardTitleType): import("react/jsx-runtime").JSX.Element;
