/* eslint-disable no-alert */

import dayjs from 'dayjs';

import { css } from '@emotion/react';

import { FlexBox, Typography } from 'components/Base';
import BottomSheet from 'components/BottomSheet';
import Button from 'components/Button/Button';
import ScheduleDetail from 'components/Calender/Schedule/ScheduleDetail';
import { scheduleStyle } from 'components/Calender/styles';
import WeekDays from 'components/Calender/Week/WeekDays';
import PopOver from 'components/Menu/PopOver';
import { useCalender } from 'components/useCalender';
import useMobile from 'hooks/useMobile';

type OpenScheduleType = {
    isOpen: string;
    index: number;
};

type ScheduleType = {
    isEdited: boolean;
    setIsEdited: React.Dispatch<React.SetStateAction<boolean>>;
    isOpenAddForm: boolean;
    setIsOpenAddForm: React.Dispatch<React.SetStateAction<boolean>>;
    isOpenSchedule: OpenScheduleType;
    setIsOpenSchedule: React.Dispatch<React.SetStateAction<OpenScheduleType>>;
};

export default function Schedule({
    isEdited,
    setIsEdited,
    isOpenAddForm,
    setIsOpenAddForm,
    isOpenSchedule,
    setIsOpenSchedule
}: ScheduleType) {
    const { date, year, month, scheduleList, getWeeks, dispatch: calenderDispatch } = useCalender();
    const isMobile = useMobile();

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
            {getWeeks().map((el: string[], idx: number) => (
                <FlexBox key={`week-${idx}`}>
                    {el.map((day: string, elIdx: number) => (
                        <WeekDays key={`day-${elIdx}`}>
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
                                                    key={index}
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
                                                        customCSS={css([
                                                            scheduleStyle.scheduleTitle,
                                                            {
                                                                padding: isMobile ? '5px' : '10px 15px',
                                                                whiteSpace: isMobile ? 'break-spaces' : 'normal',
                                                                overflow: isMobile ? 'hidden' : 'visible',
                                                                fontSize: isMobile ? 11 : 16
                                                            }
                                                        ])}
                                                    >
                                                        {isStartDate ? todo.title : 'ㅤ'}
                                                    </Button>
                                                </FlexBox>
                                                {isMobile && isOpenDetail ? (
                                                    <BottomSheet
                                                        isOpen={isOpenDetail}
                                                        onClose={() => setIsOpenSchedule({ isOpen: '', index: -1 })}
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
                                                    </BottomSheet>
                                                ) : (
                                                    <PopOver
                                                        isOpen={isOpenDetail}
                                                        customCSS={{
                                                            position: 'absolute',
                                                            background: 'white',
                                                            padding: 0
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
                                                )}
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
