import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
export interface AccordionHeaderType extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
    hasIcon?: boolean;
    icon?: ReactNode;
}
export default function AccordionHeader(props: AccordionHeaderType): import("react/jsx-runtime").JSX.Element;
