import { ReactNode, useCallback, useEffect, useId, useMemo, useState } from 'react';

import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

import { DateObjType, DatesType, getDates } from '@components/Picker/utils';

import { PickerContext, PickerContextType, PickerDateType } from './PickerContext';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(isBetween);

const TODAY = dayjs();

export interface PickerProviderType {
  children: ReactNode;
  maxDate?: PickerDateType;
  minDate?: PickerDateType;
  value?: PickerDateType;
  onCancel?: () => void;
  onChange?: (date: Date) => void;
  onSelect?: (date: PickerDateType) => void;
}

const PickerProvider = (props: PickerProviderType) => {
  const { children, maxDate, minDate, onCancel, onChange, onSelect, value } = props;

  const containerId = useId();
  const datePickerId = useId();

  const [isOpen, setIsOpen] = useState(false);
  const [dates, setDates] = useState<DatesType>(); // Calendar Dates
  const [dateValue, setDateValue] = useState(value); // Selected Date
  const [current, setCurrent] = useState(value ? dayjs(value) : dayjs()); // Current Date
  const [selected, setSelected] = useState<PickerDateType>(null); // (Temp) Selected Date

  useEffect(() => {
    if (isOpen && value) {
      setCurrent(dayjs(value));
      setDateValue(value);
    }
  }, [isOpen, value]);

  useEffect(() => {
    // create selected month calendar
    setDates(getDates(current));
  }, [current]);

  useEffect(() => {
    const containerElement = document.getElementById(containerId);
    const pickerElement = document.getElementById(datePickerId);

    if (isOpen && pickerElement && containerElement) {
      if (pickerElement.getBoundingClientRect().bottom >= window.innerHeight - 20) {
        pickerElement.style.marginTop = '-10px';
      } else {
        pickerElement.style.top = `${containerElement.getBoundingClientRect().top + containerElement.getBoundingClientRect().height + 4}px`;
      }
      pickerElement.style.left = `${containerElement.getBoundingClientRect().left + (containerElement.getBoundingClientRect().width - pickerElement.getBoundingClientRect().width) / 2}px`;
    }
  }, [isOpen, containerId, datePickerId]);

  const isDateDisabled = useCallback(
    ({ date, month, year }: DateObjType) => {
      const now = `${year}-${month}-${date}`;
      let result = false;

      // 최소, 최대 날짜 모두 있다면
      // 그 사이(최소, 최대 포함)에 있는 날짜만 선택 가능
      if (minDate && maxDate) {
        if (!dayjs(now).isBetween(minDate, maxDate, 'date', '[]')) {
          result = true;
        }
      } else if (minDate) {
        // 최소 날짜부터
        if (!dayjs(now).isSameOrAfter(minDate, 'date')) {
          result = true;
        }
      } else if (maxDate) {
        // 최대 날짜까지
        if (!dayjs(now).isSameOrBefore(maxDate, 'date')) {
          result = true;
        }
      } else if (month !== current.get('month') + 1) {
        // 이전 달/ 다음 달이라면
        result = true;
      }

      return result;
    },
    [minDate, maxDate, current],
  );

  const isMonthDisabled = useCallback(
    (now: string) => {
      let result = false;
      if (minDate) {
        // 최소 날짜부터
        if (!dayjs(now).isSameOrAfter(minDate, 'month')) {
          result = true;
        }
      } else if (maxDate) {
        // 최대 날짜까지
        if (!dayjs(now).isSameOrBefore(maxDate, 'month')) {
          result = true;
        }
      }
      return result;
    },
    [minDate, maxDate],
  );

  const handleDatePickerClick = useCallback(() => {
    if (!isOpen) {
      setCurrent(TODAY);
      setSelected(dateValue ?? null);
    } else {
      setSelected(null);
    }
    setIsOpen((prev) => !prev);
  }, [isOpen, dateValue]);

  const handleYearChange = useCallback((isPreviousMonth: boolean) => {
    if (isPreviousMonth) {
      setCurrent((prev) => prev.subtract(1, 'month').startOf('month'));
    } else {
      setCurrent((prev) => prev.add(1, 'month').startOf('month'));
    }
  }, []);

  const handleMonthChange = useCallback(
    (month: string) => {
      const selectedMonth = current.set('month', Number(month) - 1);
      const formatted = dayjs(selectedMonth.set('date', 1)).format('YYYY-MM-DD');
      setSelected(new Date(formatted));
      if (onChange) {
        onChange(new Date(dayjs(selectedMonth).format('YYYY-MM')));
      }
    },
    [current, onChange],
  );

  const handleYearMonthChange = useCallback((isPreviousMonth: boolean) => {
    if (isPreviousMonth) {
      setDates([]);
      setCurrent((prev) => prev.subtract(1, 'month').startOf('month'));
    } else {
      setDates([]);
      setCurrent((prev) => prev.add(1, 'month').startOf('month'));
    }
  }, []);

  const handleDateChange = useCallback(
    (formattedDate: string) => {
      setSelected(new Date(formattedDate));
      if (onChange) {
        onChange(new Date(formattedDate));
      }
    },
    [onChange],
  );

  const handleReset = useCallback(() => {
    setIsOpen(false);
    setCurrent(TODAY);
    setSelected(null);
  }, []);

  const handleCancel = useCallback(() => {
    handleReset();
    if (onCancel) {
      onCancel();
    }
  }, [handleReset, onCancel]);

  const handleConfirm = useCallback(() => {
    handleReset();
    setDateValue(selected);
    if (onSelect) {
      onSelect(selected);
    }
  }, [handleReset, onSelect, selected]);

  const context: PickerContextType = useMemo(
    () => ({
      containerId,
      current,
      datePickerId,
      dates,
      dateValue,
      isDateDisabled,
      isMonthDisabled,
      isOpen,
      onCancel: handleCancel,
      onConfirm: handleConfirm,
      onDateChange: handleDateChange,
      onDatePickerClick: handleDatePickerClick,
      onMonthChange: handleMonthChange,
      onYearChange: handleYearChange,
      onYearMonthChange: handleYearMonthChange,
      selected,
    }),
    [
      containerId,
      datePickerId,
      isOpen,
      current,
      dateValue,
      selected,
      dates,
      isMonthDisabled,
      isDateDisabled,
      handleYearChange,
      handleMonthChange,
      handleYearMonthChange,
      handleDateChange,
      handleDatePickerClick,
      handleConfirm,
      handleCancel,
    ],
  );

  return <PickerContext.Provider value={context}>{children}</PickerContext.Provider>;
};

export default PickerProvider;
