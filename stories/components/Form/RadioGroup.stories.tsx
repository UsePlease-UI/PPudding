import { useArgs } from '@storybook/preview-api';
import { expect, within } from '@storybook/test';

import { Radio, RadioGroup } from '@components/Form/Radio';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RadioGroup> = {
  args: {
    children: null,
    gap: 10,
    isRow: true,
    value: 'red',
  },
  argTypes: {
    children: {
      control: false,
      description: 'radio component',
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
    gap: {
      control: 'number',
      description: 'horizontal / vertical spacing of the component',
      table: {
        category: 'optional',
      },
    },
    isRow: {
      control: 'boolean',
      description: 'if true, the component be shown horizontally',
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
          summary: '(e: ChangeEvent<HTMLInputElement>) => void',
        },
      },
    },
    value: {
      control: false,
      description: "selected radio's value",
      table: {
        category: 'required',
        type: {
          summary: 'string',
        },
      },
      type: 'string',
    },
  },
  component: RadioGroup,
  parameters: {
    docs: {
      argTypes: {
        sort: 'requiredFirst',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Form/RadioGroup',
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {
    gap: 10,
    isRow: true,
    value: 'red',
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();

    const handleChange = (newValue: string) => {
      updateArgs({ value: newValue });
    };

    return (
      <RadioGroup {...args} value={value} onChange={(e) => handleChange(e.currentTarget.value)}>
        <Radio label="빨강" name="color" value="red" />
        <Radio label="파랑" name="color" value="blue" />
      </RadioGroup>
    );
  },
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const radioGroup = canvas.getByRole('radiogroup');
  await expect(radioGroup).toBeInTheDocument();
  await expect(radioGroup).toHaveStyle('flex-direction: row');

  const radio1 = canvas.getByRole('radio', { name: '빨강' });
  await expect(radio1).toBeChecked();
  const radio2 = canvas.getByRole('radio', { name: '파랑' });
  await expect(radio2).not.toBeChecked();
};
