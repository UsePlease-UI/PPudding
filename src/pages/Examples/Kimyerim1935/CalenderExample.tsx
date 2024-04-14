import { FlexBox, Typography } from '@components/Base';
import { DailyCalender, MonthlyCalender, WeeklyCalender, YearlyCalender } from '@components/Calender';
import { CalenderProvider } from '@components/useCalender';

import useMobile from '@hooks/useMobile';

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
    const { isTablet } = useMobile();

    return (
        <CalenderProvider>
            <FlexBox flexDirection="flex-col" gap="gap-10">
                <Typography
                    component="h2"
                    fontSize="text-24"
                    fontWeight="font-black"
                    color="text-primary-600"
                    textTransform="uppercase"
                    margin={isTablet ? 'mb-10' : 'mb-20'}
                >
                    Calendar Playground
                </Typography>
                <div className="shadow03 flex w-full items-center justify-center rounded border border-primary-100 p-10 tablet:p-20">
                    <ShowComponent type="monthly" />
                </div>
            </FlexBox>
        </CalenderProvider>
    );
}
