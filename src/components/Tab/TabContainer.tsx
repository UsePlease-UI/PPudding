import { ReactNode } from 'react';

type TabContainerType = {
  children: ReactNode;
};

/**
 *  [UI Component] Tab Container Component
 *  @param children ReactNode
 *  @returns JSX.Element
 */
export default function TabContainer({ children }: TabContainerType) {
  return (
    <div className="flex size-full flex-col overflow-hidden rounded-md border border-primary-100 shadow-03">
      {children}
    </div>
  );
}
