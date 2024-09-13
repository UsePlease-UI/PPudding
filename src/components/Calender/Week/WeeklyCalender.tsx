import { useCalender } from '@components/useCalender';

import { joinClassNames } from '@utils/format';

import WeekDays from './WeekDays';

// TODO
export default function WeeklyCalender() {
  const { date, getWeeks } = useCalender();

  const week = getWeeks()
    .map((elem, index) => {
      if (elem.includes(String(date))) {
        return index;
      }
      return -1;
    })
    .filter((el) => el > 0);

  const weeklyWeek = Number(week);

  return (
    <div className="flex items-center gap-5">
      {getWeeks()[weeklyWeek].map((day) => (
        <WeekDays key={day}>
          <span className={joinClassNames(day === String(date) && 'text-red-600')}>{day}</span>
        </WeekDays>
      ))}
    </div>
  );
}
