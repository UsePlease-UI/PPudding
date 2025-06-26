import Accordion from '@components/Accordion';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  args: {
    isDisabled: false,
    isExpanded: false,
  },
  argTypes: {
    children: {
      control: false,
      description: 'Accordion Header and Accordion Panel',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    className: {
      control: false,
      description: 'custom className',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    isDisabled: {
      control: 'boolean',
      description: 'if true, accordion header is disabled',
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    isExpanded: {
      control: 'boolean',
      description: 'if true, accordion panel is expanded',
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    onChange: {
      control: false,
      description: 'callback fired when accordion header is clicked',
      table: {
        type: {
          summary: '(event: MouseEvent<HTMLButtonElement>, isExpanded: boolean) => void',
        },
      },
    },
  },
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  title: 'Accordion/UI - 1. Accordion',
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: ({ isDisabled, isExpanded }) => (
    <Accordion isDisabled={isDisabled} isExpanded={isExpanded}>
      <Accordion.Header headingLevel="h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Accordion.Header>
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
