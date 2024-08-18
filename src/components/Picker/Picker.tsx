import { ReactNode } from 'react';

import DatePicker from './DatePicker';
import MonthPicker from './MonthPicker';
import { PickerProvider, DateType } from '../usePicker';

type PickerType = {
    showMonthPicker?: boolean;
    value?: DateType;
    minDate?: DateType;
    maxDate?: DateType;
    dateFormat?: string;
    placeholder?: string;
    labelText?: string;
    helperText?: string;
    icon?: ReactNode;
    onChange?: (date: Date) => void;
    onSelect?: (date: DateType) => void;
    onCancel?: () => void;
};

/**
 *  [UI Component] Picker Component
 *  @param showMonthPicker Show Month Picker
 *  @param value 선택된 날짜
 *  @param minDate Minimum Date
 *  @param maxDate Maximum Date
 *  @param dateFormat 날짜 형식
 *  @param placeholder Placeholder
 *  @param labelText Picker Label 텍스트
 *  @param helperText Picker 설명 텍스트
 *  @param icon ReactNode
 *  @param onChange Date Change Handler
 *  @param onSelect Confirm Handler
 *  @param onCancel Cancel Handler
 *  @returns JSX.Element
 */
export default function Picker({ showMonthPicker, ...props }: PickerType) {
    const { value, minDate, maxDate, onChange, onSelect, onCancel } = props;

    return (
        <PickerProvider
            value={value}
            minDate={minDate}
            maxDate={maxDate}
            onChange={onChange}
            onSelect={onSelect}
            onCancel={onCancel}
        >
            {showMonthPicker ? <MonthPicker {...props} /> : <DatePicker {...props} />}
        </PickerProvider>
    );
}
