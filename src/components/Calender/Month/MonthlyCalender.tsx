/* eslint-disable no-alert */
import { useState } from 'react';

import dayjs from 'dayjs';

import { Typography, FlexBox } from 'components/Base';
import Button from 'components/Button/Button';
import AddSchedule from 'components/Calender/Schdule/AddSchedule';
import ScheduleDetail from 'components/Calender/Schdule/ScheduleDetail';
import WeekDays from 'components/Calender/Week/WeekDays';
import PopOver from 'components/Menu/PopOver';
import { useCalender } from 'components/useCalender';
import { CALENDER_SEVEN_DAYS } from 'pages/Example/Kimyerim1935/constants';

export default function MonthlyCalender() {
    const { date, year, month, scheduleList, getWeeks, dispatch: calenderDispatch } = useCalender();
    const [isOpenAddForm, setIsOpenAddForm] = useState(false);
    const [isOpenSchedule, setIsOpenSchedule] = useState({ isOpen: '', index: -1 });
    const [isEdited, setIsEdited] = useState(false);

    const prevMonth = () => {
        calenderDispatch({ type: 'PREV_MONTH' });
    };

    const nextMonth = () => {
        calenderDispatch({ type: 'NEXT_MONTH' });
    };

    const handleAddContent = () => {
        if (isOpenSchedule) {
            setIsOpenSchedule({ isOpen: '', index: -1 });
            setIsEdited(false);
        }
        setIsOpenAddForm((prev) => !prev);
    };

    const handleClickDetail = (type: 'open' | 'close', day: string, index: number) => {
        if (isOpenAddForm) {
            setIsOpenAddForm(false);
        } else if (type === 'close') {
            setIsOpenSchedule({ isOpen: '', index: -1 });
            setIsEdited(false);
        }
        setIsOpenSchedule((prev) => {
            return { ...prev, isOpen: day, index };
        });
    };

    const handleDeleteSchedule = (idx: number) => {
        if (window.confirm('일정을 삭제하시겠습니까?')) {
            calenderDispatch({
                type: 'DELETE_SCHEDULE',
                idx
            });
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
                    <PopOver isOpen={isOpenAddForm} customCSS={{ padding: 0, position: 'absolute', right: 0 }}>
                        <AddSchedule
                            setIsOpenAddForm={setIsOpenAddForm}
                            length={scheduleList.length || 0}
                            handleCancel={handleAddContent}
                        />
                    </PopOver>
                </div>
            </FlexBox>
            <FlexBox>
                {CALENDER_SEVEN_DAYS.map((el: string) => (
                    <Typography customCSS={{ width: '100%', height: '30px', textAlign: 'center' }}>{el}</Typography>
                ))}
            </FlexBox>
            <section>
                {getWeeks().map((el: string[]) => (
                    <FlexBox>
                        {el.map((day: string) => (
                            <WeekDays>
                                <Typography
                                    component="span"
                                    customCSS={{ color: day === String(date) ? 'tomato' : '' }}
                                >
                                    {day}
                                </Typography>
                                {day !== '' &&
                                    day !== ' ' &&
                                    scheduleList.map((todo, index) => {
                                        if (
                                            dayjs(todo.startDate) <= dayjs(`${year}-${month}-${day}`) &&
                                            dayjs(todo.endDate) >= dayjs(`${year}-${month}-${day}`)
                                        ) {
                                            const isStartDate = dayjs(todo.startDate).isSame(
                                                dayjs(`${year}-${month}-${day}`)
                                            );
                                            const isOpenDetail =
                                                isOpenSchedule.isOpen === day && isOpenSchedule.index === index;
                                            return (
                                                <>
                                                    <FlexBox
                                                        flexDirection="column"
                                                        alignItems="flex-start"
                                                        justifyContent="center"
                                                        customCSS={{
                                                            background: todo.color,
                                                            transition: 'opacity',
                                                            '&:hover': {
                                                                opacity: 0.8
                                                            }
                                                        }}
                                                    >
                                                        <Button
                                                            onClick={() => handleClickDetail('open', day, index)}
                                                            customCSS={{
                                                                textAlign: 'left',
                                                                width: '100%',
                                                                paddingLeft: 15,
                                                                height: 30,
                                                                '&:hover': {
                                                                    fontWeight: 800
                                                                }
                                                            }}
                                                        >
                                                            {isStartDate ? todo.title : 'ㅤ'}
                                                        </Button>
                                                    </FlexBox>
                                                    <PopOver
                                                        isOpen={isOpenDetail}
                                                        customCSS={{
                                                            position: 'absolute',
                                                            background: 'white'
                                                        }}
                                                    >
                                                        <ScheduleDetail
                                                            todo={todo}
                                                            day={day}
                                                            isStartDate={isStartDate}
                                                            isEdited={isEdited}
                                                            setIsEdited={setIsEdited}
                                                            handleDeleteSchedule={handleDeleteSchedule}
                                                            handleClickDetail={handleClickDetail}
                                                        />
                                                    </PopOver>
                                                </>
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
