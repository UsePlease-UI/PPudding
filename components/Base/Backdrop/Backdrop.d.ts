import { ReactNode } from '../../../../node_modules/react';
export interface BackdropType {
    children: ReactNode;
    onClose: () => void;
    className?: string;
    isDimmed?: boolean;
    isOpen?: boolean;
    canFocusTrap?: boolean;
}
export default function Backdrop(props: BackdropType): import('../../../../node_modules/react').ReactPortal | null;
