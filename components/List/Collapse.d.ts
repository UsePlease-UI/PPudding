import { ReactNode } from '../../../node_modules/react';
export interface CollapseType {
    children: ReactNode;
    isOpen: boolean;
}
export default function Collapse({ children, isOpen }: CollapseType): ReactNode;
