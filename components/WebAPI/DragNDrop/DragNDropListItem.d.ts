import { DragEvent } from '../../../../node_modules/react';
import { OptionsType } from '../../types';
interface DragNDropListItemType {
    options: OptionsType[];
    onDragOver?: (event: DragEvent<HTMLLIElement>) => void;
    onDragStart?: (event: DragEvent<HTMLLIElement>, item: OptionsType) => void;
    onDrop?: (event: DragEvent<HTMLLIElement>, targetItem: OptionsType) => void;
}
export default function DragNDropListItem({ onDragOver, onDragStart, onDrop, options }: DragNDropListItemType): import("react/jsx-runtime").JSX.Element[];
export {};
