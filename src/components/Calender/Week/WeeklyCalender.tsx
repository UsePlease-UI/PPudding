import { FlexBox, Typography } from '@components/Base';
import { useCalender } from '@components/useCalender';

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
        <FlexBox gap="gap-20">
            {getWeeks()[weeklyWeek].map((day) => (
                <WeekDays key={day}>
                    <Typography component="span" color={day === String(date) ? 'text-red-600' : undefined}>
                        {day}
                    </Typography>
                </WeekDays>
            ))}
        </FlexBox>
    );
}
