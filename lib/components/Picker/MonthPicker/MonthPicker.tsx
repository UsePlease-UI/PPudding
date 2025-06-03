import { ReactNode } from 'react';

import dayjs from 'dayjs';

import { usePicker } from '@components/usePicker';

import { joinClassNames } from '@utils/format';

import { PickerButton, PickerFooter, PickerHeader } from '../Common';
import { isSameDate } from '../utils';

const MONTH_LIST = Array.from({ length: 12 }, (_, idx) => `${idx + 1}`);

export interface MonthPickerType {
  helperText?: string;
  labelText?: string;
  dateFormat?: string;
  icon?: ReactNode;
  placeholder?: string;
}

export default function MonthPicker(props: MonthPickerType) {
  const { dateFormat = 'YYYY-MM', helperText, icon, labelText, placeholder = 'YYYY-MM' } = props;
  const {
    containerId,
    current,
    datePickerId,
    dateValue,
    isMonthDisabled,
    isOpen,
    onCancel,
    onConfirm,
    onDatePickerClick,
    onMonthChange,
    onYearChange,
    selected,
  } = usePicker();

  return (
    <div>
      <div className="w-max" id={containerId}>
        <PickerButton
          helperText={helperText}
          labelText={labelText}
          value={dateValue}
          dateFormat={dateFormat}
          icon={icon}
          onClick={onDatePickerClick}
          placeholder={placeholder}
        />
      </div>
      {isOpen && (
        <div className="fixed z-1000 flex w-max flex-col rounded bg-white p-5 shadow-02" id={datePickerId}>
          <PickerHeader year={current.get('year')} onClick={onYearChange} />
          <div className="mb-5 grid w-59.5 grid-cols-4 gap-2.5">
            {MONTH_LIST.map((month) => {
              const currentMonth = `${current.get('year')}-${month.padStart(2, '0')}`;
              const isSame = dayjs(selected).isSame(currentMonth, 'month');

              return (
                <div key={month} className="my-0.5 flex size-13 items-center justify-center">
                  <button
                    disabled={isMonthDisabled(currentMonth)}
                    type="button"
                    onClick={() => onMonthChange(month)}
                    className={joinClassNames(
                      'h-12 w-12 rounded border border-transparent bg-white font-normal text-black hover:border-black disabled:pointer-events-none disabled:text-gray-600',
                      isSameDate(currentMonth, 'month') &&
                        'border border-black font-semibold text-black hover:bg-gray-100 active:bg-gray-200 disabled:border-transparent',
                      isSame &&
                        'border-black bg-black font-semibold text-white hover:bg-black hover:text-white hover:opacity-80 active:bg-black active:opacity-70 disabled:border-gray-400 disabled:bg-gray-100',
                    )}
                  >
                    {month}월
                  </button>
                </div>
              );
            })}
          </div>
          <PickerFooter onCancel={onCancel} onConfirm={onConfirm} />
        </div>
      )}
    </div>
  );
}
