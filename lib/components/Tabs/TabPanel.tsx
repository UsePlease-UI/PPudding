import { ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

export interface TabPanelType {
  children: ReactNode;
  index: number;
  value: number;
  className?: string;
}

export default function TabPanel(props: TabPanelType) {
  const { children, className, index, value } = props;

  return (
    <div className={joinClassNames('size-full p-5', className && className)} hidden={value !== index} role="tabpanel">
      {children}
    </div>
  );
}
