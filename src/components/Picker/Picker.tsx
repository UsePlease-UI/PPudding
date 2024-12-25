import { ReactNode } from 'react';

import { PickerDateType, PickerProvider } from '@components/usePicker';

import DatePicker from './DatePicker';
import MonthPicker from './MonthPicker';

type PickerType = {
  dateFormat?: string;
  helperText?: string;
  icon?: ReactNode;
  labelText?: string;
  maxDate?: PickerDateType;
  minDate?: PickerDateType;
  placeholder?: string;
  showMonthPicker?: boolean;
  value?: PickerDateType;
  onCancel?: () => void;
  onChange?: (date: Date) => void;
  onSelect?: (date: PickerDateType) => void;
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
  const { maxDate, minDate, onCancel, onChange, onSelect, value } = props;

  return (
    <PickerProvider
      maxDate={maxDate}
      minDate={minDate}
      value={value}
      onCancel={onCancel}
      onChange={onChange}
      onSelect={onSelect}
    >
      {showMonthPicker ? <MonthPicker {...props} /> : <DatePicker {...props} />}
    </PickerProvider>
  );
}
