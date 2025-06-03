import { ReactNode } from 'react';

import dayjs from 'dayjs';

import { usePicker } from '@components/usePicker';

import { joinClassNames } from '@utils/format';

import { PickerButton, PickerFooter, PickerHeader, PickerWeekDays } from '../Common';

const TODAY = dayjs();

export interface DatePickerType {
  helperText?: string;
  labelText?: string;
  dateFormat?: string;
  icon?: ReactNode;
  placeholder?: string;
}

export default function DatePicker(props: DatePickerType) {
  const { dateFormat = 'YYYY-MM-DD', helperText, icon, labelText, placeholder = 'YYYY-MM-DD' } = props;

  const {
    containerId,
    current,
    datePickerId,
    dates,
    dateValue,
    isDateDisabled,
    isOpen,
    onCancel,
    onConfirm,
    onDateChange,
    onDatePickerClick,
    onYearMonthChange,
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
          <PickerHeader
            year={current.get('year')}
            month={`${current.get('month') + 1}`.padStart(2, '0')}
            onClick={onYearMonthChange}
          />
          <PickerWeekDays />
          {dates?.map((row, idx) => (
            <div key={idx} className="flex h-full w-77">
              {row.map((col) => {
                const formattedDate = `${col.year}-${col.month}-${col.date}`;
                return (
                  <div key={col.date} className="my-0.5 flex size-11 items-center justify-center">
                    <button
                      disabled={isDateDisabled(col)}
                      type="button"
                      onClick={() => onDateChange(formattedDate)}
                      className={joinClassNames(
                        'h-10 w-10 rounded-full border border-transparent bg-white font-normal text-black hover:border-black disabled:pointer-events-none disabled:font-normal disabled:text-gray-600',
                        dayjs(formattedDate).isSame(TODAY, 'date') &&
                          'border border-black font-semibold text-black hover:bg-gray-100 active:bg-gray-200 disabled:border-transparent',
                        dayjs(selected).isSame(formattedDate) &&
                          'border-black bg-black font-semibold text-white hover:bg-black hover:text-white hover:opacity-80 active:bg-black active:opacity-70 disabled:border-gray-400 disabled:bg-gray-100',
                      )}
                    >
                      {col.date}
                    </button>
                  </div>
                );
              })}
            </div>
          ))}
          {dates && dates.length > 0 && <PickerFooter onCancel={onCancel} onConfirm={onConfirm} />}
        </div>
      )}
    </div>
  );
}
