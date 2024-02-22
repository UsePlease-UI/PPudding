import { ReactNode } from 'react';

import { Typography } from 'components/Base';

type weekDaysType = {
    children: ReactNode;
};

export default function WeekDays({ children }: weekDaysType) {
    return (
        <Typography component="span" width="100%" height="100px" customCSS={{ border: '1px solid black' }}>
            {children}
        </Typography>
    );
}
