import { ReactNode } from 'react';

type WeekDaysType = {
    children: ReactNode;
};

export default function WeekDays({ children }: WeekDaysType) {
    return <div className="inline-block h-100 w-full bg-white">{children}</div>;
}
