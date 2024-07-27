import { MouseEvent, useCallback, useState } from 'react';

import BottomSheet from '@components/BottomSheet';
import { Button, IconButton } from '@components/Button';
import Popover from '@components/Shared/Popover';
import usePopover from '@components/Shared/usePopover';
import { useCalender } from '@components/useCalender';

import { AddFilled, ChevronLeftFilled, ChevronRightFilled } from '@fluentui/react-icons';
import useMobile from '@hooks/useMobile';

import { CALENDER_SEVEN_DAYS } from '../constants';
import Schedule from '../Schedule';
import AddSchedule from '../Schedule/AddSchedule';

export default function MonthlyCalender() {
    const { isTablet } = useMobile();
    const { isOpen, anchorElement, handleOpen, handleClose } = usePopover();

    const { year, month, handleCalendar } = useCalender();
    const [isAddFormOpen, setIsAddFormOpen] = useState(false);
    const [isScheduleOpen, setIsScheduleOpen] = useState({ isOpen: '', index: -1 });
    const [isEdited, setIsEdited] = useState(false);

    const handleAddContent = useCallback(
        (e: MouseEvent<HTMLButtonElement>) => {
            if (isScheduleOpen) {
                setIsScheduleOpen({ isOpen: '', index: -1 });
                setIsEdited(false);
            }
            if (!isTablet) {
                handleOpen(e);
            } else {
                setIsAddFormOpen((prev) => !prev);
            }
        },
        [isScheduleOpen, isTablet, handleOpen]
    );

    const handlePreviousMonth = useCallback(() => handleCalendar({ type: 'PREV_MONTH' }), []);
    const handleNextMonth = useCallback(() => handleCalendar({ type: 'NEXT_MONTH' }), []);

    const handleEdit = useCallback((isEdited: boolean) => setIsEdited(isEdited), []);
    const handleAddFormOpen = useCallback((isOpen: boolean) => setIsAddFormOpen(isOpen), []);
    const handleScheduleOpen = useCallback((obj: typeof isScheduleOpen) => setIsScheduleOpen(obj), []);

    return (
        <div className="relative flex w-full flex-col">
            <div className="absolute right-0">
                {isTablet ? (
                    <IconButton size="mini" shape="circular" variant="contained" onClick={handleAddContent}>
                        <AddFilled />
                    </IconButton>
                ) : (
                    <Button size="medium" variant="contained" onClick={handleAddContent}>
                        일정 추가
                    </Button>
                )}
                {isTablet ? (
                    <BottomSheet canClickOutside isOpen={isAddFormOpen} onClose={() => handleAddFormOpen(false)}>
                        <AddSchedule onClose={() => handleAddFormOpen(false)} onCancel={handleAddContent} />
                    </BottomSheet>
                ) : (
                    <Popover
                        isOpen={isOpen}
                        anchorElement={anchorElement}
                        anchorPosition={{ horizontal: 'right', vertical: 'bottom' }}
                        onClose={handleClose}
                    >
                        <AddSchedule onClose={handleClose} onCancel={handleAddContent} />
                    </Popover>
                )}
            </div>
            <div className="mb-20 flex items-center justify-start gap-20 tablet:justify-center">
                <IconButton
                    aria-label="prev month"
                    size={isTablet ? 'mini' : 'small'}
                    variant="outlined"
                    onClick={handlePreviousMonth}
                >
                    <ChevronLeftFilled />
                </IconButton>
                <p className="text-18 font-medium">
                    {year}년 {month}월
                </p>
                <IconButton
                    aria-label="next month"
                    size={isTablet ? 'mini' : 'small'}
                    variant="outlined"
                    onClick={handleNextMonth}
                >
                    <ChevronRightFilled />
                </IconButton>
            </div>
            <ul className="flex items-center">
                {CALENDER_SEVEN_DAYS.map((el: string) => (
                    <li key={el} className="h-30 w-full">
                        <span className="block text-center text-18 font-medium">{el}</span>
                    </li>
                ))}
            </ul>
            <Schedule
                isEdited={isEdited}
                onEdit={handleEdit}
                isAddFormOpen={isAddFormOpen}
                onAddFormOpen={handleAddFormOpen}
                isScheduleOpen={isScheduleOpen}
                onScheduleOpen={handleScheduleOpen}
            />
        </div>
    );
}
