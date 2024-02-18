import { ReactNode, createContext, useContext, useMemo, useState } from 'react';

import dayjs from 'dayjs';

type ScheduleListType = {
    idx: number;
    startDate: string;
    endDate: string;
    color: string;
    isAllDay: boolean;
    title: string;
    description: string;
};

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

export const useCalender = () => {
    const context = useContext(CalenderContext);

    if (!context) {
        throw new Error('context가 없습니다');
    }
    const { year, month, date } = context;
    const firstDay = dayjs(`${year}-${month}-${date}`).startOf('month').locale('ko').get('day');
    const lastDay = dayjs(`${year}-${month}`).daysInMonth();

    const getWeeks = () => {
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
    };

    return {
        context,
        getWeeks
    };
};

const DUMMY_DATA = [
    {
        idx: 1,
        startDate: '2024-01-22',
        endDate: '2024-01-22',
        color: 'yellowgreen',
        isAllDay: false,
        title: '공부하기',
        description: '열심히 공부하기'
    },
    {
        idx: 2,
        startDate: '2024-01-13',
        endDate: '2024-01-18',
        color: 'plum',
        isAllDay: true,
        title: '병원',
        description: '건강검진 받기'
    },
    {
        idx: 3,
        startDate: '2024-01-13',
        endDate: '2024-01-13',
        color: 'salmon',
        isAllDay: false,
        title: '과제',
        description: '캘린더 만들기'
    },
    {
        idx: 4,
        startDate: '2024-02-10',
        endDate: '2024-02-19',
        color: 'mistyrose',
        isAllDay: true,
        title: '학교',
        description: '수강신청하기'
    }
];

export function CalenderProvider({ children }: { children: ReactNode }) {
    const today = dayjs();
    const date = today.get('date');
    const [year, setYear] = useState(today.get('year'));
    const [month, setMonth] = useState(today.get('month') + 1);
    const [scheduleList, setScheduleList] = useState<ScheduleListType[]>(DUMMY_DATA);

    const context: CalenderContextType = useMemo(
        () => ({
            today,
            date,
            year,
            month,
            scheduleList,
            setYear,
            setMonth,
            setScheduleList
        }),
        [today, date, year, month, scheduleList, setYear, setMonth, setScheduleList]
    );
    return <CalenderContext.Provider value={context}>{children}</CalenderContext.Provider>;
}
