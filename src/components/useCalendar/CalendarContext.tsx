import { createContext, Dispatch } from 'react';

import { Dayjs } from 'dayjs';

export type ScheduleListType = {
  color: string;
  description: string;
  endDate: string;
  idx: string;
  isAllDay: boolean;
  startDate: string;
  title: string;
};

export type CalenderActionType =
  | { idx: string; type: 'DELETE_SCHEDULE' }
  | { payload: ScheduleListType; type: 'ADD_SCHEDULE' | 'UPDATE_SCHEDULE' }
  | { type: 'NEXT_MONTH' }
  | { type: 'PREV_MONTH' };

export type CalenderContextType = {
  date: number;
  month: number;
  scheduleList: ScheduleListType[];
  today: Dayjs;
  year: number;
};

export const CalenderContext = createContext<CalenderContextType | undefined>(undefined);

export const CalendarActionContext = createContext<Dispatch<CalenderActionType> | undefined>(undefined);
