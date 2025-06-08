import Accordion from './Accordion';
import AccordionHeader from './AccordionHeader';
import AccordionPanel from './AccordionPanel';

// Component export
export default Object.assign(Accordion, {
  Header: AccordionHeader,
  Panel: AccordionPanel,
});

// Types export
export * from './Accordion';
export * from './AccordionHeader';
export * from './AccordionPanel';
