import { BottomSheetContentsType } from './BottomSheetContents';
export interface BottomSheetType extends BottomSheetContentsType {
    isOpen: boolean;
    canClickOutside?: boolean;
}
export default function BottomSheet({ canClickOutside, children, isOpen, onClose }: BottomSheetType): import("react/jsx-runtime").JSX.Element;
