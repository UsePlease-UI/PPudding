import { ReactNode } from 'react';

type TabPanelType = {
    children: ReactNode;
    value: number;
    index: number;
};

/**
 *  [UI Component] Tab Panel Component
 *  @param children 컴포넌트
 *  @param value 선택된 탭 인덱스
 *  @param index 탭 인덱스
 *  @returns JSX.Element
 */
export default function TabPanel(props: TabPanelType) {
    const { children, value, index } = props;

    return (
        <div role="tabpanel" hidden={value !== index} className="h-full w-full p-5">
            {children}
        </div>
    );
}
