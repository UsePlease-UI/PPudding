export const ACCORDION_SHORT = `
    <Accordion isExpanded={panel === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionHeader index={1}>Question 1</AccordionHeader>
        <AccordionPanel index={1}>Apple</AccordionPanel>
    </Accordion>
    
`;

export const ACCORDION_CODE_SNIPPET = `
    const [panel, setPanel] = useState('panel1');

    const handleChange = (selectedPanel: string) => 
        (_event: React.MouseEvent<HTMLButtonElement>, isExpanded: boolean) => {
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
    
`;
