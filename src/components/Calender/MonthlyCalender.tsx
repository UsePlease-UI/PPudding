import { Typography, FlexBox } from 'components/Base';
import Button from 'components/Button/Button';
import useCalender from 'hooks/useCalender';

import WeekDays from './WeekDays';

const SEVEN_DAYS = ['일', '월', '화', '수', '목', '금', '토'];

const DUMMY_DATA = [
    {
        idx: 1,
        startDate: {
            year: '2024',
            month: '1',
            date: '22'
        },
        endDate: {
            year: '2024',
            month: '1',
            date: '22'
        },
        title: '공부하기',
        description: '열심히 공부하기'
    },
    {
        idx: 2,
        startDate: {
            year: '2024',
            month: '1',
            date: '13'
        },
        endDate: {
            year: '2024',
            month: '1',
            date: '18'
        },
        title: '병원',
        description: '건강검진 받기'
    },
    {
        idx: 3,
        startDate: {
            year: '2024',
            month: '1',
            date: '13'
        },
        endDate: {
            year: '2024',
            month: '1',
            date: '13'
        },
        title: '과제',
        description: '캘린더 만들기'
    }
];

export default function MonthlyCalender() {
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
                <Button size="small" variant="outlined" onClick={() => prevMonth()}>
                    prev
                </Button>
                <Typography>
                    {year}년 {month}월
                </Typography>
                <Button size="small" variant="outlined" onClick={() => nextMonth()}>
                    next
                </Button>
            </FlexBox>
            <FlexBox>
                {SEVEN_DAYS.map((el: string) => (
                    <Typography>{el}</Typography>
                ))}
            </FlexBox>
            <section>
                {getWeeks().map((el: string[]) => (
                    <FlexBox>
                        {el.map((day: string) => (
                            <WeekDays day={day} date={date}>
                                {day}
                                {DUMMY_DATA.map((todo) => {
                                    if (todo.startDate.date <= day && todo.endDate.date >= day) {
                                        return (
                                            <FlexBox customCSS={{ background: 'lightPink' }}>
                                                <span>{todo.title}</span>
                                                {/* todo: 설명에 대한 스타일이나 팝오버처리 */}
                                                <span style={{ color: 'green' }}>{todo.description}</span>
                                            </FlexBox>
                                        );
                                    }
                                    return undefined;
                                })}
                            </WeekDays>
                        ))}
                    </FlexBox>
                ))}
            </section>
        </div>
    );
}
