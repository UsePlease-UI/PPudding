import { default as Accordion } from './Accordion';
import { default as AccordionHeader } from './AccordionHeader';
import { default as AccordionPanel } from './AccordionPanel';
declare const _default: typeof Accordion & {
    Header: typeof AccordionHeader;
    Panel: typeof AccordionPanel;
};
export default _default;
export type { AccordionType } from './Accordion';
export type { AccordionHeaderType } from './AccordionHeader';
export type { AccordionPanelType } from './AccordionPanel';
