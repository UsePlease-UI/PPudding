import MonthlyCalender from '@components/Calender/Month';
import { CalenderProvider } from '@components/useCalender';

import { customStyles } from '../Common/styles';

export default function CalenderExample() {
    return (
        <CalenderProvider>
            <div className={customStyles.toggleComponentContainer}>
                <MonthlyCalender />
            </div>
        </CalenderProvider>
    );
}
