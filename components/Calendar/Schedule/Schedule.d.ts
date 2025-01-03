type OpenScheduleType = {
    index: number;
    isOpen: string;
};
export interface ScheduleType {
    isEdited: boolean;
    isScheduleOpen: OpenScheduleType;
    isAddFormOpen: boolean;
    onAddFormOpen: (isOpen: boolean) => void;
    onEdit: (isEdited: boolean) => void;
    onScheduleOpen: (obj: OpenScheduleType) => void;
}
export default function Schedule(props: ScheduleType): import("react/jsx-runtime").JSX.Element;
export {};
