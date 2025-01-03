import { ReactNode } from '../../../node_modules/react';
export interface BottomSheetContentsType {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}
declare const BottomSheetContents: import('../../../node_modules/react').ForwardRefExoticComponent<BottomSheetContentsType & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default BottomSheetContents;
