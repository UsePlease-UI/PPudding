import { default as dayjs, OpUnitType } from 'dayjs';
export type DateObjType = {
    date: number;
    year: number;
    month: number;
};
export type DatesType = DateObjType[][];
export declare const getDates: (currentDate: dayjs.Dayjs | string) => DatesType;
export declare const isSameDate: (date: string, format: OpUnitType) => boolean;
