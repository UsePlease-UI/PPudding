import { useState } from "react";

import dayjs from "dayjs";

const useCalender = () => {
  const today = dayjs();
  const [year, setYear] = useState(today.get('year'));
  const [month, setMonth] = useState(today.get("month")+1);
  const date = today.get('date');
  const firstDay = dayjs(`${year}-${month}-${date}`).startOf('month').locale('ko').get('day');
  const lastDay = dayjs(`${year}-${month}`).daysInMonth();

  const getWeeks = () => {
      const weeks = [];
      const week = [];
      const chunkSize = 7;

      // eslint-disable-next-line no-plusplus
      for (let i = 1; i <= lastDay; i++){
        week.push(String(i));
      }
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < firstDay; i++) {
        week.splice(0, 0, '');
      }

      for (let i = 0; i < week.length; i += chunkSize) {
        weeks.push(week.slice(i, i + chunkSize));
      }
    return weeks;
  }

  return {
    year, setYear, month, setMonth, date, getWeeks
  }
}

export default useCalender;