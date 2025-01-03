import { default as dayjs } from 'dayjs';
declare const useCalendar: () => {
    getWeeks: () => string[][];
    handleCalendar: import('../../../node_modules/react').Dispatch<import('./CalendarContext').CalenderActionType>;
    date: number;
    scheduleList: import('./CalendarContext').ScheduleListType[];
    year: number;
    month: number;
    today: dayjs.Dayjs;
};
export default useCalendar;
