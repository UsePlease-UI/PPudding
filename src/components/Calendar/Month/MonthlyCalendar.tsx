import { MouseEvent, useCallback, useState } from 'react';

import { AddFilled, ChevronLeftFilled, ChevronRightFilled } from '@fluentui/react-icons';

import BottomSheet from '@components/BottomSheet';
import Button from '@components/Button/Button';
import IconButton from '@components/Button/IconButton';
import Popover from '@components/Shared/Popover';
import usePopover from '@components/Shared/usePopover';
import { useCalendar } from '@components/useCalendar';

import useMobile from '@hooks/useMobile';

import { CALENDAR_SEVEN_DAYS } from '../constants';
import Schedule from '../Schedule';
import AddSchedule from '../Schedule/AddSchedule';

export default function MonthlyCalender() {
  const { isTablet } = useMobile();
  const { anchorElement, handleClose, handleOpen, isOpen } = usePopover();

  const { handleCalendar, month, year } = useCalendar();
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
    [isScheduleOpen, isTablet, handleOpen],
  );

  const handlePreviousMonth = useCallback(() => handleCalendar({ type: 'PREV_MONTH' }), [handleCalendar]);
  const handleNextMonth = useCallback(() => handleCalendar({ type: 'NEXT_MONTH' }), [handleCalendar]);

  const handleEdit = useCallback((isEdited: boolean) => setIsEdited(isEdited), []);
  const handleAddFormOpen = useCallback((isOpen: boolean) => setIsAddFormOpen(isOpen), []);
  const handleScheduleOpen = useCallback((obj: typeof isScheduleOpen) => setIsScheduleOpen(obj), []);

  return (
    <div className="relative flex w-full flex-col">
      <div className="absolute right-0">
        {isTablet ? (
          <IconButton shape="circular" size="mini" variant="contained" onClick={handleAddContent}>
            <AddFilled />
          </IconButton>
        ) : (
          <Button size="medium" variant="contained" onClick={handleAddContent}>
            일정 추가
          </Button>
        )}
        {isTablet ? (
          <BottomSheet canClickOutside isOpen={isAddFormOpen} onClose={() => handleAddFormOpen(false)}>
            <AddSchedule onCancel={handleAddContent} onClose={() => handleAddFormOpen(false)} />
          </BottomSheet>
        ) : (
          <Popover
            anchorElement={anchorElement}
            anchorPosition={{ horizontal: 'right', vertical: 'bottom' }}
            isOpen={isOpen}
            onClose={handleClose}
          >
            <AddSchedule onCancel={handleAddContent} onClose={handleClose} />
          </Popover>
        )}
      </div>
      <div className="mb-5 flex items-center justify-start gap-5 tablet:justify-center">
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
        {CALENDAR_SEVEN_DAYS.map((el: string) => (
          <li key={el} className="h-7.5 w-full">
            <span className="block text-center text-18 font-medium">{el}</span>
          </li>
        ))}
      </ul>
      <Schedule
        isAddFormOpen={isAddFormOpen}
        isEdited={isEdited}
        isScheduleOpen={isScheduleOpen}
        onAddFormOpen={handleAddFormOpen}
        onEdit={handleEdit}
        onScheduleOpen={handleScheduleOpen}
      />
    </div>
  );
}
