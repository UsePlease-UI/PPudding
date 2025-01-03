import { useCalendar } from '@components/useCalendar';

// TODO
export default function DailyCalender() {
  const { date, month, year } = useCalendar();

  return <div>{`${year}년 ${month}월 ${date}일`}</div>;
}
