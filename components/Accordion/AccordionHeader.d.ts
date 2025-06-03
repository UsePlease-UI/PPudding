import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
export interface AccordionHeaderType extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
    headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    hasIcon?: boolean;
    icon?: ReactNode;
}
export default function AccordionHeader(props: AccordionHeaderType): import("react/jsx-runtime").JSX.Element;
