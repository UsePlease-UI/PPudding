import { Typography, FlexBox } from 'components/Base';
import Button from 'components/Button/Button';
import useCalender from 'hooks/useCalender';

const SEVEN_DAYS = ['일', '월', '화', '수', '목', '금', '토'];

export default function MonthlyCalender(){
  const { month, setMonth, year, setYear, date, getWeeks } = useCalender();

    const prevMonth = () => {
        if (month === 1) {
            setMonth(12);
            setYear((prev) => prev - 1);
        } else {
            setMonth((prev) => prev - 1);
        }
    };

    const nextMonth = () => {
        if (month === 12) {
            setMonth(1);
            setYear((prev) => prev + 1);
        } else {
            setMonth((prev) => prev + 1);
        }
    };

    return (
      <div>
          <FlexBox alignItems="center">
            <Button size="small" variant='outlined' onClick={() => prevMonth()}>
              prev
            </Button>
            <Typography>{year}년 {month}월</Typography>
            <Button size="small" variant='outlined'   onClick={() => nextMonth()}>
              next
            </Button>
          </FlexBox>
            <FlexBox>
              {SEVEN_DAYS.map((el: string) => (
                  <Typography>
                    {el}
                  </Typography>
                )
              )}
            </FlexBox>
            <section>
              {getWeeks().map((el: string[]) => (
                  <FlexBox>
                    {
                      el.map((day: string|undefined) => (
                        <Typography style={{width: 30, height: 30, border: '1px solid black', color: String(date) === day ? 'tomato' : ''}}>{day}</Typography>
                      ))
                    }
                  </FlexBox>
                ))
              }
            </section>
        </div>
    );
};

