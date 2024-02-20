export const CALENDER_LABEL_COLOR = [
    {
        idx: 1,
        label: '빨강',
        value: 'red'
    },
    {
        idx: 2,
        label: '주황',
        value: 'orange'
    },
    {
        idx: 3,
        label: '노랑',
        value: 'yellow'
    },
    {
        idx: 4,
        label: '초록',
        value: 'green'
    }
];

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
