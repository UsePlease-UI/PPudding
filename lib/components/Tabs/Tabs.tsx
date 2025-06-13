import { HTMLAttributes, ReactNode } from 'react';

import { TabProvider } from '@components/useTab';

import { joinClassNames } from '@utils/format';

export interface TabsType extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  children: ReactNode;
  value: number;
  onChange: (newValue: number) => void;
}

export default function Tabs({ children, className, onChange, value, ...rest }: TabsType) {
  return (
    <TabProvider value={value} onChange={onChange}>
      <div
        {...rest}
        className={joinClassNames(
          'flex size-full flex-col overflow-hidden rounded-md border border-gray-100 shadow-03',
          className && className,
        )}
      >
        {children}
      </div>
    </TabProvider>
  );
}
