import { ReactNode, Reducer, useMemo, useReducer } from 'react';

import dayjs from 'dayjs';
import { v4 as uuid } from 'uuid';

import {
  CalendarActionContext,
  CalenderActionType,
  CalenderContext,
  CalenderContextType,
  ScheduleListType,
} from './CalendarContext';
import { CALENDAR_DUMMY_DATA } from './constants';

const calendarReducer = (state: CalenderContextType, action: CalenderActionType) => {
  let newState = null;
  switch (action.type) {
    case 'PREV_MONTH':
      if (state.month === 1) {
        newState = { ...state, month: 12, year: state.year - 1 };
      } else {
        newState = { ...state, month: state.month - 1 };
      }
      break;
    case 'NEXT_MONTH':
      if (state.month === 12) {
        newState = { ...state, month: 1, year: state.year + 1 };
      } else {
        newState = { ...state, month: state.month + 1 };
      }
      break;
    case 'ADD_SCHEDULE':
      newState = {
        ...state,
        scheduleList: [...state.scheduleList, { ...action.payload, idx: uuid() }],
      };
      break;
    case 'UPDATE_SCHEDULE':
      newState = {
        ...state,
        scheduleList: state.scheduleList.map((el) => {
          if (el.idx === action.payload.idx) {
            return { ...el, ...action.payload };
          }
          return el;
        }),
      };
      break;
    case 'DELETE_SCHEDULE':
      newState = {
        ...state,
        scheduleList: state.scheduleList.filter((el: ScheduleListType) => el.idx !== action.idx),
      };
      break;
    default:
      throw new Error('Unhandled action type');
  }
  return newState;
};

type CalenderProviderType = {
  children: ReactNode;
};

const CalenderProvider = ({ children }: CalenderProviderType) => {
  const today = dayjs();
  const date = today.get('date');
  const year = today.get('year');
  const month = today.get('month') + 1;
  const scheduleList = CALENDAR_DUMMY_DATA;

  const context = useMemo(() => ({ date, month, scheduleList, today, year }), [today, date, year, month, scheduleList]);

  const [state, dispatch] = useReducer<Reducer<CalenderContextType, CalenderActionType>>(calendarReducer, context);

  return (
    <CalendarActionContext.Provider value={dispatch}>
      <CalenderContext.Provider value={state}>{children}</CalenderContext.Provider>
    </CalendarActionContext.Provider>
  );
};

export default CalenderProvider;
