import { Children, cloneElement, HTMLAttributes, ReactElement, ReactNode } from 'react';

import { TabProvider } from '@components/useTab';

import { joinClassNames } from '@utils/format';

export interface TabType extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  children: ReactNode;
  value: number;
  onChange: (newValue: number) => void;
  className?: string;
}

export default function Tab(props: TabType) {
  const { children, className, onChange, value, ...rest } = props;

  return (
    <TabProvider value={value} onChange={onChange}>
      <div
        {...rest}
        className={joinClassNames('flex size-full w-full items-center justify-evenly bg-black', className && className)}
        role="tablist"
      >
        {/* https://fe-developers.kakaoent.com/2021/211022-react-children-tip/ */}
        {Children.toArray(children).map((child) =>
          cloneElement(child as ReactElement<{ onChange: (newValue: number) => void } & HTMLElement>, { onChange }),
        )}
      </div>
    </TabProvider>
  );
}
