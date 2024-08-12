import { ReactNode } from 'react';

type PopoverType = {
    isOpen: boolean;
    children: ReactNode;
};

/**
 *  [UI Component] Popover Component
 *  @param isOpen Popover 상태를 나타내는 변수
 *  @param children Popover 컴포넌트의 children
 *  @returns JSX.Element
 */
// FIXME: Position 수정
export default function Popover({ children, isOpen }: PopoverType) {
    return isOpen ? <div className="relative whitespace-nowrap rounded bg-white p-5 shadow-04">{children}</div> : null;
}
