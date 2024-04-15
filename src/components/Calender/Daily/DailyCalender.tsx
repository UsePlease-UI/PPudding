import { useCalender } from '@components/useCalender';

// TODO
export default function DailyCalender() {
    const { year, month, date } = useCalender();

    return <div>{`${year}년 ${month}월 ${date}일`}</div>;
}
