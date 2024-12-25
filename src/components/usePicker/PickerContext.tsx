import { createContext } from 'react';

import { Dayjs } from 'dayjs';

import { DateObjType } from '@components/Picker/utils';

export type PickerDateType = Date | null;

export type PickerContextType = {
  containerId: string;
  current: Dayjs;
  datePickerId: string;
  isDateDisabled: (date: DateObjType) => boolean;
  isMonthDisabled: (date: string) => boolean;
  isOpen: boolean;
  selected: PickerDateType;
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
