import { MouseEvent, ReactNode } from '../../../node_modules/react';
export interface AccordionProviderType {
    children: ReactNode;
    isDisabled?: boolean;
    isExpanded?: boolean;
    onChange?: (event: MouseEvent<HTMLButtonElement>, isExpanded: boolean) => void;
}
declare const AccordionProvider: ({ children, isDisabled, isExpanded, onChange }: AccordionProviderType) => import("react/jsx-runtime").JSX.Element;
export default AccordionProvider;
