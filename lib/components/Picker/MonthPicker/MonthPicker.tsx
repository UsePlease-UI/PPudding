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
                      'h-12 w-12 rounded font-normal text-primary-900 hover:border hover:border-primary-900 hover:bg-inherit hover:text-primary-900 disabled:pointer-events-none disabled:text-gray-600',
                      isSameDate(currentMonth, 'month') &&
                        'border border-primary-700 font-semibold text-primary-700 hover:border-primary-800 disabled:pointer-events-none',
                      isSame &&
                        'bg-primary-800 font-semibold text-white hover:border-2 hover:border-primary-900 hover:bg-primary-900 hover:text-white disabled:bg-white',
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
