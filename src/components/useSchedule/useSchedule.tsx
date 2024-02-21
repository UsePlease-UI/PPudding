import { useState } from 'react';

import dayjs from 'dayjs';

export type TodoType = {
    idx: number;
    startDate: string;
    endDate: string;
    color: string;
    isAllDay: boolean;
    title: string;
    description: string;
};

export const useSchedule = (labelColor: string, initialContent: TodoType) => {
    const [isAllDay, setIsAllDay] = useState(initialContent.isAllDay);
    const [addContents, setAddContents] = useState(initialContent);
    const [color, setColor] = useState(labelColor);

    const handleContents = (type: string, value: string) => {
        if (type === 'startDate' || type === 'endDate') {
            setAddContents((prev) => ({
                ...prev,
                [type]: dayjs(value)
            }));
        }
        setAddContents((prev) => ({
            ...prev,
            [type]: value
        }));
    };

    return {
        isAllDay,
        setIsAllDay,
        addContents,
        setAddContents,
        color,
        setColor,
        initialContent,
        labelColor,
        handleContents
    };
};
