import { MouseEvent } from '../../../../node_modules/react';
interface AddScheduleType {
    onCancel: (e: MouseEvent<HTMLButtonElement>) => void;
    onClose: () => void;
}
export default function AddSchedule({ onCancel, onClose }: AddScheduleType): import("react/jsx-runtime").JSX.Element;
export {};
