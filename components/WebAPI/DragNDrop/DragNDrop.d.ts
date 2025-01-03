import { DragEvent, HTMLAttributes, ReactNode } from '../../../../node_modules/react';
import { OptionsType } from '../../types';
export interface DragNDropType extends Omit<HTMLAttributes<HTMLUListElement>, 'onDragOver' | 'onDragStart' | 'onDrop'> {
    renderItem?: () => ReactNode;
    onDragOver?: (event: DragEvent<HTMLLIElement>) => void;
    onDragStart?: (event: DragEvent<HTMLLIElement>, item: OptionsType) => void;
    onDrop?: (event: DragEvent<HTMLLIElement>, targetItem: OptionsType) => void;
    options?: OptionsType[];
}
export default function DragNDrop({ onDragOver, onDragStart, onDrop, options, renderItem, ...rest }: DragNDropType): import("react/jsx-runtime").JSX.Element;
