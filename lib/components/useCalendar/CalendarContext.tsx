import { createContext, Dispatch } from 'react';

import { Dayjs } from 'dayjs';

export type ScheduleListType = {
  endDate: string;
  idx: string;
  isAllDay: boolean;
  startDate: string;
  title: string;
  color: string;
  description: string;
};

export type CalenderActionType =
  | { idx: string; type: 'DELETE_SCHEDULE' }
  | { type: 'ADD_SCHEDULE' | 'UPDATE_SCHEDULE'; payload: ScheduleListType }
  | { type: 'NEXT_MONTH' }
  | { type: 'PREV_MONTH' };

export type CalenderContextType = {
  date: number;
  scheduleList: ScheduleListType[];
  year: number;
  month: number;
  today: Dayjs;
};

export const CalenderContext = createContext<CalenderContextType | undefined>(undefined);

export const CalendarActionContext = createContext<Dispatch<CalenderActionType> | undefined>(undefined);
