import { MouseEvent, ReactNode } from '../../../node_modules/react';
export interface AccordionType {
    children: ReactNode;
    className?: string;
    isDisabled?: boolean;
    isExpanded?: boolean;
    onChange?: (event: MouseEvent<HTMLButtonElement>, isExpanded: boolean) => void;
}
export default function Accordion(props: AccordionType): import("react/jsx-runtime").JSX.Element;
