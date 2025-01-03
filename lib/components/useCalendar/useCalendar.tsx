import { useCallback, useContext } from 'react';

import dayjs from 'dayjs';

import { CalendarActionContext, CalenderContext } from './CalendarContext';

const useCalendar = () => {
  const context = useContext(CalenderContext);
  const calendarDispatch = useContext(CalendarActionContext);

  if (!context) {
    throw new Error('CalenderContext.Provider를 사용해주세요');
  }

  if (!calendarDispatch) {
    throw new Error('CalendarActionContext.Provider를 사용해주세요');
  }

  const { date, month, year } = context;

  const getWeeks = useCallback(() => {
    const firstDay = dayjs(`${year}-${month}-${date}`).startOf('month').locale('ko').get('day');
    const lastDay = dayjs(`${year}-${month}`).daysInMonth();
    const weeks = [];
    const week = [];
    const chunkSize = 7;

    for (let i = 1; i <= lastDay; i++) {
      week.push(String(i));
    }

    for (let i = 0; i < firstDay; i++) {
      week.splice(0, 0, '');
    }

    for (let i = 0; i < week.length; i += chunkSize) {
      const newArr = week.slice(i, i + chunkSize);
      if (newArr.length < chunkSize) {
        const remainder = chunkSize - newArr.length;

        for (let j = 0; j < remainder; j++) {
          newArr.push('');
        }
      }

      weeks.push(newArr);
    }

    return weeks;
  }, [month, date, year]);

  return {
    ...context,
    getWeeks,
    handleCalendar: calendarDispatch,
  };
};

export default useCalendar;
