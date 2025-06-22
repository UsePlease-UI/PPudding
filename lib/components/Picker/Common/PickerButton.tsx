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
      {labelText && <span className="ml-1 block w-full text-left text-10 font-semibold leading-16">{labelText}</span>}
      <div className="flex w-full min-w-50 cursor-default items-center justify-between overflow-hidden rounded border border-black">
        <span
          className={joinClassNames(
            'block flex-1 pl-2 text-left text-14 font-medium text-black',
            !value && placeholder && 'text-gray-600',
          )}
        >
          {value ? dayjs(value).format(dateFormat) : placeholder}
        </span>
        <IconButton size="medium" variant="text" onClick={onClick}>
          {icon || <CalendarIcon />}
        </IconButton>
      </div>
      {helperText && <span className="ml-1 block w-full text-left text-10 font-semibold leading-16">{helperText}</span>}
    </>
  );
}
