import { ReactNode, useId } from 'react';

import { autoUpdate, flip, offset, size, useFloating } from '@floating-ui/react-dom';
import dayjs from 'dayjs';

import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

import { Button, IconButton } from '@components/Button';
import { usePicker } from '@components/usePicker';

import { joinClassNames } from '@utils/format';

import { isSameDate } from '../utils';

const MONTH_LIST = Array.from({ length: 12 }, (_, idx) => `${idx + 1}`);

export interface MonthPickerType {
  helperText?: string;
  isDisabled?: boolean;
  labelText?: string;
  dateFormat?: string;
  icon?: ReactNode;
  placeholder?: string;
}

export default function MonthPicker(props: MonthPickerType) {
  const { dateFormat = 'YYYY-MM', helperText, icon, isDisabled, labelText, placeholder = 'YYYY-MM' } = props;

  const labelTextId = useId();
  const helperTextId = useId();
  const pickerId = useId();
  const yearMonthTextId = useId();

  const {
    current,
    dateValue,
    isMonthDisabled,
    isNextYearDisabled,
    isOpen,
    isPrevYearDisabled,
    onCancel,
    onConfirm,
    onDatePickerClick,
    onMonthChange,
    onYearChange,
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
              aria-label="이전 연도로 이동"
              isDisabled={isPrevYearDisabled}
              size="small"
              variant="text"
              onClick={() => onYearChange(true)}
            >
              <ChevronLeftIcon />
            </IconButton>
            <span className="block text-center text-18 font-medium">
              <strong className="text-black">{current.get('year')}년</strong>
            </span>
            <IconButton
              aria-label="다음 연도로 이동"
              isDisabled={isNextYearDisabled}
              size="small"
              variant="text"
              onClick={() => onYearChange(false)}
            >
              <ChevronRightIcon />
            </IconButton>
          </div>
          <div className="mb-5 grid w-59.5 grid-cols-4 gap-2.5">
            {MONTH_LIST.map((month) => {
              const formattedDate = `${current.get('year')}-${month.padStart(2, '0')}`;
              const isCurrentMonth = dayjs(selected).isSame(formattedDate, 'month');
              const isSelected = isSameDate(formattedDate, 'month');

              return (
                <div key={month} className="my-0.5 flex size-13 items-center justify-center">
                  <button
                    aria-current={isCurrentMonth ? 'date' : undefined}
                    aria-selected={isSelected}
                    disabled={isMonthDisabled(formattedDate)}
                    type="button"
                    onClick={() => onMonthChange(month)}
                    className={joinClassNames(
                      'h-12 w-12 rounded border border-transparent bg-white font-normal text-black hover:border-black disabled:pointer-events-none disabled:text-gray-400',
                      isSelected &&
                        'border border-black font-semibold text-black hover:bg-gray-100 active:bg-gray-200 disabled:border-transparent',
                      isCurrentMonth &&
                        'border-black bg-black font-semibold text-white hover:bg-black hover:text-white hover:opacity-80 active:bg-black active:opacity-70 disabled:border-gray-400 disabled:bg-gray-100',
                    )}
                  >
                    {month}월
                  </button>
                </div>
              );
            })}
          </div>
          <div className="mt-5 flex items-center justify-end gap-x-2.5">
            <Button size="medium" variant="outlined" onClick={onCancel}>
              취소
            </Button>
            <Button size="medium" variant="contained" onClick={onConfirm}>
              확인
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
