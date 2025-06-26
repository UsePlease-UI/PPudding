import AccordionExample from './AccordionExample';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: AccordionExample,
  title: 'Accordion/Documentation',
} satisfies Meta<typeof AccordionExample>;

export default meta;

type Story = StoryObj<typeof AccordionExample>;

export const Default: Story = {
  args: {},
};
