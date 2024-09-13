import { Children, cloneElement, ReactElement, ReactNode } from 'react';

import { TabProvider } from '@components/useTab';

type TabType = {
    children: ReactNode;
    onChange: (newValue: number) => void;
    value: number;
};

/**
 *  [UI Component] Tab Component
 *  @param children 컴포넌트
 *  @param value 선택된 탭 인덱스
 *  @param onChange Change Event Handler
 *  @returns JSX.Element
 */
export default function Tab(props: TabType) {
    const { children, onChange, value, ...rest } = props;

    return (
        <TabProvider value={value} onChange={onChange}>
            <div {...rest} className="w-full bg-primary-600" role="tablist">
                <div className="flex size-full items-center justify-evenly">
                    {/* https://fe-developers.kakaoent.com/2021/211022-react-children-tip/ */}
                    {Children.toArray(children).map((child) => cloneElement(child as ReactElement, { onChange }))}
                </div>
            </div>
        </TabProvider>
    );
}
