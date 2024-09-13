import { ReactNode } from 'react';

type TabPanelType = {
    children: ReactNode;
    index: number;
    value: number;
};

/**
 *  [UI Component] Tab Panel Component
 *  @param children 컴포넌트
 *  @param value 선택된 탭 인덱스
 *  @param index 탭 인덱스
 *  @returns JSX.Element
 */
export default function TabPanel(props: TabPanelType) {
    const { children, index, value } = props;

    return (
        <div className="size-full p-5" hidden={value !== index} role="tabpanel">
            {children}
        </div>
    );
}
