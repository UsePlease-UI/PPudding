import { DailyCalender, MonthlyCalender, WeeklyCalender, YearlyCalender } from '@components/Calender';
import { CalenderProvider } from '@components/useCalender';

import { customStyles } from '../components/styles';

// 일정 데이터
// onclick
function ShowComponent({ type }: { type: string }) {
    switch (type) {
        case 'daily':
            return <DailyCalender />;
        case 'weekly':
            return <WeeklyCalender />;
        case 'monthly':
            return <MonthlyCalender />;
        case 'yearly':
            return <YearlyCalender />;
        default:
            return <MonthlyCalender />;
    }
}

export default function CalenderExample() {
    return (
        <CalenderProvider>
            <div className={customStyles.toggleComponentContainer}>
                <ShowComponent type="monthly" />
            </div>
        </CalenderProvider>
    );
}
