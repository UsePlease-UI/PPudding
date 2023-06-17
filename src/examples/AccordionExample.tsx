import { useState } from 'react';

import FlexBox from '@atoms/FlexBox';
import Accordion from '@molecules/Accordion';
import AccordionHeader from '@molecules/AccordionHeader';
import AccordionPanel from '@molecules/AccordionPanel';

export default function AccordionExample() {
    const [panel, setPanel] = useState('panel1');

    // Reference : https://stackoverflow.com/questions/32782922/what-do-multiple-arrow-functions-mean-in-javascript
    // *함수를 return하는 함수
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleChange =
        (selectedPanel: string) => (_event: React.MouseEvent<HTMLButtonElement>, isExpanded: boolean) => {
            // eslint-disable-next-line no-console
            console.log('i am controlled!', selectedPanel);
            // eslint-disable-next-line no-console
            console.log('i am currently expanded', isExpanded);
            setPanel(selectedPanel);
        };

    return (
        <FlexBox direction="column" customCSS={{ width: '100%' }}>
            <Accordion isExpanded={panel === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionHeader index={1}>Question 1</AccordionHeader>
                <AccordionPanel index={1}>Apple</AccordionPanel>
            </Accordion>
            <Accordion>
                <AccordionHeader index={2}>Question 2</AccordionHeader>
                <AccordionPanel index={2}>Banana</AccordionPanel>
            </Accordion>
        </FlexBox>
    );
}
