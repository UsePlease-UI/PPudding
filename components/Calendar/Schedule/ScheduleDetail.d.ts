import { TodoType } from '../../useSchedule';
interface ScheduleDetailType {
    day: string;
    isEdited: boolean;
    isStartDate: boolean;
    onDetailClick: (type: 'close' | 'open', day: string, index: number) => void;
    onEdit: (isEdited: boolean) => void;
    onScheduleDelete: (index: string) => void;
    todo: TodoType;
}
export default function ScheduleDetail(props: ScheduleDetailType): import("react/jsx-runtime").JSX.Element;
export {};
