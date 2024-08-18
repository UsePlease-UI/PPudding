import { ReactNode } from 'react';

import dayjs from 'dayjs';

import { usePicker } from '@components/usePicker';

import { joinClassNames } from '@utils/format';

import { PickerButton, PickerFooter, PickerHeader, PickerWeekDays } from '../Common';

const TODAY = dayjs();

type DatePickerType = {
    dateFormat?: string;
    placeholder?: string;
    labelText?: string;
    helperText?: string;
    icon?: ReactNode;
};

/**
 *  [UI Component] Date Picker Component
 *  @param value 선택된 날짜
 *  @param minDate Minimum Date
 *  @param maxDate Maximum Date
 *  @param dateFormat 날짜 형식
 *  @param placeholder Placeholder
 *  @param labelText Date Picker Label 텍스트
 *  @param helperText Date Picker 설명 텍스트
 *  @param icon ReactNode
 *  @param onChange Date Change Handler
 *  @param onSelect Confirm Handler
 *  @param onCancel Cancel Handler
 *  @returns JSX.Element
 */
export default function DatePicker(props: DatePickerType) {
    const { dateFormat = 'YYYY-MM-DD', placeholder = 'YYYY-MM-DD', labelText, helperText, icon } = props;

    const {
        containerId,
        datePickerId,
        isOpen,
        current,
        dateValue,
        selected,
        dates,
        isDateDisabled,
        onYearMonthChange,
        onDateChange,
        onDatePickerClick,
        onConfirm,
        onCancel
    } = usePicker();

    return (
        <div>
            <div id={containerId} className="w-max">
                <PickerButton
                    labelText={labelText}
                    helperText={helperText}
                    placeholder={placeholder}
                    dateFormat={dateFormat}
                    value={dateValue}
                    icon={icon}
                    onClick={onDatePickerClick}
                />
            </div>
            {isOpen && (
                <div id={datePickerId} className="fixed z-1000 flex w-max flex-col rounded bg-white p-5 shadow-02">
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
                                    <div key={col.date} className="my-0.5 flex h-11 w-11 items-center justify-center">
                                        <button
                                            type="button"
                                            disabled={isDateDisabled(col)}
                                            onClick={() => onDateChange(formattedDate)}
                                            className={joinClassNames(
                                                'h-10 w-10 rounded-full bg-inherit font-normal text-primary-900 hover:border hover:border-primary-900 hover:bg-inherit hover:text-primary-900 disabled:pointer-events-none disabled:font-normal disabled:text-gray-200',
                                                dayjs(formattedDate).isSame(TODAY, 'date') &&
                                                    'border border-primary-700 font-semibold text-primary-800 hover:border-primary-800 disabled:border-none',
                                                dayjs(selected).isSame(formattedDate) &&
                                                    'bg-primary-800 font-semibold text-white hover:border-2 hover:border-primary-900 hover:bg-primary-900 hover:text-white disabled:bg-white'
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
