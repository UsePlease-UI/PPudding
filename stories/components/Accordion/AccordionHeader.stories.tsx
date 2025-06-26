import { ChevronDownIcon } from '@heroicons/react/24/solid';

import Accordion from '@components/Accordion';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    hasIcon: true,
    headingLevel: 'h2',
    icon: <ChevronDownIcon />,
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'header content',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    hasIcon: {
      control: 'boolean',
      description: 'if true, accordion header has icon',
      table: {
        defaultValue: {
          summary: 'true',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    headingLevel: {
      control: 'inline-radio',
      description: 'heading element level',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      table: {
        defaultValue: {
          summary: 'h3',
        },
        type: {
          summary: 'h1 | h2 | h3 | h4 | h5 | h6',
        },
      },
    },
    icon: {
      control: false,
      description: 'custom icon (svg element)',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
  },
  component: Accordion.Header,
  tags: ['autodocs'],
  title: 'Accordion/UI - 2. Accordion Header',
} satisfies Meta<typeof Accordion.Header>;

export default meta;

type Story = StoryObj<typeof Accordion.Header>;

export const Default: Story = {
  render: ({ children, ...args }) => (
    <Accordion>
      <Accordion.Header {...args}>{children}</Accordion.Header>
      <Accordion.Panel>
        Phasellus lacinia lacus at mi lobortis, a fringilla lectus maximus. Vestibulum id volutpat leo. Nam eget ante
        non eros ultrices ultricies. Vivamus porta, ante non egestas fermentum, ante diam ultrices est, non euismod
        purus urna eget mi. Praesent iaculis turpis tortor, eget semper magna rutrum eu. Duis nibh tortor, finibus eget
        euismod at, gravida a diam. Cras vehicula ipsum at odio efficitur, a commodo leo suscipit. Ut in nisi nisl.
        Etiam ex ligula, viverra non dui sed, vestibulum fermentum felis.
      </Accordion.Panel>
    </Accordion>
  ),
};
