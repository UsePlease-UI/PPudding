import { MouseEvent } from '../../../node_modules/react';
export interface AccordionContextType {
    isDisabled: boolean;
    isExpanded: boolean;
    accordionId: string;
    onChange: (event: MouseEvent<HTMLButtonElement>, isExpanded: boolean) => void;
}
export declare const AccordionContext: import('../../../node_modules/react').Context<AccordionContextType | undefined>;
