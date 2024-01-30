import { useState } from 'react';

import dayjs from 'dayjs';

import { Typography, FlexBox } from 'components/Base';
import Button from 'components/Button/Button';
import AddSchedule from 'components/Calender/AddSchedule';
import WeekDays from 'components/Calender/WeekDays';
import PopOver from 'components/Menu/PopOver';
import useCalender from 'hooks/useCalender';

const SEVEN_DAYS = ['일', '월', '화', '수', '목', '금', '토'];

const DUMMY_DATA = [
    {
        idx: 1,
        startDate: '2024-01-22',
        endDate: '2024-01-22',
        color: 'red',
        isAllDay: false,
        title: '공부하기',
        description: '열심히 공부하기'
    },
    {
        idx: 2,
        startDate: '2024-01-13',
        endDate: '2024-01-18',
        color: 'yellow',
        isAllDay: true,
        title: '병원',
        description: '건강검진 받기'
    },
    {
        idx: 3,
        startDate: '2024-01-13',
        endDate: '2024-01-13',
        color: 'red',
        isAllDay: false,
        title: '과제',
        description: '캘린더 만들기'
    },
    {
        idx: 4,
        startDate: '2024-02-10',
        endDate: '2024-02-19',
        color: 'red',
        isAllDay: true,
        title: '학교',
        description: '수강신청하기'
    }
];

export default function MonthlyCalender() {
    const { month, setMonth, year, setYear, date, getWeeks } = useCalender();
    const [isOpenAddForm, setIsOpenAddForm] = useState(false);
    const [isOpenSchedule, setIsOpenSchedule] = useState(false);

    const [addArr, setAddArr] = useState(DUMMY_DATA);
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
    const handleAddContent = () => {
        setIsOpenAddForm((prev) => !prev);
    };
    const handleDeleteSchedule = (idx: number) => {
        // eslint-disable-next-line no-alert
        if (window.confirm('일정을 삭제하시겠습니까?')) {
            const newArr = addArr.filter((el) => el.idx !== idx);
            setAddArr(newArr);
        }
    };

    return (
        <div>
            <FlexBox
                alignItems="center"
                justifyContent="center"
                customCSS={{ position: 'relative', marginBottom: '20px' }}
            >
                <Button size="small" variant="outlined" onClick={() => prevMonth()}>
                    prev
                </Button>
                <Typography customCSS={{ margin: '0px 20px' }}>
                    {year}년 {month}월
                </Typography>
                <Button size="small" variant="outlined" onClick={() => nextMonth()}>
                    next
                </Button>
                <div style={{ position: 'absolute', right: 0 }}>
                    <Button size="medium" variant="contained" onClick={() => handleAddContent()}>
                        일정 추가하기
                    </Button>
                    <PopOver isOpen={isOpenAddForm} customCSS={{ padding: 0, position: 'absolute' }}>
                        <AddSchedule setIsOpenAddForm={setIsOpenAddForm} setAddArr={setAddArr} length={addArr.length} />
                    </PopOver>
                </div>
            </FlexBox>
            <FlexBox>
                {SEVEN_DAYS.map((el: string) => (
                    <Typography customCSS={{ width: '100%', height: '30px', textAlign: 'center' }}>{el}</Typography>
                ))}
            </FlexBox>
            <section>
                {getWeeks().map((el: string[]) => (
                    <FlexBox>
                        {el.map((day: string) => (
                            <WeekDays day={day} date={date}>
                                {day}
                                {addArr.map((todo) => {
                                    if (
                                        dayjs(todo.startDate) <= dayjs(`${year}-${month}-${day}`) &&
                                        dayjs(todo.endDate) >= dayjs(`${year}-${month}-${day}`)
                                    ) {
                                        return (
                                            <FlexBox flexDirection="column" customCSS={{ background: 'lightPink' }}>
                                                <button
                                                    type="button"
                                                    onClick={() => setIsOpenSchedule((prev) => !prev)}
                                                >
                                                    {todo.title}
                                                </button>
                                                <PopOver isOpen={isOpenSchedule}>
                                                    <div>
                                                        <span style={{ color: 'green' }}>{todo.description}</span>
                                                        <Button
                                                            size="small"
                                                            variant="outlined"
                                                            onClick={() => handleDeleteSchedule(todo.idx)}
                                                            customCSS={{ marginTop: 20 }}
                                                        >
                                                            X
                                                        </Button>
                                                    </div>
                                                </PopOver>
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
