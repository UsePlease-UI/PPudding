/* eslint-disable no-alert */
import { useState } from 'react';

import dayjs from 'dayjs';

import { FlexBox, Typography } from 'components/Base';
import Button from 'components/Button/Button';
import ScheduleDetail from 'components/Calender/Schedule/ScheduleDetail';
import WeekDays from 'components/Calender/Week/WeekDays';
import PopOver from 'components/Menu/PopOver';
import { useCalender } from 'components/useCalender';

export default function Schedule({
    isEdited,
    setIsEdited
}: {
    isEdited: boolean;
    setIsEdited: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const { date, year, month, scheduleList, getWeeks, dispatch: calenderDispatch } = useCalender();
    const [isOpenAddForm, setIsOpenAddForm] = useState(false);
    const [isOpenSchedule, setIsOpenSchedule] = useState({ isOpen: '', index: -1 });

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
        <section>
            {getWeeks().map((el: string[]) => (
                <FlexBox>
                    {el.map((day: string) => (
                        <WeekDays>
                            <Typography component="span" customCSS={{ color: day === String(date) ? 'tomato' : '' }}>
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
    );
}
