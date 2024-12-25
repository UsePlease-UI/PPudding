import dayjs, { OpUnitType } from 'dayjs';

export type DateObjType = {
  date: number;
  month: number;
  year: number;
};

export type DatesType = DateObjType[][];

type TempDatesType = (DateObjType | null)[];

export const getDates = (currentDate: dayjs.Dayjs | string) => {
  const now = dayjs(currentDate);
  const month = now.get('month') + 1;
  const firstDay = now.startOf('month');
  const lastDay = now.endOf('month');

  const prev = now.subtract(1, 'month');
  const prevMonth = prev.get('month') + 1;
  const prevLastDay = prev.endOf('month');

  const next = now.add(1, 'month');

  const list: TempDatesType[] = [];
  let prevDays = 0;
  let remainingDays = 1;
  for (let i = firstDay.get('date'); i <= lastDay.get('date'); i += 7) {
    const row: TempDatesType = [];
    for (let j = 0; j < 7; j++) {
      if (i === 1 && j < firstDay.get('day')) {
        // 지난 달
        row.push(null);
        prevDays++;
      } else if (i + j - prevDays <= lastDay.get('date')) {
        // 이번 달
        row.push({ year: now.get('year'), month, date: i + j - prevDays });
      } else {
        // 다음 달
        row.push({ year: next.get('year'), month: month + 1, date: remainingDays++ });
      }
    }
    list.push(row);
  }

  // 지난 달
  for (let i = 0; i < 7; i++) {
    if (!list[0][i]) {
      list[0][i] = {
        year: prev.get('year'),
        month: prevMonth,
        date: prevLastDay.subtract(prevDays - i - 1, 'day').get('date'),
      };
    }
  }

  return list as DatesType;
};

export const isSameDate = (date: string, format: OpUnitType) => {
  return dayjs(date).isSame(dayjs(), format);
};
