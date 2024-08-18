import { ReactNode } from 'react';

import dayjs from 'dayjs';

import { usePicker } from '@components/usePicker';

import { joinClassNames } from '@utils/format';

import { PickerButton, PickerFooter, PickerHeader } from '../Common';
import { isSameDate } from '../utils';

const MONTH_LIST = Array.from({ length: 12 }, (_, idx) => `${idx + 1}`);

type MonthPickerType = {
    dateFormat?: string;
    placeholder?: string;
    labelText?: string;
    helperText?: string;
    icon?: ReactNode;
};

/**
 *  [UI Component] Month Picker Component
 *  @param value 선택된 날짜
 *  @param minDate Minimum Date
 *  @param maxDate Maximum Date
 *  @param dateFormat 날짜 형식
 *  @param placeholder Placeholder
 *  @param labelText Month Picker Label 텍스트
 *  @param helperText Month Picker 설명 텍스트
 *  @param icon ReactNode
 *  @param onChange Month Change Handler
 *  @param onSelect Confirm Handler
 *  @param onCancel Cancel Handler
 *  @returns JSX.Element
 */
export default function MonthPicker(props: MonthPickerType) {
    const { dateFormat = 'YYYY-MM', placeholder = 'YYYY-MM', labelText, helperText, icon } = props;
    const {
        containerId,
        datePickerId,
        isOpen,
        current,
        dateValue,
        selected,
        isMonthDisabled,
        onYearChange,
        onMonthChange,
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
                    <PickerHeader year={current.get('year')} onClick={onYearChange} />
                    <div className="mb-5 grid w-59.5 grid-cols-4 gap-2.5">
                        {MONTH_LIST.map((month) => {
                            const currentMonth = `${current.get('year')}-${month.padStart(2, '0')}`;
                            const isSame = dayjs(selected).isSame(currentMonth, 'month');

                            return (
                                <div key={month} className="my-0.5 flex h-13 w-13 items-center justify-center">
                                    <button
                                        type="button"
                                        disabled={isMonthDisabled(currentMonth)}
                                        onClick={() => onMonthChange(month)}
                                        className={joinClassNames(
                                            'h-12 w-12 rounded font-normal text-primary-900 hover:border hover:border-primary-900 hover:bg-inherit hover:text-primary-900 disabled:pointer-events-none disabled:text-gray-600',
                                            isSameDate(currentMonth, 'month') &&
                                                'border border-primary-700 font-semibold text-primary-700 hover:border-primary-800 disabled:pointer-events-none',
                                            isSame &&
                                                'bg-primary-800 font-semibold text-white hover:border-2 hover:border-primary-900 hover:bg-primary-900 hover:text-white disabled:bg-white'
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
