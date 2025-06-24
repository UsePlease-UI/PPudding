import Accordion from './Accordion';
import AccordionHeader from './AccordionHeader';
import AccordionPanel from './AccordionPanel';

// Component Export
export default Object.assign(Accordion, {
  Header: AccordionHeader,
  Panel: AccordionPanel,
});

// Types Export
export type { AccordionType } from './Accordion';
export type { AccordionHeaderType } from './AccordionHeader';
export type { AccordionPanelType } from './AccordionPanel';
