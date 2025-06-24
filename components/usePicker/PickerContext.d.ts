import { Dayjs } from 'dayjs';
import { DateObjType } from '../Picker/utils';
export type PickerDateType = Date | null;
export interface PickerContextType {
    current: Dayjs;
    isDateDisabled: (date: DateObjType) => boolean;
    isNextYearDisabled: boolean;
    isOpen: boolean;
    isPrevYearDisabled: boolean;
    selected: PickerDateType;
    isMonthDisabled: (date: string) => boolean;
    isNextMonthDisabled: boolean;
    isPrevMonthDisabled: boolean;
    onCancel: () => void;
    onConfirm: () => void;
    onDateChange: (formattedDate: string) => void;
    onDatePickerClick: () => void;
    onMonthChange: (month: string) => void;
    onYearChange: (isPreviousMonth: boolean) => void;
    onYearMonthChange: (isPreviousMonth: boolean) => void;
    dates?: DateObjType[][];
    dateValue?: PickerDateType;
}
export declare const PickerContext: import('../../../node_modules/react').Context<PickerContextType | undefined>;
