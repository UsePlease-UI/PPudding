import { useCallback, useEffect, useState } from 'react';

import dayjs from 'dayjs';

export type TodoType = {
  endDate: string;
  idx: string;
  isAllDay: boolean;
  startDate: string;
  title: string;
  color: string;
  description: string;
};

export const useSchedule = (labelColor: string, initialContent: TodoType) => {
  const [isAllDay, setIsAllDay] = useState(initialContent.isAllDay);
  const [addContents, setAddContents] = useState(initialContent);
  const [color, setColor] = useState(labelColor);

  useEffect(() => {
    setIsAllDay(initialContent.isAllDay);
    setColor(labelColor);
    setAddContents(initialContent);
  }, [initialContent, labelColor]);

  const handleContents = useCallback((type: string, value: string) => {
    if (type === 'startDate' || type === 'endDate') {
      setAddContents((prev) => ({ ...prev, [type]: dayjs(value) }));
    }
    setAddContents((prev) => ({ ...prev, [type]: value }));
  }, []);

  const handleDayChange = useCallback(() => setIsAllDay((prev) => !prev), []);
  const handleColorChange = useCallback((newValue: string) => setColor(newValue), []);

  return {
    addContents,
    color,
    handleColorChange,
    handleContents,
    handleDayChange,
    initialContent,
    isAllDay,
    labelColor,
  };
};
