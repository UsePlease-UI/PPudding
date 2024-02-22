const today = new Date().toISOString().substring(0, 10);
export const initialContent = {
    idx: 0,
    startDate: today,
    endDate: today,
    isAllDay: false,
    color: '',
    title: '',
    description: ''
};
