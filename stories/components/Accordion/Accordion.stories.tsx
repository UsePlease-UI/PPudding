import { useArgs } from 'storybook/internal/preview-api';

import Accordion from '@components/Accordion';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  args: {
    isDisabled: false,
    isExpanded: true,
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
      description: 'content of the component (Accordion Header, Accordion Panel)',
      table: {
        category: 'required',
        type: {
          summary: 'ReactNode',
        },
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    isDisabled: {
      control: 'boolean',
      description: 'if true, the component will be disabled',
      table: {
        category: 'optional',
      },
    },
    isExpanded: {
      control: false,
      description: 'if true, accordion panel will be visible',
      table: {
        category: 'optional',
      },
    },
    onChange: {
      control: false,
      description: 'change event handler',
      table: {
        category: 'optional',
        type: {
          summary: '(e: MouseEvent<HTMLButtonElement>, isExpanded: boolean) => void',
        },
      },
    },
  },
  component: Accordion,
  parameters: {
    docs: {
      argTypes: {
        sort: 'requiredFirst',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Accordion/Accordion',
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: function Render(args) {
    const [{ isExpanded }, updateArgs] = useArgs();

    return (
      <Accordion {...args} isExpanded={isExpanded} onChange={(_, isExpanded) => updateArgs({ isExpanded })}>
        <Accordion.Header>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Accordion.Header>
        <Accordion.Panel>
          Phasellus lacinia lacus at mi lobortis, a fringilla lectus maximus. Vestibulum id volutpat leo. Nam eget ante
          non eros ultrices ultricies. Vivamus porta, ante non egestas fermentum, ante diam ultrices est, non euismod
          purus urna eget mi. Praesent iaculis turpis tortor, eget semper magna rutrum eu. Duis nibh tortor, finibus
          eget euismod at, gravida a diam. Cras vehicula ipsum at odio efficitur, a commodo leo suscipit. Ut in nisi
          nisl. Etiam ex ligula, viverra non dui sed, vestibulum fermentum felis.
        </Accordion.Panel>
      </Accordion>
    );
  },
};
