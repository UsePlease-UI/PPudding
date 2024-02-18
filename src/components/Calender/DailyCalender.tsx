import { useCalender } from 'hooks/useCalender';

export default function DailyCalender() {
    const { context } = useCalender();
    const { year, month, date } = context;

    return <div>{`${year}년 ${month}월 ${date}일`}</div>;
}
