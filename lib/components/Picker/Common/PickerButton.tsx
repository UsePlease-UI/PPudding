import { ReactNode } from 'react';

import dayjs from 'dayjs';

import { CalendarIcon } from '@heroicons/react/24/solid';

import IconButton from '@components/Button/IconButton';
import { PickerDateType } from '@components/usePicker';

import { joinClassNames } from '@utils/format';

interface PickerButtonType {
  helperText?: string;
  labelText?: string;
  value?: PickerDateType;
  dateFormat?: string;
  icon?: ReactNode;
  onClick?: () => void;
  placeholder?: string;
}

export default function PickerButton(props: PickerButtonType) {
  const { dateFormat, helperText, icon, labelText, onClick, placeholder, value } = props;

  return (
    <>
      {labelText && <p className="ml-1 w-full text-left text-10 font-semibold leading-16">{labelText}</p>}
      <div className="flex w-full min-w-50 cursor-default items-center justify-between overflow-hidden rounded border border-gray-900">
        <p
          className={joinClassNames(
            'flex-1 pl-2 text-left text-14 font-medium text-primary-950',
            !value && placeholder && 'text-gray-400',
          )}
        >
          {value ? dayjs(value).format(dateFormat) : placeholder}
        </p>
        <IconButton size="medium" variant="text" onClick={onClick}>
          {icon || <CalendarIcon />}
        </IconButton>
      </div>
      {helperText && <p className="ml-1 w-full text-left text-10 font-semibold leading-16">{helperText}</p>}
    </>
  );
}
