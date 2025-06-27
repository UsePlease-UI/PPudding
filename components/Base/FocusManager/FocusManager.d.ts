import { ReactNode } from '../../../../node_modules/react';
export interface FocusManagerType {
    children: ReactNode;
    canDismiss?: boolean;
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
    overlayClassName?: string;
}
export default function FocusManager(props: FocusManagerType): import('../../../../node_modules/react').ReactPortal | null;
