export type TodoType = {
    endDate: string;
    idx: string;
    isAllDay: boolean;
    startDate: string;
    title: string;
    color: string;
    description: string;
};
export declare const useSchedule: (labelColor: string, initialContent: TodoType) => {
    addContents: TodoType;
    color: string;
    handleColorChange: (newValue: string) => void;
    handleContents: (type: string, value: string) => void;
    handleDayChange: () => void;
    initialContent: TodoType;
    isAllDay: boolean;
    labelColor: string;
};
