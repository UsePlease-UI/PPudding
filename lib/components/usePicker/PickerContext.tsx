import { createContext } from 'react';

import { Dayjs } from 'dayjs';

import { DateObjType } from '@components/Picker/utils';

export type PickerDateType = Date | null;

export interface PickerContextType {
  current: Dayjs;
  isDateDisabled: (date: DateObjType) => boolean;
  isNextYearDisabled: boolean;
  isOpen: boolean;
  isPrevYearDisabled: boolean;
  selected: PickerDateType;
  isMonthDisabled: (date: string) => boolean;
  isNextMonthDisabled: boolean;
  isPrevMonthDisabled: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  onDateChange: (formattedDate: string) => void;
  onDatePickerClick: () => void;
  onMonthChange: (month: string) => void;
  onYearChange: (isPreviousMonth: boolean) => void;
  onYearMonthChange: (isPreviousMonth: boolean) => void;
  dates?: DateObjType[][];
  dateValue?: PickerDateType;
}

export const PickerContext = createContext<PickerContextType | undefined>(undefined);
