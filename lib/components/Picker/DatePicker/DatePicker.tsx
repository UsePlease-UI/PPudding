import { ReactNode, useId } from 'react';

import { autoUpdate, flip, offset, size, useFloating } from '@floating-ui/react-dom';
import dayjs from 'dayjs';

import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

import { Button, IconButton } from '@components/Button';
import { usePicker } from '@components/usePicker';

import { joinClassNames } from '@utils/format';

const TODAY = dayjs();
const WEEK_DAYS = ['일', '월', '화', '수', '목', '금', '토'];

export interface DatePickerType {
  helperText?: string;
  isDisabled?: boolean;
  labelText?: string;
  dateFormat?: string;
  icon?: ReactNode;
  placeholder?: string;
}

export default function DatePicker(props: DatePickerType) {
  const { dateFormat = 'YYYY-MM-DD', helperText, icon, isDisabled, labelText, placeholder = 'YYYY-MM-DD' } = props;

  const labelTextId = useId();
  const helperTextId = useId();
  const pickerId = useId();
  const yearMonthTextId = useId();

  const {
    current,
    dates,
    dateValue,
    isDateDisabled,
    isNextMonthDisabled,
    isOpen,
    isPrevMonthDisabled,
    onCancel,
    onConfirm,
    onDateChange,
    onDatePickerClick,
    onYearMonthChange,
    selected,
  } = usePicker();

  const { floatingStyles, refs } = useFloating({
    middleware: [
      offset(1),
      flip({ padding: 20 }),
      size({
        apply({ availableHeight, elements, rects }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${availableHeight}px`,
            minWidth: `${rects.reference.width}px`,
          });
        },
        padding: 20,
      }),
    ],
    placement: 'bottom',
    whileElementsMounted: autoUpdate,
  });

  return (
    <>
      <div ref={refs.setReference} className="w-max">
        {labelText && (
          <span className="ml-1 block w-full text-left text-10 font-semibold leading-16" id={labelTextId}>
            {labelText}
          </span>
        )}
        <button
          aria-describedby={helperText ? helperTextId : undefined}
          aria-expanded={isOpen}
          aria-labelledby={labelText ? labelTextId : undefined}
          className="flex w-full min-w-50 items-center justify-between overflow-hidden rounded border border-black bg-white p-2 text-black hover:bg-gray-50 active:bg-gray-100 disabled:pointer-events-none disabled:text-gray-600"
          disabled={isDisabled}
          type="button"
          aria-controls={isOpen ? pickerId : undefined}
          aria-haspopup="dialog"
          onClick={onDatePickerClick}
        >
          <span
            className={joinClassNames(
              'block flex-1 text-left text-14 font-medium text-inherit',
              !dateValue && placeholder && 'text-gray-600',
            )}
          >
            {dateValue ? dayjs(dateValue).format(dateFormat) : placeholder}
          </span>
          <span>{icon || <CalendarIcon className="h-6 w-6" />}</span>
        </button>
        {helperText && (
          <span className="ml-1 block w-full text-left text-10 font-semibold leading-16" id={helperTextId}>
            {helperText}
          </span>
        )}
      </div>
      {isOpen && (
        <div
          ref={refs.setFloating}
          aria-labelledby={yearMonthTextId}
          className="z-1000 flex w-max flex-col overflow-y-auto rounded bg-white p-5 shadow-02"
          id={pickerId}
          style={floatingStyles}
          role="dialog"
        >
          <div className="mb-5 flex w-full items-center justify-between" id={yearMonthTextId}>
            <IconButton
              aria-label="이전 달로 이동"
              isDisabled={isPrevMonthDisabled}
              size="small"
              variant="text"
              onClick={() => onYearMonthChange(true)}
            >
              <ChevronLeftIcon />
            </IconButton>
            <span className="block text-center text-18 font-medium">
              <strong className="text-black">
                {current.get('year')}년 {`${current.get('month') + 1}`.padStart(2, '0')}월
              </strong>
            </span>
            <IconButton
              aria-label="다음 달로 이동"
              isDisabled={isNextMonthDisabled}
              size="small"
              variant="text"
              onClick={() => onYearMonthChange(false)}
            >
              <ChevronRightIcon />
            </IconButton>
          </div>
          <div className="mb-2.5 flex h-full w-77 gap-px border border-black bg-black">
            {WEEK_DAYS.map((val) => (
              <span
                key={val}
                className={joinClassNames(
                  'block h-11 w-11 bg-white py-0.5 text-center text-14 font-semibold leading-44 text-black',
                  (val === '일' || val === '토') && 'bg-black text-white',
                )}
              >
                {val}
              </span>
            ))}
          </div>
          {dates?.map((row, idx) => (
            <div key={idx} className="flex h-full w-77">
              {row.map((col) => {
                const formattedDate = `${col.year}-${col.month}-${col.date}`;
                const isCurrentDate = dayjs(formattedDate).isSame(TODAY, 'date');
                const isSelected = dayjs(selected).isSame(formattedDate, 'date');

                return (
                  <div key={col.date} className="my-0.5 flex size-11 items-center justify-center">
                    <button
                      aria-current={isCurrentDate ? 'date' : undefined}
                      aria-selected={isSelected}
                      disabled={isDateDisabled(col)}
                      type="button"
                      onClick={() => onDateChange(formattedDate)}
                      className={joinClassNames(
                        'h-10 w-10 rounded-full border border-transparent bg-white font-normal text-black hover:border-black disabled:pointer-events-none disabled:font-normal disabled:text-gray-400',
                        isCurrentDate &&
                          'border border-black font-semibold text-black hover:bg-gray-100 active:bg-gray-200 disabled:border-transparent',
                        isSelected &&
                          'border-black bg-black font-semibold text-white hover:bg-black hover:text-white hover:opacity-80 active:bg-black active:opacity-70 disabled:border-gray-400 disabled:bg-gray-100',
                      )}
                    >
                      {col.date}
                    </button>
                  </div>
                );
              })}
            </div>
          ))}
          {dates && dates.length > 0 && (
            <div className="mt-5 flex items-center justify-end gap-x-2.5">
              <Button size="medium" variant="outlined" onClick={onCancel}>
                취소
              </Button>
              <Button size="medium" variant="contained" onClick={onConfirm}>
                확인
              </Button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
