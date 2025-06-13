import { ReactNode } from 'react';

import { useTab } from '@components/useTab';

import { joinClassNames } from '@utils/format';

export interface TabPanelType {
  children: ReactNode;
  index: number;
  className?: string;
}

export default function TabPanel(props: TabPanelType) {
  const { children, className, index } = props;
  const { value } = useTab();

  return (
    <div
      aria-labelledby={`tab-${index}`}
      className={joinClassNames('size-full p-5', className && className)}
      hidden={value !== index}
      id={`tabpanel-${index}`}
      role="tabpanel"
    >
      {children}
    </div>
  );
}
