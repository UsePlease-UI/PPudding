import { ReactNode } from 'react';

import { PickerDateType, PickerProvider } from '@components/usePicker';

import DatePicker from './DatePicker';
import MonthPicker from './MonthPicker';

export interface PickerType {
  helperText?: string;
  labelText?: string;
  maxDate?: PickerDateType;
  minDate?: PickerDateType;
  value?: PickerDateType;
  dateFormat?: string;
  icon?: ReactNode;
  onCancel?: () => void;
  onChange?: (date: Date) => void;
  onSelect?: (date: PickerDateType) => void;
  placeholder?: string;
  showMonthPicker?: boolean;
}

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
