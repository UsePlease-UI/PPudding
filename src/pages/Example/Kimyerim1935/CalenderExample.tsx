import { useState } from 'react';

import { FlexBox, Typography } from 'components/Base';
import { DailyCalender, MonthlyCalender, WeeklyCalender, YearlyCalender } from 'components/Calender';
import Select from 'components/Combobox/Select';
import { CalenderProvider } from 'hooks/useCalender';

import { CALENDER } from './constants';

// 일정 데이터
// onclick
export default function CalenderExample() {
    const [select, setSelect] = useState('daily');

    return (
        <CalenderProvider>
            <FlexBox flexDirection="column" gap={10}>
                <Typography component="h2" fontSize={24}>
                    Calender
                </Typography>
                <FlexBox flexDirection="column" gap={10}>
                    <Select
                        name="calender"
                        value={select}
                        label={CALENDER.filter((val) => val.value === select)?.[0]?.label}
                        options={CALENDER}
                        onChange={(e) => setSelect(e.currentTarget.value)}
                    />
                    {select === 'daily' && <DailyCalender />}
                    {select === 'weekly' && <WeeklyCalender />}
                    {select === 'monthly' && <MonthlyCalender />}
                    {select === 'yearly' && <YearlyCalender />}
                </FlexBox>
            </FlexBox>
        </CalenderProvider>
    );
}
