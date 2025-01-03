import { ReactNode } from 'react';

export interface CollapseType {
  children: ReactNode;
  isOpen: boolean;
}

export default function Collapse({ children, isOpen }: CollapseType) {
  return isOpen ? children : null;
}
