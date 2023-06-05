import Accordion from 'components/atoms/Accordion';
import AccordionHeader from 'components/atoms/AccordionHeader';
import AccordionPanel from 'components/atoms/AccordionPanel';

export default function AccordionExample() {
    return (
        <Accordion>
            <AccordionHeader index={1}>Accordion Header</AccordionHeader>
            <AccordionPanel index={1}>ccccc</AccordionPanel>
        </Accordion>
    );
}
