import { ReactNode } from 'react';

import dayjs from 'dayjs';

import { usePicker } from '@components/usePicker';

import { joinClassNames } from '@utils/format';

import { PickerButton, PickerFooter, PickerHeader } from '../Common';
import { isSameDate } from '../utils';

const MONTH_LIST = Array.from({ length: 12 }, (_, idx) => `${idx + 1}`);

type MonthPickerType = {
    dateFormat?: string;
    helperText?: string;
    icon?: ReactNode;
    labelText?: string;
    placeholder?: string;
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
                                        className={joinClassNames(
                                            'h-12 w-12 rounded font-normal text-primary-900 hover:border hover:border-primary-900 hover:bg-inherit hover:text-primary-900 disabled:pointer-events-none disabled:text-gray-600',
                                            isSameDate(currentMonth, 'month') &&
                                                'border border-primary-700 font-semibold text-primary-700 hover:border-primary-800 disabled:pointer-events-none',
                                            isSame &&
                                                'bg-primary-800 font-semibold text-white hover:border-2 hover:border-primary-900 hover:bg-primary-900 hover:text-white disabled:bg-white',
                                        )}
                                        onClick={() => onMonthChange(month)}
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
