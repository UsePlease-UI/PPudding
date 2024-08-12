import { ReactNode } from 'react';

type CollapseType = {
    children: ReactNode;
    isOpen: boolean;
};

/**
 *  [UI Component] Collapse
 *  @param children ReactNode
 *  @param isOpen Is List collapsed?
 *  @returns ReactNode | null
 */
export default function Collapse({ children, isOpen }: CollapseType) {
    return isOpen ? children : null;
}
