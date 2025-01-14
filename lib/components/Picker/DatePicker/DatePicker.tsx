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
                        'h-10 w-10 rounded-full bg-inherit font-normal text-primary-900 hover:border hover:border-primary-900 hover:bg-inherit hover:text-primary-900 disabled:pointer-events-none disabled:font-normal disabled:text-gray-200',
                        dayjs(formattedDate).isSame(TODAY, 'date') &&
                          'border border-primary-700 font-semibold text-primary-800 hover:border-primary-800 disabled:border-none',
                        dayjs(selected).isSame(formattedDate) &&
                          'bg-primary-800 font-semibold text-white hover:border-2 hover:border-primary-900 hover:bg-primary-900 hover:text-white disabled:bg-white',
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
