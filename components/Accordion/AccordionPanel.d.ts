import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
export interface AccordionPanelType extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
export default function AccordionPanel(props: AccordionPanelType): import("react/jsx-runtime").JSX.Element;
