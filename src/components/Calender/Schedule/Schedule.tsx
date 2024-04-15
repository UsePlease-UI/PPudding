import { useCallback } from 'react';

import dayjs from 'dayjs';

import { FlexBox, Typography } from '@components/Base';
import BottomSheet from '@components/BottomSheet';
import Popover from '@components/Shared/Popover';
import usePopover from '@components/Shared/usePopover';
import { useCalender } from '@components/useCalender';

import useMobile from '@hooks/useMobile';
import { joinClassNames } from '@utils/format';

import ScheduleDetail from '../Schedule/ScheduleDetail';
import WeekDays from '../Week/WeekDays';

type OpenScheduleType = {
    isOpen: string;
    index: number;
};

type ScheduleType = {
    isEdited: boolean;
    onEdit: (isEdited: boolean) => void;
    isAddFormOpen: boolean;
    onAddFormOpen: (isOpen: boolean) => void;
    isScheduleOpen: OpenScheduleType;
    onScheduleOpen: (obj: OpenScheduleType) => void;
};

export default function Schedule(props: ScheduleType) {
    const { isEdited, onEdit, isAddFormOpen, onAddFormOpen, isScheduleOpen, onScheduleOpen } = props;

    const { isTablet } = useMobile();
    const { isOpen, anchorElement, handleOpen, handleClose } = usePopover();
    const { date, year, month, scheduleList, getWeeks, handleCalendar } = useCalender();

    const handleDetailClick = useCallback(
        (type: 'open' | 'close', day: string, index: number) => {
            if (isAddFormOpen) {
                onAddFormOpen(false);
            } else if (type === 'close') {
                onScheduleOpen({ isOpen: '', index: -1 });
                onEdit(false);
                if (!isTablet) {
                    handleClose();
                }
            }
            onScheduleOpen({ isOpen: day, index });
        },
        [isAddFormOpen, isTablet]
    );

    const handleScheduleDelete = useCallback((idx: string) => {
        if (window.confirm('일정을 삭제하시겠습니까?')) {
            handleCalendar({ type: 'DELETE_SCHEDULE', idx });
        }
    }, []);

    return (
        <section className="flex flex-col gap-1 border border-black bg-black">
            {getWeeks().map((el, idx) => (
                <FlexBox key={idx} backgroundColor="bg-black" gap="gap-1">
                    {el.map((day, elIdx) => (
                        <WeekDays key={elIdx}>
                            <Typography
                                color={String(date) ? 'text-primary-600' : undefined}
                                fontWeight="font-medium"
                                margin="my-4 mx-4 tablet:mx-10"
                            >
                                {day}
                            </Typography>
                            {day !== '' &&
                                scheduleList.map((todo, index) => {
                                    if (
                                        dayjs(todo.startDate) <= dayjs(`${year}-${month}-${day}`) &&
                                        dayjs(todo.endDate) >= dayjs(`${year}-${month}-${day}`)
                                    ) {
                                        const isStartDate = dayjs(todo.startDate).isSame(
                                            dayjs(`${year}-${month}-${day}`)
                                        );
                                        const isDetailOpen =
                                            isScheduleOpen.isOpen === day && isScheduleOpen.index === index;
                                        return (
                                            <div key={todo.idx} className="w-full">
                                                <div
                                                    className={joinClassNames(
                                                        'flex flex-col items-start justify-center transition-opacity hover:opacity-80',
                                                        todo.color
                                                    )}
                                                >
                                                    <button
                                                        type="button"
                                                        className="w-full p-4 hover:font-bold tablet:px-12 tablet:py-4"
                                                        onClick={(e) => {
                                                            handleOpen(e);
                                                            handleDetailClick('open', day, index);
                                                        }}
                                                    >
                                                        <Typography
                                                            fontSize={isTablet ? 'text-10' : 'text-14'}
                                                            align="text-left h-14 tablet:h-21 under-tablet:whitespace-break-spaces under-tablet:overflow-hidden"
                                                        >
                                                            {isStartDate ? todo.title : ' '}
                                                        </Typography>
                                                    </button>
                                                </div>
                                                {isTablet ? (
                                                    <BottomSheet
                                                        canClickOutside
                                                        isOpen={isDetailOpen}
                                                        onClose={() => onScheduleOpen({ isOpen: '', index: -1 })}
                                                    >
                                                        <ScheduleDetail
                                                            todo={todo}
                                                            day={day}
                                                            isStartDate={isStartDate}
                                                            isEdited={isEdited}
                                                            onEdit={onEdit}
                                                            onScheduleDelete={handleScheduleDelete}
                                                            onDetailClick={handleDetailClick}
                                                        />
                                                    </BottomSheet>
                                                ) : (
                                                    <Popover
                                                        isOpen={isOpen && isDetailOpen}
                                                        anchorElement={anchorElement}
                                                        anchorPosition={{ horizontal: 'right', vertical: 'bottom' }}
                                                        onClose={handleClose}
                                                    >
                                                        <ScheduleDetail
                                                            todo={todo}
                                                            day={day}
                                                            isStartDate={isStartDate}
                                                            isEdited={isEdited}
                                                            onEdit={onEdit}
                                                            onScheduleDelete={handleScheduleDelete}
                                                            onDetailClick={handleDetailClick}
                                                        />
                                                    </Popover>
                                                )}
                                            </div>
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
