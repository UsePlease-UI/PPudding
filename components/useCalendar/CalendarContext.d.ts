import { Dispatch } from '../../../node_modules/react';
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
export type CalenderActionType = {
    idx: string;
    type: 'DELETE_SCHEDULE';
} | {
    type: 'ADD_SCHEDULE' | 'UPDATE_SCHEDULE';
    payload: ScheduleListType;
} | {
    type: 'NEXT_MONTH';
} | {
    type: 'PREV_MONTH';
};
export type CalenderContextType = {
    date: number;
    scheduleList: ScheduleListType[];
    year: number;
    month: number;
    today: Dayjs;
};
export declare const CalenderContext: import('../../../node_modules/react').Context<CalenderContextType | undefined>;
export declare const CalendarActionContext: import('../../../node_modules/react').Context<Dispatch<CalenderActionType> | undefined>;
