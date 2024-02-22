import { FlexBox, Typography } from 'components/Base';
import { DailyCalender, MonthlyCalender, WeeklyCalender, YearlyCalender } from 'components/Calender';
import { CalenderProvider } from 'components/useCalender/useCalender';

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
            <FlexBox flexDirection="column" gap={10}>
                <Typography component="h2" fontSize={24}>
                    Calender
                </Typography>
                <FlexBox flexDirection="column" gap={10}>
                    <ShowComponent type="monthly" />
                </FlexBox>
            </FlexBox>
        </CalenderProvider>
    );
}
