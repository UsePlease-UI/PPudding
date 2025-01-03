import { ChangeEvent, useCallback, useMemo } from 'react';

import { useArgs } from '@storybook/preview-api';
import { fn } from '@storybook/test';
import debounce from 'lodash.debounce';

import Autocomplete from '@components/Combobox/Autocomplete';
import { OptionsType } from '@components/types';

import { AUTOCOMPLETE_LIST } from '../constants';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  args: {
    labelText: '',
    onChange: fn(),
    onSelect: fn(),
    options: AUTOCOMPLETE_LIST,
    value: '',
  },
  argTypes: {
    labelText: {
      control: 'text',
      description: 'content of label component',
      table: {
        category: 'optional',
      },
    },
    onChange: {
      control: false,
      description: 'change event handler',
      table: {
        category: 'required',
        type: {
          summary: '(e: ChangeEvent<HTMLInputElement>) => void',
        },
      },
    },
    onSelect: {
      control: false,
      description: 'callback fired when select is clicked',
      table: {
        category: 'required',
        type: {
          summary: '(selected: { label: string; value: string; idx?: string }) => void',
        },
      },
    },
    options: {
      control: 'object',
      description: 'options to be shown',
      table: {
        category: 'required',
        type: {
          summary: '{ label : string; value: string; idx?: string }',
        },
      },
    },
    value: {
      control: false,
      description: 'value attribute of the input element',
      table: {
        category: 'required',
        type: {
          summary: 'string',
        },
      },
      type: 'string',
    },
  },
  component: Autocomplete,
  parameters: {
    docs: {
      argTypes: {
        sort: 'requiredFirst',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Combobox/Autocomplete',
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof Autocomplete>;

export const Default: Story = {
  args: {
    labelText: 'Autocomplete Example',
    options: AUTOCOMPLETE_LIST,
    value: '',
  },
  render: function Render(args) {
    const [{ options, value }, updateArgs] = useArgs();

    const debouncedSearch = useMemo(
      () =>
        debounce((value: string) => {
          let newArr = [];
          if (value.length !== 0 || value !== '') {
            newArr = AUTOCOMPLETE_LIST.filter((el: OptionsType) => el.label.includes(value));
            updateArgs({ options: newArr });
          }

          if (value.length === 0) {
            updateArgs({ options: AUTOCOMPLETE_LIST });
          }
        }, 100),
      [updateArgs],
    );

    const handleSearch = useCallback((value: string) => debouncedSearch(value), [debouncedSearch]);

    const handleChange = useCallback(
      ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
        updateArgs({ value });
        handleSearch(value);
      },
      [updateArgs, handleSearch],
    );

    const handleSelect = useCallback((selected: OptionsType) => updateArgs({ value: selected.label }), [updateArgs]);

    return (
      <div className="flex flex-col gap-2.5">
        <Autocomplete {...args} value={value} onChange={handleChange} onSelect={handleSelect} options={options} />
      </div>
    );
  },
};
