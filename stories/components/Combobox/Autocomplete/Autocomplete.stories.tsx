import { useCallback, useId, useMemo } from 'react';

import debounce from 'lodash.debounce';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';

import { FormControl, ListboxOptionType } from '@components/Base';
import Autocomplete from '@components/Combobox/Autocomplete';

import { AUTOCOMPLETE_LIST } from '../../constants';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  args: {
    isDisabled: false,
    isReadOnly: false,
    onChange: fn(),
    onSelect: fn(),
    options: AUTOCOMPLETE_LIST,
    value: '',
  },
  argTypes: {
    isDisabled: {
      control: 'boolean',
      description: 'if true, the component will be disabled',
      table: {
        category: 'optional',
      },
    },
    isReadOnly: {
      control: 'boolean',
      description: 'if true, user cannot change the value of the component',
      table: {
        category: 'optional',
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
  title: 'Combobox/Autocomplete',
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof Autocomplete>;

export const Default: Story = {
  args: {
    options: AUTOCOMPLETE_LIST,
    value: '',
  },
  render: function Render(args) {
    const [{ options, value }, updateArgs] = useArgs();

    const inputId = useId();
    const labelTextId = useId();

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
      (selected?: ListboxOptionType) => updateArgs({ value: selected?.label || '' }),
      [updateArgs],
    );

    return (
      <>
        <div className="max-w-80">
          <FormControl inputId={inputId} labelText="Lorem Ipsum" labelTextId={labelTextId}>
            <Autocomplete
              {...args}
              aria-labelledby={labelTextId}
              id={inputId}
              value={value}
              onChange={handleChange}
              onSelect={handleSelect}
              options={options}
            />
          </FormControl>
        </div>
      </>
    );
  },
};
