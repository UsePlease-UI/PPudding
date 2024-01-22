import { useState } from 'react';

import dayjs from 'dayjs';

const useCalender = () => {
    const today = dayjs();
    const [year, setYear] = useState(today.get('year'));
    const [month, setMonth] = useState(today.get('month') + 1);
    const date = today.get('date');
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
        year,
        setYear,
        month,
        setMonth,
        date,
        getWeeks
    };
};

export default useCalender;
