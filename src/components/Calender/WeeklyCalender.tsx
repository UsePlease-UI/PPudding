import { FlexBox, Typography } from "components/Base";
import useCalender from "hooks/useCalender";

export default function WeeklyCalender() {
  const { date, getWeeks } = useCalender();

  const week = getWeeks().map((elem, index) => {
    if (elem.includes(String(date))) {
      return index;
    }
    return -1;
  }).filter((el) => el > 0);

  const weeklyWeek = Number(week);

  return (
    <FlexBox gap={20}>
      {getWeeks()[weeklyWeek].map((el) => (
        <Typography color={el === String(date) ? 'tomato' : ''} component="span">{el}</Typography>
      ))}
    </FlexBox>
  )
}