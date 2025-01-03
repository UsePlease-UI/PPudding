import { v4 as uuid } from 'uuid';

const TODAY = new Date().toISOString().substring(0, 10);

export const CALENDAR_DEFAULT_VALUES = {
  color: '',
  description: '',
  endDate: TODAY,
  idx: uuid(),
  isAllDay: false,
  startDate: TODAY,
  title: '',
};

export const CALENDAR_SEVEN_DAYS = ['일', '월', '화', '수', '목', '금', '토'];

export const CALENDAR_LABEL_COLOR = Array.from({ length: 12 }, (_, idx) => ({
  idx: uuid(),
  label: `색상 ${`${idx + 1}`.padStart(2, '0')}`,
  value: `bg-pastel-${`${idx + 1}`.padStart(2, '0')}`,
}));
