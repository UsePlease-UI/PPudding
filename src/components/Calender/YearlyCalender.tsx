import { FlexBox } from "components/Base";
import MonthlyCalender from "components/Calender/MonthlyCalender";

const ONE_YEARS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];



export default function YearlyCalender() {
  return (
    <FlexBox flexWrap="wrap">
      {
        ONE_YEARS.map((el: number) => (
          <MonthlyCalender key={el} />
          )
        )
      }
    </FlexBox>
  )
}