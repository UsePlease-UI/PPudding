import MonthlyCalendar from '@components/Calendar/Month';
import { CalendarProvider } from '@components/useCalendar';

import { customStyles } from '../Common/styles';

export default function CalendarExample() {
  return (
    <CalendarProvider>
      <div className={customStyles.toggleComponentContainer}>
        <MonthlyCalendar />
      </div>
    </CalendarProvider>
  );
}
