import { MouseEvent, useState } from 'react';

import { Accordion, AccordionHeader, AccordionPanel } from '@components/Accordion';

const AccordionExample = () => {
  const [panel, setPanel] = useState('panel1');

  // Reference : https://stackoverflow.com/questions/32782922/what-do-multiple-arrow-functions-mean-in-javascript
  // *함수를 return하는 함수

  const handleChange = (selectedPanel: string) => (_event: MouseEvent<HTMLButtonElement>, isExpanded: boolean) => {
    console.log('i am controlled!', selectedPanel);

    console.log('i am currently expanded', isExpanded);
    setPanel(selectedPanel);
  };

  return (
    <>
      <Accordion isExpanded={panel === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionHeader>Controlled - Q1</AccordionHeader>
        <AccordionPanel>Apple</AccordionPanel>
      </Accordion>
      <Accordion>
        <AccordionHeader>Uncontrolled - Q2</AccordionHeader>
        <AccordionPanel>Banana</AccordionPanel>
      </Accordion>
    </>
  );
};

export default AccordionExample;
