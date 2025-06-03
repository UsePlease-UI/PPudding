import { ReactNode } from '../../../../node_modules/react';
export interface FocusManagerType {
    children: ReactNode;
    id: string;
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}
export default function FocusManager(props: FocusManagerType): import('../../../../node_modules/react').ReactPortal | null;
