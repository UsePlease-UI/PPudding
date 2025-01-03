import { useCallback } from 'react';

import dayjs from 'dayjs';

import BottomSheet from '@components/BottomSheet';
import Popover from '@components/Shared/Popover';
import useSharedPopover from '@components/Shared/useSharedPopover';
import { useCalendar } from '@components/useCalendar';

import useMobile from '@hooks/useMobile';
import { joinClassNames } from '@utils/format';

import ScheduleDetail from '../Schedule/ScheduleDetail';
import WeekDays from '../Week/WeekDays';

type OpenScheduleType = {
  index: number;
  isOpen: string;
};

export interface ScheduleType {
  isEdited: boolean;
  isScheduleOpen: OpenScheduleType;
  isAddFormOpen: boolean;
  onAddFormOpen: (isOpen: boolean) => void;
  onEdit: (isEdited: boolean) => void;
  onScheduleOpen: (obj: OpenScheduleType) => void;
}

export default function Schedule(props: ScheduleType) {
  const { isAddFormOpen, isEdited, isScheduleOpen, onAddFormOpen, onEdit, onScheduleOpen } = props;

  const { isTablet } = useMobile();
  const { anchorElement, handleClose, handleOpen, isOpen } = useSharedPopover();
  const { date, getWeeks, handleCalendar, month, scheduleList, year } = useCalendar();

  const handleDetailClick = useCallback(
    (type: 'close' | 'open', day: string, index: number) => {
      if (isAddFormOpen) {
        onAddFormOpen(false);
      } else if (type === 'close') {
        onScheduleOpen({ index: -1, isOpen: '' });
        onEdit(false);
        if (!isTablet) {
          handleClose();
        }
      }
      onScheduleOpen({ index, isOpen: day });
    },
    [onAddFormOpen, onScheduleOpen, onEdit, isAddFormOpen, isTablet, handleClose],
  );

  const handleScheduleDelete = useCallback(
    (idx: string) => {
      if (window.confirm('일정을 삭제하시겠습니까?')) {
        handleCalendar({ idx, type: 'DELETE_SCHEDULE' });
      }
    },
    [handleCalendar],
  );

  return (
    <section className="flex flex-col gap-px border border-black bg-black">
      {getWeeks().map((el, idx) => (
        <div key={idx} className="flex items-center gap-px bg-black">
          {el.map((day, elIdx) => (
            <WeekDays key={elIdx}>
              <p
                className={joinClassNames('m-1 text-16 font-medium tablet:mx-2.5', String(date) && 'text-primary-800')}
              >
                {day}
              </p>
              {day !== '' &&
                scheduleList.map((todo, index) => {
                  if (
                    dayjs(todo.startDate) <= dayjs(`${year}-${month}-${day}`) &&
                    dayjs(todo.endDate) >= dayjs(`${year}-${month}-${day}`)
                  ) {
                    const isStartDate = dayjs(todo.startDate).isSame(dayjs(`${year}-${month}-${day}`));
                    const isDetailOpen = isScheduleOpen.isOpen === day && isScheduleOpen.index === index;
                    return (
                      <div key={todo.idx} className="w-full">
                        <div
                          className={joinClassNames(
                            'flex flex-col items-start justify-center transition-opacity hover:opacity-80',
                            todo.color,
                          )}
                        >
                          <button
                            className="w-full p-1 hover:font-bold tablet:px-3 tablet:py-1"
                            type="button"
                            onClick={(e) => {
                              handleOpen(e);
                              handleDetailClick('open', day, index);
                            }}
                          >
                            <p className="h-3.5 text-left text-14 tablet:h-5.25 under-tablet:overflow-hidden under-tablet:whitespace-break-spaces under-tablet:text-10">
                              {isStartDate ? todo.title : ' '}
                            </p>
                          </button>
                        </div>
                        {isTablet ? (
                          <BottomSheet
                            canClickOutside
                            isOpen={isDetailOpen}
                            onClose={() => onScheduleOpen({ index: -1, isOpen: '' })}
                          >
                            <ScheduleDetail
                              day={day}
                              isEdited={isEdited}
                              isStartDate={isStartDate}
                              onDetailClick={handleDetailClick}
                              onEdit={onEdit}
                              onScheduleDelete={handleScheduleDelete}
                              todo={todo}
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
                              day={day}
                              isEdited={isEdited}
                              isStartDate={isStartDate}
                              onDetailClick={handleDetailClick}
                              onEdit={onEdit}
                              onScheduleDelete={handleScheduleDelete}
                              todo={todo}
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
        </div>
      ))}
    </section>
  );
}
