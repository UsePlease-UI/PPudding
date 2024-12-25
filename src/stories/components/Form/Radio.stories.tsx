import { useState } from 'react';

import { expect, within } from '@storybook/test';

import { Radio } from '@components/Form/Radio';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Radio> = {
  title: 'Form/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      argTypes: { exclude: ['currentValue', 'onChange'] },
      controls: { exclude: ['currentValue', 'onChange'] },
    },
    layout: 'centered',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Radio>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  render: function Render(args) {
    const [value, setValue] = useState('red');
    return <Radio {...args} currentValue={value} onChange={(e) => setValue(e.currentTarget.value)} />;
  },
  args: {
    name: 'color',
    label: '빨강',
    value: 'red',
    size: 'small',
    isDisabled: false,
  },
};

// https://storybook.js.org/addons/@storybook/addon-interactions/
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const radio1 = canvas.getByRole('radio', { name: '빨강' });
  await expect(radio1).toBeChecked();
};
