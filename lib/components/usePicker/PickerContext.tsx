import { createContext } from 'react';

import { Dayjs } from 'dayjs';

import { DateObjType } from '@components/Picker/utils';

export type PickerDateType = Date | null;

export type PickerContextType = {
  current: Dayjs;
  datePickerId: string;
  isDateDisabled: (date: DateObjType) => boolean;
  isOpen: boolean;
  selected: PickerDateType;
  containerId: string;
  isMonthDisabled: (date: string) => boolean;
  onCancel: () => void;
  onConfirm: () => void;
  onDateChange: (formattedDate: string) => void;
  onDatePickerClick: () => void;
  onMonthChange: (month: string) => void;
  onYearChange: (isPreviousMonth: boolean) => void;
  onYearMonthChange: (isPreviousMonth: boolean) => void;
  dates?: DateObjType[][];
  dateValue?: PickerDateType;
};

export const PickerContext = createContext<PickerContextType | undefined>(undefined);
