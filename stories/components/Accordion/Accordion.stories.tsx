import Accordion from '@components/Accordion/Accordion';
import AccordionHeader from '@components/Accordion/AccordionHeader';
import AccordionPanel from '@components/Accordion/AccordionPanel';

import type { StoryObj } from '@storybook/react-vite';

const meta = {
  component: Accordion,
  subcomponents: { AccordionHeader, AccordionPanel },
  title: 'Accordion/Accordion',
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Accordion>
      <AccordionHeader headingLevel="h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</AccordionHeader>
      <AccordionPanel>
        Phasellus lacinia lacus at mi lobortis, a fringilla lectus maximus. Vestibulum id volutpat leo. Nam eget ante
        non eros ultrices ultricies. Vivamus porta, ante non egestas fermentum, ante diam ultrices est, non euismod
        purus urna eget mi. Praesent iaculis turpis tortor, eget semper magna rutrum eu. Duis nibh tortor, finibus eget
        euismod at, gravida a diam. Cras vehicula ipsum at odio efficitur, a commodo leo suscipit. Ut in nisi nisl.
        Etiam ex ligula, viverra non dui sed, vestibulum fermentum felis.
      </AccordionPanel>
    </Accordion>
  ),
};
