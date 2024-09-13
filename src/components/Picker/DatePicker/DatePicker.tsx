import { ReactNode } from 'react';

import dayjs from 'dayjs';

import { usePicker } from '@components/usePicker';

import { joinClassNames } from '@utils/format';

import { PickerButton, PickerFooter, PickerHeader, PickerWeekDays } from '../Common';

const TODAY = dayjs();

type DatePickerType = {
    dateFormat?: string;
    helperText?: string;
    icon?: ReactNode;
    labelText?: string;
    placeholder?: string;
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
                    dateFormat={dateFormat}
                    helperText={helperText}
                    icon={icon}
                    labelText={labelText}
                    placeholder={placeholder}
                    value={dateValue}
                    onClick={onDatePickerClick}
                />
            </div>
            {isOpen && (
                <div className="fixed z-1000 flex w-max flex-col rounded bg-white p-5 shadow-02" id={datePickerId}>
                    <PickerHeader
                        month={`${current.get('month') + 1}`.padStart(2, '0')}
                        year={current.get('year')}
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
                                            className={joinClassNames(
                                                'h-10 w-10 rounded-full bg-inherit font-normal text-primary-900 hover:border hover:border-primary-900 hover:bg-inherit hover:text-primary-900 disabled:pointer-events-none disabled:font-normal disabled:text-gray-200',
                                                dayjs(formattedDate).isSame(TODAY, 'date') &&
                                                    'border border-primary-700 font-semibold text-primary-800 hover:border-primary-800 disabled:border-none',
                                                dayjs(selected).isSame(formattedDate) &&
                                                    'bg-primary-800 font-semibold text-white hover:border-2 hover:border-primary-900 hover:bg-primary-900 hover:text-white disabled:bg-white',
                                            )}
                                            onClick={() => onDateChange(formattedDate)}
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
