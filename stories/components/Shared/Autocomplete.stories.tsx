import { useCallback, useMemo } from 'react';

import { useArgs } from '@storybook/preview-api';
import { fn } from '@storybook/test';
import debounce from 'lodash.debounce';

import Autocomplete from '@components/Shared/Autocomplete';
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
    helperText: {
      control: 'text',
      description: 'extra description of the component',
      table: {
        category: 'optional',
      },
    },
    labelText: {
      control: 'text',
      description: 'content of label component',
      table: {
        category: 'optional',
      },
    },
    name: {
      control: 'text',
      description: 'name attribute of the input element',
      table: {
        category: 'required',
        type: {
          summary: 'string',
        },
      },
    },
    onChange: {
      control: false,
      description: 'callback fired when new value is entered or selected',
      table: {
        category: 'required',
        type: {
          summary: '(newValue: string) => void',
        },
      },
    },
    onSelect: {
      control: false,
      description: 'callback fired when select is clicked (undefined is returned when there is no entered value)',
      table: {
        category: 'required',
        type: {
          summary: '(selected?: { label: string; value: string; idx?: string }) => void',
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
  title: 'Shared/Autocomplete',
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof Autocomplete>;

export const Default: Story = {
  args: {
    labelText: 'Lorem Ipsum',
    name: 'lorem ipsum',
    options: AUTOCOMPLETE_LIST,
    value: '',
  },
  render: function Render(args) {
    const [{ options, value }, updateArgs] = useArgs();

    const debouncedSearch = useMemo(
      () =>
        debounce((value: string) => {
          if (value.length !== 0 && value !== '') {
            const newArr = AUTOCOMPLETE_LIST.filter((el) => el.label.includes(value as string));
            updateArgs({ options: newArr });
          } else {
            updateArgs({ options: AUTOCOMPLETE_LIST });
          }
        }, 100),
      [updateArgs],
    );

    const handleSearch = useCallback((value: string) => debouncedSearch(value), [debouncedSearch]);

    const handleChange = useCallback(
      (newValue: string) => {
        updateArgs({ value: newValue });
        handleSearch(newValue);
      },
      [updateArgs, handleSearch],
    );

    const handleSelect = useCallback(
      (selected?: OptionsType) => updateArgs({ value: selected?.label || '' }),
      [updateArgs],
    );

    return (
      <>
        <div className="max-w-80">
          <Autocomplete {...args} value={value} onChange={handleChange} onSelect={handleSelect} options={options} />
        </div>
      </>
    );
  },
};
