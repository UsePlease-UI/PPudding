import { Children, ReactElement, ReactNode, cloneElement } from 'react';

import { FlexBox } from '@components/Base';
import { TabProvider } from '@components/useTab';

type TabType = {
    children: ReactNode;
    value: number;
    onChange: (newValue: number) => void;
};

/**
 *  [UI Component] Tab Component
 *  @param children 컴포넌트
 *  @param value 선택된 탭 인덱스
 *  @param onChange Change Event Handler
 *  @returns JSX.Element
 */
export default function Tab(props: TabType) {
    const { children, value, onChange, ...rest } = props;

    return (
        <TabProvider value={value} onChange={onChange}>
            <div {...rest} role="tablist" className="w-full bg-primary-600">
                <FlexBox justifyContent="justify-evenly" alignItems="items-center" width="w-full" height="h-full">
                    {/* https://fe-developers.kakaoent.com/2021/211022-react-children-tip/ */}
                    {Children.toArray(children).map((child) => cloneElement(child as ReactElement, { onChange }))}
                </FlexBox>
            </div>
        </TabProvider>
    );
}
