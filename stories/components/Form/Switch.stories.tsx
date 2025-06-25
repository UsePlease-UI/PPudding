import { ChangeEvent } from 'react';

import { useArgs } from 'storybook/preview-api';

import Switch from '@components/Form/Switch';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  args: {
    checked: false,
    isDisabled: false,
    label: '푸시 알림',
    position: 'end',
    stateText: '',
    thumb: null,
  },
  argTypes: {
    checked: { table: { disable: true } },
    isDisabled: {
      control: 'boolean',
      description: 'if true, the component will be disabled',
      table: {
        category: 'optional',
      },
    },
    label: {
      control: 'text',
      description: 'content of the component',
      table: {
        category: 'optional',
        type: {
          summary: 'ReactNode',
        },
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
    position: {
      control: {
        type: 'inline-radio',
      },
      description: 'switch label position',
      options: ['start', 'end'],
      table: {
        category: 'optional',
        type: {
          summary: 'start | end',
        },
      },
    },
    stateText: {
      control: 'text',
      description: 'text equivalent of the state (on or off)',
      table: {
        category: 'optional',
        type: {
          summary: 'string',
        },
      },
    },
    thumb: {
      control: false,
      description: 'custom switch thumb',
      table: {
        category: 'optional',
        type: {
          summary: 'ReactNode',
        },
      },
    },
  },
  component: Switch,
  parameters: {
    docs: {
      argTypes: {
        sort: 'requiredFirst',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Form/Switch',
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Switch1Default: Story = {
  args: {
    checked: true,
    isDisabled: true,
    label: '푸시 알림',
    position: 'start',
  },
  render: function Render(args) {
    const [{ checked }, updateArgs] = useArgs();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      updateArgs({ checked: e.currentTarget.checked });
    };

    return (
      <fieldset className="w-full max-w-90 space-y-5">
        <legend className="text-12 font-semibold text-gray-600">알림</legend>
        <Switch {...args} checked={checked} onChange={handleChange} />
        <br />
        <Switch label="새 공지 알림" position="start" />
        <Switch label="서비스 알림" position="start" />
      </fieldset>
    );
  },
};

export const Switch2CustomThumb: Story = {
  args: {
    checked: true,
    label: '푸시 알림',
    position: 'start',
  },
  render: function Render(args) {
    const [{ checked, isDisabled }, updateArgs] = useArgs();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      updateArgs({ checked: e.currentTarget.checked });
    };

    return (
      <fieldset className="w-full max-w-90 space-y-5">
        <legend className="text-12 font-semibold text-gray-600">알림</legend>
        <Switch
          {...args}
          checked={checked}
          className={isDisabled ? 'bg-red-900' : ''}
          onChange={handleChange}
          thumb={
            <span className="size-6 rounded-full bg-red-500 transition-transform peer-checked:translate-x-6 peer-disabled:bg-gray-400" />
          }
        />
        <br />
        <Switch label="새 공지 알림" position="start" />
        <Switch label="서비스 알림" position="start" />
      </fieldset>
    );
  },
};

export const Switch3CustomLabel: Story = {
  args: {
    checked: true,
    label: '푸쉬 알림',
    position: 'start',
  },
  render: function Render(args) {
    const [{ checked, isDisabled }, updateArgs] = useArgs();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      updateArgs({ checked: e.currentTarget.checked });
    };

    return (
      <fieldset className="w-full max-w-90 space-y-5">
        <legend className="text-12 font-semibold text-gray-600">알림</legend>
        <Switch
          {...args}
          checked={checked}
          className={isDisabled ? 'bg-red-900' : ''}
          label={<span className="cursor-pointer text-18 font-bold text-pink-600">{args.label}</span>}
          onChange={handleChange}
        />
        <br />
        <Switch label="새 공지 알림" position="start" />
        <Switch label="서비스 알림" position="start" />
      </fieldset>
    );
  },
};

export const Switch3WithStateText: Story = {
  args: {
    checked: true,
    label: '푸시 알림',
    position: 'start',
    stateText: 'ON',
  },
  render: function Render(args) {
    const [{ checked }, updateArgs] = useArgs();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      updateArgs({ checked: e.currentTarget.checked });
    };

    return (
      <fieldset className="w-full max-w-90 space-y-5">
        <legend className="text-12 font-semibold text-gray-600">알림</legend>
        <Switch {...args} checked={checked} onChange={handleChange} />
        <br />
        <Switch label="새 공지 알림" position="start" />
        <Switch label="서비스 알림" position="start" />
      </fieldset>
    );
  },
};
