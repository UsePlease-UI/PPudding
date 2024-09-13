import { ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

type CheckboxGroupType = {
  children: ReactNode;
  gap?: number;
  isRow?: boolean;
};

/**
 *  [UI Component] Checkbox Group Component
 *  @param children ReactNode
 *  @param isRow [CSS] Flex Direction (row | column)
 *  @param gap [CSS] Flex Gap
 *  @returns JSX.Element
 */
export default function CheckboxGroup(props: CheckboxGroupType) {
  const { children, gap = 2.5, isRow = true } = props;

  return (
    <div
      className={joinClassNames('flex flex-col', isRow && 'flex-row items-center justify-start', gap && `gap-${gap}`)}
    >
      {children}
    </div>
  );
}
