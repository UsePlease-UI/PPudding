import { FlexBox } from 'components/Base';
import WeekDays from 'components/Calender/WeekDays';
import { useCalender } from 'components/useCalender';

export default function WeeklyCalender() {
    const { context, getWeeks } = useCalender();
    const { date } = context;
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
        <FlexBox gap={20}>
            {getWeeks()[weeklyWeek].map((day) => (
                <WeekDays day={day} date={date}>
                    {day}
                </WeekDays>
            ))}
        </FlexBox>
    );
}
