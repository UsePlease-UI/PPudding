import { Dispatch, ReactNode, createContext, useCallback, useContext, useMemo, useReducer } from 'react';

import dayjs from 'dayjs';

import { CALENDER_DUMMY_DATA } from 'pages/Example/Kimyerim1935/constants';

type ScheduleListType = {
    idx: number;
    startDate: string;
    endDate: string;
    color: string;
    isAllDay: boolean;
    title: string;
    description: string;
};
type CalenderActionType =
    | { type: 'PREV_MONTH' }
    | { type: 'NEXT_MONTH' }
    | { type: 'ADD_SCHEDULE' | 'UPDATE_SCHEDULE'; payload: ScheduleListType }
    | { type: 'DELETE_SCHEDULE'; idx: number };

export type CalenderContextType = {
    today: dayjs.Dayjs;
    date: number;
    year: number;
    month: number;
    scheduleList: ScheduleListType[];
    setYear: React.Dispatch<React.SetStateAction<number>>;
    setMonth: React.Dispatch<React.SetStateAction<number>>;
    setScheduleList: React.Dispatch<React.SetStateAction<ScheduleListType[]>>;
};

export const CalenderContext = createContext<CalenderContextType | undefined>(undefined);
export const DispatchContext = createContext<Dispatch<CalenderActionType> | undefined>(undefined);

export const useCalender = () => {
    const context = useContext(CalenderContext);
    const calenderDispatch = useContext(DispatchContext);

    if (!context) {
        throw new Error('CalenderContext.Provider를 사용해주세요');
    }
    if (!calenderDispatch) {
        throw new Error('DispatchContext.Provider를 사용해주세요');
    }

    const { year, month, date } = context;
    const getWeeks = useCallback(() => {
        const firstDay = dayjs(`${year}-${month}-${date}`).startOf('month').locale('ko').get('day');
        const lastDay = dayjs(`${year}-${month}`).daysInMonth();
        const weeks = [];
        const week = [];
        const chunkSize = 7;

        for (let i = 1; i <= lastDay; i++) {
            week.push(String(i));
        }

        for (let i = 0; i < firstDay; i++) {
            week.splice(0, 0, '');
        }

        for (let i = 0; i < week.length; i += chunkSize) {
            const newArr = week.slice(i, i + chunkSize);
            if (newArr.length < chunkSize) {
                const remainder = chunkSize - newArr.length;

                for (let j = 0; j < remainder; j++) {
                    newArr.push(' ');
                }
            }

            weeks.push(newArr);
        }

        return weeks;
    }, [month]);

    return {
        ...context,
        getWeeks,
        dispatch: calenderDispatch
    };
};

const calenderReducer = (state: CalenderContextType, action: CalenderActionType) => {
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
                scheduleList: [...state.scheduleList, { ...action.payload, idx: state.scheduleList.length + 1 }]
            };
            break;
        case 'UPDATE_SCHEDULE':
            newState = {
                ...state,
                scheduleList: state.scheduleList.map((el) => {
                    if (el.idx === action.payload.idx) {
                        return {
                            ...el,
                            ...action.payload
                        };
                    }
                    return el;
                })
            };
            break;
        case 'DELETE_SCHEDULE':
            newState = {
                ...state,
                scheduleList: state.scheduleList.filter((el: ScheduleListType) => el.idx !== action.idx)
            };
            break;
        default:
            throw new Error('Unhandled action type');
    }
    return newState;
};

export function CalenderProvider({ children }: { children: ReactNode }) {
    const today = dayjs();
    const date = today.get('date');
    const year = today.get('year');
    const month = today.get('month') + 1;
    const scheduleList: ScheduleListType[] = CALENDER_DUMMY_DATA;

    const context: CalenderContextType = useMemo(
        () => ({
            today,
            date,
            year,
            month,
            scheduleList
        }),
        [today, date, year, month, scheduleList]
    ) as CalenderContextType;

    const [state, dispatch] = useReducer<React.Reducer<CalenderContextType, CalenderActionType>>(
        calenderReducer,
        context
    );

    return (
        <DispatchContext.Provider value={dispatch}>
            <CalenderContext.Provider value={state}>{children}</CalenderContext.Provider>
        </DispatchContext.Provider>
    );
}
